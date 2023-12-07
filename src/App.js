import Cart from "./Components/Cart";
import { Route,Routes } from "react-router-dom";
import Home from "./Components/Home";
import Blogs from "./Components/Blogs";
import Contacts from "./Components/Contacts";
import Display from "./Components/Display";
function App() {
  return (
    <div className="App">
      <Display></Display>
       <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/blogs" element={<Blogs/>}/>
            <Route path="/contacts" element={<Contacts/>}/>
       </Routes>
    </div>
  );
}

export default App;


let arr =["happy","riya"]

arr.map((name,index)=><p key={index}>{name}</p>)