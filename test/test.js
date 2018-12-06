

let search = require('gamepedia-api').search;
search("Cuphead", 1).then(result => { console.log(result) }).catch(err => { console.log("ERROR: "+err) });