import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './Components/Landing';
import About from './Components/About';
import Contact from './Components/Contact';

export default (
    <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
    </Switch>
)