import axios from 'axios';
import { camelizeKeys, decamelizeKeys } from 'humps';
import Constants from 'expo-constants';
import * as SecureStore from 'expo-secure-store';
import $store from '@/store';
import { getAuthHeaders } from '@/utils/auth';
import { setCredentials, removeCredentials } from '@/utils/credentials';
import { setValidSession } from '@/store/session';

import {
  STAGING_BASE_URL,
  PRODUCTION_BASE_URL,
  REFRESH_SECURE_STORE_KEY,
} from '@/utils/constants';

// Get base URL for development
let baseURL;
const defaultHost = Constants.manifest.debuggerHost
  ? Constants.manifest.debuggerHost.split(':').shift()
  : 'localhost';
const developmentURL = Constants.manifest.extra.DEVELOPMENT_URL || `http://${defaultHost}:8000`;

// eslint-disable-next-line no-undef
if (__DEV__) {
  baseURL = developmentURL;
} else if (Constants.manifest.releaseChannel === 'production') {
  baseURL = PRODUCTION_BASE_URL;
} else {
  baseURL = STAGING_BASE_URL;
}

// Create client
const CLIENT = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  transformResponse: [
    ...axios.defaults.transformResponse,
    (data) => camelizeKeys(data),
  ],
  transformRequest: [
    (data) => decamelizeKeys(data),
    ...axios.defaults.transformRequest,
  ],
});

CLIENT.interceptors.request.use(async (config) => {
  const authHeaders = await getAuthHeaders();
  const { params, headers } = config;
  return {
    ...config,
    params: decamelizeKeys(params),
    headers: { ...headers, ...authHeaders },
  };
});

CLIENT.interceptors.response.use(null, async (error) => {
  if (
    error.config
    && !error.config.url.includes('refresh')
    && error.response
    && error.response.status === 401
  ) {
    try {
      const refreshToken = await SecureStore.getItemAsync(
        REFRESH_SECURE_STORE_KEY,
      );
      const { data: { access, refresh } = {} } = await CLIENT.post(
        '/v1/authentication/token/refresh/',
        { refresh: refreshToken },
      );
      await setCredentials(access, refresh);
      const authHeaders = await getAuthHeaders();
      const { headers } = error.config;
      return axios.request({
        ...error.config,
        headers: { ...headers, ...authHeaders },
      });
    } catch (err) {
      await removeCredentials();
      $store.dispatch(setValidSession(false));
    }
  }

  return Promise.reject(error);
});

export default CLIENT;
