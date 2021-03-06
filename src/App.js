import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import StartingPage from "./pages/StartingPage";
import PracticeInfo from "./pages/PracticeInfo";
import LifestylePage from "./pages/LifestylePage";
import DevicePage from "./pages/DevicePage";
import DoctorPage from "./pages/DoctorPage";
import ResultPage from "./pages/ResultPage";
import ProfitPage from "./pages/ProfitPage";
import ScrollToTop from "./components/scrollToTop";
import ResultPDF from "./pages/pdf";
import ProfitCalculator from "./pages/ProfitCalculator";
import { PDFViewer } from "@react-pdf/renderer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  const [questions, setQuestions] = useState({
    // HOME PAGE
    practiceName: "",
    investQuestion: "",
    visionAffiliations: "",
    managedCare: "",
    whatMotivates: "",
    // PRACTICE INFO
    odDays: "",
    dailyComps: "",
    numberOfOd: "",
    officeManager: "",
    frontDeskStaff: "",
    numberOfTechs: "",
    opticians: "",
    // LIFESTYLE PAGE
    frontDeskNotes: "",
    indexChampion: "",
    lifestyleIndex: "",
    // DEVICE PAGE
    deviceChampion: "",
    techNotes: "",
    deviceRuns: "",
    // DOCTOR PAGE
    timeAllotted: "",
    currentFlow: "",
    impactTalk: "",
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

    const deviceTimeInvested = whoToRun * 3;
    const impactTalkTimeInvested = whoToTalkTo * 3;
    setCalculations((prev) => ({
      ...prev,
      deviceTimeInvested,
      impactTalkTimeInvested,
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
        <ScrollToTop>
          <Switch>
            <Route exact path="/">
              <StartingPage />
            </Route>
            <Route exact path="/home">
              <Home
                questions={questions}
                handleQuestionChange={handleQuestionChange}
              />
            </Route>
            <Route exact path="/practiceInfo">
              <PracticeInfo
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
            <Route exact path="/profitCalculator">
              <ProfitCalculator
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
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
