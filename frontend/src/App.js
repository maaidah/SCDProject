
import React from "react";
import { Route, Routes } from "react-router-dom";
 import Navbar from "./components/navbar";
import StockList from "./components/StockItems";
import Edit from "./components/edit";
import Create from "./components/createnewstockitem";
 import NavbarHP from "./components/homePage";

const App = () => {
 return (
   <div>
     <Navbar />
     <Routes>
       <Route exact path="/" element={<NavbarHP />} />
       <Route path="/edit/:id" element={<Edit />} />
       <Route path="/create" element={<Create/>} />
       <Route path="/StockItems" element={<StockList />} />

     </Routes>
   </div>
 );
};
 
export default App;
