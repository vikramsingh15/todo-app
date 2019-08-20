import React from 'react';
import {Field,reduxForm} from 'redux-form';

class ItemForm extends React.Component{

	
	

	renderField=({input,label,meta})=>{
			return <div>
					  <textarea {...input} className="form-control" placeholder={label} ref={this.Ref}></textarea>
				   </div>
	}

	submit=(formValue)=>{
			this.props.onFormSubmit(formValue);
			this.props.reset()

	}

	render(){
		return <form onSubmit={this.props.handleSubmit(this.submit)} id="myForm">
					<div className="form-group">
						<Field component={this.renderField} label="Name of item..." name="itemName"/>
					</div>

			</form>

	}
}


const validate=formValues=>{
	const error={};
	if(!formValues.itemName) error.itemName='required !!';
	return error

}

export default reduxForm({
	form:'itemForm',
	validate
})(ItemForm)
