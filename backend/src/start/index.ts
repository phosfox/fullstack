import {connectDB} from "./db/connect-db"
import {createApp} from "./app"
export async function start () {
    connectDB()
    createApp()
}