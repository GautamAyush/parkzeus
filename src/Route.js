import React from 'react'
import Home from './Pages/Home';
import SolutionAdmin from './Pages/SolutionAdmin';
import SubAdmin from './Pages/SubAdmin';
import {Link, Route} from 'react-router-dom'

export default function route() {
    return (
        <div>
        <nav>
        {/* <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/solution_admin">Solution Admin</Link></li>
          <li><Link to="/sub_admin">Sub-Admin</Link></li>
        </ul> */}

            <Route exact path="/" component={Home} />
            <Route path="/solution_admin" component={SolutionAdmin} />
            <Route path="/sub_admin" component={SubAdmin} />
     </nav>

            
        </div>
    )
}
