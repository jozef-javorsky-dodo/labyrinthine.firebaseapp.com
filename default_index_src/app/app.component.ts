import { Component } from "@angular/core";



@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})



export class AppComponent {
  title = <string>"labyrinthine";
}









const faviconer = () => {


  setTimeout(() => {
    document.querySelector(<string>"#html-head-link-fav")?.
      setAttribute(
        <string>"href",
        <string>"data:image/x-icon;" +
        <string>"base64," +
        <string>"iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AA" +
        <string>"AABGdBTUEAALGPC/xhBQAAAAlwSFlzAAASdAAAEnQB3mYf" +
        <string>"eAAAACxJREFUOE9j+FJVBUcMxIBBqAEZILR+IU7zINQwnA" +
        <string>"EiKKq+QIXwA3pqqPoCAIv4W4F5t+JDAAAAAElFTkSuQmCC"
      );
  },
    <number>1
  );


  setTimeout(() => {
    document.querySelector(<string>"#html-head-link-fav")?.
      setAttribute(
        <string>"href",
        <string>"data:image/x-icon;" +
        <string>"base64," +
        <string>"iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAAXNSR0IArs4c6QAAAA" +
        <string>"RnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAABaSURBVDhPY/xSVcUA" +
        <string>"AzxtbVVIXKwAXQOUhQMAjWOCMokGJGsgDYCchObLKqCfYAgqhApo7wfSPU0wppABOf" +
        <string>"FAmg1AwAKl8QJgGENZ9AglkJPwe6MNOQkzMAAAztYcp2Wx5jAAAAAASUVORK5CYII="
      );
  },
    <number>500
  );


  setTimeout(() => {
    document.querySelector(<string>"#html-head-link-fav")?.
      setAttribute(
        <string>"href",
        <string>"data:image/x-icon;" +
        <string>"base64," +
        <string>"iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAAXNSR0IArs4c6QAAAARnQU1B" +
        <string>"AACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAABtSURBVDhPtZJRCsAgDEPr2OdO3AP0" +
        <string>"xDvAKktBMl11sIdgFGuMtJyqEhxm2iy7bJgDM4MawA5QPW5zdkgpmCeAQ5qSqE+iGvVYMbDV" +
        <string>"sJzh/4IaYD63n1xz8D7YIV/x/4L6kAEOoxjPXkwc+CKRCyygIqqpQVL6AAAAAElFTkSuQmCC"
      );
  },
    <number>1000
  );


  setTimeout(() => {
    document.querySelector(<string>"#html-head-link-fav")?.
      setAttribute(
        <string>"href",
        <string>"data:image/x-icon;" +
        <string>"base64," +
        <string>"iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAAXNSR0IArs4c6QAAAARnQU1BAAC" +
        <string>"xjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAB0SURBVDhPlZFhCsAgCEYr9nMn9gCeuAOs0a" +
        <string>"eEOV2PgTZ45Ge1ExXhZqbl6NJQBWZG94EVBrFjR0K3oaPWWVJUaGlKw5vhyEFo49BIJh9+Cc6WY" +
        <string>"v4KuuuDG6ZTdfr0jScXasjIjm4V9uW6d0YZ3PdJQlunlAefySdh5XHgvQAAAABJRU5ErkJggg=="
      );
  },
    <number>1500
  );


  setTimeout(() => {
    document.querySelector(<string>"#html-head-link-fav")?.
      setAttribute(
        <string>"href",
        <string>"data:image/x-icon;" +
        <string>"base64," +
        <string>"iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv" +
        <string>"8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAACCSURBVDhPlZHRDcAgCAXR9JOJHYCJGaBUEa2hVO8HbH" +
        <string>"KERxOXAh0kKtPTJWvtEJF2H6yCEDvrStoBMLN2FZuSWokR2YT8m3LhyXDkaOh959JaF0VEfcgIno6Ba" +
        <string>"BOds7qM0K3s0JwDQRBnZBDmn/XKU8b3FNzH9p6FaCV31k+G1QG4Aaq5L7VxFv6XAAAAAElFTkSuQmCC"
      );
  },
    <number>2000
  );


  setTimeout(() => faviconer(), <number>2500);


};



window.onload = () => faviconer();