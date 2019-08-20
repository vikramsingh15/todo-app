import json from '../api/json-server';
import history from '../history'; 

export const signIn=(userId,imageUrl)=>({type:'SIGN_IN',payload:{userId,imageUrl}});

export const signOut=()=>({type:'SIGN_OUT',payload:null});


export const indexBoards= ()=>async dispatch =>{
	const response= await json.get('/boards');
	dispatch({type:'INDEX_BOARDS',payload:response.data}); 
}

export const showBoards= id =>async dispatch =>{
	const response=await json.get(`/boards/${id}`);
	dispatch({type:'SHOW_BOARDS',payload:response.data});
}

export const newBoards=formValue=>async (dispatch,getState)=>{
	const { userId } = getState().Auth;
	const response=await json.post('/boards',{...formValue,userId});
	dispatch({type:'NEW_BOARDS',payload:response.data});
	
	history.push('/boards');
}

export const editBoards=(formValue,id)=>async dispatch=>{
	const response = await json.patch(`/boards/${id}`,formValue);
	dispatch({type:'EDIT_BOARDS',payload:response.data});
	history.push('/boards')
}

export const deleteBoards = id=>async dispatch=>{
	await json.delete(`/boards/${id}`);
	dispatch({type:'DELETE_BOARDS',payload:id});
	history.push('/boards');
}

export const createItems=(boardId,formValue)=>async dispatch=>{
	const response=await json.post(`/boards/${boardId}/items`,formValue);
	dispatch({type:'CREATE_ITEMS',payload:response.data});
		
}

export const editItems = (itemId,formValue)=>async (dispatch,getState)=>{
	const {boardId}=getState().Items[itemId];
	const response=await json.patch(`/items/${itemId}`,formValue);
	dispatch({type:'EDIT_ITEMS',payload:response.data});
	history.push(`/boards/${boardId}`)

}

export const indexItems=(boardId)=>async dispatch =>{
	const response=await json.get(`/boards/${boardId}/items`);
	dispatch({type:'INDEX_ITEMS',payload:response.data});
}

export const deleteItems = (itemId)=> async dispatch =>{
	await json.delete(`/items/${itemId}`);
	dispatch({type:'DELETE_ITEMS',payload:itemId});

}


export const showItems= id =>async dispatch =>{
	const response=await json.get(`/items/${id}`);
	dispatch({type:'SHOW_ITEMS',payload:response.data});
}
