import Homepage from "./Components/HompageFolder/Header";
import HomeScreen from "./Pages/HomeScreen";
import EventScreen from "./Pages/EventScreen"
import EventRegister from "./Pages/EventRegister"
import {Route, Routes} from "react-router-dom";
import Blogpage from "./Pages/Blogpage";
import "./App.css";

function App() {
  return (
    <>
    <Homepage />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/events" element={<EventScreen />} />
        <Route  path="/eventregister" element={<EventRegister />}/>
        <Route  path="/Blog" element={<Blogpage />}/>
      </Routes>
    </>
  );
}




export default App;

    
