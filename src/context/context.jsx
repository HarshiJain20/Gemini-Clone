import { createContext, useState } from "react";
import runChat from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");
  const [promptResults, setPromptResults] = useState({});

  const delayPara = (index, nextWord) => {
    setTimeout(function () {
      setResultData((prev) => prev + nextWord);
    }, 75 * index);
  };

  const newChat = () => {
    setLoading(false)
    setShowResult(false)

  }

  const onSent = async (prompt) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);

    let currentPrompt = prompt !== undefined ? prompt : input;

    if (prompt !== undefined) {
      setRecentPrompt(prompt);
    } else {
      setPrevPrompts((prev) => [...prev, input]);
      setRecentPrompt(input);
    }

    if (promptResults[currentPrompt]) {
      setResultData(promptResults[currentPrompt]);
      setLoading(false);
      setInput("");
      return;
    }

    let response = await runChat(currentPrompt);
    let responseArray = response.split("**");
    let newResponse = "";
    for (let i = 0; i < responseArray.length; i++) {
      if (i % 2 === 1) {
        newResponse += `<b>${responseArray[i]}</b>`;
      } else {
        newResponse += responseArray[i];
      }
    }

    let newResponse2 = newResponse.split("*").join("<br><br>");
    let newResponseArray = newResponse2.split(" ");

    setPromptResults((prev) => ({
      ...prev,
      [currentPrompt]: newResponse2,
    }));

    newResponseArray.forEach((nextWord, index) => {
      delayPara(index, nextWord + " ");
    });
    setLoading(false);
    setInput("");
  };

  const contextValue = {
    prevPrompts,
    setPrevPrompts,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
    newChat
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
