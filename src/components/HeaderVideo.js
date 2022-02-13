
import React from "react"
import video from '../videos/homepage-video-compressed-no-sound.mp4';
class HeaderVideo extends React.Component {
    componentDidMount(){
        var headerVid = document.getElementById('home-video');
        if(headerVid.play){ // checks if element is playing right now
            setTimeout(function () {
                headerVid.classList.add("visible-vid");
            }, 600);
        }
    }


    render(){

        return(
            <div id="vid-container">
                <video id="home-video" className='videoTag' autoPlay controls muted style={{backgroundColor:'#000'}}>
                    <source src={video} type='video/mp4' />
                </video>
            </div>
      
        );


    }

}

export default HeaderVideo



















// window.onload = function(){

//     //detects playing video/audio
//     Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
//         get: function(){
//             return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
//         }
//     })

//     //if homepage video playing fade it in
//     if(document.querySelector('video').playing){ // checks if element is playing right now
//         // Do anything you want to
//         var element = document.getElementById('home-video');
//         element.style.opacity = "1.0";
//     }


// };