import CLIENT from './client';

const account = {
  authenticate: async (idToken) => {
    const response = await CLIENT.post('/v1/authentication/google/', {
      idToken,
    });
    return response.data;
  },
};

export default account;
