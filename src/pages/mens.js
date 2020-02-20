import React from "react"
// import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/globals/BackgroundSection"
import Info from "../components/home/info";

const Mens = ({data}) => (
  <Layout>
    <SEO title="Mens" />
    <BackgroundSection
    img={data.img.childImageSharp.fluid}
    title="mens"
    styleClass="men-bg"
    />
    <Info />
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: {eq: "men-bg.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`;

export default Mens
