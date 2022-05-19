import React from 'react'
import { IconContext } from 'react-icons';
import {FiTwitter} from "react-icons/fi";
import {TiMessages} from "react-icons/ti";
import {BsSearch} from "react-icons/bs";

import { Link } from 'react-router-dom'
import '../style.css'

const App = () => {
    return (
        <IconContext.Provider value={{color:"white",size:"1.5em"}}>
    
        <div className="container">
            <div className="icon">
                <Link to='/'>
                    <div className="icon_main">
                    <p>CDNJS</p>
                    </div>
                </Link>
                <Link to='/twitter'>
                    <div className="icon_twit">
                        <FiTwitter/>

                    </div>
                </Link>
                <Link to='/message'>
                    <div className="icon_message">
                        <TiMessages/>

                    </div>
                </Link>
            </div>

            <div className="search">
                {/* <Link to='/seach'> */}
                    <div className="search_inner">
                        <BsSearch className='search_icon' color='black'/>
                    <input type="search"  className="search_inner" placeholder='Search from 4,180 libraries on cdnjs...'/>
                    </div>
                {/* </Link> */}
            </div>
            <div className="btn">
                <Link to='/About'>
                <div className="btn_inner">

                    <p>
                        About
                    </p>
                    </div>
                </Link>
                <Link to='/API'>
                <div className="btn_inner">

                    <p>
                        API

                    </p>
                    </div>
                </Link>
                <Link to='/GitHub'>
                <div className="btn_inner">

                    <p>
                        GitHub

                    </p>
                    </div>
                </Link>
                <Link to='/Libraries'>
                <div className="btn_inner">

                    <p>
                        Libraries

                    </p>
                    </div>
                </Link>
                <Link to='/Status'>
                <div className="btn_inner">

                    <p>
                        Status

                    </p>
                    </div>
                </Link>
            </div>
        </div>
     
        </IconContext.Provider>
    )
}

export default App
