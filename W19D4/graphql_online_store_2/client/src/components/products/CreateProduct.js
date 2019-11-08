import React, { Component } from "react";
import { Mutation, Query } from "react-apollo";

import { CREATE_PRODUCT } from "../../graphql/mutations";
import { FETCH_PRODUCTS, FETCH_CATEGORIES } from "../../graphql/queries";

class CreateProduct extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      name: "",
      weight: "",
      description: "",
      category: "unselected"
    };
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  updateCache(cache, { data }) {
    let products;
    try {
      products = cache.readQuery({ query: FETCH_PRODUCTS });
    } catch (err) {
      return;
    }
    if (products) {
      let productArray = products.products;
      let newProduct = data.newProduct;
      cache.writeQuery({
        query: FETCH_PRODUCTS,
        data: { products: productArray.concat(newProduct) }
      });
    }
  }

  handleSubmit(e, newProduct) {
    e.preventDefault();
    newProduct({
      variables: {
        name: this.state.name,
        description: this.state.description,
        weight: parseFloat(this.state.weight),
        category: this.state.category
      }
    });
  }

  render() {
    return (
      <Query query={FETCH_CATEGORIES}>
        {({ data, loading, error }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error</p>;
          const categories = data.categories;

          return (
            <Mutation
              mutation={CREATE_PRODUCT}
              onError={err => this.setState({ message: err.message })}
              update={(cache, data) => this.updateCache(cache, data)}
              onCompleted={data => {
                const { name } = data.newProduct;
                this.setState({
                  message: `New product ${name} created successfully`
                });
              }}
            >
              {(newProduct, { data }) => (
                <div>
                  <form onSubmit={e => this.handleSubmit(e, newProduct)}>
                    <input
                      onChange={this.update("name")}
                      value={this.state.name}
                      placeholder="Name"
                    />
                    <textarea
                      onChange={this.update("description")}
                      value={this.state.description}
                      placeholder="description"
                    />
                    <input
                      onChange={this.update("weight")}
                      value={this.state.weight}
                      placeholder="Weight"
                      type="number"
                    />
                    <select value={this.state.category} onChange={this.update("category")}>
                      <option value="unselected" disabled>--Please choose a category--</option>
                      {categories.map(category => (
                        <option value={category._id}>{category.name}</option>
                      ))}
                    </select>
                    <button type="submit">Create Product</button>
                  </form>
                  <p>{this.state.message}</p>
                </div>
              )}
            </Mutation>
          );
        }}
      </Query>
    );
  }
}

export default CreateProduct;