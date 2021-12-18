import {connectDB} from "./connect-db"
import {createApp} from "./app"
export async function start () {
    connectDB()
    createApp()
}