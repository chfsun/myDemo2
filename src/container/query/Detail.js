
import React,{Component} from 'react';
import { Popup, Picker, CityPicker, Form, FormCell, CellBody, CellHeader, Label, Input } from 'react-weui';
//import styles
import 'weui';
import 'react-weui/build/packages/react-weui.css';

export default class Detail extends Component{
	state = {
			        picker_show: false,
			        picker_value: '',
			        picker_group: [
			            {
			                items: [
			                    {
			                        label: 'Item1'
			                    },
			                    {
			                        label: 'Item2 (Disabled)',
			                        disabled: true
			                    },
			                    {
			                        label: 'Item3'
			                    },
			                    {
			                        label: 'Item4'
			                    },
			                    {
			                        label: 'Item5'
			                    }
			                ]
			            }
			        ],
			        city_show: false,
			        city_value: ''
			    };

			    hide(){
			        this.setState({
			            picker_show: false,
			            city_show: false
			        })
			    }
	render(){
		return(
			<div>
				<h3>详情页面</h3>
				

   
                <Form>
                    <FormCell>
                        <CellHeader>
                            <Label>City</Label>
                        </CellHeader>
                        <CellBody>
                            <Input type="text"
                                value={this.state.city_value}
                                onClick={ e=> {
                                    e.preventDefault();
                                    this.setState({city_show: true})
                                }}
                                placeholder="Chose Your City"
                                readOnly={true}
                            />
                        </CellBody>
                    </FormCell>
                </Form>

                <CityPicker
                    onCancel={e=>this.setState({city_show: false})}
                    onChange={text=>this.setState({city_value: text, city_show: false})}
                    show={this.state.city_show}
                />



                <Form>
                    <FormCell>
                        <CellHeader>
                            <Label>Direct Picker</Label>
                        </CellHeader>
                        <CellBody>
                            <Input
                                type="text"
                                onClick={e=>{
                                    e.preventDefault()
                                    this.setState({picker_show: true})
                                }}
                                placeholder="Pick a item"
                                value={this.state.picker_value}
                                readOnly={true}
                            />
                        </CellBody>
                    </FormCell>
                </Form>

                <Picker
                    onChange={selected=>{
                        let value = ''
                        selected.forEach( (s, i)=> {
                            value = this.state.picker_group[i]['items'][s].label
                        })
                        this.setState({
                            picker_value: value,
                            picker_show: false
                        })
                    }}
                    groups={this.state.picker_group}
                    show={this.state.picker_show}
                    onCancel={e=>this.setState({picker_show: false})}
                />

				
			</div>
		)
	}
}
