import * as React from "react"
import { Link } from "gatsby"
import Seo from "../components/seo"
import "../components/css/about.scss"

const JoinPage = () => (
  <div className="wrapper">
    <Seo title="JOIN US" meta={[]} />
    <Link to="/" style={{ color: "rgb(140,120,180)" }}>
      <div className="typing-demo">
        JOIN_US!
      </div></Link>
  </div>

)

export default JoinPage
