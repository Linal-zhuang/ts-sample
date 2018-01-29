import * as m from "mongoose"

export interface TigerDoc {
    _id: m.Types.ObjectId,
    name: string,
    zooId: string,
    createdAt: Date,
    updatedAt: Date
}

const Schema = new m.Schema(
    {
        name: String,
        zooId: String
    },
    {
        timestamps: true,
        versionKey: false
    }
)

export const Model = m.model<m.Document & TigerDoc>("tiger", Schema)