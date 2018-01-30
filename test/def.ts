import { ZooDoc } from "../src/model/Zoo"
import { TigerDoc } from "../src/model/Tiger"

export interface ZooRet {
    success: boolean,
    error?: string,
    zoos?: ZooDoc[]
}

export interface TigerRet {
    success: boolean,
    error?: string,
    Tigers?: TigerDoc[]
}