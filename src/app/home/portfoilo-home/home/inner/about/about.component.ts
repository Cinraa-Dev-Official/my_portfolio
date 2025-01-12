import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatFabButton} from "@angular/material/button";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    MatIcon,
    MatFabButton,
    MatButton,
    NgForOf
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  email = "damjithfernando@gamil.com";

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
      duration: 'September 2010 - May 2014',
      description: 'Successfully Completed Java Programming language certificate master program'
    },
    {
      title: 'Java Programming Master Course',
      institution: 'Evotech Educational Institute',
      duration: 'September 2010 - May 2014',
      description: 'Successfully Completed Java Programming language certificate master program'
    }
  ]

  references = [
    {
      name: 'Hasika Sandaruwan',
      position: 'Software Architect',
      company: 'Seeker Cloud(PVT) Ltd. | Sri Lanka',
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
