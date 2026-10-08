import { Component, ElementRef, AfterViewInit  } from '@angular/core';

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
  constructor(private el: ElementRef) {}
  selectedCarId: number | null = null;
  pendingCarId: number | null = null;
  isLeaving = false;


  toggleCar(id: number) {
    // Nothing open: just open it
    if (this.selectedCarId === null) {
      this.selectedCarId = id;
      return;
    }

    // Clicked the open card (or clicked it again mid-exit)
    if (this.selectedCarId === id) {
      if (this.isLeaving) {
        // Cancel the exit and bring it back
        this.isLeaving = false;
        this.pendingCarId = null;
      } else {
        this.isLeaving = true;
        this.pendingCarId = null;
      }
      return;
    }

    // Clicked a different car: exit the current one, then open the new one
    this.isLeaving = true;
    this.pendingCarId = id;
  }

  onAnimationEnd(event: AnimationEvent) {
    // Ignore animations bubbling up from child elements
    if (event.target !== event.currentTarget) return;

    if (this.isLeaving) {
      this.selectedCarId = this.pendingCarId; // null if just closing
      this.pendingCarId = null;
      this.isLeaving = false;
    }
  }

  cars: Car[] = [
    { id: 4, 
      name: "CAR #216", 
      year: "2024", 
      imgPath: "../../assets/ev-history/IMG_1040.jpg", 
      description: "Car #216 was built to compete in the 2024 season along with IC Car #55. At Michigan it place 30th overall. #216 also competed at the University of Texas Arlington's autocross weekend for mutliple years and Kansas State University's Formula Wheat competition in 2026.", 
      extraImgs: ["../../assets/ev-history/extras/216 - 2024/carReveal.jpg","../../assets/ev-history/extras/216 - 2024/michigan.jpg","../../assets/ev-history/extras/216 - 2024/driveDay.jpg"] },

    { id: 3, 
      name: "CAR #237", 
      year: "2023", 
      imgPath: "../../assets/ev-history/car237.jpg", 
      description: "Car #237 was built to compete in the 2023 season alongside IC Car #18.", 
      extraImgs: ["../../assets/ev-history/extras/237 - 2023/carReveal.jpg","../../assets/ev-history/extras/237 - 2023/michigan.jpg","../../assets/ev-history/extras/237 - 2023/driveDay.jpg"] },

    { id: 2, 
      name: "HYDROGEN CAR", 
      year: "", 
      imgPath: "../../assets/ev-history/hydrogen.png", 
      description: "After the six solar cars the team felt it was time to try a different clean energy: Hydrogen. The team initially made Tigergen I in 2008 but it was only a demonstration vehicle and did not compete for rank or rewards. In 2010 Tigergen II, pictured above, participated in the Shell Eco-Marathon and later in the 2011 Shell Eco-Marathon. For the 2013 Shell Eco-Marathon the team brough the recent Tigergen III to competition." },
      
    { id: 1, 
      name: "SOLAR CAR", 
      year: "", 
      imgPath: "../../assets/ev-history/solar.png", 
      description: "Before moving over to electric car our now EV team experimented with many other kinds of eco-friendly cars. The very first attempt was Solar cars, there were six generations of solar cars before the team moved on to a different energy source. Those cars being Suntiger 1 through Suntiger 6.",
      extraImgs: ["../../assets/ev-history/extras/suntiger/SuntigerX - Solar 1999.jpg","../../assets/ev-history/extras/suntiger/Suntiger6 - Solar 2005.jpg"]  }
  ]
}
