const fs = require('fs')

fs.readdir('./', 'utf-8', (err, data) => {
    console.log(err);
    console.log(data)
    const obj = {}
    data.forEach(item => {
        obj[`/react-note/${item.replace('.md', '.html')}`] = ['heima0', 'heima1']
    })
    console.log(obj);
})