import { Directive,ElementRef } from '@angular/core';

/**
 * Generated class for the MyDirective directive.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
 * for more info on Angular Directives.
 */
@Directive({
  selector: '[my-directive]' // Attribute selector
})
export class MyDirective {

  constructor(public element:ElementRef) {
    console.log('Hello MyDirective Directive');
  }

}
