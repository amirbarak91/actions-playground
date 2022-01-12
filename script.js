const fs = require('fs');
const content = new Date().toISOString();

fs.writeFile('test.txt', content, err => {
    if (err) {
        console.error(err)
        return
    }
})