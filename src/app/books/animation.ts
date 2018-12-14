import {animate, state, style, transition, trigger} from '@angular/animations';


export let slide = trigger('slide', [
  transition(':enter', [
    style({transform: 'translateX(-10px)'}),
    animate(1000)
  ])
]);

export let fade = trigger('fade', [
  state('void', style({opacity: 0})),
  transition(':enter, :leave', [
    animate(800)
  ])
]);

