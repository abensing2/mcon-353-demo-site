import * as React from "react";
import logo from "./logo.svg";
import picture from "./picture.jpg";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/HomeOutlined";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Accordion from "@mui/material/Accordion";
import {
  AccordionDetails,
  AccordionSummary,
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./App.css";
import { Home } from "./components/home/home";
import { Todo } from "./components/todo/todo";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/header/header";
function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        {/*localhost:3000/#*/}
        <Route path="/" element={<Home />} />
        {/*localhost:3000/#/todo*/}
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
