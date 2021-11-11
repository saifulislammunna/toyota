 
import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Login/Firebase/firebase.init"
import { getAuth, createUserWithEmailAndPassword,signOut,signInWithEmailAndPassword  , onAuthStateChanged, updateProfile} from "firebase/auth";  


initializeFirebase()

const useFirebase = () => {

  const [user, setUser] = useState({});

  const [isLoading, setIsLoading] = useState(true);

   const [authError, setAuthError] = useState('');
 
  const auth = getAuth();

  const registerUser = (email,password,name,history ) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email , password)
    .then((userCredential) => {
      setAuthError(''); 
      const newUser = {email,displayName: name};
      setUser(newUser);
      //  send name to firebase after creation

      updateProfile(auth.currentUser, {
        displayName: name 
      }).then(() => {
         
      }).catch((error) => {
       
      });
      
      history.replace('/'); 
      
      
    })
      .catch((error) => {  
          
         setAuthError(error.message);
            
      })
      .finally(() => setIsLoading(false));
       
 } 


 const loginUser = (email,password,location,history) => {
  setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const destination = location?.state?.from  || '/';  
      history.replace(destination);  
       setAuthError('');  
      
    })
    .catch((error) => {  
        
       setAuthError(error.message);
     })
    .finally(() => setIsLoading(false));
    
 } 
// observer user state
 useEffect(() => {
  const unsubscribe =   onAuthStateChanged(auth, (user) => {
    if (user) {
     
         setUser(user); 
         
      
       } else {
        setUser({})
      }
      setIsLoading(false);
     
    });
    return () => unsubscribe;  
  },[  auth  ])



  const logout = () => {
    setIsLoading(true);

    signOut(auth).then(() => {
       
    }).catch((error) => {
  
    })
     .finally(() => setIsLoading(false));
     
    
}
  
  

  return {
    user,
    isLoading,
    registerUser,
    logout,
    authError,  
    loginUser,
  }

}

export default useFirebase ;