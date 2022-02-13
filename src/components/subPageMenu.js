import React from 'react'
import '../components/menu.css'
import { Link as RedirecLink} from "gatsby"
import ReactDOM from 'react-dom'
import { Link, animateScroll as scroll } from "react-scroll";

const IndexMenu = () =>(
    <div style={{
    }}>
        <ul id="desktop-nav" className="nav" style={{
            listStyle:'none',
            position:'fixed',
            background:'rgba(8,8,8, 0.8)',
            margin:'0',
            top: 0,
            opacity:'.9'
        }}>
            <li className="menu-item"><RedirecLink className="link" to="/">Home</RedirecLink></li>
            <li className="menu-item"><a href="https://www.youtube.com/channel/UCn-u8HbYgbeewpK5x81dHaA/featured" className="link" target="_blank"> Videos </a></li>
            <li className="menu-item"><RedirecLink className="link" to="/gallery">Gallery</RedirecLink></li>
            <li className="menu-item"><RedirecLink className="link" to="/about">About</RedirecLink></li>
        </ul>

        <nav id="mobile-nav" role="navigation">
            <div id="menuToggle">
                <input type="checkbox" />
                
                <span></span>
                <span></span>
                <span></span>

                <ul id="menu">
                    <li className="menu-item"><RedirecLink className="link" to="/">Home</RedirecLink></li>
                    <li className="menu-item"><RedirecLink className="link" to="/about">About</RedirecLink></li>
                    <li className="menu-item"><RedirecLink className="link" to="/gallery">Gallery</RedirecLink></li>
                    <li className="menu-item"><a href="https://www.youtube.com/channel/UCn-u8HbYgbeewpK5x81dHaA/featured" className="link" target="_blank"> Videos </a></li>
                </ul>
            </div>
        </nav>
    </div>

)

export default IndexMenu;  

