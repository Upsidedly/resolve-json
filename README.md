# resolve-json
A simple function that resolves json files.  

## Example

### Project Structure

<img src="https://cdn.discordapp.com/attachments/937745991891824670/944604503104159874/unknown.png" width="250">

### config.json

```json
{
    "configstuff": "here"
}
```

### index.js

```js
import resolve from 'resolve-json';

const config = await resolve('./config.json')
// const config = { "configstuff": "here" }
```

## Usage

```js
import resolve from 'json-resolve'
// ...
resolve(path)
```


