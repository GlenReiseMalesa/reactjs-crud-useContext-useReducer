import { createContext, useReducer,React } from 'react';

// Initial state
const initialState = {
  user: {UserId: 'Hilder',NickName: 'Hell',Biography: 'hdsvhkdsbjshvcsjbc'}
}

export const useUserProfile = createContext(initialState);

const updateUserProfile = (state, action) =>{
    switch(action.type){
      case 'UPDATE':

       return {
         ...state,
         user:action.payload
       };
      default:
        return state;
    }
};

export const UserProviderProfile = ({ children }) => {

    
    const [user,dispatch] = 
    useReducer(updateUserProfile,initialState);
    

      //action
    function update(user) {
      dispatch({
        type: 'UPDATE',
        payload: user
      });
    }
   


    return (
      <useUserProfile.Provider value={{user:user.user,update}}>
        {children}
      </useUserProfile.Provider>
    );
};













