import { getFirestore } from 'firebase/firestore'
import { initFirebase } from './firebase'

export function getFirestoreClient() {
  initFirebase()
  return getFirestore()
}
