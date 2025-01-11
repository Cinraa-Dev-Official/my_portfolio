import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  animations: [
    // Navbar animation
    trigger('navbar', [
      transition(':enter', [
        style({ transform: 'translate(-140px,-80px)', opacity: 0 }),
        animate('1s ease-out', style({ transform: 'translateY(0)', opacity: 1 })),
      ]),
    ]),
    // Active link bottom border animation
    trigger('activeLink', [
      state(
        'active',
        style({
          borderBottom: '3px solid white',
          paddingBottom: '5px',
        })
      ),
      state(
        'inactive',
        style({
          borderBottom: 'none',
        })
      ),
      transition('inactive => active', [
        style({ transform: 'translateX(-100%)', opacity: 1 }),
        animate('500ms ease-out', style({ transform: 'translateX(0)', opacity: 1 })),
      ]),
      transition('active => inactive', [
        animate('500ms ease-out', style({ opacity: 1 })),
      ]),
    ]),
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(private router: Router) {}

  // Utility function to check if the current route matches
  isActive(route: string): boolean {
    return this.router.url === route;
  }
}
