import * as React from "react"
import { Link } from "gatsby"
import Seo from "../components/seo"
import "../components/css/404.scss"
const NotFoundPage = () => {
  return (
    <div>
      <Seo title="ERROR" meta={[]} />
      <svg viewBox="0 0 700 300" id="svg">
        <symbol id="s-text">
          <text textAnchor="middle" x="50%" y="85%">404</text>
        </symbol>
        <use xlinkHref="#s-text" className="text"></use>
        <use xlinkHref="#s-text" className="text"></use>
        <use xlinkHref="#s-text" className="text"></use>
        <use xlinkHref="#s-text" className="text"></use>
        <use xlinkHref="#s-text" className="text"></use>
      </svg>
      <div className="font">救命，页面丢失了！( ；´Д｀)</div>
      <Link to="/"><button className="custom-btn btn" >回到主页&nbsp;&gt;&gt;</button></Link>
      <div className="block"></div>
    </div>
  )
}


export default NotFoundPage
