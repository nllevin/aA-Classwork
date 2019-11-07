const graphql = require("graphql");
const mongoose = require("mongoose");
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLFloat } = graphql;
const Product = mongoose.model("product");

const ProductType = new GraphQLObjectType({
	name: "ProductType",
	fields: () => ({
		_id: { type: GraphQLID },
		name: { type: GraphQLString },
		category: { 
			type: require("./category_type"),
			resolve(parentValue) {
				return Product.findById(parentValue._id)
					.populate("category")
					.then(product => product.category);
			} 
		},
		description: { type: GraphQLString },
		weight: { type: GraphQLFloat }
	})
});

module.exports = ProductType;
