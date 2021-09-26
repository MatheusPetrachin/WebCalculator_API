import { ElementRef } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AppService } from './app.services';
import { Calc } from './calc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  @ViewChild("valores") valores: ElementRef;

  myForm: FormBuilder;
  calc: Calc;

  resultado: string;
  
  constructor(private appService:AppService) { }

  ngOnInit(): void {      
    this.calc = new Calc();
  }

  postSum(calc: Calc){
    this.appService.postSum(calc).subscribe(data => {this.resultado = data.toString()});
  }

  postSubtraction(calc: Calc){
    this.appService.postSubtraction(calc).subscribe(data => {this.resultado = data.toString()});
  }

  postMultiplication(calc: Calc){
    this.appService.postMultiplication(calc).subscribe(data => {this.resultado = data.toString()});
  }

  postDivision(calc: Calc){
    this.appService.postDivision(calc).subscribe(data => {this.resultado = data.toString()});
  }

  valoresConvertidos(values: ElementRef): number[]{
    var valores: number[];
    valores = this.valores.nativeElement.value.split(",").map(function(item) {
        return parseInt(item, 10);
    });
    return valores;
  }

  sum() {  
    this.calc.values = this.valoresConvertidos(this.valores);
    this.postSum(this.calc);
  }

  subtraction() {      
    this.calc.values = this.valoresConvertidos(this.valores);
    this.postSubtraction(this.calc);
  }

  multiplication() {
    this.calc.values = this.valoresConvertidos(this.valores);
    this.postMultiplication(this.calc);
  }

  division() {
    this.calc.values = this.valoresConvertidos(this.valores);
    this.postDivision(this.calc);
  }
}


