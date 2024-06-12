import "dotenv/config";

export default ({ config }) => ({
  ...config,
  extra: {
    baseURL: process.env.BASE_URL
  },
});