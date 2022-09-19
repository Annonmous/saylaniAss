import React from 'react'
import './content.css'
import admin from '../../assets/icons/admin.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faComment, faShare } from '@fortawesome/free-solid-svg-icons'
const index = (props) => {
  return (
 <>
 <div className="ContentContainer">
    
   <div className="post">
    <div className="header">
        <div className="Contenticon">
            <img src={admin} alt="" />
        </div>
        <div className="text">
            <p>{props.name}</p>
            <div className="time">{props.date}</div>
        </div>
    </div>
    <div className="center1">
        <div className="contentText">{props.text}</div>
        <div className="ContentPostImg">
            <img width='100%' src={props.image} alt="post" />
        </div>
    </div>
    <div className="footer">
    <div> <FontAwesomeIcon icon={faThumbsUp} /> like </div>
      <div> <FontAwesomeIcon icon={faComment} /> comment</div>
      <div> <FontAwesomeIcon icon={faShare} /> share</div>
    </div>
   </div>
  
 </div>
 </>
  )
}

export default index