import React, {useState, useEffect} from 'react'
import { apiData } from '../Slice/slice'
import "../css/About.css"
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

function About({ close }) {
   const navigate = useNavigate()
   function getVideo(id, snip){
    navigate("/Home", {state:{id:id,snip:snip}})
   }

  const data = useSelector((state)=>state.videos)
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(apiData());
  },[])

  return (
    <div>
    <div className="video-container" onClick={close}>
    {
      data.data && data.data.map((items)=>{
        {/* console.log(`tags0 ${items.snippet.tags}`) */}
        return(
          <div key={items.id} className="vedio" onClick={()=>getVideo(items.id, items.snippet)}>
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

export default About
