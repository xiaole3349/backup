import * as React from "react"
// import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Loading from "./loading"
import { StaticImage } from "gatsby-plugin-image"
import Header from "./header"
import "./css/layout.scss"

interface LayoutProps{
  children: React.ReactNode
}
const Layout = ({ children }:LayoutProps) => {
  
  const data:any = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
const siteTitle:string=data.site.siteMetadata?.title || `Title`

  return (
    <>

      <Loading />
      <Header siteTitle={siteTitle} />
      <main>{children}</main>
      <footer
        style={{
          height: `60vh`,//Footer height
          background: `white`,
          overflow: `hidden`,
          display: `flex`,
          justifyContent: `space-between`
        }}
      >
        <div
          style={{
            float: `left`,
            margin: `2% 0 0 2%`,
          }}
          className="info"
        >
          <h1
            style={{
              fontFamily: `semibold`,
              fontSize: `5em`,
              color: `rgb(100,90,140)`,
            }}
          >ADDRESS</h1>
          <p
            style={{
              fontFamily: `light`,
              fontSize: `3em`,
              color: `rgb(140,120,180)`,
              lineHeight: `4`,
            }}
          >Shanghai,China</p>
          <h1
            style={{
              fontFamily: `semibold`,
              fontSize: `5em`,
              color: `rgb(100,90,140)`,
            }}
          >CONTACT</h1>
          <a
            href="mailto:komoto@beatosion.com"
            style={{
              fontFamily: `light`,
              fontSize: `3em`,
              color: `rgb(140,120,180)`,
              lineHeight: `4`,
            }}
          >komoto@beatosion.com</a>

          <div className="logo-control">
            <a href="https://www.bilibili.com/" target="_blank"><StaticImage
              src="../images/bilibili-logo-blue.svg"
              alt="bilibili"
              className="icon-image"
            /></a>
            <a href="https://www.youtube.com/" target="_blank"><StaticImage
              src="../images/youtube-3.svg"
              alt="youtube"
              className="icon-imagey"
            /></a>
            <a href="https://twitter.com/CHERRY_ERRUI" target="_blank"><StaticImage
              src="../images/twitter-3.svg"
              alt="twitter"
              className="icon-imaget"
            /></a>
            {/* <a href="https://twitter.com/CHERRY_ERRUI"><StaticImage
              src="../images/wechat-4.svg"
              alt="wechat"
              className="icon-imagec"
            /></a> **function for wechat** */}
            <a href="https://weibo.com/WoRuiCharles/" target="_blank"><StaticImage
              src="../images/sina-weibo-1.svg"
              alt="weibo"
              className="icon-imagew"
            /></a>
          </div>
        </div>
        <div
          className="footer-bottom"
        >
          © {new Date().getFullYear()}&emsp;Built with
          {` `}
          <a
            href="https://www.gatsbyjs.com"
            target="_blank"
            style={{
              fontFamily: `light`,
              color: `rgb(140,120,180)`,
            }}
          >Gatsby</a>
        </div>

      </footer>

    </>

  )
}

export default Layout
