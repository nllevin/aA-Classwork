import React from "react";

class Header extends React.Component {
  render() {
    const { title, selectTab, tabIdx, className } = this.props;
    return (
      <li className={className} onClick={ () => selectTab(tabIdx) } >
        <h1>{ title }</h1>
      </li> 
    );
  }
}

export default Header;