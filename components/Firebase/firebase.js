import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import firebaseConfig from './firebaseConfig';

// Initialize Firebase App




if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const database = firebase.firestore();
const storage = firebase.storage();
export { database, storage };

const patientCollectionName = "patients";
const patientCollection = database.collection(patientCollectionName)

export const auth = firebase.auth();

export const loginWithEmail = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

export const registerWithEmail = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

export const addpatient = async (animalId, date, illness, severity) =>{
  await patientCollection.doc(animalId).set({date,illness,severity},{merge:false})
}
  

export const removepatient =async (animalId, reason, date) =>{
                 await patientCollection.doc(animalId).set({isDelete:true,reason,removeDate:date});


}

export const updatestatus =async (animalid, status, date) =>{
    await patientCollection.doc(animalid).set({date,status},{merge:false})

}
    // Get patient by the document id (animal Id)
    async function getPatientById(animalId) {
        const doc = await patientCollection.doc(animalId).get()
        return doc.data()
    }


export const viewrecords = async (animalId, illness, adding_date, removing_date) =>{
  if (animalId!==undefined) {
            return await getPatientById(animalId)
        }
    
       let docsI = patientCollection;
    
         if (adding_date !== undefined) {
          docsI = docsI.where("date", "==", adding_date)
         }
    
         if (illness !==undefined){
             docsI = docsI.where("illness","==",illness)
       }
    
         if (removing_date !== undefined) {
             // If illness is not given, anything greater than or equal of 0
             docsI.where("removeDate", "==", removing_date)
         }
    
         const docs = await docsI.get()
    
         const patients = [];
   
        docs.forEach((doc) =>{
            patients.push(doc.data())
        })
        return patients
    }


export const logout = () => auth.signOut();

export const passwordReset = (email) => auth.sendPasswordResetEmail(email);

// hello is it working ?

