export const connectionString = "mongodb://localhost:27017/test"
import * as m from "mongoose"

m.connection.on("connected", () => {
    console.log("connected to mongodb");
})

m.connection.on("error", (error) => {
    console.error(error.message);
})

async function f () {
    await m.connect(connectionString)
    await m.disconnect()
}

f()