import { Component } from '@angular/core';

@Component({
  selector: 'app-ev-history-list',
  templateUrl: './ev-history-list.component.html',
  styleUrl: './ev-history-list.component.scss'
})
export class EvHistoryListComponent{
  cars = [
    { id: 4, name: "CAR #216", year: "2024", imgPath: "../../assets/ev-history/IMG_1040.jpg" },
    { id: 3, name: "CAR #237", year: "2023", imgPath: "../../assets/ev-history/car237.jpg" },
    { id: 2, name: "HYDROGEN CAR", year: "", imgPath: "../../assets/ev-history/hydrogen.png" },
    { id: 1, name: "SOLAR CAR", year: "", imgPath: "../../assets/ev-history/solar.png" }
  ]
}
