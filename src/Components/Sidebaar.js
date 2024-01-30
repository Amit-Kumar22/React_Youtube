import React, {useEffect} from 'react'
import "../css/navbaar.css"
import { NavLink } from 'react-router-dom';

function Sidebaar({ isOpen,close }) {

  return (
    <span>
    {isOpen &&  (
       <div className="side-bar">
        {/* <NavLink to="xyz"> */}
        
        <NavLink to="/" onClick={close} className="links active"><img src={require("../images/home.png")} alt="" />home</NavLink>
        
        <NavLink className="links"><img src={require("../images/explore.png")} alt="" />explore</NavLink>
        <NavLink className="links"><img src={require("../images/subscriprion.png")} alt="" />subscription</NavLink>
        <div className="seperator">
        <NavLink className="links"><img src={require("../images/library.png")} alt="" />library</NavLink>
        <NavLink to="/History" className="links"><img src={require("../images/history.png")} alt="" />history</NavLink>
        <NavLink className="links"><img src={require("../images/playlist.png")} alt="" />your video</NavLink>
        <NavLink className="links"><img src={require("../images/gerard.png")} alt="" />watch leater</NavLink>
        <NavLink className="links"><img src={require("../images/liked.png")} alt="" />like video</NavLink>
        <NavLink className="links"><img src={require("../images/show-more.png")} alt="" />show more</NavLink>
        <NavLink className="links">SUBSCRIPTIONS</NavLink>
        <NavLink className="links"><img src={require("../images/avatar.png" )} alt="" />James Gouse</NavLink>
        <NavLink className="links"><img src={require("../images/avatar2.png")} alt="" />Alan Cooper Gouse</NavLink>
        <NavLink className="links"><img src={require("../images/avatar3.png")} alt="" />Marcus Levin</NavLink>
        <NavLink className="links"><img src={require("../images/avatar4.png")} alt="" />santosh vlog</NavLink>
        <NavLink className="links"><img src={require("../images/avatar.png" )}alt="" />amit vines</NavLink>
        <NavLink className="links"><img src={require("../images/avatar2.png")} alt="" />sandeep blogs</NavLink>
        <NavLink className="links"><img src={require("../images/avatar4.png")} alt="" />rahul tech</NavLink>
        <NavLink className="links"><img src={require("../images/avatar3.png")} alt="" />sudhir gyan</NavLink>
        <NavLink className="links"><img src={require("../images/show-more.png")} alt="" />show 13 more</NavLink>
    </div>
    </div>
    )}
    </span>
  )
}

export default Sidebaar
