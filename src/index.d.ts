declare interface unknownExport { [key: string]: any, default: any }
/**
    * Requires a JSON.  
    * (Uses fs path)
    * @param {string} path
    * The path of the JSON file.
    * @returns {{[key: string]: any}} Object data or null
    * @example ```js
    * import resolve from 'resolve-json'
    * 
    * /* config data: {
    *   { this: 'hi', that: 'bye'}
    * } //
    * 
    * const config = import('./config.json')
    * 
    * console.log(config.this) // 'hi' 
    * ```
*/
declare function resolve<T extends string>(path: T): unknownExport

export default resolve