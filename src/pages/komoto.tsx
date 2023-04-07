import * as React from "react"
import { Link } from "gatsby"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const KMTPage = () => (
    <div >
        <Seo title="KOMOTO" meta={[]} />
        <Link to="/" >
            <StaticImage src="../images/placeholder.png" alt="komoto" />
        </Link>
    </div>

)

export default KMTPage