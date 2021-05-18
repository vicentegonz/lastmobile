import { setCredentials } from '@/utils/credentials';
import CLIENT from './client';

const account = {
  authenticate: async (idToken) => {
    const response = await CLIENT.post('/v1/authentication/google/', {
      idToken,
    });
    await setCredentials(response.data.access, response.data.refresh);

    return response.data;
  },
  validate: async () => {
    try {
      const respone = await CLIENT.get('v1/account/');
      return respone;
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
