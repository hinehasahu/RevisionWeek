import { useState } from "react";
import "./App.css";


const data = [
  {
    id:0,
    question: "What is your name?",
    answer: "",
    type: "text",
  },
  {
    id:1,
    question: "What is your email?",
    answer: "",
    type: "email",
  },
  {
    id:2,
    question: "What is your phone number?",
    answer: "",
    type: "number",
  }
]


function App() {
  const [questions, setQuestions] = useState(data);

  const updateQuestionText = (index, value) => {
    const updateQuestions = questions.map((q) =>
      q.id === index ? { ...q, question: value } : q
    );

    setQuestions(updateQuestions);
  };

  const updateAnswerText = (index, value) => {
    const updateAnswer = questions.map((q) =>
      q.id === index ? { ...q, answer: value } : q
    );

    setQuestions(updateAnswer);
  };

  const updateQuestionType = (index, value) => {
    const updateQuestions = questions.map((q) =>
      q.id === index ? { ...q, type: value } : q
    );

    setQuestions(updateQuestions);
  };

  const addQuestion = (index) => {
    const newQuestion = {id: index+1, question: "", answer: "", type: ""}
    setQuestions([...questions, newQuestion])
  };

  const removeQuestion = (index) => {
    const filteredQues = questions.filter((q) => q.id !== index);
    setQuestions(filteredQues);
  };
  console.log(questions.length)
  return (
    <>
      {questions &&
        questions.map((q) => (
          <div key={q.id}>
            <input
              type="text"
              value={q.question}
              onChange={(e) => updateQuestionText(q.id, e.target.value)}
            />
            <select
              value={q.type}
              onChange={(e) => updateQuestionType(q.id, e.target.value)}>
              <option value="text">Text</option>
              <option value="number">Number</option>
              <option value="email">Email</option>
            </select>
            <input
              type={q.type}
              value={q.answer} placeholder="write your answer here"
              onChange={(e) => updateAnswerText(q.id, e.target.value)}
            />

            <button onClick={() => removeQuestion(q.id)}>Remove</button>
          </div>
        ))}
        <button onClick={()=> addQuestion(questions.length)} >Add Question</button>

      <h1>Live Preview</h1>
      <ul>
        {questions.map((q) => (
          <li key={q.id}>
             <b>{q.question || "Untitled Question"}</b>
             <p>{q.answer || "No Answer"}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
