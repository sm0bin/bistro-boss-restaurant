import { NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";
import { toast } from "react-hot-toast";

const Header = () => {
    // const navLinks = [
    //     { label: 'HOME', path: '/' },
    //     { label: 'CONTACT US', path: '/contact' },
    //     { label: 'DASHBOARD', path: '/dashboard' },
    //     { label: 'OUR MENU', path: '/menu' },
    //     { label: 'OUR SHOP', path: '/shop' },
    //     { label: 'SIGN OUT', path: '/signout' },
    // ];
    const { user, signOutUser } = useContext(AuthContext);

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        {/* <li><NavLink to="/dashboard">Dashboard</NavLink></li> */}
        <li><NavLink to="/menu">Menu</NavLink></li>
        <li><NavLink to="/shop">Shop</NavLink></li>
        {/* {
            user ?
                <li><NavLink to="/signout">Sign Out</NavLink></li> :
                <li><NavLink to="/auth">Sign In</NavLink></li>
        } */}
    </>

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                toast.success("User logged out successfully");
            }).catch((error) => {
                toast.error(error.message);
            });

    }



    return (


        <div className="navbar fixed top-0 inset-x-0 z-50 text-white bg-black/50 backdrop-blur-md">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-warning lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-black/50 backdrop-blur-md">
                        {navLinks}
                    </ul>
                </div>
                <NavLink to="/" className="hidden md:block">
                    <h1 className=" text-4xl text-left font-black whitespace-nowrap dark:text-white font-serif uppercase">BISTRO BOSS</h1>
                    <h3 className=" text-2xl text-left font-serif font-bold tracking-[8px] whitespace-nowrap dark:text-white uppercase">Restaurant</h3>
                </NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <button onClick={handleSignOut} className="btn btn-warning">Sign Out</button> :
                        <NavLink to="/auth" className="btn btn-warning">Login</NavLink>
                }
            </div>
        </div>

    );
};

export default Header;