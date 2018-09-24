if(process.env === 'production'){
    module.exports = require('./env_prod')
}else{
    module.exports = require('./env_dev')
}