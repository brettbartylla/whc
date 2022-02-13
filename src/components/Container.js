import React from "react"

const Container = ({ children }) => (
  <div className="container" style={{
    margin: `0 auto`,
    padding: `0px 1.0875rem 1.45rem`,
    paddingTop: 15,
    position: 'relative',
  }}>
  {children}
  </div>
)

export default Container
  