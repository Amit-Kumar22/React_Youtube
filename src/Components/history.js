import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

function History({ close }) {
 const data = JSON.parse(localStorage.getItem("history"))


    const navigate = useNavigate()
    function getVideo(id, snip){
        navigate("/Home", {state:{id:id,snip:snip}})
       }
  return (
    <div onClick={close}>
     <div >
     <div key={data.id} className="vedio2" onClick={()=>getVideo(data.id, data.snip)}>
         <img src={data.snip.thumbnails.high.url} heigth = "300px" width = "300px" className="thumbnail" alt="channel thumbnail" />
           <div className="content">
              <img src={data.snip.thumbnails.medium.url} className="channel-icon" alt="channel icon" />
                  <div className="info">
                 
                     <h4 className="title">{data.snip.title}</h4>
                     <p className="channel-name">{data.snip.channelTitle}</p>
                  </div> 
                 </div>
                </div>
     </div>
    </div>
  )
}

export default History
