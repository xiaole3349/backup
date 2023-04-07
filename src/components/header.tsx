import * as React from "react"
import { Link } from "gatsby"
import "./css/header.scss"
import { StaticImage } from "gatsby-plugin-image"

type stateType={
  select:boolean
}
type propType={
  siteTitle: string
}
interface Header{
  props:propType,state:stateType
}
class Header extends React.Component<{}>{
  clearAll() {
    throw new Error("该方法没有被调用。")
  }
  
  constructor(props:any) {
    super(props);
    this.state={
      select: false
    }
  }

  handleClick=()=>{
    this.setState({select:!this.state.select},()=>{
      if(!this.state){
        this.clearAll();
        
      }else{
        console.log("状态修改完成")
      }
    })
  }

  private dropBtnStyle={
      background: "url("+require("../images/menu.png").default+")no-repeat center"
  } as const
  //Using 'as const' will treat object values as their specific literal types.

  private dropBtnStyle2={
    background:"url("+require("../images/cancel.png").default+") no-repeat center",
  } as const

  private dropContentStyle={
    display:"none"
  } as const

  private dropContentStyle2={
    display:"block"
  } as const

  render() {
    var btnstyle,contentstyle;
    if(this.state.select){
      btnstyle=this.dropBtnStyle2,
      contentstyle=this.dropContentStyle2
    }else{
      btnstyle=this.dropBtnStyle,
      contentstyle=this.dropContentStyle
    }
    return(
      <header className="header">
      <div className="nav">
        <Link
          to="/"
        >
          <StaticImage
            src="../images/logo.png"
            className="nav-logo"
            alt="logo"
          />
          {/* {siteTitle} */}
        </Link>
        <ul className="flex-container">
          <li className="flex-item"><Link to="/#works">WORKS</Link></li>
          <li className="flex-item"><Link to="/#news">NEWS</Link></li>
          <li className="flex-item"><Link to="/about/">ABOUT</Link></li>
          <li className="flex-item"><Link to="/komoto/">KOMOTO</Link></li>
        </ul>

        {/* Suitable for width to height ratio less than or equal to 9:16 */}
        <div className="dropdown">
          <div className="dropbtn"  style={btnstyle} onClick={this.handleClick.bind(this)}></div>
          <div className="dropdown-content" style={contentstyle} >
            <Link to="/#works"><span>WORKS</span></Link><br />
            <Link to="/#news"><span>NEWS</span></Link><br />
            <Link to="/about/"><span>ABOUT</span></Link><br />
            <Link to="/komoto/"><span>KOMOTO</span></Link><br />
          </div>
        </div>
      </div>
    </header>
    )
  }
}

export default Header
