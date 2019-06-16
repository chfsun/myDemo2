
import React,{Component} from 'react';
import {Route,Switch} from 'react-router-dom';
import App from '../container/App';

import Home from '../container/home/Home.js';
import List from '../container/query/List.js';
import Detail from '../container/query/Detail.js';
import Airtools from '../container/tools/index.js';
import  NotFind from '../container/404';

export default class CtrlRouter extends Component{
	render(){
		return(
			<Switch>
				{/* exact 精准匹配 */}
				<Route exact  path='/' component={Home}></Route>
				<Route path='/list/:id' component={List}></Route>
				<Route path='/detail' component={Detail}></Route>
				<Route path='/tools' component={Airtools}></Route>
				<Route  component={NotFind}></Route>
			</Switch>
		)
	}
}
