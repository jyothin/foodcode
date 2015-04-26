Sample: bluemixcordovadata
===

The bluemixcordovadata sample demonstrates how an app can be written using the hybrid development approach, building the user experience with HTML5, CSS3 technologies and running them inside a Cordova application.

This sample works with the Mobile Cloud, an application boilerplate that is available on [IBM Bluemix](https://www.ng.bluemix.net). With this boilerplate, you can quickly incorporate pre-built, managed, and scalable cloud services into your mobile applications without relying on IT involvement. You can focus on building your mobile applications rather than the complexities of managing the back end infrastructure.

This sample uses [Cordova](http://cordova.apache.org/) to manage the native Mobile experience. The app uses the Mobile Cloud Data Service SDK through the Bluemix Cordova plugin to manage the CRUD (Create, Read, Update and Delete) operations. This enable the storage of data in the cloud and that is backed by  [Cloudant](https://cloudant.com/).

Check out the devWorks article [here](http://www.ibm.com/developerworks/mobile/library/mo-bluemix-cordova-plugin/index.html) to learn more.

Downloading this sample
---

You can clone this code from Jazzhub with the following command:

	git clone https://hub.jazz.net/project/ldeluca/bluemixcordovadata/

	
The bluemixdata code is located in the bluemixcordovadata/bluemixdata directory.
	
Prerequisite's
---
Before you can run the sample you need to install the prerequisite software components.

Download and install the node.js runtime from http://nodejs.org/

Then install `cordova`
```bash
npm install -g cordova
```

Running this sample
---

To help with your setup we strongly recommend working through the following Platform guides:
* [Cordova Getting Started Guide for IOS](http://cordova.apache.org/docs/en/3.3.0/guide_platforms_ios_index.md.html#iOS%20Platform%20Guide)
* [Cordova Getting Started Guide for Android](http://cordova.apache.org/docs/en/3.3.0/guide_platforms_android_index.md.html#Android%20Platform%20Guide)

To test the app you need to have created a Mobile Cloud Boilerplate application with [IBM Bluemix](http://bluemix.net) and you need to make a note of your application id, secret, and route.

### Configuration

To run the app you need to first modify the ```www/js/index.js``` file with your corresponding application id, secret, and route.

```
var values = {
    applicationId: "<INSERT_APPLICATION_ID_HERE>",
    applicationSecret: "<INSERT_APPLICATION_SECRET_HERE>",
    applicationRoute: "<INSERT_APPLICATION_ROUTE_HERE>"
};
```

### Testing the Sample

You need to make sure you have the latest `xcode` and `android` development tools installed on your development environment.

1. From the bluemixdata directory, add appropriate plugins (you will need both):  
	```cordova plugin add com.ibm.mobile.cordova.ibmbluemix```  
	```cordova plugin add com.ibm.mobile.cordova.ibmdata```
2. Then add the appropriate platform:  
	```cordova platform add android```  
	```cordova platform add ios```
3. Then run ```cordova run android``` or ```cordova run ios```

If a physical device is attached it will run on the device. If no device is attached, a new Android/iOS emulator will be launched.

> Notes.  
* 
* If you'd like to use the Cordova Bluemix push plugin check out the Dev Works article for push notifications [here](http://www.ibm.com/developerworks/mobile/library/mo-cordova-push-app/index.html).

