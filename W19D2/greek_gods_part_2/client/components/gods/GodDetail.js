import React, { Component } from "react";
import { Query } from "react-apollo";
import Queries from "../../graphql/queries";
import NameDetail from "../detail/NameDetail";
import TypeDetail from "../detail/TypeDetail";
import DescriptionDetail from "../detail/DescriptionDetail";
import AddDomain from "../detail/AddDomain";
import DeleteDomain from "../detail/DeleteDomain";
import AbodeDetail from "../detail/AbodeDetail";
import EmblemDetail from "../detail/EmblemDetail";
import RelativesDetail from "../detail/RelativesDetail";
const { FETCH_GOD } = Queries;

const GodDetail = props => (
  <Query query={FETCH_GOD} variables={{ id: props.match.params.id }}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error</p>;

      return (
        <div className="detail">
          <NameDetail god={data.god} />
          <TypeDetail god={data.god} />
          <DescriptionDetail god={data.god} />
          <div>
            <h2>Domains</h2>
            <ul>
              {data.god.domains.map((domain, idx) => (
                  <li key={idx}>
                    <p>{domain}</p>
                    <DeleteDomain god={data.god} domain={domain} />
                  </li>
              ))}
            </ul>
            <AddDomain god={data.god} />
          </div>
          <AbodeDetail god={data.god} />
          <EmblemDetail god={data.god} />
          <RelativesDetail god={data.god} relationship="parent" relationships="parents" />
          <RelativesDetail god={data.god} relationship="child" relationships="children" />
          <RelativesDetail god={data.god} relationship="sibling" relationships="siblings" />
        </div>
      );
    }}
  </Query>
);

export default GodDetail;