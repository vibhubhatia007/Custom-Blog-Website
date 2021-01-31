import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Home from "./components/Home"
import About from "./components/About"
import SinglePost from "./components/SinglePost"
import Post from "./components/Post"
import Project from "./components/Project"
import Landing from "./components/Landing"
import edition1 from "./components/edition01";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
    <NavBar ></NavBar>
    <Switch>
      <Route component={Landing} path='/' exact/>
      <Route component={About} path='/about' />     
      <Route component={SinglePost} path='/post/:slug' />
      <Route component={Post} path='/post' />
      <Route component={Project} path='/project' />
      <Route component={Landing} path='/landing' />
      <Route component={edition1} path='/resume' />
    </Switch>
    </BrowserRouter>
  )
}

export default App;