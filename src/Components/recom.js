import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import "../css/About.css"
// import Sidebaar from './Sidebaar'
function Recom({ close }) {

    const navigate = useNavigate()
const data = useSelector((state)=>state.videos)

function getVideo(id, snip){
    navigate("/Home", {state:{id:id,snip:snip}})
    localStorage.setItem("history", JSON.stringify({id:id,snip:snip}))
  }
   
  return (
    <div>
    {/* <Sidebaar /> */}
    <div className='side-container' onClick={close}>
       {
      data.data && data.data.map((items)=>{
        {/* console.log(`tags0 ${items.snippet.tags}`) */}
        return(
          <div key={items.id} className="vedio2" onClick={()=>getVideo(items.id, items.snippet)}>
         <img src={items.snippet.thumbnails.high.url} heigth = "300px" width = "300px" className="thumbnail" alt="channel thumbnail" />
           <div className="content">
              <img src={items.snippet.thumbnails.medium.url} className="channel-icon" alt="channel icon" />
                  <div className="info">
                 
                     <h4 className="title">{items.snippet.title}</h4>
                     <p className="channel-name">{items.snippet.channelTitle}</p>
                  </div> 
                 </div>
                </div>
        )
      })
    }
    </div>
    </div>
  )
}

export default Recom
