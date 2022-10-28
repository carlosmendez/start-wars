import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "urql";
import { createClient } from "urql";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PersonPage from "./pages/PersonPage";
import HomePage from "./pages/HomePage";
import emotionReset from  'emotion-reset';
import { Global, css } from '@emotion/react';

const client = createClient({
  url: "https://swapi-graphql.netlify.app/.netlify/functions/index",
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/person/:personId",
    element: <PersonPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider value={client}>
      <Global styles={css`${emotionReset}`} />
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
