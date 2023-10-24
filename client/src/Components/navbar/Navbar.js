import React, { useState } from 'react';
import "./navbar.css";
import logo from "../../Media/logo.png";
import { FaPowerOff, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


export default function Navbar() {
    const navigate = useNavigate();
    const links = [
        { name: "Home", link: "/home" },
        { name: "TV Shows", link: "/tvshows" },
        { name: "Movies", link: "/movies" },
    ];

    const [showSearch, setShowSearch] = useState(false);
    const [inputHover, setInputHover] = useState(false);

    return (
        <>
            <div className={'nav'}>
                <div className="left flex a-center">
                    <div className="brand flex a-center j-center">
                        <img src={logo} alt="logo" />
                    </div>
                    <ul className="link flex">
                        {links.map((Name, index) => {
                            return (
                                <li key={Name} onClick={() => { navigate(`${Name.link}`) }}>{Name.name}</li>
                            );
                        })}
                    </ul>
                </div>
                <div className="flex right a-center">
                    <div className={`search ${showSearch ? "show-search" : ""}`}>
                        <button onFocus={() => setShowSearch(true)} onBlur={
                            () => {
                                if (!inputHover) setShowSearch(false);
                            }
                        }>
                            <FaSearch />
                        </button>
                        <input type="text" placeholder="Search"
                            onMouseEnter={() => setInputHover(true)}
                            onMouseLeave={() => { setInputHover(false) }}
                            onBlur={() => {
                                setShowSearch(false);
                                setShowSearch(false);
                            }} />
                    </div>
                    <button onClick={() => { navigate("/login") }}><FaPowerOff /></button>
                </div>
            </div>
        </>
    )

}
