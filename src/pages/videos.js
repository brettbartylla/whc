import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby';
import Container from '../components/Container'
import Menu from  '../components/subPageMenu'

import '../components/youtube_load'
const VideosPage = ({ data }) => (
  <Layout>
    <Menu />

    <h1 style={{
        marginTop:100,
        textAlign:'center',
    }}
    >Videos</h1>     
    <div style={{
        marginLeft:15,
        marginRight:15,
        textAlign:'center'
    }}>

    <div id="videos-container"></div>

    
    </div>   


  </Layout>
)


export default VideosPage
