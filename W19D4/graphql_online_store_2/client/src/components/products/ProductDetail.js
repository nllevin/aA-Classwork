import React from "react";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";

import { FETCH_PRODUCT } from '../../graphql/queries';

const ProductDetail = props => (
  <Query query={FETCH_PRODUCT} variables={{ _id: props.match.params._id }}>
    {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;

      return (
        <div>
          <h2>{data.product.name}</h2>
          <p>Description: {data.product.description}</p>
          <p>Weight: {data.product.weight} lbs</p>
          <Link to="/products">Back to index</Link>
        </div>
      );
    }}
  </Query>
);

export default ProductDetail;