import { FormAssociated } from '../form-associated/form-associated.js';
import { FoundationElement } from '../foundation-element/foundation-element.js';

class _TextField extends FoundationElement {}

/**
 * A form-associated base class for the TextField component.
 *
 * @internal
 */
export class FormAssociatedTextField extends FormAssociated(_TextField) {
  constructor() {
    super(...arguments);
    this.proxy = document.createElement('input');
  }
}
