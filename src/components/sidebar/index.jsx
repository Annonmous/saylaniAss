import React from 'react'
import './sidebar.css'
import logo2 from "../../assets/icons/icons8-home-24.png"
import admin from "../../assets/icons/admin.png"
import friends from "../../assets/icons/friends.png"
import groups from "../../assets/icons/groups.png"
import menu from "../../assets/icons/menu.png"
const index = () => {
  return (
    <>
    <div className="containerSidebar ">
      <div className="list">
        <ul>
          <li>
            <img width="20px" src={logo2} alt="" />
            <p>
            Home
            </p>
          </li>
          <li>
          <img width="20px" src={admin} alt="" />
          <p>
            Muhammad Huzaifah
          </p>
          </li>
          <li>
          <img width="20px" src={menu} alt="" />
          <p>
            Menu
          </p>
          </li>
          <li>
          <img width="20px" src={friends} alt="" />
          <p>
            Friends
          </p>
          </li>
          <li>
          <img width="20px" src={groups} alt="" />
          <p>
            Groups
          </p>
          </li>
          <li>
          <img width="20px" src={admin} alt="" />
          <p>
            Saylani It Mass Traning
          </p>
          </li>
          <li>
          <img width="20px" src={admin} alt="" />
          <p>
            PIAIC Group official
          </p>
            </li>
          <li>
          <img width="20px" src={admin} alt="" />
          <p>
            Sir Nasir
          </p>
          </li>
          
        </ul>
      </div>
    </div>
    </>
  )
}

export default index