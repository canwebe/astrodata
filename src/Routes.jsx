import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Nav from './Components/Nav'
import Mars from './Pages/Mars'
import Home from './Pages/Home'
import MarsPhoto from './Pages/MarsPhoto'
import RoverInfo from './Pages/RoverInfo'
const Routes = () => {
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/mars/:rover/:camera' component={MarsPhoto} />
        <Route exact path='/mars/:rover' component={RoverInfo} />
        <Route exact path='/mars' component={Mars} />
      </Switch>
    </>
  )
}

export default Routes