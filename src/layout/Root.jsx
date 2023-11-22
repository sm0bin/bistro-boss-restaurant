import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Root = () => {
    return (
        // <div className="min-h-screen">
        <div className="mx-8 md:mx-12 lg:mx-auto max-w-7xl">

            <Header></Header>
            <Outlet></Outlet>
        </div>

        // </div> 
    );
};

export default Root;