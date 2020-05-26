import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private firestore: AngularFirestore) {
   }
   getUsers() {
    return this.firestore.collection("streamers").snapshotChanges();
  }
  getCurrentUser() {
    return this.firestore.collection("streamers", ref => ref.where('currentGeeber', '==', 'True'))
  }

  updateCurrentStreamer(data) {
    return
    this.firestore.collection("streamers")
    .doc(data.payload.doc.id)
    .set({currentGeeber: false}, {merge: true});
  }
}
