// interface Utilities {
//     isNullOrEmpty(obj: any): boolean;
//     isEmptyObject(obj: any): boolean;
//     clearNullOrEmpty(obj: any, _default: any): any
// }

//type isNullOrEmpty = (obj: any) => boolean;

function isNullOrEmpty(obj: any): boolean {
    return obj === null || obj === undefined || obj === '';
}

function isEmptyObject(obj: any): boolean {
    return isNullOrEmpty(obj) || Object.keys(obj).length === 0;
}

function clearNullOrEmpty(obj: any, _default: any): any {
    return isNullOrEmpty(obj) ? (!isNullOrEmpty(_default) ? _default : '') : obj;
}

// export default Utilities;

export default {
    isNullOrEmpty,
    isEmptyObject,
    clearNullOrEmpty
}