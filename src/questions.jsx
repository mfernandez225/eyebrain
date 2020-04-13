import React, { useState } from "react";
import DoctorPage from "./pages/doctorPage";

const Questions = () => {
  const [questions, setQuestions] = useState({});

  const saveToLocalStorage = () => {
    localStorage.setItem("questions", JSON.stringify(questions));
  };

  const restoreFromLocalStorage = () => {
    const storedQuestions = localStorage.getItem("questions");
    setQuestions(JSON.parse(storedQuestions));
  };

  return (
    <div>
      <DoctorPage questions={questions} setQuestions={setQuestions} />
      <input
        value={questions.odDays}
        onChange={(e) =>
          setQuestions((prev) => ({ ...prev, odDays: e.currentTarget.value }))
        }
      />
    </div>
  );
};

export default Questionss;
