import React from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Home from './component/pages/Home.jsx'
import Map from './component/pages/Map.jsx'

function Container ({location})  {
    return (
        <TransitionGroup>
            <CSSTransition
                key={location.key}
                timeout={{ enter: 300, exit: 300 }}
                classNames={'fade'}
            >
                <section className="route-section">
                    <Switch location={location}>
                        <Route path='/home' component={Home} />
                        <Route path='/map' component={Map} />
                    </Switch>
                    
                </section>
            </CSSTransition>
        </TransitionGroup>
    )
}

export default withRouter(Container)
