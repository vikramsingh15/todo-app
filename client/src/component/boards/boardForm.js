import React from 'react';
import {Field,reduxForm} from 'redux-form';


class BoardForm extends React.Component{

	renderError({error,touched}){
			if(error&&touched){	
				return <div className="alert alert-danger">{error}</div>
			}
	}

	renderField=({input,label,meta})=>{
		return <div>
					<label htmlFor="boardName">{label}</label>
					<input type="text" {...input} className="form-control mb-2" placeholder={label} id="boardName"/>
					{this.renderError(meta)}
				</div>
		
	}

	submit=(formValue)=>{
			this.props.onFormSubmit(formValue);
			this.props.reset()

	}

	render(){	
		return <form onSubmit={this.props.handleSubmit(this.submit)} id="myForm">
					<div className="form-group">
						<Field component={this.renderField} label="Name Of Board" name="boardName"/>
					</div>
			
		</form>
	}
}

const validate=formValues=>{
	const error={};
	if(!formValues.boardName) error.boardName='Name required !!';
	return error

}

export default reduxForm({
	form:'BoardForm',
	validate
})(BoardForm);