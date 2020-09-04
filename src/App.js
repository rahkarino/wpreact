import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from './components/client/home';
import clientConfig from './clientConfig';
import axios from 'axios';
import Posts from './components/client/posts';
import Post from './components/client/post';
import Login from './components/client/login';

class App extends Component {
  state = {  
    posts: []
  }
  componentDidMount() {
    const _WPAPI = clientConfig.siteUrl + '/wp-json/wp/v2/posts';
    axios.get(_WPAPI).then(res => {this.setState({posts: res.data})}).catch(err => console.log(err));
  }
  render() { 
    const renderPosts = (routerProps) => {
      const postId = parseInt(routerProps.match.params.id);
      const foundPost = this.state.posts.find(p => p.id === postId);
      return foundPost ? <Post post={foundPost} /> : "";
    }
    return ( 
      <HashRouter>
        <Switch>
          <Route path="/blog" component={Posts} />
          <Route path="/login" component={Login} />
          <Route path="/:id" render={(routerProps) => renderPosts(routerProps)} />
          <Route exact path="/" component={Home} />
        </Switch>
      </HashRouter>
    );
  }
}
 
export default App;