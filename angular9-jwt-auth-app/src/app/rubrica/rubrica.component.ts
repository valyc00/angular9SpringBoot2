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
  itemsPerPage: number;
  totalItems: number;
  page: number;
  previousPage: number;

  constructor(private token: TokenStorageService,
    private rubricaService:RubricaService) { }

  ngOnInit(): void {
    this.page=1;
    this.itemsPerPage=5;

   this.findAllPage();
  }
  
  loadPage(page: number) {
    if (page !== this.previousPage) {
      this.previousPage = page;
      this.findAllPage();
    }
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
  

  findAllPage(): void {
    
    this.rubricaService.findAllPaged(this.page - 1,this.itemsPerPage).subscribe(
      data => {
        this.rubricas = data.content;
        this.totalItems = data.totalElements;
        console.log(this.rubricas)
      },
      err => {
        console.log("error");
      }
    );
    console.log(this.rubricas);
  }
  

}
