import React from "react";
import ReactDOM from "react-dom/client";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import "./index.css";
import { pink, indigo } from "@material-ui/core/colors/";
import Erro from "./pages/Erro";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./pages/User";
import Photo from "./pages/Photo";
import Details from "./pages/Details";
import Header from './components/Header/Header'
import Albums from "./pages/Albums";
const theme = createMuiTheme({
  palette: {
    palette: {
      primary: indigo,
      secondary: pink,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
    <Header/>
      <Routes>
           <Route>
          <Route exact path="/" element={<User />} />
          <Route exact path="/details/:id" element={<Details />} />
          <Route exact path="/details/:id/albums/photo/:id" element={<Photo />} />
          <Route exact path="/details/:id/albums" element={<Albums />} />
          <Route path="*" element={<Erro />} />
        </Route>
      </Routes>
    </ThemeProvider>
  </BrowserRouter>
);
