import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: "sijl-home", //Not needed since being rendered by router
    templateUrl: "./home.component.html",
    styleUrls: [ "./home.component.scss" ]
})
export class HomeComponent implements OnInit {

    title: string;

    constructor() {}

    ngOnInit() {
        this.title = "home";
    }  
}