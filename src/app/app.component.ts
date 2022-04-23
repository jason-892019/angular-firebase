<<<<<<< HEAD
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-firebase';

  dataSource : any;
  id : any;
  name : any;
  personalInfo : any;
  editObj : any;

  @ViewChild('btnShow')
  btnShow!: ElementRef;
  @ViewChild('btnClose')
  btnClose!: ElementRef;



  constructor(private store: AngularFirestore){
    
  }

  ngOnInit(){
    this.getAll();
  }

  openDialog(){
    this.btnShow.nativeElement.click();
  }

  closeDialog(){
    this.btnClose.nativeElement.click();
  }

  clearEdit(){
    this.editObj = null;
    this.name = "";
    this.personalInfo = "";
  }

  add(){
    if(this.editObj){
      this.store.collection('/user').doc(this.editObj.id).update({name : this.name, personalInfo : this.personalInfo});
    } else {
      this.store.collection('/user').add({name : this.name, personalInfo : this.personalInfo});
    }
    this.closeDialog();
  }

  edit(id : string){
    this.store.collection('/user').doc(id).get().subscribe((response) => {
      this.editObj = Object.assign({id : response.id}, response.data());
      this.name = this.editObj.name;
      this.personalInfo = this.editObj.personalInfo;
      this.openDialog();
    })
  }

  delete(id : string){
    this.store.collection('/user').doc(id).delete();
  }

  getAll(){
    this.store.collection('/user').snapshotChanges().subscribe((response) => {
      this.dataSource = response.map(item => {
        return Object.assign({id : item.payload.doc.id}, item.payload.doc.data())
      });
    })
  }
}
=======
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-firebase';

  dataSource : any;
  id : any;
  name : any;
  personalInfo : any;
  editObj : any;

  @ViewChild('btnShow')
  btnShow!: ElementRef;
  @ViewChild('btnClose')
  btnClose!: ElementRef;



  constructor(private store: AngularFirestore){
    
  }

  ngOnInit(){
    this.getAll();
  }

  openDialog(){
    this.btnShow.nativeElement.click();
  }

  closeDialog(){
    this.btnClose.nativeElement.click();
  }

  clearEdit(){
    this.editObj = null;
    this.name = "";
    this.personalInfo = "";
  }

  add(){
    if(this.editObj){
      this.store.collection('/user').doc(this.editObj.id).update({name : this.name, personalInfo : this.personalInfo});
    } else {
      this.store.collection('/user').add({name : this.name, personalInfo : this.personalInfo});
    }
    this.closeDialog();
  }

  edit(id : string){
    this.store.collection('/user').doc(id).get().subscribe((response) => {
      this.editObj = Object.assign({id : response.id}, response.data());
      this.name = this.editObj.name;
      this.personalInfo = this.editObj.personalInfo;
      this.openDialog();
    })
  }

  delete(id : string){
    this.store.collection('/user').doc(id).delete();
  }

  getAll(){
    this.store.collection('/user').snapshotChanges().subscribe((response) => {
      this.dataSource = response.map(item => {
        return Object.assign({id : item.payload.doc.id}, item.payload.doc.data())
      });
    })
  }
}
>>>>>>> 5219419360f0de9fdf4783f1cb518e4d95ccfc2c
