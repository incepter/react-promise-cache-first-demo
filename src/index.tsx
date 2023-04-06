import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import DefaultErrorBoundary from "./app/error-boundary";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/routing";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <DefaultErrorBoundary>
      <React.Suspense fallback="Loading your data">
        <RouterProvider router={router} />
      </React.Suspense>
    </DefaultErrorBoundary>
  </React.StrictMode>
);
