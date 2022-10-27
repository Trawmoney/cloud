import withCloud from "@serverless/cloud/nextjs";
import { params } from "@serverless/cloud";

export default withCloud({
  reactStrictMode: true,
  env: {
    CLOUD_URL: params.CLOUD_URL,
  },
});
