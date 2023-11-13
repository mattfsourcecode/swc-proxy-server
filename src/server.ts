import express, { Express, Request, Response, NextFunction } from "express";
import { createProxyMiddleware, Options } from "http-proxy-middleware";
import * as dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";

dotenv.config();

const app: Express = express();

app.use(helmet());

// Get the target API from an environment variable. You could also get this from a configuration file.
const api: string | undefined = process.env.API;

if (!api) {
  console.error("API environment variable is not set.");
  process.exit(1);
}

// Create a proxy middleware that forwards requests to the target API.
const options: Options = {
  target: api,
  changeOrigin: true, // for handling the CORS
};
const proxy = createProxyMiddleware(options);

// Use cors middleware to restrict origins
app.use(
  cors({
    origin: process.env.ORIGIN,
  })
);

// Use the proxy for all routes starting with /api.
app.use("/api", proxy);

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Start the server.
const port: string | number = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
