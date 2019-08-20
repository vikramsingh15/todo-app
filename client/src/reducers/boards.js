import _ from 'lodash';

const Boards=(state={},action)=>{
	switch(action.type){
		case 'INDEX_BOARDS':
			return {...state,..._.mapKeys(action.payload,'id')};

		case 'SHOW_BOARDS':
			return {...state,[action.payload.id]:action.payload}

		case 'NEW_BOARDS':
			return {...state,[action.payload.id]:action.payload}

        case 'EDIT_BOARDS':
			return {...state,[action.payload.id]:action.payload}

		case 'DELETE_BOARDS':
			return _.omit(state,action.payload);

		default :
				return state;		

	}
}

export default Boards;