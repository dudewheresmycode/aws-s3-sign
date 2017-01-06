#aws-s3-sign
---
Generates a policy and signature for posting files via CORS to amazon Amazon S3.

**Install**
```bash
npm i --save aws-s3-sign
```

**Usage**

```javascript
var sign = require('aws-s3-sign');

var s3Signature = sign({
  awsSecret:'MY_AWS_SECRET_KEY',
  bucket:'my-bucket',
  acl:'private',
  key:'path/to/key.txt',
  expire: 300, //seconds till expire
  contentType:'text/plain'
});

console.log(s3Signature);
```
