/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        //initData();
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();
console.log('starting app...');

var ibmbluemix, ibmdata, bluemixdata;
var ibmcloudcode, ibmpush;
var values = {
    applicationId: "bf2b81d7-a02e-4d9b-8a83-183581a2ab81",
    applicationSecret: "bea34fc240d35375ca5fa396ecf5cd265f47e7c9",
    applicationRoute: "http://food-code.eu-gb.mybluemix.net"
};
function initData(){
    console.log("initData called FOR BLUEMIX CORDOVA PLUGIN---------------------------------");
    ibmbluemix = IBMBluemix;
    ibmdata = IBMData;
    
    // Initialize the IBM Bluemix SDK with the application parameters.
    ibmbluemix.initialize(values).then(function(config){
    
      return ibmdata.initializeService();
    
    }).then(function(data){
    
        bluemixdata = data;
      // Use the Data Services
        console.log("GOT THE DATA SERVICE, NOW TO USE IT");
        //alert('create an OBJECT');
           // createObject();
        alert('lookup all users');
        //getAllUsers();
    }).catch(function(err){
      ibmbluemix.getLogger().error("Error intializaing the Data SDK");  
    });   
}


