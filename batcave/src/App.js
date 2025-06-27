import HomeScreen from "./Pages/HomeScreen";
import EventScreen from "./Pages/EventScreen"
import Homepage from "./Components/HompageFolder/Header";
import {Route, Routes} from "react-router-dom";
import "./App.css";


function App() {
  return (
    <>
    <Homepage />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/events" element={<EventScreen />} />
      </Routes>
    </>
  );
}

export default App;

    
