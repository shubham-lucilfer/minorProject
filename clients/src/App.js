import React from "react";
import { Container } from "@material-ui/core";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
       <BrowserRouter>
        <Container maxWidth="lg">
          <Navbar />
          <Routes>
            <Route path="/" component={<Home/>} />
            <Route path="/auth" component={<Auth/>} />
          </Routes>
          <Home />
        </Container>
      </BrowserRouter>
  );
};

export default App;
