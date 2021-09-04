import { Component, OnInit } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'borderRadiusApp';
  subs?: Subscription;

  Tr: number = 0
  Tl: number = 0
  Br: number = 0
  Bl: number = 0



  mousemove = fromEvent(document, 'mousemove');
  mouseup = fromEvent(document, 'mouseup');

  innerBoxBorderRadius?: string

  ngOnInit(): void {
  }

  applyRadius(position: string, multiplier: number) {
    var element = document.getElementById("innerBox");

    if (element) {
      switch (position) {

        case "Tl":
          debugger
          let tl = 0
          if (element.style.borderTopLeftRadius.replace('%', '') != "")
            tl = parseInt(element.style.borderTopLeftRadius.replace('%', ''))

          if (tl == 0 && multiplier == -1) {
            this.Tl = 0;
          }
          else {
            tl += multiplier
            element.style.borderTopLeftRadius = tl + "%"
            this.Tl = tl;
          }


          break;

        case "Tr":
          let tr = 0
          if (element.style.borderTopRightRadius.replace('%', '') != "")
            tr = parseInt(element.style.borderTopRightRadius.replace('%', ''))

          if (tr == 0 && multiplier == -1) {
            this.Tl = 0;
          }
          else {
            tr += multiplier
            element.style.borderTopRightRadius = tr + "%"
            this.Tr = tr;
          }

          break;

        case "Br":
          let br = 0
          if (element.style.borderBottomRightRadius.replace('%', '') != "")
            br = parseInt(element.style.borderBottomRightRadius.replace('%', ''))

          if (br == 0 && multiplier == -1) {
            this.Br = 0;
          }
          else {
            br += multiplier
            element.style.borderBottomRightRadius = br + "%"
            this.Br = br;
          }
          break;

        case "Bl":
          let bl = 0
          if (element.style.borderBottomLeftRadius.replace('%', '') != "")
            bl = parseInt(element.style.borderBottomLeftRadius.replace('%', ''))

          if (bl == 0 && multiplier == -1) {
            this.Bl = 0;
          }
          else {
            bl += multiplier
            element.style.borderBottomLeftRadius = bl + "%"
            this.Bl = bl;
          }

          break;
      }
    }

  }

  appyRadiusFromInput(position: string) {
    debugger
    var element = document.getElementById("innerBox");

    if (element) {
      switch (position) {

        case "Tl":
          let tl = 0
          if (element.style.borderTopLeftRadius.replace('%', '') != "")
            tl = parseInt(element.style.borderTopLeftRadius.replace('%', ''));

          tl = this.Tl;
          (this.Tl == null ? tl = 0 : this.Tl = tl)

          element.style.borderTopLeftRadius = tl + "%"

          break;

        case "Tr":
          let tr = 0
          if (element.style.borderTopRightRadius.replace('%', '') != "")
            tr = parseInt(element.style.borderTopRightRadius.replace('%', ''));


          tr = this.Tr;
          (this.Tr == null ? tr = 0 : this.Tr = tr)

          element.style.borderTopRightRadius = tr + "%"

          break;

        case "Br":
          let br = 0
          if (element.style.borderBottomRightRadius.replace('%', '') != "")
            br = parseInt(element.style.borderBottomRightRadius.replace('%', ''));

          br = this.Br;
          (this.Br == null ? br = 0 : this.Br = br)

          element.style.borderBottomRightRadius = br + "%"

          break;

        case "Bl":
          let bl = 0
          if (element.style.borderBottomLeftRadius.replace('%', '') != "")
            bl = parseInt(element.style.borderBottomLeftRadius.replace('%', ''));

          bl = this.Bl;
          (this.Bl == null ? bl = 0 : this.Bl = bl)

          element.style.borderBottomLeftRadius = bl + "%"

          break;
      }
    }
  }



  pointDown(position: string) {
    var direction = position.substring(1)

    this.mousemove.pipe(
      takeUntil(this.mouseup)
    ).subscribe((em: MouseEventInit) => {
      let x = em.movementX
      let valueOfRadius = 1//values do define if the border radius will increase or decrease

      if (x) {
        if (direction == 'r') {
          if (x > 0) {
            valueOfRadius = -1
          }
        }
        else {
          if (x < 0) {
            valueOfRadius = -1
          }
        }
        this.applyRadius(position, valueOfRadius);
      }
    })
  }


}
