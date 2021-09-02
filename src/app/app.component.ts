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
  subs?: Subscription

  mousemove = fromEvent(document, 'mousemove');
  mouseup = fromEvent(document, 'mouseup');

  ngOnInit(): void {
  }

  onHoverClick(position: string, multiplier: number) {
    debugger
    var element = document.getElementById("innerBox");

    if (element) {
      switch (position) {

        case "Tl":
          let tl = 0
          if (element.style.borderTopLeftRadius.replace('%', '') != "")
            tl = parseInt(element.style.borderTopLeftRadius.replace('%', ''))

          tl += multiplier

          element.style.borderTopLeftRadius = tl + "%"
          break;

        case "Tr":
          let tr = 0
          if (element.style.borderTopRightRadius.replace('%', '') != "")
            tr = parseInt(element.style.borderTopRightRadius.replace('%', ''))

          tr += multiplier

          element.style.borderTopRightRadius = tr + "%"

          break;

        case "Br":
          let br = 0
          if (element.style.borderBottomRightRadius.replace('%', '') != "")
            br = parseInt(element.style.borderBottomRightRadius.replace('%', ''))

          br += multiplier

          element.style.borderBottomRightRadius = br + "%"
          break;

        case "Bl":
          let bl = 0
          if (element.style.borderBottomLeftRadius.replace('%', '') != "")
            bl = parseInt(element.style.borderBottomLeftRadius.replace('%', ''))

          bl += multiplier

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
      debugger
      let x = em.movementX
      let valueOfRadius = 1//values do define if the border radsu will increase or decrease

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
        this.onHoverClick(position, valueOfRadius);
      }
    })
  }
}
