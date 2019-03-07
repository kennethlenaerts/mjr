import {
  trigger,
  transition,
  style,
  query,
  animate,
  group
} from '@angular/animations';

export const slider = trigger('routeAnimations', [
  transition('start => inventory', slideTo('right')),
  transition('start => shop', slideTo('right')),
  transition('inventory => start', slideTo('left')),
  transition('inventory => shop', slideTo('right')),
  transition('shop => inventory', slideTo('left')),
  transition('shop => start', slideTo('left')),
  transition('* => start', [
    query(':enter, :leave', [
      style({
        opacity: 0
      })
    ]),
    query(':enter', [animate('600ms ease', style({ opacity: 1 }))])
  ])
]);

function slideTo(direction) {
  const optional = { optional: true };
  return [
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          [direction]: 0,
          width: '100%'
        })
      ],
      optional
    ),
    query(':enter', [style({ [direction]: '-120%' })]),
    group([
      query(
        ':leave',
        [animate('600ms ease', style({ [direction]: '120%' }))],
        optional
      ),
      query(':enter', [animate('600ms ease', style({ [direction]: '0%' }))])
    ])
  ];
}
