
import React,{Component} from 'react';
import {Route,BrowserRouter} from 'react-router-dom';
import App from '../container/App';
import CtrlRouter from './CtrlRouter';

export default class AppRouter extends Component{
	render(){
		return(
			<BrowserRouter>
				<App>
					<Route path='/' component={CtrlRouter}></Route>
				</App>
			</BrowserRouter>
		)
	}
}
