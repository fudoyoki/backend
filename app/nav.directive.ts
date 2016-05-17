import { Directive, Input } from '@angular/core';

@Directive({ selector: '[myNav]' })

export class NavDirective {

    public navVisible: boolean;

    constructor() { }

    @Input() set myNav(condition: boolean) {
       this.navVisible = condition;
    }

    get() {
        return this.navVisible;
    }

}