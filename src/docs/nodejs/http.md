# Http

### 开启一个Server

```js
const http = require("http")
const port = 8085
const host = "127.0.0.1"
http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/plain;charset=utf-8"
  })
  res.end("你好呀")
}).listen(port, host)

console.log(`Server running at http://${host}:${port}/`);
```

### 发送http请求

```js
const http = require("http")
const options = {
  host: "127.0.0.1",
  port: 8085,
  path: "/",
  method: "GET"
}
const req = http.request(options, res => {
  console.log(`Status=${res.status}, Header=${JSON.stringify(res.header)}`)
  res.setEncoding("utf8")
  res.on("data", (data) => {
    console.log(data)
  })
})
req.end()
```

