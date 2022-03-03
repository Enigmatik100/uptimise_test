import React from "react";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import NoteDeFrais from "./NoteDeFrais";
import Validation from "./Validation";
import Absence from "./Absence";


const Home = () => {

    return (
        <Router>
            <div className="relative min-h-screen flex">
                <Sidebar />
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/absence" element={<Absence />} />
                    <Route path="/note-de-frais" element={<NoteDeFrais />} />
                    <Route path="/validation" element={<Validation />} />
                </Routes>
            </div>
        </Router>
    )
}

export default Home;