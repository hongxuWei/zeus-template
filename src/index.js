import program from "commander"
import { version } from "../package.json"
import checkVersion from "./utils/checkVersion"
import { error } from "./utils/log"

checkVersion()
program.version(version).usage("<command> [options]")

program
  .command("test <project-name>")
  .action((name) => {
    console.log(`It's a example named ${name}`)
  })

program.arguments("<command>").action(cmd => {
  error(`\n未找到命令 ${cmd}\n`)
  program.outputHelp()
})

program.parse(process.argv)
