cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.ibm.mobile.cordova.ibmbluemix/www/IBMBluemixHybrid.js",
        "id": "com.ibm.mobile.cordova.ibmbluemix.hybrid",
        "clobbers": [
            "IBMBluemix.hybrid"
        ]
    },
    {
        "file": "plugins/com.ibm.mobile.cordova.ibmdata/www/IBMDataHybrid.js",
        "id": "com.ibm.mobile.cordova.ibmdata.hybrid",
        "clobbers": [
            "IBMData.hybrid"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.ibm.mobile.cordova.ibmbluemix": "1.0.0-20150311-1224",
    "com.ibm.mobile.cordova.ibmdata": "1.0.0-20150311-1224"
}
// BOTTOM OF METADATA
});