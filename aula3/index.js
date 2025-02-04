const fs = require('fs').promises;
const path = require('path');

/*s.readdir(path.resolve(__dirname))
    .then(files => console.log(files)) 
    .catch(e => console.log(e));
*/

async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname)
    const files = await fs.readdir()
    walk(files);
}

function walk(files) {
    for(let file of files) {
        console.log(file);
    }
}


readdir()


