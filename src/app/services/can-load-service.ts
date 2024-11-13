import { CanLoad, Route, UrlSegment, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { environment } from "src/environment/environment";

export class CanLoadService implements CanLoad{ 
    canLoad(route: Route, seglemnts: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree { 
        return new Observable (
            obs => { 
                setTimeout(() => { obs.next(true)}, environment.delay);
            }
        )
    }
}