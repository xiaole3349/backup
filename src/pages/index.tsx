import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Swiper from "../components/swipers"
import News from "../components/news"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../components/css/index.scss"
import { Helmet } from "react-helmet"

const IndexPage = () => (

  <Layout>

    <Seo title="BEATOSION" meta={[]} />
    <Helmet>
      <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
    </Helmet>
    <div className="intro">
    <div className="title-image">BEATOSION</div>
      <Swiper></Swiper>
    </div>
    <div id="introduce">
      <div className="intro-image-left">
      <StaticImage
        src="../images/placeholder.png"
        alt="placeholder"
        className="intro-image"
      />
      <div  className="intro-phone"></div>
      </div>
     
      <div className="intro-image-middle">
        <h1><span>I</span>ntroduction</h1>
        <p>心元视觉是一家位于中国上海的人工智能科技创新团队。 <br />
          专业提供基于人工智能体征识别的高精度动作捕捉技术方案, <br />
          为虚拟主播、动漫游戏、影视制作等领域提供便捷、易用的动捕技术。<br />
          无需穿戴动捕设备，无需进行复杂学习，<br />
          即可随时随地将身体动作、脸部表情精准地投映在屏幕形象上，实现动捕领域新的跨越。
        </p>
      </div>
      <div className="intro-image-right"></div>
    </div>
    <div id="works">
      <h1><StaticImage src="../images/W.svg" alt="W" className="w" /><span>ORKS</span></h1>
      <div className="container">
        <div className="item"><Link to="/komoto/">
          <div className="item-text">Read<br />&emsp;More<div className="trangle"></div></div>
          <div className="item-color"></div>
        </Link></div>
        <div className="item"><Link to="/">
          <div className="item-texts">Read<br />&emsp;More<div className="trangles"></div></div>
          <div className="item-color"></div>
        </Link></div>
        <div className="item"><Link to="/">
          <div className="item-texts">Read<br />&emsp;More<div className="trangles"></div></div>
          <div className="item-color"></div>
        </Link></div>
        <div className="item"><Link to="/">
          <div className="item-texts">Read<br />&emsp;More<div className="trangles"></div></div>
          <div className="item-color"></div>
        </Link></div>
        <div className="item"><Link to="/">
          <div className="item-texts">Read<br />&emsp;More<div className="trangles"></div></div>
          <div className="item-color"></div>
        </Link></div>
        <div className="item"><Link to="/">
          <div className="item-texts">Read<br />&emsp;More<div className="trangles"></div></div>
          <div className="item-color"></div>
        </Link></div>
        <div className="item"><Link to="/">
          <div className="item-texts">Read<br />&emsp;More<div className="trangles"></div></div>
          <div className="item-color"></div>
        </Link></div>
        <div className="item"><Link to="/">
          <div className="item-texts">Read<br />&emsp;More<div className="trangles"></div></div>
          <div className="item-color"></div>
        </Link></div>
        <div className="item"><Link to="/">
          <div className="item-text">Read<br />&emsp;More<div className="trangle"></div></div>
          <div className="item-color"></div>
        </Link></div>
      </div>
    </div>
    <div id="news"></div>
    <div id="new">
      <h1><StaticImage src="../images/N.svg" alt="N" className="n" /><span>EWS</span></h1>
      <News></News>
    </div>
    <div id="concept">
      <StaticImage
        src="../images/icon-bg.png"
        width={200} alt="icon-bg"      />
      <div className="title-about">
        <i>“让美好触动视界”</i>
        <p>
          心元视觉围绕核心技术，构建了虚拟直播工具研发、3D影视表现技术开发、动漫游戏IP开发、动漫游戏研运等一整套业务体系，致力于用人工智能等高精尖技术将虚拟娱乐的美好传递给更多的人
        </p>
      </div>

    </div>

  </Layout>

)
export default IndexPage