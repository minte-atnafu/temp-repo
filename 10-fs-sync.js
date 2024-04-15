const { readFileSync, writeFileSync } = require('fs')
console.log('Start')
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')
writeFileSync('./content/result-sync.txt', `ኦ እንዳንተ ያለ ወዳጅ ${first} ${second}`)
console.log('done with this task')
console.log('Go to the next task')


//-----------
(req, res) => {
    if (req.url === '/') {
        res.end('welcome to our home page')
    }
    if (req.url === '/about') {
        res.end('here is our short history')
    }
    res.end(`<h1>Oops!</h1>
        < p >We can't seem to find the page</p>
        <a href="/">back home</a>`)
    
}