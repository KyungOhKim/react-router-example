import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  RouteComponentProps
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
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/intro">소개</Link>
              </li>
            </ul>
          </nav>
          <Route exact={true} path="/" component={Home} />
          <Route path="/intro" render={() => <h3>소개</h3>} />
          <Route path="/posts/:postId" component={Post} />
        </header>
      </div>
    </Router>
  );
}

export default App;
