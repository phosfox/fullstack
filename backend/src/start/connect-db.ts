import { Client } from "pg"
export async function connectDB(retries = 5) {
  while (retries) {
    try {
      const client = new Client({
        host: "db",
        user: "postgres",
        password: "postgres",
        database: "fullstack-db",
        port: 5432,
      })
      console.log("connecting to DB...")
      await client.connect()
      console.log("successfully connected to DB")
      return
    } catch (err) {
      console.error(err)
      retries -= 1
      console.log(`retries left: ${retries}`)
      await new Promise((res) => setTimeout(res, 5000))
    }
  }
}
