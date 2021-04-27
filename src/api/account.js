import CLIENT from './client';

const account = {
  authenticate: async (idToken) => {
    const response = await CLIENT.post('/social_auth/google/', {
      authToken: idToken,
    });
    return response.data;
  },
};

export default account;
