import React from "react"
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Services = () => (
  <StaticQuery
    query={graphql`
      query ImgQuery {

        planEval: file(relativePath:{
          eq: "plan-evaluation.jpg"
        }){
          childImageSharp{
            fluid(maxWidth:1000){
              ...GatsbyImageSharpFluid
            }
          }
        }
        landBuying: file(relativePath:{
          eq: "landsale.jpg"
        }){
          childImageSharp{
            fluid(maxWidth:1000){
              ...GatsbyImageSharpFluid
            }
          }
        }

        tactics: file(relativePath:{
          eq: "tactics.jpg"
        }){
          childImageSharp{
            fluid(maxWidth:1000){
              ...GatsbyImageSharpFluid
            }
          }
        }

        consulting: file(relativePath:{
          eq: "consulting2.jpg"
        }){
          childImageSharp{
            fluid(maxWidth:1000){
              ...GatsbyImageSharpFluid
            }
          }
        }

        class1: file(relativePath:{
          eq: "Class 7.jpg"
        }){
          childImageSharp{
            fluid(maxWidth:1000){
              ...GatsbyImageSharpFluid
            }
          }
        }
        class2: file(relativePath:{
          eq: "qdma 1 185.jpg"
        }){
          childImageSharp{
            fluid(maxWidth:1000){
              ...GatsbyImageSharpFluid
            }
          }
        }
        class3: file(relativePath:{
          eq: "2018 Dec Bartylla class 4.jpg"
        }){
          childImageSharp{
            fluid(maxWidth:1000){
              ...GatsbyImageSharpFluid
            }
          }
        }



      }
  `}
  render={data => 
    <div id="services">
      <h3>Services</h3>
      <p className="grey-txt">
        Many people try to improve their habitat and hunting without a solid plan. 
        I specialize in creating a plan that not only makes your habitat better but 
        makes your hunting results more consistent. Having a complete well designed plan 
        will improve your hunting faster and save you time and money. I can design your plan 
        using maps and through phone calls or come to your property and plan it with you. 
      </p>
{/* 
      <h4 className="text-center">Consulting</h4>       */}
      <div className="row">

        <div className="column right">
          <strong>Evaluation of Your Plan:</strong>
          <br />
          <p style={{
            marginBottom:5
          }}>Starting at $300</p>
          
          <Img fluid={data.planEval.childImageSharp.fluid} />
          <p className="pt-1">
            If you already have a plan in place and would like feedback, then this service is for you. Send your plan to Joe Bartylla. 
            I will call after I review it, and we will discuss what is working for and against you.  With my help we can make sure your 
            improvements are in the right location, which can save you time and money. This service gives you the opportunity to fine tune 
            your existing plan and improve your hunting experiences.   
          </p>
        </div>
        <div className="column left">
          <strong>Land Buying Services:</strong>
          <br />
          <p style={{
            marginBottom:5
          }}>$175</p>
          
          <Img fluid={data.landBuying.childImageSharp.fluid} />
          <p className="pt-1">
            I have worked with clients developing habitat plans for many years.  During this time, 
            I have worked with properties that ranged from easy to improve to some that were very challenging.  
            If you are starting with the right property, it will be cheaper to improve, will offer better hunting, 
            and potentially have a higher resale value. I can conduct an aerial photo evaluation of your potential 
            new land.  I will give you feedback on the pros and cons of the property. If you use this service and  
            purchase the property I will give you a 15% discount on the habitat plan.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="column right">

          <strong>Habitat Plan:</strong> 
          <br />
          <p style={{
            marginBottom:5
          }}>$575 for 40 acres, $150 for each additional 40 acres </p>

          <Img fluid={data.tactics.childImageSharp.fluid} />
          <p className="pt-1">
            My habitat plans will provide you a complete blueprint on how to improve your land and increase your 
            hunting opportunities by using aerial photos, topography maps, and land owner's feedback.  
            The plan will guide you in what improvements should be made in specific locations. Common 
            improvements may include the following: food plot locations and what to plant, bedding area 
            locations, travel corridors, stand locations, access routes, earlier successional habitat, 
            fruit trees, etc. After you review the plan, you can schedule a phone conference with me to go
            over any questions you have.  The end result will be a solid plan that you can implement on your 
            property.
          </p>
        </div>

        <div className="column left">
          <strong>On Site Consulting:</strong>
          <br />
          <p style={{
            marginBottom:5
          }}>Price varies on location </p>

          <Img fluid={data.consulting.childImageSharp.fluid} />
          <p className="pt-1">
            Would you like me to walk your property with you to personally show you the areas for improvements?  
            Together we can determine the following: stand locations, food plot locations, how you will access the 
            property, where to place your trail cameras, bedding and water locations, and where tree or shrub planting 
            would be beneficial.  We can go over the order of priorities when improving your property.  We can also go 
            over what to plant, soil tests, if you need to cut any trees, and discuss hunting strategies for your property.
          </p>
        </div>
      </div>

      <h4>Courses</h4>
      <section className="columns-3">
        <div className="column-3 not-on-mobile">
          <Img fluid={data.class1.childImageSharp.fluid} />
        </div>
        
        <div className="column-3">
          <Img fluid={data.class3.childImageSharp.fluid} />
        </div>

        <div className="column-3 not-on-mobile">
          <Img fluid={data.class2.childImageSharp.fluid} />
        </div>
        
      </section>	
      <p>
        I have been conducting classes on improving whitetail habitat since the 1990's.  
        Contact me if you are interested in having me come to your area. I can teach whitetail 
        habitat improvements in a classroom setting or out in the field for your group. Classes 
        can range from 2 hours or more.  Topics may include, bedding areas, access, early successional 
        habitat, hard and soft mast trees, woody browse, soil testing, creating daylight deer movement, 
        food plots and seed selection, etc.  If there are specific topics you would like covered that can 
        also be arranged.  I look forward to sharing what I have learned with you.  More information on upcoming events can
        be found <a className="blue-link" href="https://www.facebook.com/pg/whitetailhabitatconsulting/events"  title="Facebook Events">Here</a>.
      </p>


  </div>
  
    }

/>

)

export default Services
  


/*--------------------------------------------------------------
If no grid support, limit width to 50em and center align
--------------------------------------------------------------*/
// @supports not (display: grid) {
// 	.site {
// 		max-width: 50em;
// 		margin: 0 auto;
// 	}
// }

/*--------------------------------------------------------------
CSS Grid layout for wider screens, when browser supports grid:
--------------------------------------------------------------*/


