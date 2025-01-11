import {Component, HostListener} from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-marquee-tech',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './marquee-tech.component.html',
  styleUrl: './marquee-tech.component.scss'
})
export class MarqueeTechComponent {
  screenWidth: number = window.innerWidth;

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
}
