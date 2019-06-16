
import React,{Component} from 'react';
import { Button,ButtonArea,Preview, PreviewHeader, PreviewFooter, PreviewBody, PreviewItem, PreviewButton } from 'react-weui';
//import styles
import 'weui';
import 'react-weui/build/packages/react-weui.css';


export default class AirTools extends Component{
	render(){
		return(
			<div>
				<h3>空运工具</h3>
				<Button>hello wechat</Button>
				<Button disabled>Disabled</Button>
				
				 	<Button type="primary" plain>Button</Button>
                    <Button type="primary" plain disabled>Button</Button>
                    <Button type="default" plain>Button</Button>
                    <Button size="small">Mini</Button>
                    <Button type="default" size="small">Mini</Button>
                    <Button type="warn" size="small">Mini</Button>
                    
                    <ButtonArea direction="horizontal">
	                    <Button type="warn">Warn Normal</Button>
	                    <Button type="warn" disabled>Disabled</Button>
                	</ButtonArea>
                	
                	<Preview>
			            <PreviewHeader>
			                <PreviewItem label="Total" value="$49.99" />
			            </PreviewHeader>
			            <PreviewBody>
			                <PreviewItem label="Product" value="Name" />
			                <PreviewItem label="Description" value="Product Description" />
			                <PreviewItem label="Details" value="Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. " />
			            </PreviewBody>
			            <PreviewFooter>
			                <PreviewButton primary>Action</PreviewButton>
			            </PreviewFooter>
			        </Preview>
			        <br/>
			        <Preview>
			            <PreviewHeader>
			                <PreviewItem label="Total" value="$49.99" />
			            </PreviewHeader>
			            <PreviewBody>
			                <PreviewItem label="Product" value="Name" />
			                <PreviewItem label="Description" value="Product Description" />
			                <PreviewItem label="Details" value="Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. " />
			            </PreviewBody>
			            <PreviewFooter>
			                <PreviewButton >Action</PreviewButton>
			                <PreviewButton primary>Action</PreviewButton>
			            </PreviewFooter>
			        </Preview>
			</div>
		)
	}
}
