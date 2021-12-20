import { Pool } from "pg"
const pool = new Pool({
    host: "db",
    user: "fullstack",
    password: "fullstack",
    database: "fullstack_dev",
    port: 5432,
  })

function query(text: string, params: any ) {
    return pool.query(text, params)
}

export default {query}