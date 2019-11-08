import React from "react";
import { Query } from "react-apollo";
import { Link } from 'react-router-dom';

import { FETCH_PRODUCTS } from '../../graphql/queries';
import CreateProduct from "./CreateProduct";

const ProductIndex = () => (
  <Query query={FETCH_PRODUCTS}>
    {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;

      return (
        <div>
          <ul>
            {data.products.map(product => (
              <li key={product._id}>
                <Link to={`/products/${product._id}`}>{product.name}</Link>
                <p>{product.description}</p>
                {product.category ? <p>Category: {product.category.name}</p> : ""} 
              </li>
            ))}
          </ul>
          <CreateProduct />
        </div>
      );
    }}
  </Query>
);

export default ProductIndex;