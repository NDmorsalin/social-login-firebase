import { useState } from "react";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import { useAuth } from "./Provider/AuthProvider";

function App() {
  // const {loading} = useAuth()

  return (
    <div className="">
      
      <Header />
      <Outlet/>
    </div>
  );
}

export default App;
