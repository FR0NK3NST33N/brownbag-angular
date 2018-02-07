import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: "sijl-test", //Not needed since being rendered by router
    templateUrl: "./test.component.html",
    styleUrls: [ "./test.component.scss" ]
})
export class TestComponent implements OnInit {

    title: string;

    constructor() {}

    ngOnInit() {
        this.title = "test";
    }  
}