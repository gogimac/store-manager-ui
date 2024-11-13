import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class LoaderService {
    loaderSubject = new BehaviorSubject<boolean>(false);
    loader$: Observable<boolean> = this.loaderSubject.asObservable();
    constructor() {}

    loaderOn(): void{
        this.loaderSubject.next(true);
    }

    loaderOff(): void {
        this.loaderSubject.next(false);
    }
}