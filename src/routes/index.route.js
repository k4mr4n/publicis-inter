import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import ShippingLabels from '../features/shipping-label.feature'
import ShippingLabelMaker from '../features/shipping-label-maker.feature'

export default (props) => (
  <Router>
    <nav>
      <ul>
        <li>
          <Link to='/'>Maker</Link>
        </li>
        <li>
          <Link to='/shipping-label'>Labels</Link>
        </li>
      </ul>
    </nav>
    <Switch>
      <Route path='/shipping-label'>
        <ShippingLabels {...props} />
      </Route>
      <Route path='/'>
        <ShippingLabelMaker {...props} />
      </Route>
    </Switch>
  </Router>

)
