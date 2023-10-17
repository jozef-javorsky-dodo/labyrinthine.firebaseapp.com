import { Component } from "@angular/core";



@Component({
  selector: "app-html-body-main",
  templateUrl: "./html-body-main.component.html",
  styleUrls: ["./html-body-main.component.css"]
})



export class HtmlBodyMainComponent { }



setTimeout(() => {

  for (let yindex: number = <number>0; yindex <= <number>12; yindex++) {

    const tr_ele = document.createElement(<string>"tr");

    for (let xindex: number = <number>0; xindex <= <number>30; xindex++) {

      const td_ele = document.createElement(<string>"td");

      td_ele.style.border = <string>"1mm solid rgb(0, 0, 0)";
      td_ele.style.padding = <string>"2mm 2mm 2mm 2mm";
      td_ele.style.borderRadius = <string>"1mm";
      if ((yindex % Number(2) === <number>0) && (xindex % Number(2) === <number>0)) {
        td_ele.style.backgroundColor = <string>"rgb(244, 244, 244)";
        td_ele.style.borderColor = <string>"rgb(244, 244, 244)";
      }
      else if ((yindex % Number(4) === <number>0) && (xindex % Number(4) === <number>0)) {
        td_ele.style.backgroundColor = <string>"rgb(244, 244, 244)";
        td_ele.style.borderColor = <string>"rgb(244, 244, 244)";
      }
      else {
        td_ele.style.backgroundColor = <string>"rgb(122, 122, 122)";
        td_ele.style.borderColor = <string>"rgb(61, 122, 61)";
      }
      if (
        ((yindex === <number>0) || (yindex === <number>12)) ||
        ((xindex === <number>0) || (xindex === <number>30))
      ) {
        td_ele.style.backgroundColor = <string>"rgb(0, 0, 0)";
        td_ele.style.borderColor = <string>"rgb(0, 0, 0)";
      }
      if ((yindex === <number>0) && (xindex === <number>0))
        td_ele.style.backgroundColor = <string>"rgb(244, 122, 122)";
      if ((yindex === <number>1) && (xindex === <number>1))
        td_ele.style.backgroundColor = <string>"rgb(122, 244, 122)";
      if ((yindex === <number>12) && (xindex === <number>30))
        td_ele.style.backgroundColor = <string>"rgb(122, 122, 244)";
      tr_ele.appendChild(td_ele);
    }
    document.querySelector("#html-body-main-table-tbody")?.appendChild(tr_ele);
  }

},
  <number>333
);



setTimeout(() => {

  let startie: number = <number>32;
  const tds = document.querySelectorAll(<string>"td");
  const repe = () => {

    if (startie === <number>370) setTimeout(() => window.location.reload(), <number>1500);
    else {

      const startie_ele = tds[startie] as HTMLTableCellElement;
      const pos_i: number[] = [Number(-31), Number(-1), <number>1, <number>1, <number>31, <number>31];
      const nextie = startie + pos_i[Math.floor(Math.random() * <number>6)];
      const nextie_ele = tds[nextie] as HTMLTableCellElement;

      if (
        (nextie_ele.style.backgroundColor === <string>"rgb(122, 122, 122)") ||
        (nextie_ele.style.backgroundColor === <string>"rgb(31, 122, 31)")
      ) {
        nextie_ele.style.backgroundColor = <string>"rgb(122, 244, 122)";
        startie_ele.style.backgroundColor = <string>"rgb(31, 122, 31)";
        startie = nextie;
      }

      setTimeout(() => repe(), <number>18);

    }
  };

  repe();

},
  <number>667 + <number>333
);