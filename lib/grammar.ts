import { askOpenAIApi } from "./openai"

export async function fixGrammar(text: string) {
    const prompt = `Fix grammar and typos without changing meaning and wording in: [${text}]. Return the text without any instructions, just the fixed text:`

    return askOpenAIApi(prompt)
}
