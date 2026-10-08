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
  selector: 'app-ic-history-list',
  templateUrl: './ic-history-list.component.html',
  styleUrl: './ic-history-list.component.scss'
})
export class IcHistoryListComponent{
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
    { id: 39, 
      name: "CAR #115", 
      year: "2026", 
      imgPath: "../../assets/ic-history/2026Car115.jpg", 
      description: "Car #115 was built to compete in the 2026 season. It was able to hold its own getting 13th overall at Michigan. #115 also competed at the University of Texas Arlington's autocross weekend and in Kansas State University's Formula Wheat competition, both of which were held in October 2026.", 
      extraImgs: ["../../assets/ic-history/extras/115 - 2026/carReveal.jpg","../../assets/ic-history/extras/115 - 2026/michigan.jpg","../../assets/ic-history/extras/115 - 2026/driveDay.jpg"] },
    { id: 38, 
      name: "CAR #22", 
      year: "2025", 
      imgPath: "../../assets/ic-history/ic-history-22 - Copy.jpg", 
      description: "Car #22 was built to compete in the 2025 season. At Michigan it place 2nd in the Accel event and 22nd overall. #22 also competed at the University of Texas Arlington's autocross weekend for multiple years starting with 2025's event. #22 also competed at Kansas State University's Formula Wheat competition in October 2025, at the event #22 placed 2nd overall.", 
      extraImgs: ["../../assets/ic-history/extras/22 - 2025/carReveal.jpg","../../assets/ic-history/extras/22 - 2025/michigan.jpg","../../assets/ic-history/extras/22 - 2025/driveDay.jpg"] },
    { id: 37, 
      name: "CAR #55", 
      year: "2024", 
      imgPath: "../../assets/ic-history/ic-history-55.jpg", 
      description: "Car #55 was built to compete in the 2024 season along with EV Car #216. At Michigan it place 1st in the Skidpad event and 22nd overall. #55 also competed at the University of Texas Arlington's autocross weekend and Kansas State University's Formula Wheat competition both for multiple years starting with the 2024 competitions.", 
      extraImgs: ["../../assets/ic-history/extras/55 - 2024/carReveal.jpg","../../assets/ic-history/extras/55 - 2024/michigan.jpg","../../assets/ic-history/extras/55 - 2024/driveDay.jpg"] },



    { id: 36, 
      name: "CAR #18", 
      year: "2023", 
      imgPath: "../../assets/ic-history/2023Car18.jpg", 
      description: "Car #18 was built to compete in the 2023 season along with EV Car #237. At Michigan it placed 2nd in Skidpad and 17th overall. #18 also competed Kansas State University's Formula Wheat competition in 2023 and competed at the University of Texas Arlington's autocross weekend for multiple years until its retirement in the winter of 2025.", 
      extraImgs: ["../../assets/ic-history/extras/18 - 2023/carReveal.jpg","../../assets/ic-history/extras/18 - 2023/michigan.jpg","../../assets/ic-history/extras/18 - 2023/driveDay.jpg"] },
    { id: 35, 
      name: "CAR #92", 
      year: "2022", 
      imgPath: "../../assets/ic-history/2022Car92.jpg", 
      description: "Car #92 was built to compete in the 2022 season. At Michigan it placed 14th overall. Unlike most of our cars which were designed to match Mizzou's color scheme #92's wrap was made to resemble the American flag.",
      extraImgs: ["../../assets/ic-history/extras/92 - 2022/hoco.jpg","../../assets/ic-history/extras/92 - 2022/michigan.jpg","../../assets/ic-history/extras/92 - 2022/driveDay.jpg"] },
    { id: 34, 
      name: "CAR #74", 
      year: "2022", 
      imgPath: "../../assets/ic-history/2022Car74.jpg",
      description: "Car #74 was built to compete in the 2022 season. At Michigan it placed 19th overall.",
      extraImgs: ["../../assets/ic-history/extras/74 - 2022/michigan.jpg", "../../assets/ic-history/extras/74 - 2022/michigan2.jpg", "../../assets/ic-history/extras/74 - 2022/michigan3.jpg"] },
    { id: 33, 
      name: "CAR #52", 
      year: "2021", 
      imgPath: "../../assets/ic-history/2021Car52.jpg",
      description: "Car #52 was built to compete in the 2021 season. Unlike most of our cars it did not compete at the Michigan International Speedway and instead competed at Las Vegas, Nevada.",
      extraImgs: ["../../assets/ic-history/extras/52 - 2021/carReveal.jpg","../../assets/ic-history/extras/52 - 2021/vegas.jpg","../../assets/ic-history/extras/52 - 2021/driveDay.jpg"] }, 



