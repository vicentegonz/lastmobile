import secureStore from '@/utils/secureStore';
import CLIENT from './client';

const account = {
  authenticate: async (idToken) => {
    try {
      const response = await CLIENT.post('/v1/authentication/google/', {
        idToken,
      });
      await secureStore.save('accessToken', response.data.access);
      await secureStore.save('refreshToken', response.data.refresh);

      CLIENT.defaults.headers.common.Authorization = `Bearer ${response.data.access}`;

      return response.data;
    } catch (error) {
      return error;
    }
  },
  refreshAuthenticate: async () => {
    try {
      const refresh = await secureStore.getValue('refreshToken');
      const response = await CLIENT.post('/v1/authentication/token/refresh/', {
        refresh,
      });
      await secureStore.save('accessToken', response.data.access);
      await secureStore.save('refreshToken', response.data.refresh);

      CLIENT.defaults.headers.common.Authorization = `Bearer ${response.data.access}`;

      return response.data;
    } catch (error) {
      return error;
    }
  },
  // We're not using this request right now, but it will be useful in a couple of
  // days when the backend is updated
  profile: async () => {
    try {
      const access = await secureStore.getValue('accessToken');

      const config = {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      };
      const response = await CLIENT.get('/v1/account/', config);

      return response;
    } catch (error) {
      return error;
    }
  },
  registerDevice: async (deviceData) => {
    try {
      const response = await CLIENT.put('/v1/account/devices/', deviceData);
      return response.data;
    } catch (error) {
      return error;
    }
  },
};

export default account;
