import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UserAuthContextProvider from "./Context/UserAuthContext";
import Dashboard from "./Pages/Dashboard"
import LogIn from "./Pages/LogIn";
import SignUp from "./Pages/SignUp";
import PrivateRoutes from "./PrivateRoutes";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PrivateRoutes />,
      children: [
        {
          path: "/",
          element:<Dashboard/>
        }
      ]
    },
    {
      path: "/login",
      element: <LogIn />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
  ]);
  return (
    <div>
      <UserAuthContextProvider>
        <RouterProvider router={router} />
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
