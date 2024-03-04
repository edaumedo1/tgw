import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages";
import Test from "./pages/Test";
import MakeRoom from "./pages/MakeRoom";
import IntoRoom from "./pages/IntoRoom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/makeRoom" element={<MakeRoom />} />
        <Route path="/intoRoom" element={<IntoRoom />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
