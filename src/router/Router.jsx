import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Homepage from "../pages/Homepage";
import Bookpage from "../pages/Bookpage";
import Listpage from "../pages/Listpage";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
   children: [
    {
      path: "/",
      Component: Homepage,
    },
    {
      path: "/books",
      Component: Bookpage,
    },
    {
      path: "/list",
      Component: Listpage
    }
   ],
   errorElement: <h1>Error the page.....</h1>
  },
]);