
import React,{Component} from 'react';
import {Link,NavLink} from 'react-router-dom';

export default class App extends Component{
	render(){
		let id = '1234'
		
		return(
			<div>
				<ul>
					<li>
						<NavLink to='/'   activeStyle={{fontWeight: 'bold',color: 'red'}}>首页</NavLink>
					</li>
					<li>
						<Link to={`/list/${id}`}>查询</Link>
					</li>
					<li>
						<Link to='/detail'>详情</Link>
					</li>
					<li>
						<Link to='/tools'>工具</Link>
					</li>
				</ul>
				
				{this.props.children}
				
			</div>
		)
	}
}
