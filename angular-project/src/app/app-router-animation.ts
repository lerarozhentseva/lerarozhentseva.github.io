import {trigger, transition, style, animate} from '@angular/animations';

export const swipeAnimation =
  trigger('routeAnimations', [
    transition('* <=> *', [
      style({opacity: 0}),
      animate('3000ms ease-in-out', style({opacity: 1}))
    ])
  ]);
