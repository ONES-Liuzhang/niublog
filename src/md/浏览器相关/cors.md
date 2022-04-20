# CORS（Cross-Origin-Resource-Share）跨源资源共享
MDN地址：[CORS](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS)
* same-origin policy 同源策略： 两个地址的`scheme + host + port`相同代表两个地址同源
* 为什么不能跨来源发送API
* 安全隐患

### 解决CORS问题
要先明确一个概念： 简单请求 和 非简单请求

Request请求分为简单请求和非简单请求

#### 简单请求

​	1. `POST`、`GET`、`HEAD`请求

​	2. request header 中没有携带额外信息（简单请求携带的信息可查询MDN）

​	3. `Content-Type`为 “multipart/form-data”、”text/plain”、”application/x-www-form-urlencoded”

解决：

​	后端添加 `response-header: Access-Control-Allow-Origin`来指定是否放行



#### 非简单请求

1. request header 中携带了自定义信息 比如版本号”X-VERSION: 0.13”

2. Content-Type 超出了简单请求所述的范围 比如”application/json”

   

   对非简单请求，浏览器会先发送一个`preflight request 预检请求（OPTIONS请求）`来询问后端是否放行

   

#### 预检请求

​	// …

​	`Access-Control-Request-Method: POST`

​	`Access-Control-Request-Headers: X-VERSION, Content-Type`

解决：

​	添加OPTIONS的response-header表示对该请求，允许接收的`request-header`字段

   * `Access-Control-Allow-Origin`
   * `Access-Control-Headers`: content-type, X-VERSION
   * `Access-Control-Max-Age`: 86400， 设置一个时间，在此时间内同一请求不再需要发送预检请求，浏览器自身维护了一个最大有效时间，如果该首部字段的值超过了最大有效时间，将不会生效
   * 等等



#### 携带Cookie的请求

​	一般来说，对跨源`XMLHttpRequest`和`fetch`请求，浏览器不会发送Cookie，如果需要发送，则request需要进行特殊设置

```javascript
	let invocation = new XMLHttpRequest()
	let url = "http://bar.other/resources/credentialed-content/"

	function callOtherDomain() {
		if(invocation) {
			invocation.open('GET', url, true)
			invocation.withCredentials = true;  // 如果要携带Cookie 进行特殊设置
			invocation.onreadystatechange = handler
			invocation.end()
		}
	}
```
后端也需要进行配置
  * Access-Control-Allow-Credentials: true   // 如果不配置则请求无法返回
	* Access-Control-Allow-Origin: https://foo.example		// 携带Cookie时不能设置为通配符