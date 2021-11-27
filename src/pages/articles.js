import * as React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";

const ArticlesPage = ({ data }) => {
  console.log(data);
  return (
    <Layout pageTitle="Articles">
      <h1>Feel free to peruse all the articles in my garden!</h1>
      <ul>
        {data.allFile.nodes.map((node) => (
          <li key={node.name}>{node.name}</li>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export default ArticlesPage;
