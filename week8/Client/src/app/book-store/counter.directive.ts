import {Directive, ViewContainerRef, TemplateRef, Input, Attribute, SimpleChanges, OnChanges} from '@angular/core';
@Directive({
    selector:"[counterOf]"
})
export class CounterDirective implements OnChanges {
    constructor (private container: ViewContainerRef, private template:TemplateRef<any>) { }

    @Input("counterOf")
    counter!: number;
    ngOnChanges(_changes: SimpleChanges) {
        this.container.clear();
        for(let index = 0; index < this.counter; index++) {
            this.container.createEmbeddedView(this.template, new CounterDirectiveContext(index + 1));
        }
    }
}

class CounterDirectiveContext {
    constructor(public $implicit:any) {

    }
}