    { id: 32, 
      name: "CAR #93", 
      year: "2019", 
      imgPath: "../../assets/ic-history/2019Car93.jpg",
      description: "Car #93 was built to compete in the 2019 season. #93 did not compete at the Michigan International Speedway and instead competed at Lincoln, Nebraska placing 50th overall.",
      extraImgs: ["../../assets/ic-history/extras/93 - 2019/christmas.jpg","../../assets/ic-history/extras/93 - 2019/rolla.jpg","../../assets/ic-history/extras/93 - 2019/rolla2.jpg"] }, 
    { id: 31, 
      name: "CAR #39", 
      year: "2019", 
      imgPath: "../../assets/ic-history/2019Car39.jpg",
      description: "Car #39 was built to compete in the 2019 season. At Michigan it fittingly placed 39th overall.",
      extraImgs: ["../../assets/ic-history/extras/39 - 2019/michigan.jpg","../../assets/ic-history/extras/39 - 2019/michigan2.jpg","../../assets/ic-history/extras/39 - 2019/michigan3.jpg"] }, 
    { id: 30, 
      name: "CAR #34", 
      year: "2018", 
      imgPath: "../../assets/ic-history/2018Car34.png",
      description: "Car #34 was built to compete in the 2018 season. At Michigan it placed 32nd overall.",
      extraImgs: ["../../assets/ic-history/extras/34 - 2018/driveDay.jpg","../../assets/ic-history/extras/34 - 2018/driveDay2.jpg","../../assets/ic-history/extras/34 - 2018/driveDay3.jpg"] }, 
    { id: 29, 
      name: "CAR #28", 
      year: "2018", 
      imgPath: "../../assets/ic-history/2018Car28.png",
      description: "Car #28 was built to compete in the 2018 season. #28 did not compete at the Michigan International Speedway and instead competed at Lincoln, Nebraska.",
      extraImgs: ["../../assets/ic-history/extras/28 - 2018/michigan.jpg","../../assets/ic-history/extras/28 - 2018/canada.jpg","../../assets/ic-history/extras/28 - 2018/canada2.jpg"] }, 



    { id: 28, 
      name: "CAR #105", 
      year: "2017", 
      imgPath: "../../assets/ic-history/2017Car105.jpg",
      description: "Car #105 was built to compete in the 2017 season. #105 did not compete at the Michigan International Speedway and instead competed at Lincoln, Nebraska and placed 37th overall.",
      extraImgs: ["../../assets/ic-history/extras/105 - 2017/golf.jpg","../../assets/ic-history/extras/105 - 2017/driveDay.jpg"] }, 
    { id: 27, 
      name: "CAR #23", 
      year: "2017", 
      imgPath: "../../assets/ic-history/2017Car23.png",
      description: "Car #23 was built to compete in the 2017 season. At Michigan it placed 55th overall.",
      extraImgs: ["../../assets/ic-history/extras/23  - 2017/michigan.jpg","../../assets/ic-history/extras/23  - 2017/carReveal.jpg","../../assets/ic-history/extras/23  - 2017/michigan2.jpg"] }, 
    { id: 26, 
      name: "CAR #87", 
      year: "2016", 
      imgPath: "../../assets/ic-history/2016Car87.jpg",
      description: "Car #87 was built to compete in the 2016 season. At Michigan it placed 50th overall.",
      extraImgs: ["../../assets/ic-history/extras/87 - 2016/carReveal.jpg","../../assets/ic-history/extras/87 - 2016/michigan.jpg","../../assets/ic-history/extras/87 - 2016/driveDay.jpg"] }, 
    { id: 25, 
      name: "CAR #85", 
      year: "2015", 
      imgPath: "../../assets/ic-history/2015Car85.jpg",
      description: "Car #85 was built to compete in the 2015 season. #85 did not compete at the Michigan International Speedway and instead competed at Lincoln, Nebraska and placed 5th overall.",
      extraImgs: ["../../assets/ic-history/extras/85 - 2015/IMG_3884.jpg","../../assets/ic-history/extras/85 - 2015/IMGP8522.jpg","../../assets/ic-history/extras/85 - 2015/IMGP9964.jpg"] },



