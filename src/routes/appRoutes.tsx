import Home from "@/screens/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;