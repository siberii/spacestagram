import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
    template: '',
})
export class SubscriberComponent implements OnDestroy {
    subscriptions: Subscription[];
    constructor() {
        this.subscriptions = [];
    }

    ngOnDestroy(): void {
        for (const subscription of this.subscriptions) {
            subscription.unsubscribe();
        }
        this.subscriptions = [];
    }
}
