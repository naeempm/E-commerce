import React from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

function Navbar(){
    return(
        <div className="flex items-center justify-between py-5">
            <img src={assets.logo} className="w-36" alt="" />
            <ul className="hidden sm:flex text-sm gap-5 text-gray-700">
                <NavLink to="/" className="flex flex-col items-center gap-1">
                    <p>HOME</p>
                    <hr className="w-2/4 border-none h-[1.5px] bg-gray-700" />
                </NavLink>
                <NavLink to="/Collection" className="flex flex-col items-center gap-1">
                     <p>COLLECTION</p>
                     <hr  className="w-2/4 border-none h-[1.5px] bg-gray-700"/>
                </NavLink>
                <NavLink to="/About" className="flex flex-col items-center gap-1">
                    <p>ABOUT</p>
                    <hr  className="w-2/4 border-none h-[1.5px] bg-gray-700"/>
                </NavLink>
                <NavLink to="/Contact" className="flex flex-col items-center gap-1">
                    <p>CONTACT</p>
                    <hr className="w-2/4 border-none h-[1.5px] bg-gray-700" />
                </NavLink>
            </ul>
        </div>
    )
}
export default Navbar