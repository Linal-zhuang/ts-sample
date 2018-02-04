import 'source-map-support/register'
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

const app = express()

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", req.get("Origin") || "*")
    res.setHeader("Access-Control-Allow-Methods", "DELETE,GET,HEAD,POST,PUT,OPTIONS,TRACE")
    // for CORS ajax cookie access
    // reference: http://www.redotheweb.com/2015/11/09/api-security.html
    res.setHeader('Access-Control-Allow-Credentials', "true")
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    next()
})

app.use(bodyParser.json({ limit: "50mb" }))

app.all("/*", (req, res, next) => {
    if (m.connection.readyState !== 1) {
        res.status(503).json({
            Error: "could not connect to db",
        });
        return
    }
    next()
});

app.use("/api/v1", router)

app.use(function (req, res, next) {
    res.status(404).send('You shall not pass!')
});

app.use((error: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(error.message)
    res.status(500).json({ error: error.message })
});

app.listen(PORT, () => {
    console.log(`app is listening on ${PORT}`);
});