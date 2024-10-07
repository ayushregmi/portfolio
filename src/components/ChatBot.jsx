import { ChatGroq } from "@langchain/groq";
import { PromptTemplate } from "@langchain/core/prompts";

const ChatBot = () => {
  const model = new ChatGroq({
    apiKey: "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",
    model: "llama-3.1-70b-versatile",
    temperature: 0,
  });

  const message =
    "You are a chat assistant in a portfolio website and your task is to answer question." +
    "You will be provided a some information about the portfolio below, answer the questions based on the available information." +
    "Use 1st person speech to answer the questions." +
    "If answer is not present in the information respond with this quote 'I must admit that I am not familiar with that topic. However, I would be pleased to share more about myself.' YOu can change this slightly" +
    "Keep the answer short as possible. Do not include any additional and unnecessary information unless asked in the question." +
    "You can respond in html to format the answers, and use tailwind css for styling. Use text-sm as font size." +
    "\n\n{information}" +
    "\n\nQuestion:{query}";
  const prompt = PromptTemplate.fromTemplate(message);
  const chain = prompt.pipe(model);

  return chain;
};

export default ChatBot;
