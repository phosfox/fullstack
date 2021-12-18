import express from "express"

export function createApp() {
    const app = express()
    const config= {host: "localhost", port: "4000", log: console.log};
    app.get("/", (_, res) => res.send("Hello World"))
    app.listen(config, 
    () => {
        console.log(`Server ready at http:${config.host}:${config.port}`)
    })
}