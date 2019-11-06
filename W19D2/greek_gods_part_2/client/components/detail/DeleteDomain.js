import React from "react";
import { Mutation } from "react-apollo";
import Mutations from "../../graphql/mutations";
const { REMOVE_GOD_DOMAIN } = Mutations;

const DeleteDomain = ({ god, domain }) => (
  <Mutation mutation={REMOVE_GOD_DOMAIN}>
    {(removeGodDomain, data) => (
      <button 
        onClick={e => {
          removeGodDomain({ variables: { godId: god.id, domain } })
        }}
      >
        Remove domain
      </button>
    )}
  </Mutation>
);

export default DeleteDomain;