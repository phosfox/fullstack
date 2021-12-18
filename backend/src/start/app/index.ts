import express from "express"

export function createApp() {
    const app = express()
    const config= {host: "0.0.0.0", port: "4000", log: console.log};
    app.get("/", (_, res) => res.send("Hello World"))
    app.listen(config, 
    () => {
        console.log(`Server ready at http://${config.host}:${config.port}`)
    })
}