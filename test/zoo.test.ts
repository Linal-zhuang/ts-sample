import * as def from "./def"
import * as m from "mongoose"
import { expect } from "chai"
import { request, connectionString } from './index'
import { Response } from 'supertest';
import { Model, ZooDoc } from "../src/model/Zoo"

const test = "Zoo Test"
const data =  {
    "name": "Zoo1",
    "createdAt": "2018-01-01T13:49:46.269Z",
    "updatedAt": "2018-01-01T13:49:46.269Z"
}


describe(test, () => {

    before(async () => {
        await m.connect(connectionString)
    })

    after(async () => {  
        await m.disconnect()
        console.log(`${test} Done`);
    })

    beforeEach(async () => {
        await Model.remove({})
        await Model.insertMany(data)
        console.log("insert zoo data")
        
    })

    afterEach(async () => {
        await Model.remove({})
        console.log("clear zoo data")
    })

    it("get all zoos", async () => {
        await request
            .get(`/api/v1/zoos`)
            .expect(async (res: Response) => {
                const result: def.ZooRet = res.body
                expect(result.success).to.equal(true)
                expect(result.zoos[0].name).to.equal(data.name)
            })

    })
})