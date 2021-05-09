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
  request: async () => {
    try {
      const response = await CLIENT.get('/v1/accounts/');
      return response;
    } catch (error) {
      return error;
    }
  },
};

export default account;
