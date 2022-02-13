// import React, { Component, Fragment } from 'react'
// import PropTypes from 'prop-types'
// import styled from 'styled-components'
// import Img from 'gatsby-image'

// import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
// import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
// import { faTimes } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// class Lightbox extends Component {
//   state = {
//     showLightbox: false,
//     selectedImage: 0,
//   }

//   componentDidMount = () => {
//     window.addEventListener('keyup', this.handleKeyUp, false)
//   }

//   componentWillUnmount = () => {
//     window.removeEventListener('keyup', this.handleKeyUp, false)
//   }

//   handleClick = (e, index) => {
//     e.preventDefault()
//     this.setState({ showLightbox: !this.state.showLightbox, selectedImage: index })
//   }

//   closeModal = () => {
//     this.setState({ showLightbox: false })
//   }

//   goBack = () => {
//     this.setState({ selectedImage: this.state.selectedImage - 1 })
//   }

//   goForward = () => {
//     this.setState({ selectedImage: this.state.selectedImage + 1 })
//   }

//   handleKeyUp = e => {
//     e.preventDefault()
//     const { keyCode } = e
//     if (this.state.showLightbox) {
//       if (keyCode === 37) {
//         // Left Arrow Key
//         if (this.state.selectedImage > 0) {
//           this.setState({ selectedImage: this.state.selectedImage - 1 })
//         }
//       }
//       if (keyCode === 39) {
//         // Right Arrow Key
//         if (this.state.selectedImage < this.props.images.length - 1) {
//           this.setState({ selectedImage: this.state.selectedImage + 1 })
//         }
//       }
//       if (keyCode === 27) {
//         // Escape key
//         this.setState({ showLightbox: false })
//       }
//     }
//   }

//   render() {
//     const { images } = this.props
//     const { showLightbox, selectedImage } = this.state
//     return (
//       <Fragment>
//         <Gallery>
//           {images.map((img, i) => (
//             <GalleryItem key={img.node.sizes.src}>
//               <a href={img.node.sizes.src} alt="Gallery Image" onClick={e => this.handleClick(e, i)}>
//                 <StyledImg sizes={img.node.sizes} />
//               </a>
//             </GalleryItem>
//           ))}
//         </Gallery>

//         <LightboxModal visible={showLightbox} onKeyUp={e => this.handleKeyDown(e)}>
//           <LightboxContent>
//           <ControlsMid className="lb-controls">
//               <LeftRight>
//                 <Button className="btn-prev" onClick={this.goBack} disabled={selectedImage === 0}>
//                   <FontAwesomeIcon icon={faAngleLeft} style={{
//                     fontSize:65,
//                   }}/>
//                 </Button>

//               </LeftRight>
//             </ControlsMid>

//             <Controls className="lb-controls" style={{
//                   float: 'right',
//                   marginTop: '-7%',
//             }}>
//               <Button onClick={this.closeModal}>
//                 <FontAwesomeIcon icon={faTimes} style={{
//                     fontSize:35,
//                   }}/>
//               </Button>
//             </Controls>
//             <Img sizes={images[selectedImage].node.sizes} />
//           </LightboxContent>
//           <Button className="btn-next"onClick={this.goForward} disabled={selectedImage === images.length - 1}>
//                   <FontAwesomeIcon icon={faAngleRight} style={{
//                     fontSize:65,
//                   }}/>
//                 </Button>
//         </LightboxModal>
//       </Fragment>
//     )
//   }
// }

// const StyledImg = styled(Img)`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   z-index: -1;
//   height: 100%; // or whatever
//   & > img {
//     object-fit: cover !important; // or whatever
//     object-position: 0% 0% !important; // or whatever
//   }
// `

// const Gallery = styled.div`
//   display: grid;
//   grid-template-columns: 1fr;
//   @media (min-width: 700px) {
//     grid-template-columns: 1fr 1fr;
//   }
//   @media (min-width: 900px) {
//     grid-template-columns: 1fr 1fr 1fr;
//   }

//   @media (min-width: 1100px) {
//     grid-template-columns: repeat(5, 1fr);
//   }

//   grid-gap: 15px;
//   .gatsby-image-outer-wrapper {
//     height: 100%;
//   }
// `

// const GalleryItem = styled.div`
//   position: relative;
// `

// const Button = styled.button`
//   background-color:transparent;
//   border:none;
//   color:#fff;
// `

// const LightboxModal = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   bottom: 0;
//   right: 0;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background: rgba(0, 0, 0, 0.5);
//   opacity: ${props => (props.visible ? '1' : '0')};
//   visibility: ${props => (props.visible ? 'visible' : 'hidden')};
// `
// const LightboxContent = styled.div`
//   margin: 15px;
//   max-width: 50%;
//   width: 100%;
// `

// const ControlsMid = styled.div`
//   display: flex;
//   justify-content: space-between;
//   position: absolute;
//   top: 50%;
// `
// const Controls = styled.div`
//   display: flex;
//   justify-content: space-between;
// `
// const LeftRight = styled.div`
//   button:first-child {
//     margin-right: 10px;
//   }
// `

// Lightbox.propTypes = {
//   images: PropTypes.array.isRequired,
// }

// export default Lightbox