    { id: 24, 
      name: "CAR #30", 
      year: "2015", 
      imgPath: "../../assets/ic-history/2015Car30.jpg",
      description: "Car #30 was built to compete in the 2015 season. At Michigan it placed 29th overall.",
      extraImgs: ["../../../assets/ic-history/extras/30 - 2015/IMG_3884.jpg", "../../../assets/ic-history/extras/30 - 2015/IMG_4051.jpg", "../../../assets/ic-history/extras/30 - 2015/IMGP9366.jpg"] },
    { id: 23, 
      name: "CAR #62", 
      year: "2014", 
      imgPath: "../../assets/ic-history/2014Car62Team.jpg",
      description: "Car #30 was built to compete in the 2014 season. At Michigan it placed 19th overall.",
      extraImgs: ["../../../assets/ic-history/extras/62 - 2014/DSC_0316.jpg", "../../../assets/ic-history/extras/62 - 2014/DSC_0562.jpg", "../../../assets/ic-history/extras/62 - 2014/DSC_0611.jpg"] },
    { id: 22, 
      name: "CAR #33", 
      year: "2013", 
      imgPath: "../../assets/ic-history/2013Car33Team.jpg",
      description: "Car #33 was built to compete in the 2013 season. At Michigan it placed 69th overall.",
      extraImgs: ["../../../assets/ic-history/extras/33 - 2013/IMG_2420.jpg", "../../../assets/ic-history/extras/33 - 2013/P1000846.jpg", "../../../assets/ic-history/extras/33 - 2013/Spring Team Pic (2).jpg"] },
    { id: 21, 
      name: "CAR #107", 
      year: "2012", 
      imgPath: "../../assets/ic-history/2012Car107.jpg",
      description: "Car #107 was built to compete in the 2012 season. At Michigan it placed 14th overall." },



    { id: 20, 
      name: "CAR #81", 
      year: "2012", 
      imgPath: "../../assets/ic-history/2012Car81Team.jpg",
      description: "Car #81 was built to compete in the 2012 season. #81 did not compete at the Michigan International Speedway and instead competed at Lincoln, Nebraska and placed 40th overall.",
      extraImgs: ["../../../assets/ic-history/extras/81 - 2012/DSC_0646.jpg", "../../../assets/ic-history/extras/81 - 2012/Kansas Speedway.jpg", "../../../assets/ic-history/extras/81 - 2012/race cat.jpg"] },
    { id: 19, 
      name: "CAR #15", 
      year: "2010", 
      imgPath: "../../assets/ic-history/2010Car15Team.jpg",
      description: "Car #15 was built to compete in the 2010 season. At Michigan it placed 7th overall.",
      extraImgs: ["../../../assets/ic-history/extras/15 - 2010/2010 15_2.jpg", "../../../assets/ic-history/extras/15 - 2010/Car 15_4.jpg", "../../../assets/ic-history/extras/15 - 2010/Fall 2010 Team Photo.jpg"] },
    { id: 18, 
      name: "CAR #42", 
      year: "2009", 
      imgPath: "../../assets/ic-history/2009Car42.jpg",
      description: "Car #42 was built to compete in the 2009 season. #42 did not compete at the Michigan International Speedway and instead competed at Virginia and placed 12th overall.",
      extraImgs: ["../../../assets/ic-history/extras/42 - 2009/carcones.jpg", "../../../assets/ic-history/extras/42 - 2009/carflag.jpg", "../../../assets/ic-history/extras/42 - 2009/sae 09 098.jpg"] },
    { id: 17, 
      name: "CAR #52", 
      year: "2008", 
      imgPath: "../../assets/ic-history/2008Car52.jpg",
      description: "Car #52 was built to compete in the 2008 season. At Michigan it placed 66th overall.",
      extraImgs: ["../../../assets/ic-history/extras/52 - 2008/BR1.jpg","../../../assets/ic-history/extras/52 - 2008/BR2.jpg"] },



    { id: 16, 
      name: "CAR #54", 
      year: "2006", 
      imgPath: "../../assets/ic-history/2006Car54.png",
      description: "Car #54 was built to compete in the 2006 season. At Michigan it placed 20th overall and 3rd in skidpad.",
      extraImgs: ["../../../assets/ic-history/extras/54 - 2006/2006_car.JPG", "../../../assets/ic-history/extras/54 - 2006/s15932797_40097171_1912.jpg"] },
    { id: 15, 
      name: "CAR #2", 
      year: "2004", 
      imgPath: "../../assets/ic-history/2004Car2.jpg",
      description: "Car #54 was built to compete in the 2004 season. At Michigan it placed 44th overall.",
      extraImgs: ["../../../assets/ic-history/extras/2 - 2004/2004 2 (1).jpg", "../../../assets/ic-history/extras/2 - 2004/2004 car2_04.jpg"] },
    { id: 14, 
      name: "CAR #43", 
      year: "2003", 
      imgPath: "../../assets/ic-history/2003Car43.jpg",
      description: "Car #43 was built to compete in the 2003 season. At Michigan it placed 2nd overall and 1st in autocross.",
      extraImgs: ["../../../assets/ic-history/extras/43 - 2003/102_0216.jpg", "../../../assets/ic-history/extras/43 - 2003/20130810_144813.jpg", "../../../assets/ic-history/extras/43 - 2003/43 front.jpg"] },
    { id: 13, 
      name: "CAR #2", 
      year: "2002", 
      imgPath: "../../assets/ic-history/2002Car2Team.jpg",
      description: "Car #2 was built to compete in the 2002 season. At Michigan it placed 35th overall.",
      extraImgs: ["../../../assets/ic-history/extras/2 - 2002/2002 2 (2).jpg", "../../../assets/ic-history/extras/2 - 2002/2002 2 (3).jpg"] },



