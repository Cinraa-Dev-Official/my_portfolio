import {Component, HostListener, Inject, PLATFORM_ID} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatFabButton} from "@angular/material/button";
import {isPlatformBrowser, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    MatIcon,
    MatButton,
    NgForOf,
    NgIf
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  email = "damjithfernando@gamil.com";
  contact_no = +94750134966;
  address = 'No 13 Walawwatta Mudukatuwa Marawila';
  screenWidth: number = 0;

  isExtraLargeScreen: boolean = false;
  isLargeScreen: boolean = false;
  isMediumScreen: boolean = false;
  isLowScreen: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.screenWidth = window.innerWidth;
      this.updateScreenFlags();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    if (isPlatformBrowser(this.platformId)) {
      this.screenWidth = (event.target as Window).innerWidth;
      this.updateScreenFlags();
    }
  }

  private updateScreenFlags() {
    this.isExtraLargeScreen = this.screenWidth > 1366;
    this.isLargeScreen = this.screenWidth <= 1366 && this.screenWidth > 1024;
    this.isMediumScreen = this.screenWidth <= 1024 && this.screenWidth > 500;
    this.isLowScreen = this.screenWidth <= 500;
  }

  experience = [
    {
      title: 'Software Engineer',
      company: 'ABC Corp.',
      duration: 'December 2020 - Present',
      description: 'Lorem ipsum dolor sit amet, ' +
        'consectetur adipiscing elit. Nulla facilisi. ' +
        'Donec sagittis, eros euismod posuere, mauris velit' +
        ' scelerisque nunc, in convallis orci neque vel neque.'
    }
  ]

  education = [
    {
      title: 'Java Programming Master Course',
      institution: 'Evotech Educational Institute',
      duration: 'Sep 2010 - May 2014',
      description: 'Successfully Completed Java Programming language certificate master program'
    },
    {
      title: 'Java Programming Master Course',
      institution: 'Evotech Educational Institute',
      duration: 'Oct 2010 - Jun 2014',
      description: 'Successfully Completed Java Programming language certificate master program'
    },
    {
      title: 'Java Programming Master Course',
      institution: 'Evotech Educational Institute',
      duration: 'Oct 2010 - Jun 2014',
      description: 'Successfully Completed Java Programming language certificate master program'
    }
  ]

  references = [
    {
      name: 'Hasika Sandaruwan',
      position: 'Software Architect',
      company: 'Seeker Cloud(PVT) Ltd.',
      country: 'Sri Lanka',
      contact: '+945723720439',
      email: 'hasika@seekercloud.com'
    },
    {
      name: 'Hasika Sandaruwan',
      position: 'Software Architect',
      company: 'Seeker Cloud(PVT) Ltd.',
      country: 'Sri Lanka',
      contact: '+945723720439',
      email: 'hasika@seekercloud.com'
    }
  ]

  downloadFile(type: string): void {
    let fileUrl = '';
    if (type === 'cv') {
      fileUrl = 'assets/coverLetter-cv/my_cv.pdf';
    } else if (type === 'cover-letter') {
      fileUrl = 'assets/coverLetter-cv/my_cv.pdf';
    }

    const link = document.createElement('a')
    link.href = fileUrl;
    link.download = fileUrl.split('/').pop() || 'file';
    link.click();
  }
}
