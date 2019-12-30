import React from 'react';

import Webdevt from '../coding/Webdevt';
import ArtProjects from '../art/ArtProjects';

import {BrowserRouter, Switch, Route} from "react-router-dom";
import MyCareerModules from '../MyCareerModules';

export default Routas => <BrowserRouter>


<Switch>
<Route exact path="/" component={MyCareerModules}/>
<Route exact path="/Webdevt" component={Webdevt}/>
<Route exact path="/ArtProjects" component={ArtProjects}/>
</Switch>

</BrowserRouter>