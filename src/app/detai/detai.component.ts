import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detai',
  templateUrl: './detai.component.html',
  styles: [`
    .p{
    color: deeppink;
}
  `],
  styleUrls: ['./detai.component.css']
})
export class DetaiComponent implements OnInit {

  itemName = ''
  itemList= []
  count = 0

  constructor() { }

  ngOnInit(): void {
  }

  onAddItem(){
    this.itemList.push(this.itemName)
    this.itemName = ''
    this.count = this.itemList.length
  }


}
