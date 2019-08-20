import _ from 'lodash';

const items=(state={},action)=>{
	
	switch(action.type){
		case 'CREATE_ITEMS':
				return {...state,[action.payload.id]:action.payload}	
		case 'EDIT_ITEMS':
				return {...state,[action.payload.id]:action.payload}
		case 'SHOW_ITEMS':
				return {...state,[action.payload.id]:action.payload}
		case 'INDEX_ITEMS':
			return {...state,..._.mapKeys(action.payload,'id')};
		case 'DELETE_ITEMS':
			return _.omit(state,action.payload);
		default :
				return state;
	}
}

export default items;