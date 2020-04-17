import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import LifestylePage from "./pages/LifestylePage";
import DevicePage from "./pages/DevicePage";
import DoctorPage from "./pages/DoctorPage";
import ResultPage from "./pages/ResultPage";
import ProfitPage from "./pages/ProfitPage";
import ResultPDF from "./pages/pdf";
import { PDFViewer } from "@react-pdf/renderer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  const [questions, setQuestions] = useState({
    // HOME PAGE
    practiceName: "Marc's Practice",
    visionAffiliations: "Vision Source and Eye Doc",
    managedCare: "VSP, EM",
    investQuestion: "Make that money!!!",
    odDays: "5",
    dailyComps: "10",
    numberOfOd: "1",
    officeManager: "Tina",
    frontDeskStaff: "Robin, Trish, and Luke",
    numberOfTechs: "4",
    opticians: "Tracy and Kim",
    whatMotivates: "Pizza Parties",
    // LIFESTYLE PAGE
    frontDeskNotes:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero rem quas, soluta debitis adipisci est fugit aperiam aspernatur numquam assumenda ad eos. Quidem ducimus sed asperiores, amet vitae error accusamus",
    indexChampion: "Trish",
    lifestyleIndex: 1,
    // DEVICE PAGE
    deviceChampion: "Hank",
    techNotes:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero rem quas, soluta debitis adipisci est fugit aperiam aspernatur numquam assumenda ad eos. Quidem ducimus sed asperiores, amet vitae error accusamus",
    deviceRuns: 0.5,
    // DOCTOR PAGE
    timeAllotted: "15",
    currentFlow: "Hands straight to optician with one RX",
    impactTalk: 0.5,
    examLaneNotes:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero rem quas, soluta debitis adipisci est fugit aperiam aspernatur numquam assumenda ad eos. Quidem ducimus sed asperiores, amet vitae error accusamus",
    // PROFIT PAGE
    lensConversion: 0.05,
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
    setCalculations((prev) => ({
      ...prev,
      whoToIndex:
        (dailyComps &&
          lifestyleIndex &&
          Math.round(dailyComps * lifestyleIndex)) ||
        0,
    }));

    setCalculations((prev) => ({
      ...prev,
      whoToRun:
        (whoToIndex && deviceRuns && Math.round(whoToIndex * deviceRuns)) || 0,
    }));

    setCalculations((prev) => ({
      ...prev,
      whoToTalkTo:
        (whoToRun && impactTalk && Math.round(whoToRun * impactTalk)) || 0,
    }));

    const newWeeklyConversions =
      (whoToTalkTo &&
        lensConversion &&
        odDays &&
        Math.round(whoToTalkTo * lensConversion * odDays)) ||
      0;

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
          <Route exact path="/Result.pdf">
            <PDFViewer
              style={{
                width: "100%",
                height: "100vh",
              }}
            >
              <ResultPDF questions={questions} calculations={calculations} />
            </PDFViewer>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
