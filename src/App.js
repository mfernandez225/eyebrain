import React, { useState } from "react";
import Home from "./pages/home";
import LifestylePage from "./pages/lifestylePage";
import DevicePage from "./pages/devicePage";
import DoctorPage from "./pages/doctorPage";
import ResultPage from "./pages/resultPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  const [practiceName, setPracticeName] = useState("");
  const [investQuestion, setInvestQuestion] = useState("");
  const [dailyComps, setDailyComps] = useState("");
  const [odDays, setodDays] = useState("");
  const [whatMotivates, setWhatMotivates] = useState("");
  const [frontDeskStaff, setFrontDeskStaff] = useState("");
  const [frontDeskNotes, setFrontDeskNotes] = useState("");
  const [indexChampion, setIndexChampion] = useState("");
  const [lifestyleIndex, setLifeStyleIndex] = useState("");
  const [numberOfTechs, setNumberOfTechs] = useState("");
  const [deviceChampion, setDeviceChampion] = useState("");
  const [techNotes, setTechNotes] = useState("");
  const [deviceRuns, setDeviceRuns] = useState("");
  const [timeAllotted, setTimeAllotted] = useState("");
  const [numberOfOd, setnumberOfOd] = useState("");
  const [currentFlow, setCurrentFlow] = useState("");
  const [lensConversion, setLensConversion] = useState("");
  const [examLaneNotes, setExamLaneNotes] = useState("");

  let whoToIndex;
  if (dailyComps && lifestyleIndex)
    whoToIndex = Math.round(dailyComps * lifestyleIndex);

  let whoToRun;
  if (whoToIndex && deviceRuns) whoToRun = Math.round(whoToIndex * deviceRuns);

  let totalConversionNumber;
  if (whoToRun && lensConversion && odDays)
    totalConversionNumber = Math.round(whoToRun * lensConversion * odDays);

  return (
    <div className="App container-fluid">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home
              practiceName={practiceName}
              setPracticeName={setPracticeName}
              investQuestion={investQuestion}
              setInvestQuestion={setInvestQuestion}
              dailyComps={dailyComps}
              setDailyComps={setDailyComps}
              odDays={odDays}
              setodDays={setodDays}
              whatMotivates={whatMotivates}
              setWhatMotivates={setWhatMotivates}
              frontDeskStaff={frontDeskStaff}
              setFrontDeskStaff={setFrontDeskStaff}
              numberOfTechs={numberOfTechs}
              setNumberOfTechs={setNumberOfTechs}
              whoToIndex={whoToIndex}
              numberOfOd={numberOfOd}
              setnumberOfOd={setnumberOfOd}
            />
          </Route>
          <Route exact path="/lifestylePage">
            <LifestylePage
              frontDeskNotes={frontDeskNotes}
              setFrontDeskNotes={setFrontDeskNotes}
              indexChampion={indexChampion}
              setIndexChampion={setIndexChampion}
              lifestyleIndex={lifestyleIndex}
              setLifeStyleIndex={setLifeStyleIndex}
              whoToIndex={whoToIndex}
            />
          </Route>
          <Route exact path="/devicePage">
            <DevicePage
              deviceChampion={deviceChampion}
              setDeviceChampion={setDeviceChampion}
              techNotes={techNotes}
              setTechNotes={setTechNotes}
              deviceRuns={deviceRuns}
              setDeviceRuns={setDeviceRuns}
              whoToRun={whoToRun}
            />
          </Route>
          <Route exact path="/doctorPage">
            <DoctorPage
              timeAllotted={timeAllotted}
              setTimeAllotted={setTimeAllotted}
              currentFlow={currentFlow}
              setCurrentFlow={setCurrentFlow}
              lensConversion={lensConversion}
              setLensConversion={setLensConversion}
              examLaneNotes={examLaneNotes}
              setExamLaneNotes={setExamLaneNotes}
              patientsHelped={totalConversionNumber}
            />
          </Route>
          <Route exact path="/resultPage">
            <ResultPage
              practiceName={practiceName}
              investQuestion={investQuestion}
              whatMotivates={whatMotivates}
              dailyComps={dailyComps}
              frontDeskNotes={frontDeskNotes}
              indexChampion={indexChampion}
              techNotes={techNotes}
              deviceChampion={deviceChampion}
              examLaneNotes={examLaneNotes}
              currentFlow={currentFlow}
              whoToIndex={whoToIndex}
              whoToRun={whoToRun}
              patientsHelped={totalConversionNumber}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
