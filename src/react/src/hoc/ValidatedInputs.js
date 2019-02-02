// Helpers
import {
  validateNotEmpty,
} from '../lib/validators';

import {
  prependSig,
} from '../lib/transformers';

import advancedInput from './advancedInput';

import { Input } from '../index'

// HOC validated form components
const RequiredInput = advancedInput({
  WrappedComponent: Input,
  validators: [
    validateNotEmpty,
  ],
});


export {
  RequiredInput,
}
