import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function logStartupError(err) {
  const errMsg = `[${new Date().toISOString()}] Startup Error: ${err.stack || err}\n`;
  console.error(errMsg);
  try {
    fs.appendFileSync(path.join(__dirname, "server-error.log"), errMsg);
  } catch (writeErr) {
    console.error("Failed to write to log file:", writeErr);
  }
}

async function start() {
  try {
    const { Hono } = await import("hono");
    const { serveStatic } = await import("@hono/node-server/serve-static");
    const { serve } = await import("@hono/node-server");
    const distDir = path.join(__dirname, "dist");
    const serverEntry = pathToFileURL(path.join(distDir, "server", "server.js")).href;
    const { default: handler } = await import(serverEntry);

    const app = new Hono();

    // Serve static assets from the client build folder
    app.use("/assets/*", serveStatic({ root: path.join(distDir, "client") }));

    // Serve other public files from the client root (e.g. favicon.ico, robots.txt)
    app.use("/favicon.ico", serveStatic({ path: path.join(distDir, "client", "favicon.ico") }));
    app.use("/robots.txt", serveStatic({ path: path.join(distDir, "client", "robots.txt") }));

    // Forward all other requests to the TanStack Start request handler
    app.all("*", async (c) => {
      try {
        return await handler.fetch(c.req.raw);
      } catch (err) {
        console.error("SSR handler error:", err);
        return c.text("Internal Server Error", 500);
      }
    });

    const port = parseInt(process.env.PORT || "3000", 10);
    console.log(`Production server running at http://localhost:${port}`);

    serve({
      fetch: app.fetch,
      port,
    });
  } catch (err) {
    logStartupError(err);
    process.exit(1);
  }
}

start();

