import React from "react"

import Header from "./header"
import "./layout.css"

const Layout = (props: any) => {
  return (
    <div className="layout">
      <Header/>
      {props.children}
    </div>
  )
}

export default Layout
