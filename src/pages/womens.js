import React from "react"
// import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/globals/BackgroundSection"
import Info from "../components/home/info";
import Products from "../components/home/products";


const Womens = ({data}) => (
  <Layout>
    <SEO title="Womens" />
    <BackgroundSection
    img={data.img.childImageSharp.fluid}
    title="womens"
    styleClass="women-bg"
    />
    <Products />
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: {eq: "women-bg.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`;

export default Womens
