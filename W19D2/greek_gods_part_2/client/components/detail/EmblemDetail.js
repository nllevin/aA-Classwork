import React, { Component } from "react";
import { IconContext } from "react-icons";
import { FaPencilAlt } from "react-icons/fa";
import { Mutation, Query } from "react-apollo";

import Mutations from "../../graphql/mutations";
const { ADD_GOD_EMBLEM, REMOVE_GOD_EMBLEM } = Mutations;

import Queries from "../../graphql/queries";
const { FETCH_EMBLEMS } = Queries;

class EmblemDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      emblems: this.props.god.emblems || ""
    };
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit(e) {
    e.preventDefault();
    this.setState({ editing: true });
  }

  fieldUpdate(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  render() {
    return (
      <Query query={FETCH_EMBLEMS}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error</p>;
          
          let emblemList = data.emblems;
          let ownEmblemIds = this.props.god.emblems.map(emblem => emblem.id);

          if (this.state.editing) {
            return(
              <Mutation mutation={ADD_GOD_EMBLEM}>
                {(addGodEmblem, data) => (
                  <div>
                    <h2>Emblems</h2>
                      <ul>
                        {this.props.god.emblems.map(emblem => (
                          <li key={`${emblem.id}`}><p>{emblem.name}</p>
                            <Mutation mutation={REMOVE_GOD_EMBLEM}>
                              {(removeGodEmblem, {data}) => (
                                <a
                                  style={{ fontSize: "10px", cursor: "pointer", display: "inline" }}
                                  onClick={e => {
                                    e.preventDefault();
                                    removeGodEmblem({ variables: { godId: this.props.god.id, emblemId: emblem.id} });
                                  }}
                                  >
                                    <p>Delete</p>
                                </a>
                              )}
                              </Mutation>
                          </li>
                        ))}
                      </ul>
                      <form
                        onSubmit={e => {
                          e.preventDefault();
                          addGodEmblem({
                            variables: { godId: this.props.god.id, emblemId: this.state.emblemId }
                          }).then(() => this.setState({ editing: false}));
                        }}
                      >
                        <select
                          onChange={this.fieldUpdate("emblemId")}
                          defaultValue="default"
                        >
                          <option value="default" disabled>
                            Select an Emblem
                          </option>
                          {emblemList.filter(emblem => !ownEmblemIds.includes(emblem.id)).map(emblem => 
                            <option
                              key={emblem.id}  
                              value={emblem.id}
                            >{emblem.name}</option>
                          )}
                          </select>
                          <button type="submit">Add Emblem</button>
                      </form>
                  </div>
                )}
              </Mutation>
            )
          } else {
            return (
                <div>
                  <div
                    onClick={this.handleEdit}
                    style={{ fontSize: "10px", cursor: "pointer", display: "inline" }}
                  >
                    <IconContext.Provider value={{ className: "custom-icon" }}>
                      <FaPencilAlt />
                    </IconContext.Provider>
                  </div>
                  <h2>Emblems</h2>
                  <ul>
                    {this.props.god.emblems.map(emblem => <li key={emblem.id}>
                      {emblem.name}</li>)}
                  </ul>
                </div>
            )
          }
        }}
    </Query>
    )
  }
}

export default EmblemDetail;