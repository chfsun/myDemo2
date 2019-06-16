
import React,{Component} from 'react';
import { DatePicker,Button,Icon,Typography,Layout,Affix   } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import zhCN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');

export default class Home extends Component{
	render(){
		
		const { Title } = Typography;
		const { Paragraph } = Typography;
		const { Header, Footer, Sider, Content } = Layout;
		return(
			<div className="scrollable-container"ref={node => {this.container = node;}}>
				<h3>首页</h3>
				<DatePicker />
				<Button type="primary">Primary</Button>
			    <Button>Default</Button>
			    <Button type="dashed">Dashed</Button>
			    <Button type="danger">Danger</Button>
			    <Button type="link">Link</Button>
			    
			    <Button type="primary" icon="search">
			      Search
			    </Button>
			    
			    <Button type="primary" icon="download" >
		          Download
		        </Button>
		        
		        <Button type="primary" shape="circle" loading />
		        <Icon type="border-bottom" />
		        
		        
		        <Title>h1. Ant Design</Title>
			    <Title level={2}>h2. Ant Design</Title>
			    <Title level={3}>h3. Ant Design</Title>
			    <Title level={4}>h4. Ant Design</Title>
			    
			    <Paragraph copyable>This is a copyable text.</Paragraph>
        			<Paragraph copyable={{ text: 'Hello, Ant Design!' }}>Replace copy text.</Paragraph>
        			
        		
				    <Layout>
			      <Header>Header</Header>
			      <Layout>
			        <Content>Content</Content>
			        <Sider>Sider</Sider>
			      </Layout>
			      <Footer>Footer</Footer>
			    </Layout>
			
			      
			</div>
		)
	}
}
