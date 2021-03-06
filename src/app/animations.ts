import { AnimationMetadata, animate, state, style, transition, trigger } from '@angular/animations';

// Component transition animations
export const slideInDownAnimation: AnimationMetadata =
    trigger('routeAnimation', [
        state('*',
            style({
                opacity: 1,
                transform: 'translateX(0)'
            })
        ),
        transition(':enter', [
            style({
                opacity: 0,
                transform: 'translateX(-100%)'
            }),
            animate('0.3s ease-in')
        ])
    ]);
