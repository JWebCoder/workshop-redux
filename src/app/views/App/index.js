import React, {Component} from 'react';
import getUser from 'services/user';
import Loader from 'app/components/Loader';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      firstLoad: true
    };
  }
  componentDidMount() {
    getUser(1).then(
      res => {
        console.log(res);
        setTimeout(() => {
          this.setState({
            user: res.data,
            loading: false,
            firstLoad: false
          });
        }, 1000);
      }
    ).catch(
      err => {
        console.log(err);
      }
    );
  }

  render() {
    if (!this.state.firstLoad) {
      return (
        <div>
          <Loader visible={this.state.loading}/>
          {this.state.user.name}
        </div>
      );
    }
    return (
      <div>
        <Loader visible={this.state.loading}/>
      </div>
    );
  }
}

export default App;
