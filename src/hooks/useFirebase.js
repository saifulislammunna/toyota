 
import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Login/Firebase/firebase.init"
import { getAuth, createUserWithEmailAndPassword,signOut,signInWithEmailAndPassword  , onAuthStateChanged} from "firebase/auth";  


initializeFirebase()

const useFirebase = () => {

  const [user, setUser] = useState({});

  const [isLoading, setIsLoading] = useState(true);

   const [authError, setAuthError] = useState('');
 
  const auth = getAuth();

  const registerUser = (email,password ) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email , password)
    .then((userCredential) => {
      setAuthError('');  
      
      
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
       setAuthError('');  
      
    })
    .catch((error) => {  
        
       setAuthError(error.message);
     })
    .finally(() => setIsLoading(false));
    
 } 

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