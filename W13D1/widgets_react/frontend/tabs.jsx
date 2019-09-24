import React from 'react';
import Header from './header';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeTabIdx: 0 };
    this.selectTab = this.selectTab.bind(this);
  }

  render() {
    const { activeTabIdx } = this.state;

    const headers = this.props.tabs.map((tab, idx) => (
      <Header
        key={ idx }
        tabIdx={ idx }
        selectTab={ this.selectTab }
        title={ tab.title }
        className={ idx === activeTabIdx ? "active" : "" }
      />
    ));

    return (
      <div className="tabs">
        <h1>Tabs</h1>
        <ul>
          { headers }
        </ul>
        <div className="tab-content">
          <p>
            { this.props.tabs[activeTabIdx].content }
          </p>
        </div>
      </div>
    );
  }

  selectTab(tabIdx) {
    this.setState({ activeTabIdx: tabIdx });
  }
}

export default Tabs;