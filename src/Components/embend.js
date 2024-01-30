import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function Embend({ close }) {
  const data = useSelector((state)=>state.Search)
  //console.log("dncnd",data)

  const navigate = useNavigate()

  function getVideo(id, snip){
    navigate("/Home", {state:{id:id,snip:snip}})
   }

  return (
    <div>
        <div className="video-container2" onClick={close}>
    {
      data.videoData && data.videoData.map((items)=>{
        return(
          <div key={items.id} className="vedio" onClick={()=>getVideo(items.id.videoId, items.snippet)}>
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

export default Embend
