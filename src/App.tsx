import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Home = () => {
  return <h3>Home</h3>;
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
        </header>
      </div>
    </Router>
  );
}

export default App;
