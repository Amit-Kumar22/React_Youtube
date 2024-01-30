// ParentComponent.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import Recom from './recom';
import "../css/frame.css"
const Home = ({close}) => {
  const location = useLocation();
  const data = location.state


  return (
    <div onClick={close}>
    <Recom  />
      <div className="container">
        <div className="play-video">
            <div className="play">

           <iframe width="770" height="415" src={`https://www.youtube.com/embed/${data.id}`} title="YouTube video player" frameBorder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen ></iframe>
            </div>
            <div className="details">
                <h1 className='title2'>{data.snip.title}</h1>
                <div className="second">
                <img src={data.snip.thumbnails.high.url} className='channel-icon' />
                <div className="scribe">
                <p style={{fontWeight:"500"}}>{data.snip.channelTitle}</p>
                <p style={{fontSize:"13px"}} >3.59M subscribers</p>
                </div>
                <div className="join">
                <button className='button'>JOIN</button>
                <button className='button'>Subscriber</button>
                </div>
                <a href='https://web.whatsapp.com/' target="_blank"  className='button'><button className='button'>Share</button></a>
                <button className='button'>Download</button>
                </div>
                <div className="description">
                  <p>{data.snip.description}</p>
                </div>
            </div>
        </div>
    </div>
   
    </div>
  );
};

export default Home;
