import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from '@angular/common/http';
import { Calc } from "./calc";


@Injectable({
    providedIn: 'root'
})
export class AppService {

    API: string = environment.apiUrl;

    constructor(private http: HttpClient) { }

    postSum(calc: Calc){
        return this.http.post<number>(this.API + 'Sum', calc);        
    }

    postSubtraction(calc: Calc){
        return this.http.post<number>(this.API + 'Subtraction', calc);        
    }

    postMultiplication(calc: Calc){
        return this.http.post<number>(this.API + 'Multiplication', calc);        
    }

    postDivision(calc: Calc){
        return this.http.post<number>(this.API + 'Division', calc);        
    }

}