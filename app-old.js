const http = require('http')

const server = http.createServer((req, res) => {
  res.write('Hello World')
  res.end()
  
  /* console.log(req)
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.writeHead('Content-Disposition', 'attachment; filename=list.csv')
  res.writeHead(200, { 'Content-Type': 'application/csv' })
  res.write('id, name\n')
  res.write('1, Edson\n')
  res.write('2, Jahir\n')
  res.write('3, Edgar\n')

  const person = {
    id: 1,
    name: 'Edson'
  }

  res.write(JSON.stringify(person)) */
  
}).listen(8080)

console.log('Listening at port: ', 8080)
