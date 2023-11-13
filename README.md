# API Proxy Server with SWC

_Template code for a reusable Express.js server that proxies requests to a specified API. The server is designed to be easily configurable and can be used as a starting point for any project that requires an API proxy._

## Purpose

This server functions as a middleware between a client application and an API. Proxy servers can be useful in a variety of scenarios, such as:

- Avoiding CORS issues by making requests from the same domain.
- Hiding sensitive information, like API keys, from the client.
- Adding custom logic or transformations to the requests or responses.

## Why SWC?

[SWC](https://swc.rs/) is a super-fast JavaScript/TypeScript compiler. It's used in this project to compile TypeScript to JavaScript. The main advantages of using SWC are:

- Speed: SWC is incredibly fast and can significantly speed up your build times.
- Compatibility: SWC can compile modern JavaScript and TypeScript down to a version of JavaScript that can run in older environments.

## Security Implementations

- [CORS](https://expressjs.com/en/resources/middleware/cors.html): This is used to enable CORS with various options.
- [Helmet](https://helmetjs.github.io/): This helps secure Express apps by setting various HTTP headers.

## Technologies Used

- [SWC](https://swc.rs/): A super-fast JavaScript/TypeScript compiler.
- [Express.js](https://expressjs.com/): Fast, unopinionated, minimalist web framework for Node.js.
- [http-proxy-middleware](https://github.com/chimurai/http-proxy-middleware): The one-liner node.js http proxy middleware for connect, express and browser-sync.
- [dotenv](https://github.com/motdotla/dotenv): Loads environment variables from `.env` for nodejs projects.

## Getting Started

```bash
# Install dependencies
pnpm i

# Create a .env file and add your API and ORIGIN
echo "API=your_api_url" >> .env
echo "ORIGIN=your_origin_url" >> .env
```

## Scripts

### `dev`

Starts the development server. The server will automatically reload if you make changes to the code.

```bash
pnpm dev
```

### `build`

Compiles the TypeScript code into JavaScript code. It should be run before starting the application in a production environment.

```bash
pnpm build
```

### `start`

Starts the build. This should be run after the `build` script to start the application in a production environment.

```bash
pnpm start
```

## Deploying to Production

When you're ready to deploy the application to production, you should consider the following:

- Use a process manager like [PM2](https://pm2.keymetrics.io/) to keep your application running.
- Set up a reverse proxy with [Nginx](https://www.nginx.com/) or [Apache](https://httpd.apache.org/) to direct traffic to your application.
- Use environment variables to store sensitive information like API keys, database credentials, and so on.
- Enable HTTPS to secure the connection between your users and your application.

Remember to always test your application thoroughly before deploying it to production.

## Future Improvements

- **Unit Testing**: Implement unit tests to ensure the reliability and stability of the server. This can help catch bugs early and ensure that new changes don't break existing functionality.
- **Logging and Monitoring**: Incorporate a logging system to track and monitor the server's activities. This can be crucial for debugging and understanding the server's behavior.
- **Rate Limiting**: Implement rate limiting to protect the server from being overwhelmed by too many requests in a short period of time.

## Making More Use of SWC

- **Use SWC for Minification**: SWC can be used not only for compiling JavaScript and TypeScript but also for minifying your code. This can help improve the performance of your server.
- **Leverage SWC's Plugin System**: SWC has a powerful plugin system that you can use to customize the compilation process. This can be used to add custom transformations to your code.
- **Use SWC for Transpiling ES6+ Features**: If you're using modern JavaScript features that aren't supported in your target environment, you can use SWC to transpile your code to a compatible version of JavaScript.
