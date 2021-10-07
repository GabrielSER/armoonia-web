import Login from './components/admin/Login'
import Main from './components/main/Main'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => {

  return (
    <Router>
      <div className='flex fixed inset-0 w-full h-full bg-white'>
        <Switch>
          <Route path='/admin' exact component={Login} />
          <Route path='/**' component={Main} />
        </Switch>
      </div>
    </Router>
  )

}

export default App