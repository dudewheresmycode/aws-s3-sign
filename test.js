var sign = require('./index.js');

var s3Signature = sign({
  awsSecret:"SEC",
  bucket:'mybucket',
  acl:'private',
  key:'some/key.txt',
  expire: 300, //seconds till expire
  contentType:'application/octet-stream'
});

console.log(s3Signature);

//returns something like
// {
//   signature: 'lxA7MIXSdTYjL...',
//   key: 'some/key.txt',
//   policy:
//    { expiration: '2017-01-06T08:15:06.461Z',
//      conditions:
//       { bucket: 'mybucket',
//         acl: 'private',
//         key: 'some/key.txt',
//         'Content-Type': 'application/octet-stream' } }
// }
