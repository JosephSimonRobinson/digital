import React, {useEffect, useState} from 'react'
import axios from 'axios'

import ResourcesTable from './myResources'
import Header from '../components/header'
import Footer from '../components/footer'
import MissingPage from '../components/missingPage.js'

import Settings from './settings'

import {
  Route,
  Switch,
  NavLink,
  useRouteMatch
} from 'react-router-dom'


const Dashboard = () => {

  const [user, setUser] = useState('Username')

  const [resources, setResources] = useState({})

  const [bal, setBal] = useState(0)


  let result

  let ownedResources

  useEffect(() => {

    axios
      .get('http://localhost:3001/users')
      .then(response => {
        ownedResources = response.data[user].resources
        setBal(response.data[user].balance)
        return axios.get('http://localhost:3001/resources')
      })

      .then(response => {
        result = response.data.filter(item => ownedResources.includes(item.id))
        setResources(result)
      })

  }, [])



  let { path, url } = useRouteMatch();


  return(
    <div>
      <Header small/>
      <div className="container dashboard">
        <h1 className="title">Provans Dashboard</h1>
        <nav>
          <ul>
            <NavLink exact activeClassName="active" to={`${url}`}><li>My Resources</li></NavLink>

            <NavLink activeClassName="active" to={`${url}/settings`}><li>Profile Settings</li></NavLink>

            <NavLink activeClassName="active" to={`${url}/payout`}><li>Request Payout (<span id="availableBal">£{bal}</span>)</li></NavLink>

          </ul>
        </nav>
        <hr />

        {/* Nested Router */}
        <Switch>

          <Route path={`${path}/settings`}>
            <Settings />
          </Route>
          <Route path={`${path}/payout`}>
            <h1>Payout</h1>
          </Route>
          <Route exact path={path}>
            <ResourcesTable resources={resources}/>
          </Route>
          <Route path="*">
            <MissingPage />
          </Route>
        </Switch>

      </div>
      <Footer/>
    </div>
  )
}

export default Dashboard
