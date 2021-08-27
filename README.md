# JWT

## http & https

1、http

```text
http 是一种无状态的请求，当时只是为了满足大家浏览 web 文档的要求，这也是 HTTP 为无状态的原因，因为它诞生之初就没有这个需求。
```

2、https

## cookie & session & token

1、cookie

```text
由于http的无状态，当用户在网站进行登录、评论、购物等交互行为时需要记录用户的行为以免记录丢失，于是cookie诞生。
cookie 是一种小型的文本文件，大约4kb。在每次发起请求时浏览器会自动加到请求头中。
用户识别信心存储在客户端。
```

2、session（会话机制）

```text
由于用户的行为信息都会保存在 server 中，所以在 cookie 里只要保存能识别用户身份的信息，知道是谁发起了加入购物车操作即可，这样每次请求后只要在 cookie 里带上用户的身份信息，请求体里也只要带上本次用户行为信息，大大减少了 cookie 的体积大小，我们把这种能识别哪个请求由哪个用户发起的机制称为 session（会话机制），生成的能识别用户身份信息的字符串称为 sessionId。
用户识别信心存储在客户端和服务端。
```

3、token（jwt）

```text
用户识别信心存储在客户端。
```

## CORS

```text
CORS是一个W3C标准，全称是"跨域资源共享"（Cross-origin resource sharing）。
CORS需要浏览器和服务器同时支持。目前，所有浏览器都支持该功能，IE浏览器不能低于IE10。
浏览器将CORS请求分成两类：简单请求（simple request）和非简单请求（not-so-simple request）。

```

CORS 相关字段

```text
Access-Control-Allow-Origin
Access-Control-Allow-Methods
Access-Control-Allow-Headers
```

## 相关文档

https://mp.weixin.qq.com/s/-GtXqof0sacwkBYpqVzrlw
https://mp.weixin.qq.com/s/ujy0SG2rKlk7_pMGrjgiWg
https://www.jianshu.com/p/5dce55bff521
https://www.ruanyifeng.com/blog/2016/04/cors.html
