import express from "express"
import cors from "cors"
import Count, { NotFound } from "../db/count";
import {generateSlug} from "random-word-slugs"

export function createApp() {
    const app = express()
    app.use(cors())
    const config= {host: "0.0.0.0", port: "4000", log: console.log};
    app.put("/counter/:slug", async ({params: {slug}, body}, res) => {
        try {
            const result = await Count.update(slug, 1)
            console.log({result}, {body});
            
            res.json({...result})
        } catch (error) {
            
        }
    })
    app.post("/counter", async (_, res) => {
        const slug = generateSlug(4)
        try {
        const response = await Count.create(slug)
        res.json({...response})
        } catch (error) {
            return res.status(500).send(error)
        }
    })
    app.get("/counter/:slug", async ({params: {slug}}, res) => {
        try {
            const result = await Count.findOne(slug)
            res.json({...result})
        } catch (error) {
           if (error instanceof NotFound) {
            return res.status(404).send("This counter does not exist.")
           } 
            return res.status(500).send(error)
        }
    })
    app.listen(config, 
    () => {
        console.log(`Server ready at http://${config.host}:${config.port}`)
    })
}