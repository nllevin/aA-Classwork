const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLFloat, GraphQLID } = graphql;
const mongoose = require("mongoose");
const Category = mongoose.model("category");
const CategoryType = require("./types/category_type");
const Product = mongoose.model("product");
const ProductType = require("./types/product_type");
const UserType = require("./types/user_type");
const AuthService = require("../services/auth");

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    newCategory: {
      type: CategoryType,
      args: { name: { type: GraphQLString } },
      resolve(_, { name }) {
        return new Category({ name }).save();
      }
		},
		deleteCategory: {
      type: CategoryType,
      args: { _id: { type: GraphQLID } },
			resolve(_, { _id }) {
        return Category.deleteOne({ _id });
      }
		},
		newProduct: {
			type: ProductType,
			args: {
				name: { type: GraphQLString },
				category: { type: GraphQLID },
				description: { type: GraphQLString },
				weight: { type: GraphQLFloat }
			},
			resolve(_, { name, category, description, weight }) {
        return new Product({ name, category, description, weight }).save();
			}
		},
		deleteProduct: {
			type: ProductType,
			args: { _id: { type: GraphQLID } },
			resolve(_, { _id }) {
				return Product.deleteOne({ _id });
			}
		},
		updateProductCategory: {
			type: ProductType,
			args: { 
				productId: { type: GraphQLID },
				categoryId: { type: GraphQLID }
			},
			resolve(parentValue, { productId, categoryId }) {
				return Product.updateProductCategory( productId, categoryId );
			}
		},
		register: {
			type: UserType,
			args: {
				name: { type: GraphQLString },
				email: { type: GraphQLString },
				password: { type: GraphQLString }
			},
			resolve(_, args) {
				return AuthService.register(args);
			}
		},
		logout: {
			type: UserType,
			args: {
				_id: { type: GraphQLID }
			},
			resolve(_, args) {
				return AuthService.logout(args);
			}
		},
		login: {
			type: UserType,
			args: {
				email: { type: GraphQLString },
				password: { type: GraphQLString }
			},
			resolve(_, args) {
				return AuthService.login(args);
			}
		},
		verifyUser: {
			type: UserType,
			args: {
				token: { type: GraphQLString }
			},
			resolve(_, args) {
				return AuthService.verifyUser(args);
			}
		}
	}
});

module.exports = mutation;