import List from "./component/list"
import Reduce from "./component/listhookreducer";
import Nav from "./component/nav";
import Footer from "./component/footer";
import Timehook from "./component/timehook"
import Timeclass from "./component/timeclass"
import { Routes,Route } from "react-router-dom";

function App() {
  return (
    <div>
    <Nav/>
    <Routes>
    <Route path="/" element={<><Timehook/><Timeclass/></>}></Route>
      <Route path="/withclass" element={<List/>}></Route>
      <Route path="/withhooks" element={<Reduce/>}></Route>
    </Routes>
    <Footer/>
    </div>

  );
}

export default App;
