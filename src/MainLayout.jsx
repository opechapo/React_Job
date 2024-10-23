import {Outlet} from "react-router-dom"
import NavBar from './Components/NavBar'
import "react-toastify/dist/ReactToastify.css"
import {ToastContainer} from "react-toastify"


const MainLayout = () => {
  return (
    <>
     <NavBar/>
     <Outlet/>
     <ToastContainer/>
    </>
  
  )
}

export default MainLayout