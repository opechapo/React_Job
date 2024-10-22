import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import MainLayout from "./MainLayout";
import JobsPage from "./Pages/JobsPage";
import NotFoundPage from "./Pages/NotFoundPage";
import JobPage, {jobLoader} from "./Pages/JobPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout/>}>
      <Route index element={<HomePage />} />
      <Route path="/jobs" element={<JobsPage />} />
      <Route path="/jobs/:id" element={<JobPage />}  loader= {jobLoader}/>
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
