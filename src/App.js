import React, { useState, useEffect } from "react";
import Home from "./pages/home";
import LifestylePage from "./pages/lifestylePage";
import DevicePage from "./pages/devicePage";
import DoctorPage from "./pages/doctorPage";
import ResultPage from "./pages/resultPage";
import ProfitPage from "./pages/profitPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  const [questions, setQuestions] = useState({
    // HOME PAGE
    practiceName: "",
    investQuestion: "",
    odDays: "5",
    dailyComps: "10",
    numberOfOd: "",
    frontDeskStaff: "",
    numberOfTechs: "",
    whatMotivates: "",
    // LIFESTYLE PAGE
    frontDeskNotes: "",
    indexChampion: "",
    lifestyleIndex: "1",
    // DEVICE PAGE
    deviceChampion: "",
    techNotes: "",
    deviceRuns: ".5",
    // DOCTOR PAGE
    timeAllotted: "",
    currentFlow: "",
    impactTalk: "1",
    examLaneNotes: "",
    // PROFIT PAGE
    lensConversion: "",
  });
  const [calculations, setCalculations] = useState({});

  // Destructuring for easy useEffect dependencies.
  const {
    dailyComps,
    lifestyleIndex,
    deviceRuns,
    impactTalk,
    lensConversion,
    odDays,
  } = questions;
  const { whoToIndex, whoToRun, whoToTalkTo, weeklyConversions } = calculations;

  // All calculations.
  useEffect(() => {
    if (dailyComps && lifestyleIndex)
      setCalculations((prev) => ({
        ...prev,
        whoToIndex: Math.round(dailyComps * lifestyleIndex),
      }));

    if (whoToIndex && deviceRuns)
      setCalculations((prev) => ({
        ...prev,
        whoToRun: Math.round(whoToIndex * deviceRuns),
      }));

    if (whoToRun && impactTalk)
      setCalculations((prev) => ({
        ...prev,
        whoToTalkTo: Math.round(whoToRun * impactTalk),
      }));

    if (whoToTalkTo && lensConversion && odDays) {
      const newWeeklyConversions = Math.round(
        whoToTalkTo * lensConversion * odDays
      );

      const newYearlyConversions = Math.round(newWeeklyConversions * 50);
      const newMonthlyConversions = Math.round(newYearlyConversions / 12);
      setCalculations((prev) => ({
        ...prev,
        weeklyConversions: newWeeklyConversions,
        monthlyConversions: newMonthlyConversions,
        yearlyConversions: newYearlyConversions,
        weeklyRoi: weeklyConversions * 400,
        monthlyRoi: newMonthlyConversions * 400,
        yearlyRoi: newYearlyConversions * 400,
      }));
    }
  }, [
    dailyComps,
    lifestyleIndex,
    deviceRuns,
    impactTalk,
    lensConversion,
    odDays,
    whoToIndex,
    whoToRun,
    whoToTalkTo,
    weeklyConversions,
  ]);

  const handleQuestionChange = (e) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    setQuestions((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const setQuestionValue = (name, value) => {
    setQuestions((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="App container-fluid">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home
              questions={questions}
              handleQuestionChange={handleQuestionChange}
            />
          </Route>
          <Route exact path="/lifestylePage">
            <LifestylePage
              questions={questions}
              handleQuestionChange={handleQuestionChange}
              setQuestionValue={setQuestionValue}
              calculations={calculations}
            />
          </Route>
          <Route exact path="/devicePage">
            <DevicePage
              questions={questions}
              handleQuestionChange={handleQuestionChange}
              setQuestionValue={setQuestionValue}
              calculations={calculations}
            />
          </Route>
          <Route exact path="/doctorPage">
            <DoctorPage
              questions={questions}
              handleQuestionChange={handleQuestionChange}
              setQuestionValue={setQuestionValue}
              calculations={calculations}
            />
          </Route>
          <Route exact path="/resultPage">
            <ResultPage questions={questions} calculations={calculations} />
          </Route>
          <Route exact path="/profitPage">
            <ProfitPage
              questions={questions}
              handleQuestionChange={handleQuestionChange}
              setQuestionValue={setQuestionValue}
              calculations={calculations}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
