const shelljs = require('shelljs')
shelljs.exec(`node local.js -s appName.herokuapp.com -l 1080 -m methodValue -k keyValue -r 80`)
