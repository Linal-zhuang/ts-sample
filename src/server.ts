import * as express from "express"
import * as m from "mongoose"
import * as Tiger from "./model/Tiger"
import * as Zoo from "./model/Zoo"
import * as def from "./shared/def"

export const router = express.Router()

router.get("/zoos", async (req, res) => {
    try {
        const zoos: Zoo.ZooDoc[] = await Zoo.Model.find()
        res.status(200).json({
            success: true,
            zoos
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
})

router.post("/zoos", async (req, res) => { 
    const names: string[] = req.body
    const nameDocs = names.map(e => {
        return { name: e }
    })
    try {
        const zoos: Zoo.ZooDoc[] = await Zoo.Model.insertMany(nameDocs)
        res.status(201).json({
            success: true,
            zoos
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
})

router.get("/tigers", async (req, res) => {
    const zooId: string | undefined = req.query.zooId
    const condition: any = {}
    if (zooId) {
        condition["zooId"] = zooId
    }

    try {
        const tigers: Tiger.TigerDoc[] = await Tiger.Model.find(condition)
        res.status(200).json({
            success: true,
            tigers
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
})

router.post("/tigers", async (req, res) => {
    const tigersData: def.TigerPost[] = req.body
    try {
        const tigers: Tiger.TigerDoc[] = await Tiger.Model.insertMany(tigersData)
        res.status(201).json({
            success: true,
            tigers
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
})