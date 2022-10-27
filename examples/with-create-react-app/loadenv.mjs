import { params } from "@serverless/cloud";
import { execSync } from "child_process";

// Load params into environment variables that can be used at build time and in the dev server

execSync(process.argv.slice(2).join(" "), {
  env: {
    ...process.env,
    REACT_APP_CLOUD_URL: params.CLOUD_URL,
  },
  stdio: "inherit",
});
