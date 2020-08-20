import React from "react"
import { Helmet } from "react-helmet"

import Header from "./header"
import "./layout.css"

const Layout = (props: any) => {
  return (
    <div className="layout">
      <Helmet>
        <title>Daniel Catbagan</title>
      </Helmet>
      <Header/>
      {props.children}
    </div>
  )
}

export default Layout
