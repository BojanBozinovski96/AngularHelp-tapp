import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-header', // This is used to use the component inside another component by using <app-header></app-header> or <div app-header />
  standalone: true, // This is the new way of working with components, it is used to avoid the use of the Modules, as it makes the component function like a module
  imports: [
    // This is used to import the modules that are needed to use the component. It's only used when the component IS standalone
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterLink,
    NgOptimizedImage,
  ],
  templateUrl: './header.component.html', // link to the component's HTML file (TEMPLATE)
  styleUrls: ['./header.component.scss'], // links to the component's SCSS file (STYLES)
})
export class HeaderComponent {}
