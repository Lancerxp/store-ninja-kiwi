import { Component, OnInit } from '@angular/core';
import { BloonService, Bloon } from '../../services/bloon.service';

@Component({
  selector: 'app-bloon-list',
  templateUrl: './bloon-list.component.html',
  styleUrls: ['./bloon-list.component.css']
})
export class BloonListComponent implements OnInit {
  bloons: Bloon[] = [];

  constructor(private bloonService: BloonService) {}

  ngOnInit(): void {
    this.bloonService.getAll().subscribe(data => {
      this.bloons = data;
    });
  }
}
