import Navigationbar from "./navigationbar";
import { Outlet } from "react-router-dom";

export const Layout = () => {
    return (  
        <>
        <Navigationbar/>
        <Outlet/>
        </>
    );
}