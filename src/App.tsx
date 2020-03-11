import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  RouteComponentProps,
  Switch,
  Redirect,
  NavLink
} from "react-router-dom";

const Home = () => {
  return <h3>Home</h3>;
};

const Post = (props: RouteComponentProps<{ postId: string }>) => {
  function goNextPost() {
    const nextPostId = +props.match.params.postId + 1;
    props.history.push(`/posts/${nextPostId}`);
  }

  return (
    <div>
      <h3>Post {props.match.params.postId}</h3>
      <button onClick={goNextPost}>Next Post</button>
      <p>{new URLSearchParams(props.location.search).get("body")}</p>
    </div>
  );
};

const PostList = (props: RouteComponentProps<{}>) => {
  return (
    <div>
      <Route
        exact={true}
        path={`${props.match.url}`}
        render={() => <h3>PostList</h3>}
      />
      <Route path={`${props.match.url}/:postId`} component={Post} />
    </div>
  );
};

const NotFound = () => {
  return <h3>Not Found!!</h3>;
};

const Admin = () => {
  const isAdmin = true;
  return isAdmin ? <h3>Admin</h3> : <Redirect to="/" />;
};

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <nav>
            <ul>
              <li>
                <NavLink exact={true} to="/" activeStyle={{ fontSize: 24 }}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/intro" activeStyle={{ fontSize: 24 }}>
                  소개
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin" activeStyle={{ fontSize: 24 }}>
                  Admin
                </NavLink>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route path="/intro" render={() => <h3>소개</h3>} />
            <Redirect from="/about" to="/intro" />
            <Route path="/posts" component={PostList} />
            <Route path="/admin" component={Admin} />
            <Route component={NotFound} />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
