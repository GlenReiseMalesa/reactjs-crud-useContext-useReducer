import React, { useContext,useState } from 'react'
import image from './isekai.jpg'
import { useUserProfile } from './user-contextProfile';

  //button visibility
  var classBTNReset = "btn btn-primary invisible";
  var classBTNRetry = "btn btn-warning visible";
  var classBTNSubmit = "btn btn-success visible";

  //counter that will help us randomly get denied by network 50% of the time
  var counter = 0;
  
  var errorMessage = "";

export default function UserProfile() {

 

  const {user,setUser,update}  = useContext(useUserProfile);

  //determining the profile image
  //a -arrogant b-bitter c-chilled d-down g-general
  //the first letter of your nickname determines the emjois/mood of your profile

  var  imgSrc = require('./g.png').default;
  
  if(user.NickName.startsWith("a")){
    //if your nickname starts with a you're arrogant
     imgSrc = require('./a.png').default;

  }else if(user.NickName.startsWith("b")){
    //if your nickname starts with a you're bitter
    imgSrc = require('./b.png').default;

  }else if(user.NickName.startsWith("c")){
    //if your nickname starts with a you're chilled
    imgSrc = require('./c.png').default;

  }else if(user.NickName.startsWith("d")){
    //if your nickname starts with a you're arrogant
    imgSrc = require('./d.png').default;

  }else{
    //Otherwise you're just a general person with reqular emotions
    imgSrc = require('./g.png').default;

  }



  //Variables to set
  const [userId, setuserId] = useState('');
  const [NickName, setNickName] = useState('');
  const [Biography, setBiography] = useState('');


 const userUpdateProfile = e =>{  
  e.preventDefault();

  counter += 3;

  if(counter % 2){
    classBTNReset = "btn btn-primary visible";
    //if our counter is odd then the network will allow our submition
    errorMessage = "";
    const updateUser = {
      UserId : userId,
      NickName : NickName,
      Biography :Biography
    } 
    update(updateUser);
  }else{
    //if our counter is even then display our error message
    errorMessage = "Error! randomly rejected to make a submission to the backend";
  }
}

const Retry = e =>{
  e.preventDefault();

  setuserId("");
  setNickName("");
  setBiography("");

}



const Reset = e =>{
  classBTNReset = "btn btn-primary invisible";
  e.preventDefault();

  const resetUser = {
    UserId : '',
    NickName : '',
    Biography :''
  }

  update(resetUser);
}

    return (
      
        <div className="container">


        <div className="customForm border border-success rounded">
            <p><h2  className="text-center">(User Update Form)</h2></p>
        <form  >
          <div className="row mb-4">
            <div className="col">
              <div className="form-outline">
                
                <label className="form-label" for="form6Example1">User ID</label>
                <input type="text" placeholder={user.UserId} value={userId} onChange={(e) => setuserId(e.target.value)} id="form6Example1" className="form-control" />
              </div>
            </div>
            <div className="col">
              <div className="form-outline">
                   <label className="form-label" for="form6Example2">Nickname*</label>
                <input type="text" placeholder={user.NickName} value={NickName} onChange={(e) => setNickName(e.target.value)}  id="form6Example" className="form-control" />   
              </div>
            </div>
          </div>
        
        
        
          <div className="form-outline mb-4">
            <label className="form-label" for="form6Example7">Biography</label>
            <textarea className="form-control" placeholder={user.Biography} value={Biography} onChange={(e) => setBiography(e.target.value)} id="form6Example7" rows="4"></textarea>
            
          </div>
        

        
            <div className="row">
                <div className="col-md-12">
                    <button type="button" onClick={Reset}  className={classBTNReset}>Reset</button>
                    <button type="button" onClick={Retry} className={classBTNRetry}>Retry</button>
                    <button type="button" onClick={userUpdateProfile} className={classBTNSubmit}>Submit</button>
                </div>
            </div>
        
        </form>

        <div class="alert alert-danger" role="alert">
          {errorMessage}
        </div>
        </div>
        

        
        
        <div className="profile">
        
         <div className="row g-0">
            <div className="col-md-4">
           
                <img src={imgSrc}  className="img-fluid rounded-start" alt="..."></img>
             
              </div>
            <div className="col-md-8">
              <div className="card-body">
                <h2 className="card-title">{user.NickName}</h2>
                <p className="card-text">{user.Biography}</p>
        
                <p className="card-text">({user.UserId})</p>
              </div>
            </div>
          </div>	
            
        </div>
        
        </div>
      
    )
}
