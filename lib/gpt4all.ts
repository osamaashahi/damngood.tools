import { GPT4All } from "gpt4all"

if (!process.env.GPT4ALL_MODEL) {
    throw new Error("Please, specify the `GPT4ALL_MODEL` environment variable")
}
const model = process.env.GPT4ALL_MODEL

class GPT4AllInitializer {
    private open: boolean
    private gpt4all: GPT4All

    constructor() {
        this.open = false
        this.gpt4all = new GPT4All(model, false)
    }

    async initialize() {
        if (!this.open) {
            await this.gpt4all.init()
            await this.gpt4all.open()
            this.open = true
        }

        return this.gpt4all
    }
}

export default new GPT4AllInitializer()
