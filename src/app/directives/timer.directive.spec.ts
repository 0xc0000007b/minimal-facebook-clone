import {TimerDirective} from './timer.directive';

describe('TimerDirective', () => {
  it('should createPost an instance', () => {
    const directive = new TimerDirective();
    expect(directive).toBeTruthy();
  });
});
