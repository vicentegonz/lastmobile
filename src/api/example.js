import CLIENT from './client';

const example = {
  retrieve: () => CLIENT.get('/v1/examples/nice'),
};

export default example;
