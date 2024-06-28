const path=require('path');//it give the correct path
//namma oru oru router poi root path ya access panni atha usew pantraku pathila enga namma oru root path create panna porom
const rootdir=path.dirname(require.main.filename);
//require.main.filename=>it direct takes the oath from apps.js and set it to the root const
//it takes the path of teh file from harddisk to that sendFile


module.exports =rootdir;