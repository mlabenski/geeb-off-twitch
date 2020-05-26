import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../user.model';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private firestore: AngularFirestore) {
   }
   getUsers() {
    return this.firestore.collection("Queue").snapshotChanges();
  }
  getCurrentUser() {
    return this.firestore.collection("Queue", ref => ref.where('currentGeeber', '==', 'True'))
  }

  createUser(user: User){
    return this.firestore.collection('Queue').add(user);
}

}
