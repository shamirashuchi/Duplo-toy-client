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
import Privateroute from "./Privateroute";
import UpdateToy from "../UpdateToy/UpdateToy";
import Detailspage from "../Alltoy/Detailspage";
import ErrorPage from "../ErrorPage/ErrorPage";


const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path:"blog",
          element:<Blog></Blog>,
        }
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
      element:<Privateroute><Mytoy></Mytoy></Privateroute>
    },
    {
      path:"/login",
      element:<Login></Login>
    },
    {
      path:"/registration",
      element:<Registration></Registration>
    },
    {
      path:"/update/:id",
      element:<UpdateToy></UpdateToy>,
      loader: ({params}) => fetch(`http://localhost:2000/toy/${params.id}`)
    },
    {
      path:"/detailspage",
      element:<Detailspage></Detailspage>
    }
  ]);
  export default router;