// src/app/app.component.ts
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { routeAnimations } from './core/animations/route.animations';
import { Observable, Subscription } from 'rxjs';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations]
})
export class AppComponent implements OnInit, OnDestroy {
    public isMobileDevice$!: Observable<BreakpointState>;
    private isMobileDeviceSubscription!: Subscription;
    public isMobileDevice = false;
    public navigation = [
        { link: 'product-list', label: 'Products', icon: 'face' }
    ];

    @ViewChild('sNav') private sideNav!: MatDrawer;

    constructor(private breakpointObserver: BreakpointObserver) {}

    ngOnInit(): void {
        // Subscribe to breakpoint observer for mobile detection
        this.isMobileDevice$ = this.breakpointObserver.observe(Breakpoints.Handset);
        this.isMobileDeviceSubscription = this.isMobileDevice$.subscribe((state: BreakpointState) => {
            this.isMobileDevice = state.matches;
        });
    }

    ngOnDestroy(): void { 
        // Unsubscribe to prevent memory leaks
        if (this.isMobileDeviceSubscription) {
            this.isMobileDeviceSubscription.unsubscribe();
        }
    }

    handleRouteChange(): void { 
        // Close the side navigation if it's open on a mobile device
        if (this.isMobileDevice && this.sideNav) { 
            this.sideNav.close();
        }
    }
}
