import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AssignmentRollingBallMaze from './assignment-rolling-ball-maze';

import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<App />} />
          <Route path="assignment-rolling-ball-maze" element={<AssignmentRollingBallMaze />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
