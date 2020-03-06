'use strict';

import Utilities from './helpers/utilities';
import Constants from './helpers/constants';

console.log(Utilities.isNullOrEmpty(''));
console.log(Utilities.isEmptyObject({}));
console.log(Utilities.clearNullOrEmpty(null, 'Lol'));

console.log('Version', Constants.VERSION);

class A {
    private util: Utilities;

    constructor(util: Utilities) {
        this.util = util;
    }

    print(s: string) {
        if (!this.util.isNullOrEmpty(console.log(s))) {
            console.log(s);
        }
    }
}

new A(new Utilities());