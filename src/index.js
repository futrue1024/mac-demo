import React from 'react';
import ReactDOM from 'react-dom';

// import App from './App';
function App() {
  return <div className='App'>爸爸
    <Son />
  </div>
}

class Son extends React.Component {
  constructor() {
    super()
    this.state = { n: 0 }
  }
  add() {
    this.setState({ n: this.state.n + 1 })
  }
  render() {
    return (<div className='Son'> 儿子n: {this.state.n}
      <button onClick={() => this.add()}>+1</button><GradSon /></div >)

  }
}

const GradSon = () => {
  const [n, setN] = React.useState(0);
  return (<div className='GradSon'>孙子n:{n}
    <button onClick={() => { setN(n + 1) }}>+1</button>
  </div>)
}

ReactDOM.render(<App />, document.querySelector('#root'))