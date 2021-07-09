import 'dotenv/config';

export default ({ config }) => ({
  ...config,
  extra: {
    ...config.extra,
    DEVELOPMENT_URL: process.env.DEVELOPMENT_URL,
    GOOGLE_CLIENT_ID_EXPO: process.env.GOOGLE_CLIENT_ID_EXPO,
    GOOGLE_CLIENT_ID_ANDROID: process.env.GOOGLE_CLIENT_ID_ANDROID,
    GOOGLE_CLIENT_ID_IOS: process.env.GOOGLE_CLIENT_ID_IOS,
  },
});
