import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home/Home";
import Blog from "../Pages/Blog/Blog";
import ToyDetailsModal from "../Pages/Home/ToyDetailsModal/ToyDetailsModal";
import AddToy from "../AddToy/AddToy";
import Alltoy from "../Alltoy/Alltoy";
import Mytoy from "../Mytoy/Mytoy";
import Login from "../Login/Login";
import Registration from "../Registration/Registration";

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
    },
    {
      path:"/addtoy",
      element:<AddToy></AddToy>
    },
    {
      path:"/alltoy",
      element:<Alltoy></Alltoy>,
      loader: () => fetch('http://localhost:2000/toy')
    },
    {
      path:"/mytoy",
      element:<Mytoy></Mytoy>
    },
    {
      path:"/login",
      element:<Login></Login>
    },
    {
      path:"/registration",
      element:<Registration></Registration>
    }
  ]);
  export default router;