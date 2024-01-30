import React,{useState, useEffect} from 'react'
import "../css/navbaar.css"
import { HiMenu } from "react-icons/hi";
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { getSearch } from '../Slice/search';
import { useNavigate } from 'react-router-dom'

const Navbaar = ({ togglePage, close }) => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const navigate = useNavigate()
  function searche(){
    navigate("/embend", dispatch(getSearch(search)))
  }

  return (
    <div>
      <div className="navbar" >
      <button className='hamburger' onClick={togglePage}>
      <HiMenu />
      </button>
      <NavLink to="/">
        <img src={require("../images/Logo.png")} className="logo" alt="" />
        </NavLink>
        <div className="search-box">
            <input type="text" className="search-bar" placeholder="search" value={search} onChange={(e)=>setSearch(e.target.value)} />
            <button className="search-btn" onClick={searche}><img src={require("../images/search.png")} alt="" /></button>
            <img src={require("../images/mic.png")} alt="" />
        </div>
        <div className="user-options">
            <img src={require("../images/create.png")} className="icon" id="creat" alt="" />
            <img src={require("../images/apps.png")} className="icon" alt="" />
            <img src={require("../images/notifications.png")} className="icon" alt="" />
            <div className="user-dp">
                <img src={require("../images/Profile-pic.png")} alt="" />
            </div>
        </div>
    </div>
    {/* <NavLink to="/xyz">Home</NavLink> */}
    </div>
  )
}

export default Navbaar
