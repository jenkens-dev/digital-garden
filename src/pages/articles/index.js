import * as React from "react";
import Layout from "../../components/Layout";
import { graphql, Link } from "gatsby";

const ArticlesPage = ({ data }) => {
  return (
    <Layout pageTitle="Articles">
      <h1>Feel free to peruse all the articles in my garden!</h1>
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h2>
            <Link to={`/articles/${node.slug}`}>{node.frontmatter.title}</Link>
          </h2>
          <p>Posted: {node.frontmatter.date}</p>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
      }
    }
  }
`;

export default ArticlesPage;
