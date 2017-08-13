import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Component } from '@angular/core';
// import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tasks: FirebaseListObservable<any[]>;
  newTask = { name: '' };

  constructor(public db: AngularFireDatabase) {
    this.tasks = db.list('/tasks');

  }

  updateTask(key, name) {
    this.tasks.update(key, { name: name });
  }

  removeTask(task) {
    this.tasks.remove(task);
  }

  addTask(newTask) {
    this.tasks.push(newTask);
    this.newTask = { name: '' };
  }

}
