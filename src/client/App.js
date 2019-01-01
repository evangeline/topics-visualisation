import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, withRouter } from 'react-router-dom';
import Dashboard from './components/Dashboard';

const NotFound = () => (
  <div className="container-fluid d-flex justify-content-center bg-light h-100">
    <div className="row text-center">
      <div className="col my-auto">
        <h1 className="display-4">Oops!</h1>
        <p className="lead">There's nothing here. You can head back to <Link to="/">our
          homepage</Link>.</p>
      </div>
    </div>
  </div>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productTopic: '',
      datasets: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    this.onRouteChanged(window.location);
    this.props.history.listen((location) => {
      this.onRouteChanged(location);
    });
  }

  getDataset(topic) {
    this.setState({ isLoading: true });
    // polyfill
    fetch(`/api/product/${topic}`, {
      method: 'GET',
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw new Error(`Request failed with error: ${res.body}`);
      })
      .then(({ datasets }) => {
        this.setState({
          datasets,
          isLoading: false
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  onRouteChanged(location) {
    const path = location.pathname.split('/');
    if (path[1] === 'product' && typeof path[2] === 'string') {
      const topic = decodeURIComponent(path[2].charAt(0).toUpperCase() + path[2].slice(1));
      this.setState({ productTopic: topic });
      this.getDataset(topic);
    } else {
      this.setState({ productTopic: '' });
      this.setState({ datasets: [] });
    }
  }

  render() {
    return (
      <Router>
        <div className="h-100">
          <Switch>
            <Route exact path="/" render={props => <Dashboard
              datasets={this.state.datasets}
              topic={this.state.productTopic}
              isLoading={this.state.isLoading}
              history={this.props.history}/>} />
            <Route path="/product/:topic" render={props => <Dashboard
              datasets={this.state.datasets}
              topic={this.state.productTopic}
              isLoading={this.state.isLoading}
              history={this.props.history}/>} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default withRouter(App);
