import { TokenStorageService } from './../services/token-storage.service';
import { RubricaService } from './../services/rubrica.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rubrica',
  templateUrl: './rubrica.component.html',
  styleUrls: ['./rubrica.component.css']
})
export class RubricaComponent implements OnInit {
  rubricas: any;

  constructor(private token: TokenStorageService,
    private rubricaService:RubricaService) { }

  ngOnInit(): void {
   this.findAll();
  }
  
  
  findAll(): void {
    this.rubricaService.findAll().subscribe(
      data => {
        this.rubricas = data;
        console.log(this.rubricas)
      },
      err => {
        console.log("error");
      }
    );
    console.log(this.rubricas);
  }
  
  

}
