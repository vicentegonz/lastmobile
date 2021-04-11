import axios from 'axios';
import { camelizeKeys, decamelizeKeys } from 'humps';
import Constants from 'expo-constants';

import { STAGING_BASE_URL, PRODUCTION_BASE_URL } from '@/utils/constants';

// Get base URL for development
let baseURL;
const defaultHost = Constants.manifest.debuggerHost ? Constants.manifest.debuggerHost.split(':').shift() : 'localhost';
const developmentURL = Constants.manifest.extra.DEVELOPMENT_URL || `http://${defaultHost}:8000`;

if (__DEV__) { // eslint-disable-line no-undef
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

CLIENT.interceptors.request.use((config) => {
  const { params } = config;
  return { ...config, params: decamelizeKeys(params) };
});

export default CLIENT;
