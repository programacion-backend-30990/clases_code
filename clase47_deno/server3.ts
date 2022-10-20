import React from "https://dev.jspm.io/react/index.js";
import ReactDOMServer from "https://dev.jspm.io/react-dom/server.js";
import { createApp } from "https://deno.land/x/servest/mod.ts";

const app = createApp()
app.handle("/", async (req) => {
    await req.respond({
        status: 200,
        headers: new Headers({
            "content-type": "text/html; charset=UTF-8"
        }),
        body: ReactDOMServer.renderToString(
            `
            <html>
              <head>
              </head>
              <body>
                Hello Servest!
              </body>
            </html>
            `
        )
    })
})