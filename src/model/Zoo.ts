import * as m from "mongoose"

export interface ZooDoc {
    _id: m.Types.ObjectId | string,
    name: string,
    createdAt: Date,
    updatedAt: Date
}

const Schema = new m.Schema(
    {
       name: String
    },
    {
        timestamps: true,
        versionKey: false
    }
)

export const Model = m.model<m.Document & ZooDoc>("zoo", Schema)