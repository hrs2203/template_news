import './App.css';
import React from 'react';
import newsdata from './news.json';

// ============= Login Body ===============

class NewsCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = { expanded: false }
    this.extendContent = this.extendContent.bind(this);
  }

  extendContent() {
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    return (
      <div className='card m-2 p-0'>
        <div className=''>
          {this.props.title}
        </div>
        <div className=''>
          <p>{
            this.state.expanded ?
              this.props.content :
              this.props.description
          }</p>
        </div>
      </div>
    )
  }
}

class LoginBody extends React.Component {
  render() {
    return (
      <div className='row'>
        {
          newsdata.body.map(
            element => <NewsCard
              title={element.title}
              description={element.description}
              content={element.content}
            />
          )
        }

      </div>
    )
  }
}

// ============= Not Login ===============
class NotLoginBody extends React.Component {
  render() {
    return (
      <h2>
        <center>
          Please Login to Continue
        </center>
      </h2>
    )
  }
}

class NavigatorTop extends React.Component {

  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      loggingMessage: "Login"
    }
    this.toggleLogin = this.toggleLogin.bind(this);
  }

  toggleLogin() {
    if (this.state.isLoggedIn){
      this.setState({
        loggingMessage: "Logging Out Please Wait"
      });
  
      setTimeout(() => this.setState({
        loggingMessage: "Login",
        isLoggedIn: !this.state.isLoggedIn
      }), 1500);
    }
    else{
      this.setState({
        loggingMessage: "Logging In Please Wait"
      });
  
      setTimeout(() => this.setState({
        loggingMessage: "Logout",
        isLoggedIn: !this.state.isLoggedIn
      }), 1500);
    }
    
  }

  render() {
    return (
      <div>
        <header><nav className='nav justify-content-end'>
          <button className='btn m-2'
            onClick={this.toggleLogin}>
            {this.state.loggingMessage}
          </button>
        </nav></header>
        <div>
          {
            this.state.isLoggedIn ?
              <LoginBody /> :
              <NotLoginBody />
          }
        </div>
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <NavigatorTop />
      </div>
    );
  }
}

export default App;
