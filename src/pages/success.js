import React from 'react'
import Layout from '../components/layout'
import { Link } from "gatsby"


const Success = (props) => (
    <Layout>
        <div id="main" className="alt">
            <section id="one" style={{
                textAlign:'center',
                paddingTop:15,
                marginBottom:30
            }}>
                <div className="inner">
                    <header className="major">
                        <h1>Your message has been sent!</h1>
                    </header>
                    <p>Thank you for contacting me, I will be reaching out to you shortly.</p>
                    <Link to="/"
                    className="success-link" 
                    >
                    Back to Home Page
                </Link>


                </div>
            </section>
        </div>
    </Layout>
)

export default Success