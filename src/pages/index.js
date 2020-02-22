import React from "react"
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import BackgroundSection from "../components/globals/BackgroundSection";
import Info from "../components/home/info";

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundSection
    img={data.img.childImageSharp.fluid}
    title="Monochromatic"
    />
    <Info />
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: { eq: "background.jpg" })
   {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
    menu: allContentfulMenClothes {
    edges {
      node {
        id
        type
        color
        size
        image {
          fixed(width: 50, height: 50) {
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }
}
`;

export default IndexPage
