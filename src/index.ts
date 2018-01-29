import * as bodyParser from 'body-parser';
import * as express from "express"
import * as m from "mongoose"
import { router } from "./server"
import * as argvs from "yargs"

const MONGO_HOST: string = argvs.argv.h ? argvs.argv.h : "localhost"
const MONGO_PORT: number = argvs.argv.p ? argvs.argv.p : 27017
const MONGO_DB: string = argvs.argv.p ? argvs.argv.p : "test"
const PORT: number = argvs.argv.P ? argvs.argv.P : 8610

const mongoString = `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}`
m.connect(mongoString)

const app = express();

app.use(bodyParser.json({ limit: "50mb" }));

app.use("/api/v1", router)

app.listen(PORT, () => {
    console.log(`app is listening on ${PORT}`);
});