    { id: 12, 
      name: "CAR #96", 
      year: "2001", 
      imgPath: "../../assets/ic-history/2001Car96.jpg",
      description: "Car #96 was built to compete in the 2001 season. At Michigan it placed 2nd overall, 2nd in autocross, and 2nd in endurance.",
      extraImgs: ["../../../assets/ic-history/extras/96 - 2001/2001 96 (4).jpg", "../../../assets/ic-history/extras/96 - 2001/a little air.jpg", "../../../assets/ic-history/extras/96 - 2001/prac6.jpg"] },
    { id: 11, 
      name: "CAR #4", 
      year: "2000", 
      imgPath: "../../assets/ic-history/2000Car4.jpg",
      description: "Car #4 was built to compete in the 2000 season. At Michigan it placed 17th overall.",
      extraImgs: ["../../../assets/ic-history/extras/4 - 2000/2000 4.jpg", "../../../assets/ic-history/extras/4 - 2000/From Stacy Reed (Rio).jpeg"] },
    { id: 10, 
      name: "CAR #54", 
      year: "1999", 
      imgPath: "../../assets/ic-history/1999Car54.jpg",
      description: "Car #54 was built to compete in the 1999 season. At Michigan it placed 4th overall.",
      extraImgs: ["../../../assets/ic-history/extras/54 - 1999/1999 54 (1).jpg", "../../../assets/ic-history/extras/54 - 1999/1999 54 (2).jpg"] },
    { id: 9, 
      name: "CAR #53", 
      year: "1998", 
      imgPath: "../../assets/ic-history/1998Car53.jpg",
      description: "Car #53 was built to compete in the 1998 season. At Michigan it placed 13th overall.",
      extraImgs: ["../../../assets/ic-history/extras/53 - 1998/1998 53 (2).jpg", "../../../assets/ic-history/extras/53 - 1998/1998 53.jpg"] },



    { id: 8, 
      name: "CAR #99", 
      year: "1997", 
      imgPath: "../../assets/ic-history/1997Car99.jpg",
      description: "Car #99 was built to compete in the 1997 season. At Michigan it placed 17th overall.",
      extraImgs: ["../../../assets/ic-history/extras/99 - 1997/dash.jpg", "../../../assets/ic-history/extras/99 - 1997/carReveal.jpg", "../../../assets/ic-history/extras/99 - 1997/chassis.jpg"] },
    { id: 7, 
      name: "CAR #39", 
      year: "1996", 
      imgPath: "../../assets/ic-history/1996Car39.jpg",
      description: "Car #39 was built to compete in the 1996 season. At Michigan it placed 45th overall.",
      extraImgs: ["../../../assets/ic-history/extras/39 - 1996/1996 39 (2).jpg", "../../../assets/ic-history/extras/39 - 1996/driveDay.jpg", "../../../assets/ic-history/extras/39 - 1996/driveDay2.jpg"] },
    { id: 6, 
      name: "CAR #72", 
      year: "1995", 
      imgPath: "../../assets/ic-history/1995Car72.jpg",
      description: "Car #72 was built to compete in the 1995 season. At Michigan it placed 52nd overall.",
      extraImgs: ["../../../assets/ic-history/extras/72 - 1995/1995 72.jpg"] },
    { id: 5, 
      name: "CAR #72", 
      year: "1994", 
      imgPath: "../../assets/ic-history/1994Car72.jpg",
      description: "Car #72 was built to compete in the 1994 season. At Michigan it placed 46th overall.",
      extraImgs: ["../../../assets/ic-history/extras/72 - 1994/1994 72 (1).jpg"] },



    { id: 4, 
      name: "CAR #14", 
      year: "1993", 
      imgPath: "../../assets/ic-history/1993Car14.jpg" },
    { id: 3, 
      name: "CAR #55", 
      year: "1992", 
      imgPath: "../../assets/ic-history/1992Car55.jpg" },
    { id: 2, 
      name: "1987 CAR", //1987 does not have a known number so it is done in a slightly different way
      year: "", 
      imgPath: "../../assets/ic-history/1987Car.jpg",
      extraImgs: ["../../../assets/ic-history/extras/1987/87.jpg"] }, 
    { id: 1, 
      name: "CAR #9", 
      year: "1985", 
      imgPath: "../../assets/ic-history/1985Car9.jpg",
      description: "In 1985 Mizzou Racing was founded, starting a long history of students at the University of Missouri building formula style race cars. Our first car was #9." }
  ]
}
