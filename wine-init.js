var { spawnSync } = require('child_process');
if (!require('fs').existsSync('../.wine')) {
// include fs-extra package
var fs = require("fs-extra");
 
var source = '.wine'
var destination = '../.wine'

var file = JSON.parse(fs.readFileSync('run.json').toString());
 
// copy source folder to destination
fs.copy(source, destination, function (err) {
    if (err){
        console.log('An error occured while copying the folder.')
        return console.error(err)
    }
    console.log('Copy completed! Rerun to run CMD, or modify run.json to run any app.')
});
}
else {
var fs = require('fs');
var file = JSON.parse(fs.readFileSync('run.json').toString()).file;
spawnSync('wine64 '+file, {shell: true, stdio: "inherit"})
}