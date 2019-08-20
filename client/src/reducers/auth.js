const authInitState={
	userId:null,
	isSignedIn:null,
	imageUrl:null
}

const Auth=(state=authInitState,action)=>{
	switch(action.type){
		case 'SIGN_IN':
			return {...state,userId:action.payload.userId,
				isSignedIn:true,imageUrl:action.payload.imageUrl}
		case 'SIGN_OUT':
			return {...state,userId:null,isSignedIn:false}
		default:
			return state
	}


}


export default Auth;