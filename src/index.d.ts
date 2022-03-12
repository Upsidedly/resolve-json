declare interface unknownExport { [key: string]: any, default: any }
/**
    * Requires a JSON.
    * @param {string} path
    * The path of the JSON file.
    * @returns {{[key: string]: any}} JSON or provides error
*/
declare function resolve<T extends string>(path: T): unknownExport

export default resolve