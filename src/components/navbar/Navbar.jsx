import React from 'react'
import './nav.css'
import Logo from '../../assets/Facebook-Logo.png'
import admin from '../../assets/icons/admin.png'
import friends from '../../assets/icons/friends.png'
import groups from '../../assets/icons/groups.png'
import { useState } from 'react'

const Navbar = () => {

    const [first, setfirst] = useState(true)

    const checkFun = () => {
        setfirst(!first)
    }
    return (
        <>
            <div className={`container ${(first)?"dark":"white"}`}>

                <div className="main">
                    <div className="leftSide">
                        <img className='logo' src={Logo} alt="fb-logo" />
                    </div>
                    <div className="center">
                        <input type="search" placeholder='Search Facebok' />
                    </div>
                    <div className="rightSide">
                        <div className="icon">
                            <button onClick={checkFun}>
                                {(first) ? 'Light' : 'Dark'}
                            </button>
                            <img width="15%" src={admin} alt="admin" />
                            <img width="15%" src={friends} alt="friends" />
                            <img width="15%" src={groups} alt="groups" />
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Navbar