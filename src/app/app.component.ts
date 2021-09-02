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

  lastPosition  : number = 0


  ngOnInit(): void {



  }

  onHoverClick(position: string, multiplier: number) {
    debugger
    var element = document.getElementById("innerBox");

    if (element) {



      switch (position) {

        case "Tl":
          let tl = 0
          if(element.style.borderTopLeftRadius.replace('%', '')!="")
           tl = parseInt(element.style.borderTopLeftRadius.replace('%', ''))

           tl += multiplier

          element.style.borderTopLeftRadius = tl + "%"
          break;

        case "Tr":
          let tr = 0
          if(element.style.borderTopRightRadius.replace('%', '')!="")
           tr = parseInt(element.style.borderTopRightRadius.replace('%', ''))

           tr += multiplier

          element.style.borderTopRightRadius = tr + "%"

          break;

        case "Br":
          let br = 0
          if(element.style.borderBottomRightRadius.replace('%', '')!="")
           br = parseInt(element.style.borderBottomRightRadius.replace('%', ''))

           br += multiplier

         element.style.borderBottomRightRadius = br + "%"
          break;

        case "Bl":
          let bl = 0
          if(element.style.borderBottomLeftRadius.replace('%', '')!="")
           bl = parseInt(element.style.borderBottomLeftRadius.replace('%', ''))

           bl += multiplier

         element.style.borderBottomLeftRadius = bl + "%"
          break;
      }
    }



  }

  changeRadius() {

  }


  pointDown(position: string) {
    this.mousemove.pipe(
      takeUntil(this.mouseup)
    ).subscribe((em: MouseEventInit) => {
      debugger
      let x = em.screenX
      if (x) {
        if (this.lastPosition < x) {
          this.onHoverClick(position, -1);
          this.lastPosition = x;
        }
        else {
          this.onHoverClick(position, 1);
          this.lastPosition = x;
        }
      }

    })
  }
}
