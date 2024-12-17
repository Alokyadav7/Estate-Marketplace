import React from 'react';
import {FaSearch} from "react-icons/fa";
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <header className="bg-slate-200 shadow-md sticky top-0 z-50">
            <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
                {/*Logo*/}
                <Link to="/">
                    <h1 className="font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl flex items-center">
                        <span className="text-blue-500">Homi</span>
                        <span className="text-gray-800">Fy</span>
                    </h1>
                </Link>
                {/*Search Bar*/}
                <form
                    className="bg-gray-100 border border-gray-300 rounded-full px-3 py-2 flex items-center w-full sm:w-auto">
                <input
                        type="text"
                        placeholder="Search properties..."
                        className="bg-transparent outline-none w-full text-sm sm:text-base placeholder-gray-500"
                    />
                    <button type="submit">
                        <FaSearch className="text-gray-500 hover:text-gray-700 transition-colors duration-300 sm:ml-2"/>
                    </button>
                </form>
                {/*Navigation Links*/}
                <ul className="flex gap-4">
                    <Link to="/">
                        <li className="hidden sm:inline text-slate-900 hover:underline transition duration-300 cursor-pointer">
                            Home
                        </li>
                    </Link>
                    <Link to="/about">
                        <li className="hidden sm:inline text-slate-900 hover:underline transition duration-300 cursor-pointer">
                            About
                        </li>
                    </Link>
                    <Link to="/contact">
                        <li className="hidden sm:inline text-slate-900 hover:underline transition duration-300 cursor-pointer">
                            Contacts
                        </li>
                    </Link>
                    <Link to="/sign-in">
                        <li className="text-slate-900 hover:underline transition duration-300 cursor-pointer">
                            {' '}
                            Sign In
                        </li>
                    </Link>
                </ul>
            </div>
        </header>
    )
}

