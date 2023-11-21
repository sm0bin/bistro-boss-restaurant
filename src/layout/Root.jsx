import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Root = () => {
    return (
        <div className="min-h-screen">
            <Header></Header>
            <Outlet></Outlet>

        </div>
    );
};

export default Root;