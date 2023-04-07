import * as React from "react"
//import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

interface SEOProps{
  description?: string,
  lang?: string,
  meta:Array<{ name:string,content:string}>,
  title:string
}

function Seo({ description='', lang='en', meta=[], title }:SEOProps) {
  const { site }:any= useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription:string = description || site.siteMetadata.description
  const defaultTitle:string = site.siteMetadata?.title

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `viewport`,
          content: `width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no`,
        }
      ].concat(meta)}
    />
  )
}

//Due to using typescript , so we should delete default settings.
// Seo.defaultProps = {
//   lang: `en`,
//   meta: [],
//   description: ``,
// }

// Seo.propTypes = {
//   description: PropTypes.string,
//   lang: PropTypes.string,
//   meta: PropTypes.arrayOf(PropTypes.object),
//   title: PropTypes.string.isRequired,
// }

export default Seo
