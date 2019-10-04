import React from 'react';
import BenchIndexItem from './bench_index_item';

class BenchIndex extends React.Component {
  componentDidMount() {
    this.props.fetchBenches();
  }

  render() {
    const { benches } = this.props;
    if (!benches) {
      return <span>No benches to display</span>
    }

    return (
      <ul>
        {benches.map(bench => <BenchIndexItem key={bench.id} bench={bench} />)}          
      </ul>
    );
  }
}

export default BenchIndex;