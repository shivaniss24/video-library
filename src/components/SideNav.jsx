import React, { useState } from 'react'
import { FaBookmark, FaGooglePlay, FaHome, FaPlus, FaSearch, FaStopwatch, FaUser } from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const SideNav = () => {





    return (
        <div className='col s2'>
            < ul className='sidenav sidenav-fixed sidenav-align' >
                <NavLink to="/">
                    <li className='text-black'><a className='waves-effect waves-deep-purple accent-2'>
                        <b className='right b-1'>Home</b>
                        <a className='icon black-text nav-icon right'>
                            <FaHome className="icons" />
                        </a>
                    </a>
                    </li>
                </NavLink>
                <NavLink to="/explore">
                    <li className='text-black'><a className='waves-effect waves-deep-purple accent-2'>
                        <b className='right b-2'>Explore</b>
                        <a className='icon black-text nav-icon right'>
                            <FaSearch className="icons" />
                        </a>
                    </a>
                    </li>
                </NavLink>
                <NavLink to="/playlist">
                    <li className='text-black'><a className='waves-effect waves-deep-purple accent-2'>
                        <b className='right b-3'>Playlist</b>
                        <a className='icon black-text nav-icon right'>
                            <FaGooglePlay className="icons" />
                        </a>
                    </a>
                    </li>
                </NavLink>
                <NavLink to="/watchlist">
                    <li className='text-black'><a className='waves-effect waves-deep-purple accent-2'>
                        <b className='right b-4'>Watchlist</b>
                        <a className='icon black-text nav-icon right'>
                            <FaStopwatch className="icons" />
                        </a>
                    </a>
                    </li>
                </NavLink>

            </ul >



        </div >
    )
}

export default SideNav