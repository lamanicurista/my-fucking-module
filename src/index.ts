'use strict';

import Utilities from './helpers/utilities';
import Constants from './helpers/constants';

console.log(Utilities.isNullOrEmpty(''));
console.log(Utilities.isEmptyObject({}));
console.log(Utilities.clearNullOrEmpty(null, 'Lol'));

console.log('Version', Constants.VERSION);