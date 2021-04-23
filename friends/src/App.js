import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import FriendList from './components/FriendList';
import Login from './components/Login';
import NewFriendForm from './components/NewFriendForm';
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <Router>
    <div className="app-container">
      <h1>Friends</h1>
      <Link to ="/friends/add-new">Add Friend</Link>
      <Switch>
        <PrivateRoute path="friends" component={FriendList}/>
         

        <Route path="/login">
          <Login />
        </Route>

        <Route>
          <Login />
        </Route>

    </Switch>
    </div>
    </Router>
  )
}

export default App;
