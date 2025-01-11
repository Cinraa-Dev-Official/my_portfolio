import {Component, HostListener, inject} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import { NavbarComponent } from '../../compoenents/navbar/navbar.component';
import {NgClass, NgIf} from '@angular/common';
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    NgIf,
    RouterLink,
    MatIcon,
    NgClass
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  readonly router = inject(Router);

  screenWidth: number = window.innerWidth;
  selectedBtn: string = 'projects';

  isExtraLargeScreen: boolean = this.screenWidth > 1366; // 1920px or larger
  isLargeScreen: boolean = this.screenWidth <= 1366 && this.screenWidth > 1024; // Between 1366px and 1024px
  isMediumScreen: boolean = this.screenWidth <= 1024 && this.screenWidth > 412; // Between 1024px and 412px
  isLowScreen: boolean = this.screenWidth <= 412; // 412px or smaller

  // Listen for window resize events
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.screenWidth = (event.target as Window).innerWidth;

    // Update screen size flags
    this.isExtraLargeScreen = this.screenWidth > 1366; // 1920px or larger
    this.isLargeScreen = this.screenWidth <= 1366 && this.screenWidth > 1024; // Between 1366px and 1024px
    this.isMediumScreen = this.screenWidth <= 1024 && this.screenWidth > 412; // Between 1024px and 412px
    this.isLowScreen = this.screenWidth <= 412; // 412px or smaller
  }


  // Function to update the selected button
  selectProject(button: string): void {
    this.selectedBtn = button;
    this.router.navigateByUrl("/main/projects").then();
  }

  selectAbout(button: string): void {
    this.selectedBtn = button;
    this.router.navigateByUrl("/main/about").then();
  }
}
