import {Component, HostListener, inject} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {Router, RouterLink} from "@angular/router";
import {routes} from "../../../../../app.routes";
import {MarqueeTechComponent} from "./compoenets/marquee-tech/marquee-tech.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-dashoard-home',
  standalone: true,
  imports: [
    MatIcon,
    RouterLink,
    MarqueeTechComponent,
    NgIf
  ],
  templateUrl: './dashoard-home.component.html',
  styleUrl: './dashoard-home.component.scss'
})
export class DashoardHomeComponent {

  readonly router = inject(Router);

  screenWidth: number = window.innerWidth;

  isExtraLargeScreen: boolean = this.screenWidth > 1366; // 1920px or larger
  isLargeScreen: boolean = this.screenWidth <= 1366 && this.screenWidth > 1024; // Between 1366px and 1024px
  isMediumScreen: boolean = this.screenWidth <= 1024 && this.screenWidth > 412; // Between 1024px and 412px
  isLowScreen: boolean = this.screenWidth <= 412; // 412px or smaller

  moreBtn() {
     this.router.navigateByUrl("//main/about").then();
  }

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


