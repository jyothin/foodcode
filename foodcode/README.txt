Author: Jyothin Madari (jyothin.madari.nabla@gmail.com)
For license, distribution, usage, and everything else Jyothin Madari

Build Instructions:

  Required (https://www.ng.bluemix.net/docs/#starters/mobile.html) :
    - Cordova build environment
      $> npm install cordova
      $> npm install grunt
      $> npm install bower
      $> npm install ionic

  Cordova Platforms Required:
    - android 3.6.4
    OR create a new app
      $> cordova create foodcode com.foodcode.footcode "FoodCode"

      $> cd foodcode
      $> cordova platform add android
      $> cordova platform update android

  Cordova Plugins Required:
    - com.ibm.mobile.cordova.ibmbluemix
    - com.ibm.mobile.cordova.ibmcloudcode 
    - com.ibm.mobile.cordova.ibmdata 
    - com.ibm.mobile.cordova.ibmpush

    - org.apache.cordova.device
    - org.apache.cordova.camera
    - org.apache.cordova.dialogs
    - org.apache.cordova.vibration
    - org.apache.cordova.geolocation
      $> cordova plugin add <plugin>

  Cordova Build:
    $> cordova build

  Cordova clean
    $> ./cleanup

  For debugging in browser:
    - Set DEBUG=true in init.js
    - Comment cordova.js script tag in *.html files
    - Set href="#settings-view" and href="#filter-view" in index.html icon pull right
    - Comment out initializeParsePlugin in index.js
    - Open index.html in browser

  For Android:
    - Set DEBUG=false in init.js
    - Uncomment cordova.js script tag in *.html files
    - Set href="" and href="" in index.html icon pull right
    - Uncomment out initializeParsePlugin in index.js
    - Attach device (or run on emulator)
    - cordova run android --verbose
      OR
      adb install -r platforms/android/ant-build/Cordova-debug.apk
    - adb logcat *:S AndroidRuntime:* CordovaApp:* CordovaActivity:* CordovaLog:*

Release Notes:

  Version 0.0.1:
    Change log:
      - Initial release
    Known Issues:

