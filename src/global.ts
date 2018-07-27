import * as l from "logger"

import yargs from "yargs"

const ARGV = yargs.argv

export default class Instance {
    static logPath: string = ARGV.logPath ? ARGV.logPath : "/tmp"
    static rootLogger = l.Logger.createDefault("ts-sample", Instance.logPath)
}
