import * as bodyParser from "body-parser";
import * as express from "express";
import * as m from "mongoose"
import { router } from "../src/server"
import * as st from 'supertest';

export const connectionString = "mongodb://localhost:27017/test"

m.connection.on("connected", () => {
    console.log("connected to mongodb");
})

m.connection.on("disconnected", () => {
    console.log("disconnected to mongodb");
})

m.connection.on("error", (error) => {
    console.error(error.message);
})

const app = express();
app.use(bodyParser.json({ limit: "50mb" }));
app.use("/api/v1/", router)

export const request = st(app);

const PORT = 8710
console.log((`Server is listening on ${PORT}`))
console.log("tests will start soon\n");
