import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Homepage from "../pages/Homepage";
import Bookpage from "../pages/Bookpage";
import BookDetails from "../pages/BookDetails";


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
      path: "/bookDetails/:id",
      Component: BookDetails
    }
   ],
   errorElement: <h1>Error the page.....</h1>
  },
]);