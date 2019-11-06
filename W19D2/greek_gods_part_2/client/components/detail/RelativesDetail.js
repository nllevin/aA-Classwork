import React from "react";
import { Query, Mutation } from "react-apollo";
import Mutations from "../../graphql/mutations";
const { ADD_GOD_RELATIVE, REMOVE_GOD_RELATIVE } = Mutations;
import Queries from "../../graphql/queries";
const { FETCH_GODS } = Queries;

class RelativesDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { relative: "unselected" };
  }

  handleSubmit(e, addRelative) {
    e.preventDefault();

    addRelative({
      variables: {
        godId: this.props.god.id,
        relativeId: this.state.relative,
        relationship: this.props.relationship
      }
    })
      .then(data => {
        console.log(data);
        this.setState({
          relative: "unselected"
        });
      })
  }

  render() {
    const { god, relationship, relationships } = this.props;
    return (
      <Query query={FETCH_GODS}>
        {({loading, error, data}) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error</p>;
          const gods = data.gods;

          return (
            <div>
              <h2>{relationships}:</h2>
              <ul>
                {god[relationships].map(relative => (
                  <li key={relative.id}>
                    <p>{relative.name}</p>
                    <Mutation mutation={REMOVE_GOD_RELATIVE}>
                      {(removeGodRelative, data) => (
                        <button
                          onClick={e => {
                            removeGodRelative({ variables: { godId: god.id, relativeId: relative.id, relationship } })
                          }}
                        >
                          {`Remove ${relationship}`}
                      </button>
                      )}
                    </Mutation>
                  </li>
                ))}
              </ul>
              <Mutation mutation={ADD_GOD_RELATIVE} >
                {(addGodRelative, data) => (
                  <form onSubmit={e => this.handleSubmit(e, addGodRelative)}>
                    <select value={this.state.relative} onChange={e => this.setState({ relative: e.target.value })}>
                      <option value="unselected" disabled>Select god</option>
                      {gods.map(relatedGod => (
                        (god.id === relatedGod.id || god[relationships].map(relative => relative.id).includes(relatedGod.id)) ?
                          "" : <option key={relatedGod.id} value={relatedGod.id}>{relatedGod.name}</option>
                      ))}
                    </select>
                    <button type="submit">{`Add new ${relationship}`}</button>
                  </form>
                )}
              </Mutation>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default RelativesDetail;