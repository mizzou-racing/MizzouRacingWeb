import { Component } from '@angular/core';

interface Car {
  id: number;
  name: string;
  year: string;
  imgPath: string;
  description?: string;
  extraImgs?: string[];
}

@Component({
  selector: 'app-ev-history-list',
  templateUrl: './ev-history-list.component.html',
  styleUrl: './ev-history-list.component.scss'
})
export class EvHistoryListComponent{
  selectedCarId: number | null = null;

  toggleCar(id: number) {
    this.selectedCarId = this.selectedCarId === id ? null : id;
  }

  cars: Car[] = [
    { id: 4, name: "CAR #216", year: "2024", imgPath: "../../assets/ev-history/IMG_1040.jpg", description: "Car #216 was built to compete in the 2024 season along with IC Car #55. At Michigan it place ___ overall. #216 also competed at the University of Texas Arlington's autocross weekend for mutliple years and Kansas State University's Formula Wheat competition in 2026.", extraImgs: ["../../assets/ev-history/extras/216/carReveal.jpg","../../assets/ev-history/extras/216/michigan.jpg","../../assets/ev-history/extras/216/driveDay.jpg"] },
    { id: 3, name: "CAR #237", year: "2023", imgPath: "../../assets/ev-history/car237.jpg", description: "Car #237 was built to compete in the 2023 season alongside IC Car #18.", extraImgs: ["../../assets/ev-history/extras/237/carReveal.jpg","../../assets/ev-history/extras/237/michigan.jpg","../../assets/ev-history/extras/237/driveDay.jpg"] },
    { id: 2, name: "HYDROGEN CAR", year: "", imgPath: "../../assets/ev-history/hydrogen.png", description: "After the six solar cars the team felt it was time to try a different clean energy: Hydrogen. The team initially made Tigergen I but it did not compete. In 2010 Tigergen II, pictured above, participated in the Shell Eco-Marathon and later in the 2011 Shell Eco-Marathon. For the 2013 Shell Eco-Marathon the team brough the recent Tigergen III to competition." },
    { id: 1, name: "SOLAR CAR", year: "", imgPath: "../../assets/ev-history/solar.png", description: "Before moving over to electric car our now EV team experimented with many other kinds of eco-friendly cars. The very first attempt was Solar cars, there were six generations of solar cars before the team moved on to a different energy source. Those cars being Suntiger 1 through Suntiger 6."  }
  ]
}
