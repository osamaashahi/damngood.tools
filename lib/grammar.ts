import { askOpenAIApi } from "./openai"

export async function fixGrammar(text: string) {    
    const prompt = `I want you to act as a grammar fixer, spelling corrector and improver. I will speak to you in any language and you will detect the language, and answer in the corrected and improved version of my text. I want you to replace only invalid words and sentences with fixed versions and without typos. Keep the meaning same. I want you to only reply the correction, the improvements and nothing else, do not write explanations. My text: ${text}`

    return askOpenAIApi(prompt)
}
