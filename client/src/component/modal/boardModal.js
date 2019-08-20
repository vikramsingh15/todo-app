import React from 'react';
import ReactDOM from 'react-dom';

const Modal=props=>{
	
	return ReactDOM.createPortal(
			<div className="modal fade" id="toggle" >
			  <div className="modal-dialog" role="document">
			    <div className="modal-content">
			      <div className="modal-header">
			        <h5 className="modal-title" id="exampleModalLabel">{props.title}</h5>
			        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
			          <span aria-hidden="true">&times;</span>
			        </button>
			      </div>
			      <div className="modal-body">
			        {props.body}
			      </div>
			      <div className="modal-footer">
			       {props.footer}
			      </div>
			    </div>
			  </div>
			</div>,
		document.querySelector('#modal')
		)
	
}

export default Modal;