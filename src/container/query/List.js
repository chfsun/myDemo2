
import React,{Component} from 'react';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

import zhCN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');

export default class List extends Component{
	render(){
		const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;
		return(
			<div>
				<h3>运价查询</h3>
				
				<p>Align Top</p>
			    <Row type="flex" justify="center" align="top">
			      <Col span={4}>
			        <DemoBox value={100}>col-4</DemoBox>
			      </Col>
			      <Col span={4}>
			        <DemoBox value={50}>col-4</DemoBox>
			      </Col>
			      <Col span={4}>
			        <DemoBox value={120}>col-4</DemoBox>
			      </Col>
			      <Col span={4}>
			        <DemoBox value={80}>col-4</DemoBox>
			      </Col>
			    </Row>
			
			    <p>Align Center</p>
			    <Row type="flex" justify="space-around" align="middle">
			      <Col span={4}>
			        <DemoBox value={100}>col-4</DemoBox>
			      </Col>
			      <Col span={4}>
			        <DemoBox value={50}>col-4</DemoBox>
			      </Col>
			      <Col span={4}>
			        <DemoBox value={120}>col-4</DemoBox>
			      </Col>
			      <Col span={4}>
			        <DemoBox value={80}>col-4</DemoBox>
			      </Col>
			    </Row>
			
			    <p>Align Bottom</p>
			    <Row type="flex" justify="space-between" align="bottom">
			      <Col span={4}>
			        <DemoBox value={100}>col-4</DemoBox>
			      </Col>
			      <Col span={4}>
			        <DemoBox value={50}>col-4</DemoBox>
			      </Col>
			      <Col span={4}>
			        <DemoBox value={120}>col-4</DemoBox>
			      </Col>
			      <Col span={4}>
			        <DemoBox value={80}>col-4</DemoBox>
			      </Col>
			    </Row>
			</div>
		)
	}
}
