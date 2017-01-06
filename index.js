
var crypto = require('crypto');

var sign = function(options){
  var default_options = {
    awsSecret:'',
    bucket:'',
    acl:'private',
    key:'',
    expire: 300, //seconds till expire
    contentType:'application/octet-stream'
  }
  var options = Object.assign(default_options, options);
  var policy = {
      'expiration': (new Date(((new Date()).getTime()+options.expire))).toISOString(),
      'conditions': {
        'bucket': options.bucket,
        'acl': options.acl,
        'key': options.key,
        'Content-Type': options.contentType
      }
  };
  var json = JSON.stringify(policy);
  var base64 = (new Buffer(json)).toString('base64');

  var generator = crypto.createHmac('sha1', options.awsSecret);
  generator.update(base64);
  var signature = generator.digest('base64')
  return {signature:signature, policy:base64, key:options.key};
}

module.exports = sign;
