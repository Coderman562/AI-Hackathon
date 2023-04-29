import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import FormPage from './FormPage';
import NavBar from './NavBar';
import PromptResultPage from './PromptResultPage';

const App = () => {
  return (
    <Router>
      <div className="bg-gradient-to-r from-green-400 via-blue-500 to-green-600 min-h-screen">
        <NavBar />
        <main className="container mx-auto mt-8">
          <Routes>
            <Route path="/" exact element={<Navigate to="/form" />} />
            <Route path="/form" element={<FormPage />} />
            <Route path="/prompt-result" element={<PromptResultPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
