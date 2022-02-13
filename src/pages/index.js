import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
// import Lightbox from '../components/Lightbox'
import '../components/video.css'
import { Link } from 'gatsby';
import Container from '../components/Container'
import Services from '../components/Services'

import HeaderVideo from '../components/HeaderVideo'
// <video className='videoTag' autoPlay loop muted>
//     <source src={sample} type='video/mp4' />
// </video>
import Menu from  '../components/indexMenu'
//import fbLogo from '../img/facebookIcn.jpg'
import '../components/HeaderVideo'

import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IndexPage = ({ data }) => (

  <Layout>
    <Menu />
    <HeaderVideo />
    <Container>
      <h1 style={{
        paddingTop: '.4em',
        textAlign: 'center',

      }}>Improve your Habitat & Improve your Hunting</h1>
      <p>
        <strong>
          In order to get predictable daytime buck activity the deer need to feel safe. 
          Whitetail Habitat Consulting plans keeps the deer from knowing they are being hunted. 
          When this is accomplished your success increases.
        </strong>
      </p>


      <Services />


<hr />
      <div id="contact"></div>
      <h3 style={{
        paddingTop:10
      }}>Contact Joe Bartylla</h3>
      {/* contact form */}
      <div className="row" style={{
        paddingLeft:0

      }}>
        <div className="column right">
          <form action="/success" name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="contact" value="contact" />
            <p hidden> 
              <label htmlFor="bot-field">Don’t fill this out:{' '}
              <input name="bot-field" /> </label> 
            </p>
            <input name="name" placeholder="name" type="text"/>
            <br />
            <input name="email" placeholder="email" type="email"  />
            <br />
            <input name="phone" placeholder="number" type="tel"  />
            <br />
            <textarea name="message" placeholder="message" rows="5" cols="40" />
            <br />
            <button style={{marginTop:10}}>Send</button>
          </form>
        </div>

        <div className="column left" style={{
          paddingLeft:20
        }}>
          <h4>Email</h4>
          <p>whitetailhabitatconsulting@gmail.com</p>
          <h4>Phone</h4>
          <p>715-222-3013</p>
          <h4>Connect</h4>
          <a href="https://www.facebook.com/whitetailhabitatconsulting/">
            <FontAwesomeIcon icon={faFacebook} style={{
              fontSize:65,
              color:	'#3b5998',
            }}/>
          </a>
        </div>
      </div>


      {/* about section */}
      <div id='about'></div>
      <h3 >About</h3>
      <p className="grey-txt">
        My name is Joe Bartylla. I started bow hunting with a recurve for whitetails in 1978. 
        I harvested my first deer with a Bear Whitetail Hunter compound a few years later. Since than I have consistently 
        harvested deer every year during Wisconsin's archery season. I have kept a hunting and habitat improvement journal for 
        many years. If you are currently not keeping a journal in these areas, I would highly recommend starting. <Link className="blue-link" to="/about">More Info</Link>
      </p>

    </Container>
    {/* <div id="videos-container"></div> */}

  </Layout>
)


export default IndexPage

