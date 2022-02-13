import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import Lightbox from '../components/Lightbox'
import { Link, graphql } from 'gatsby';
import Container from '../components/Container'
import Menu from  '../components/subPageMenu'
import { GatsbyImage } from 'gatsby-plugin-image'
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox' 

const GalleryPage = ({ data }) => (
  <Layout>
    <Menu />

      <h1 style={{
        marginTop:100,
        textAlign:'center',
      }}
      >Gallery</h1>     
      <div style={{
        marginLeft:15,
        marginRight:15,
        paddingBottom:15,
      }}>

      
      <div className="Grid--gallery">
      <SimpleReactLightbox>
        <SRLWrapper>
          {data.gallery.edges.map(({node}) => (
            <a href={node.publicURL}>
              <GatsbyImage image={node.childImageSharp.gatsbyImageData} alt="whitetail deer image" key={node.id} />
            </a>
            ))}
          </SRLWrapper>
        </SimpleReactLightbox> 
      </div>

    </div>
  </Layout>
)
export default GalleryPage

export const pageQuery = graphql `
  query {
    gallery: allFile(filter: {relativeDirectory: {eq: "gallery"}}) {
      edges {
        node {
          id
          base
          publicURL
          childImageSharp {
            gatsbyImageData (
              transformOptions: {fit: COVER}
              placeholder: BLURRED
              webpOptions: {quality: 50}
            )
          }
        }
      }
    }
  }
`