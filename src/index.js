import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import './output.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HeavyOperations from "./advanceHooks/useMemo/HeavyOperations";

const appRouter = createBrowserRouter([
    {
        path:'/',
        element: <App/>
    },
    {
        path: '/useMemo',
        element: <HeavyOperations/>
    }
])


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <RouterProvider router={appRouter}>
    <React.StrictMode>
      <App></App>
    </React.StrictMode>
  </RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
