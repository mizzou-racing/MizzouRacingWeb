import { Component } from '@angular/core';

@Component({
  selector: 'app-ic-history-list',
  templateUrl: './ic-history-list.component.html',
  styleUrl: './ic-history-list.component.scss'
})
export class IcHistoryListComponent{
  cars = [
    { id: 39, name: "CAR #115", year: "2026", imgPath: "../../assets/ic-histroy/2026Car115.jpg" },
    { id: 38, name: "CAR #22", year: "2025", imgPath: "../../assets/ic-histroy/ic-history-22 - Copy.jpg" },
    { id: 37, name: "CAR #55", year: "2024", imgPath: "../../assets/ic-histroy/ic-history-55.jpg" },

    { id: 36, name: "CAR #18", year: "2023", imgPath: "../../assets/ic-histroy/2023Car18.jpg" },
    { id: 35, name: "CAR #92", year: "2022", imgPath: "../../assets/ic-histroy/2022Car92.jpg" },
    { id: 34, name: "CAR #74", year: "2022", imgPath: "../../assets/ic-histroy/2022Car74.jpg" },
    { id: 33, name: "CAR #52", year: "2021", imgPath: "../../assets/ic-histroy/2021Car52.jpg" },

    { id: 32, name: "CAR #93", year: "2019", imgPath: "../../assets/ic-histroy/2019Car93.jpg" },
    { id: 31, name: "CAR #39", year: "2019", imgPath: "../../assets/ic-histroy/2019Car39.jpg" },
    { id: 30, name: "CAR #34", year: "2018", imgPath: "../../assets/ic-histroy/2018Car34.png" },
    { id: 29, name: "CAR #28", year: "2018", imgPath: "../../assets/ic-histroy/2018Car28.png" },

    { id: 28, name: "CAR #105", year: "2017", imgPath: "../../assets/ic-histroy/2017Car105.jpg" },
    { id: 27, name: "CAR #23", year: "2017", imgPath: "../../assets/ic-histroy/2017Car23.png" },
    { id: 26, name: "CAR #87", year: "2016", imgPath: "../../assets/ic-histroy/2016Car87.jpg" },
    { id: 25, name: "CAR #85", year: "2015", imgPath: "../../assets/ic-histroy/2015Car85.jpg" },

    { id: 24, name: "CAR #30", year: "2015", imgPath: "../../assets/ic-histroy/2015Car30.jpg" },
    { id: 23, name: "CAR #62", year: "2014", imgPath: "../../assets/ic-histroy/2014Car62Team.jpg" },
    { id: 22, name: "CAR #33", year: "2013", imgPath: "../../assets/ic-histroy/2013Car33Team.jpg" },
    { id: 21, name: "CAR #107", year: "2012", imgPath: "../../assets/ic-histroy/2012Car107.jpg" },

    { id: 20, name: "CAR #81", year: "2012", imgPath: "../../assets/ic-histroy/2012Car81Team.jpg" },
    { id: 19, name: "CAR #15", year: "2010", imgPath: "../../assets/ic-histroy/2010Car15Team.jpg" },
    { id: 18, name: "CAR #42", year: "2009", imgPath: "../../assets/ic-histroy/2009Car42.jpg" },
    { id: 17, name: "CAR #52", year: "2008", imgPath: "../../assets/ic-histroy/2008Car52.jpg" },

    { id: 16, name: "CAR #54", year: "2006", imgPath: "../../assets/ic-histroy/2006Car54.png" },
    { id: 15, name: "CAR #2", year: "2004", imgPath: "../../assets/ic-histroy/2004Car2.jpg" },
    { id: 14, name: "CAR #43", year: "2003", imgPath: "../../assets/ic-histroy/2003Car43.jpg" },
    { id: 13, name: "CAR #2", year: "2002", imgPath: "../../assets/ic-histroy/2002Car2Team.jpg" },

    { id: 12, name: "CAR #96", year: "2001", imgPath: "../../assets/ic-histroy/2001Car96.jpg" },
    { id: 11, name: "CAR #4", year: "2000", imgPath: "../../assets/ic-histroy/2000Car4.jpg" },
    { id: 10, name: "CAR #54", year: "1999", imgPath: "../../assets/ic-histroy/1999Car54.jpg" },
    { id: 9, name: "CAR #53", year: "1998", imgPath: "../../assets/ic-histroy/1998Car53.jpg" },

    { id: 8, name: "CAR #99", year: "1997", imgPath: "../../assets/ic-histroy/1997Car99.jpg" },
    { id: 7, name: "CAR #39", year: "1996", imgPath: "../../assets/ic-histroy/1996Car39.jpg" },
    { id: 6, name: "CAR #72", year: "1995", imgPath: "../../assets/ic-histroy/1995Car72.jpg" },
    { id: 5, name: "CAR #72", year: "1994", imgPath: "../../assets/ic-histroy/1994Car72.jpg" },

    { id: 4, name: "CAR #14", year: "1993", imgPath: "../../assets/ic-histroy/1993Car14.jpg" },
    { id: 3, name: "CAR #55", year: "1992", imgPath: "../../assets/ic-histroy/1992Car55.jpg" },
    { id: 2, name: "CAR", year: "1987", imgPath: "../../assets/ic-histroy/1987Car.jpg" },
    { id: 1, name: "CAR #9", year: "1985", imgPath: "../../assets/ic-histroy/1985Car9.jpg" }
  ]
}
