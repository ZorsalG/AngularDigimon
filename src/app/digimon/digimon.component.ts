import { Component, OnInit } from '@angular/core';
import { DigimonService } from '../services/digimon.service';

@Component({
  selector: 'app-digimon',
  templateUrl: './digimon.component.html',
  styleUrls: ['./digimon.component.css']
})
export class DigimonComponent implements OnInit {
  digimones:any;
  constructor(public digimon:DigimonService) { }

  ngOnInit(): void {
    this.digimon.getDigimones().subscribe(
      (r) =>  {this.digimones = r},
      (e) => { console.log(e)}
    )
  }
  api(){
    window.location.href = "https://digimon-api.vercel.app/api/digimon";
  }
}
