import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {paths_} from "./config";

import Home from "./pages/Home";
import Creations from "./pages/Creations";
import Logs from "./pages/Logs";
import Prowess from "./pages/Prowess";
import Skillsets from "./pages/Skillsets";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        {/* ALL ROUTES */}
        <Route path={paths_.START_PATH}>
          {/* Index page(home page) */}
          <Route index element={<Home />}/>

          {/* Creations page */}
          <Route path={paths_.CREATIONS} element={<Creations />} />

          {/* Data-logs page */}
          <Route path={paths_.LOGS} element={<Logs />} />

          {/* Prowess page */}
          <Route path={paths_.PROWESS} element={<Prowess />} />

          {/* Skillsets page */}
          <Route path={paths_.SKILL_SETS} element={<Skillsets />} />
        </Route>
      </Routes>
  </BrowserRouter>
);
