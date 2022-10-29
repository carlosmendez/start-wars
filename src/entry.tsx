import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "urql";
import { createClient } from "urql";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from './components/App';
import PersonPage from "./pages/Person/PersonPage";
import HomePage from "./pages/Home/HomePage";

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
  // <React.StrictMode>
    <Provider value={client}>
      <App>
        <RouterProvider router={router} />
      </App>
    </Provider>
  // </React.StrictMode>,
);
