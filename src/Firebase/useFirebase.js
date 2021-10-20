
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializationAuthentication from "./firebase.init";
import { useHistory } from 'react-router';

initializationAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState();
    const [name, setName] = useState('');
    const [error, setError] = useState();
    const googelProvider = new GoogleAuthProvider();
    const auth = getAuth();
    const history=useHistory();
    const [userName, setUserName] = useState()



    const googleSignIn = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googelProvider)


    }
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
                setError('')
            })
            .finally(() => {
                setIsLoading(false)

            })
    }
    //create user
    const emailSignIn = (email, password, name) => {
        setIsLoading(true)
        setError('')
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 

                updateUserInfo(name);
                setUser(userCredential.user);





            })
            .catch((error) => {

                setError(error.message);
                // ..
            })
            .finally(() => {
                setIsLoading(false)
            })

    }

    //update user profile
    const updateUserInfo = (name) => {

        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {
            setUserName(name)
            
        })
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => {
                setIsLoading(false)
                

            })
    }

    //signInWithEmail
    const logInWithemail = (email, password) => {
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password)



    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            updateUserInfo();
            if (user) {

                setUser(user);
                console.log(user);
                // ...
            } else {

            }
            setIsLoading(false);
        });



    }, [])



    return {
        googleSignIn,
        emailSignIn,
        user,
        setUser,
        logOut,

        isLoading,
        setIsLoading,
        email,
        setEmail,
        password,
        setPassword,
        name,
        setName,
        updateUserInfo,
        logInWithemail,
        error,
        setError,
        userName



    }

}
export default useFirebase;