const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  
  if (url === '/') {
    res.setHeader('Content-type', 'text/html')
    res.write('<html>')
    res.write('<head><title>Hello</title></head>')
    res.write('<body><h1>Welcome to my app</h1><form action="/create-user" method="POST"><input type="text" placeholder="username" name="username"><button type="submit">Submit</button></form></body>')
    res.write('</html>')
    return res.end()
  } 
  
  if (url === '/users') {
    res.setHeader('Content-type', 'text/html')
    res.write('<html>')
    res.write('<head><title>Hello</title></head>')
    res.write('<body><ul><li>UserBurak</li><li>UserMevlut</li></ul></body>')
    res.write('</html>')
    return res.end()
  } 

  if (url === '/create-user' && method === 'POST') {
    const body = []
    req.on('data', (chunk) => {
      body.push(chunk)
    })
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const user = parsedBody.split('=')[1]
      console.log(user)
    })
    res.statusCode = 302
    res.setHeader('Location', '/')
    return res.end()
  }
})

server.listen(3000)