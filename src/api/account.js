import { setCredentials } from '@/utils/credentials';
import CLIENT from './client';

const account = {
  authenticate: async (idToken) => {
    try {
      const response = await CLIENT.post('/v1/authentication/google/', {
        idToken,
      });

      const aux = {};
      if (response === 'failed') {
        aux.access = '';
        aux.refresh = '';
        return aux;
      }

      await setCredentials(response.data.access, response.data.refresh);
      return response.data;
    } catch (error) {
      return error;
    }
  },
  validate: async () => {
    try {
      const response = await CLIENT.get('v1/account/');
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
