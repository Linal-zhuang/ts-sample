import * as l from "logger"

import yargs from "yargs"

const ARGV = yargs.argv

export default class Instance {
    public static logPath: string = ARGV.logPath ? ARGV.logPath : "/tmp"
    public static RootLogger = l.Logger.createDefault("ts-sample", Instance.logPath)
}
