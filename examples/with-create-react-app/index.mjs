import { api } from "@serverless/cloud";

api.get("/api/message", (req, res) => {
  res.json({ message: "Hello world" });
});
