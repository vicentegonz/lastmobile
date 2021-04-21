/* eslint-disable no-undef */
import 'dotenv/config';

export default ({ config }) => ({
  ...config,
  extra: {
    ...config.extra,
    DEVELOPMENT_URL: process.env.DEVELOPMENT_URL,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  },
});
