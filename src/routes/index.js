import React from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Home from '@Component/pages/Home.jsx'
import Map from '@Component/pages/Map.jsx'
import Music from '@Component/pages/Music.jsx'

function Routes ({location})  {
    return (
        <TransitionGroup>
            <CSSTransition
                key={location.key}
                timeout={{ enter: 300, exit: 300 }}
                classNames={'fade'}
            >
                <section className="route-section">
                    <Switch location={location}>
                        <Route path='/home' exac={true} component={Home} />
                        <Route path='/music' exac={true} component={Music} />
                        <Route path='/map' exac={true} component={Map} />
                        <Route component={Home} />
                    </Switch>
                    
                </section>
            </CSSTransition>
        </TransitionGroup>
    )
}

export default withRouter(Routes)
