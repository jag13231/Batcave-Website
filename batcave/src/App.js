import Homepage from "./Components/HompageFolder/Header";
import HomeScreen from "./Pages/HomeScreen";
import EventScreen from "./Pages/EventScreen";
import EventRegister from "./Pages/EventRegister";
import EventDetails from "./Pages/EventDetailsPage"
import {Route, Routes} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
    <Homepage />
      <Routes>
        <Route path="/" element = {<HomeScreen />} />
        <Route path="/events" element={<EventScreen />} />
        <Route  path="/eventregister" element={<EventRegister />}/>
        <Route path = "/eventdetails" element={<EventDetails />} /> 
      </Routes>
    </>
  );
}




export default App;

    
