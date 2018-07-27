
import yargs from "yargs"

const ARGV = yargs.argv

export default class Instance {
    static port: number = ARGV.port ? ARGV.port : 8080
}
