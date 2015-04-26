cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "runs": true
    },
    {
        "file": "plugins/com.ibm.mobile.cordova.ibmbluemix/www/IBMBluemixHybrid.js",
        "id": "com.ibm.mobile.cordova.ibmbluemix.hybrid",
        "clobbers": [
            "IBMBluemix.hybrid"
        ]
    },
    {
        "file": "plugins/com.ibm.mobile.cordova.ibmcloudcode/www/IBMCloudCodeHybrid.js",
        "id": "com.ibm.mobile.cordova.ibmcloudcode.hybrid",
        "clobbers": [
            "IBMCloudCode.hybrid"
        ]
    },
    {
        "file": "plugins/com.ibm.mobile.cordova.ibmdata/www/IBMDataHybrid.js",
        "id": "com.ibm.mobile.cordova.ibmdata.hybrid",
        "clobbers": [
            "IBMData.hybrid"
        ]
    },
    {
        "file": "plugins/com.ibm.mobile.cordova.ibmpush/www/IBMPushHybrid.js",
        "id": "com.ibm.mobile.cordova.ibmpush.hybrid",
        "clobbers": [
            "IBMPush.hybrid"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.0.1-dev",
    "com.ibm.mobile.cordova.ibmbluemix": "1.0.0-20150311-1224",
    "com.ibm.mobile.cordova.ibmcloudcode": "1.0.0-20150311-1224",
    "com.ibm.mobile.cordova.ibmdata": "1.0.0-20150311-1224",
    "com.ibm.mobile.cordova.ibmpush": "1.0.0-20150311-1224"
}
// BOTTOM OF METADATA
});