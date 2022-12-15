// import auth from '@react-native-firebase/auth';
// import { Alert } from 'react-native';

//import { useNavigation } from '@react-navigation/native';
// import {useDispatch} from "react-redux";
// import { getCoin } from '../redux/action/index';
// signup handling/


// const navigation = useNavigation();
//const  dispatch = useDispatch();


// const signUp = async(fullName, email, password) => {
//     console.log('sign-up called');
//     if(!fullName || !email || !password){
//         Alert.alert('Error', 'Please enter all fields')
//     }
//     return auth().createUserWithEmailAndPassword(email, password)
//     .then(cred => {
//         if(cred.user){
//             cred.user.updateProfile({
//                 displayName: fullName,
//             }).then ((cred)=>{
//                 console.log("hello",cred.user);
//             })
//         }
        
//     })
//     .catch(
//         err => Alert.alert(err.code, err.message)
//     )
// }

// signIn handling
// const signIn = (email, password) => {
//     if(!email || !password){
//         Alert.alert('Error', 'Please enter all fields')
//     }

//     return auth().signInWithEmailAndPassword(email, password)
//     .then((userCredential) => {
//         const user = userCredential.user;
//         dispatch(getCoin(user))
//     })
//     .catch(
//         err => Alert.alert(err.code, err.message)
//     )
// }

// signOut handling
// const signOut = () => {
//     return auth().signOut()
// }

// export { signOut}

//  export default Auth;
