import { readFileSync } from 'fs';

function resolve(path) {
    return JSON.parse(readFileSync(path, 'utf8'))
}

export default resolve