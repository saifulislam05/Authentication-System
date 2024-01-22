
import React from "react";
import { RouterProvider,createBrowserRouter } from "react-router-dom";
import LogIn from "./Pages/LogIn";
import Register from "./Pages/Register";


function App() {

  const router = createBrowserRouter([
    {
      path: "/login",
      element: <LogIn />,
    },{
      path: "/register",
      element: <Register />,
    },
  ]);
  return (
    <div>
     <RouterProvider router={router} />
    </div>
  );
}

export default App
