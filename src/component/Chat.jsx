import { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";

function Chat() {
  const [question, setQuestion] = useState("");
  const [qaHistory, setQaHistory] = useState([]);
  const [generatingAnswer, setGeneratingAnswer] = useState(false);

  async function generateAnswer(e) {
    setGeneratingAnswer(true);
    e.preventDefault();
    const currentQuestion = question;
    setQuestion("");
    setQaHistory((prev) => [
      ...prev,
      {
        question: currentQuestion,
        answer: "Loading your answer... \n It might take up to a few seconds",
      },
    ]);

    try {
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyBgcFEIw9_EFo1xJTq_TJycRFKyMIhioQs",
        method: "post",
        data: {
          contents: [{ parts: [{ text: currentQuestion }] }],
        },
      });

      const generatedAnswer = response.data.candidates[0].content.parts[0].text;
      setQaHistory((prev) =>
        prev.map((qa, index) =>
          index === prev.length - 1 ? { ...qa, answer: generatedAnswer } : qa
        )
      );
    } catch (error) {
      console.log(error);
      setQaHistory((prev) =>
        prev.map((qa, index) =>
          index === prev.length - 1
            ? {
                ...qa,
                answer: "Sorry - Something went wrong. Please try again!",
              }
            : qa
        )
      );
    }

    setGeneratingAnswer(false);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      generateAnswer(e);
    }
  }

  return (
    <div className="bg-white h-screen flex flex-col">
      <div className="flex-1 overflow-auto p-3">
        {qaHistory.map((qa, index) => (
          <div key={index} className="flex my-2">
            <div className="max-w-xs w-full text-left align-bottom">
              <div className="bg-gray-200 p-2 rounded-md mb-1">
                <p className="font-semibold">Answer:</p>
                <ReactMarkdown>{qa.answer}</ReactMarkdown>
              </div>
            </div>
            <div className="max-w-xs w-full text-right ml-auto align-top">
              <div className="bg-blue-200 p-2 rounded-md">
                <p className="font-semibold">Question:</p>
                <p>{qa.question}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <form
        onSubmit={generateAnswer}
        className="p-3 flex justify-center items-center border-t mt-auto mb-3"
      >
        <textarea
          required
          className="border rounded w-full p-2"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask anything"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-300 p-3 rounded-md hover:bg-blue-400 transition-all duration-300 ml-2"
          disabled={generatingAnswer}
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Chat;