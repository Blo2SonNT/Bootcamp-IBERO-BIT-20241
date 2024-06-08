import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inicioadmin',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './inicioadmin.component.html',
  styleUrl: './inicioadmin.component.css'
})
export class InicioadminComponent {

}
