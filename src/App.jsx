import Login from './components/admin/Login'
import Main from './components/main/Main'
import { Switch, BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { AdminProvider } from './contexts/AdminContext'

const App = () => {

  return (
    <AdminProvider>
      <Router>
        <div className='flex fixed inset-0 w-full h-full bg-white overflow-x-hidden overflow-y-hidden'>
          <Switch>
            <Redirect exact from='/' to='/products'/> 
            <Route exact path='/admin' component={Login} />
            <Route path='/**' component={Main} />
          </Switch>
        </div>
      </Router>
    </AdminProvider>
  )

}

export default App