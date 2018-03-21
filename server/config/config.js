var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development: {
        rootPath: rootPath,
        db: 'mongodb://yostkb:1234567890@ds255958.mlab.com:55958/archidesign',
        port: process.env.PORT || 9001
    }
};

// mongodb://<dbuser>:<dbpassword>@ds255958.mlab.com:55958/archidesign
