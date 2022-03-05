import { readFile } from 'fs/promises';
/**
     * Requires a JSON.
     * @param {string} path
     * The path of the JSON file.
     * @returns {{[key: string]: any}} JSON or provides error
     */
export default async (path) => JSON.parse(await readFile(path, 'utf8'));
//# sourceMappingURL=index.js.map