import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: process.env.OPENAI_ORGANIZATION_ID,
    apiKey: process.env.OPENAI_API_KEY,
});

export const openAIApi = new OpenAIApi(configuration);

export const askOpenAIApi = async (prompt: string) => {
    const response = await openAIApi.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
    })

    for (const choice of response.data.choices) {
        if (
            choice.message?.content &&
            choice.message.content.length > 0 &&
            choice.finish_reason == "stop"
        ) {
            return choice?.message.content
        }
    }

    return null
}

