import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home/Home";
import Blog from "../Pages/Blog/Blog";
import ToyDetailsModal from "../Pages/Home/ToyDetailsModal/ToyDetailsModal";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path:"blog",
          element:<Blog></Blog>,
        },
        
      ],
    }, 
    {
      path:"/toydetails",
      element:<ToyDetailsModal></ToyDetailsModal>
    }
  ]);
  export default router;