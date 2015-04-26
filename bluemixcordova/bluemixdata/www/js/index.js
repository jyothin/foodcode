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
        initData();
    }
};

var ibmbluemix, ibmdata, bluemixdata;
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
        getAllUsers();
    }).catch(function(err){
      ibmbluemix.getLogger().error("Error intializaing the Data SDK");  
    });   
}


// http://mbaas-gettingstarted.ng.bluemix.net/hybrid#get-started-with-mobile-data
function createObject(username, age, location){
    // Create a Person object
    var person = bluemixdata.Object.ofType("Person", {
        "name": username
    });
    // Add some more properties
    person.set("age",age);
    person.set({
        location: location,
        phone: "(555) 234-4423"
    });
    
    person.save().then(function(savedPerson){
      // Person has been save successfully
        console.log("====save successful");
    },function(err){
      // Handle Errors
        console.log("----------------ERROR CREATING OBJECT");
    });
    
    //refresh list
    getAllUsers();
}


function getAllUsers(){
    console.log("-------------- about to get all users");
    //var data = IBMData.hybrid.getService();
    var query = bluemixdata.Query.ofType("Person");
    //LISA TESTvar query = IBMQuery.queryForClass("Person");
    console.log("-------------- got the query object");
    query.find().done(function(people) {
        console.log("$$$$$$$$$$$$$$$$$$-------------- done finding all");
        var users = "";
        var usercount = 0;
        people.forEach(function(person) {
            //Print out each person
            console.log('GOT A PERSON' + JSON.stringify(person));
            var currperson = person.attributes;
            var currid = person._meta.objectId;
            console.log('GOT A currPERSON' + JSON.stringify(currperson));
            users = users + currperson.name + ' age: ' + currperson.age + ' location: ' + currperson.location + '<button name="deleteUser" onclick="deleteObject(\''+currid+'\'); return false;">delete user ' + currperson.name + '</button>' + '<br />';
            usercount++;
        });
        if (usercount > 0){
            document.getElementById('users').innerHTML = users;
        } else {
            document.getElementById('users').innerHTML = "There are currently no users on the IBM Bluemix cloud";
        }
    }, function(error){
        //If an error occurs in any of the above requests.
        console.error("------------An error occurred finding all users: "+error);
        console.error(JSON.stringify(error));
    });
}

function getAllUsersWithName(username){
    var query = bluemixdata.Query.ofType("Person");
    
    //Find objects with the name and delete them.
    query.find({name: username}).done(function(users){
        users.forEach(function(curruser){
            //curruser.del();
            console.log(curruser);
        });
    });
}

//get person by name and update them
function updateData(username, newage){
    console.log('about to update the person with name: ' + username + ' with age: ' + newage);
    var query = bluemixdata.Query.ofType("Person");
    var updatedPerson = {age:newage, name:username};
    // retrieve John
    query.find({name: username}).then(function(people){
        // Update the details.
        people.forEach(function(person){
            person.set(updatedPerson);
            
           person.save().then(function(savedPerson){
                console.log("successfully saved person: " + JSON.stringify(savedPerson));
                 //refresh list
                //getAllUsers();
                return savedPerson.read();
            }).done(function(latest){
                console.log("************************** READ *********************");
              console.log("TESTING READ AFTER UPDATING INFO: " + JSON.stringify(latest));  
            });
        });
        
    });
}

function deleteByName(user2del){
    console.log('*******************about to delete user with name: ' + user2del);
    var query = bluemixdata.Query.ofType("Person");
    query.find({name: user2del}).then(function(people){
        // Update the details.
        people.forEach(function(person){
            person.del().done(function(deleted) {
                var isDeleted = deleted.isDeleted();
                console.log("Object deleted? %s", isDeleted ? "yes" : "no");
                //refresh list
                getAllUsers();
            });
        });
    }, function(error){
    //If an error occurs in any of the above requests.
    console.error("An error occurred deleting the user: "+error);
});
}

function deleteObject(objId){
    console.log('*******************about to delete user: ' + objId);
    bluemixdata.Object.withId(objId).done(function(obj){
            obj.del();
        
            //refresh list
            getAllUsers();
        }, function(error){
        //If an error occurs in any of the above requests.
        console.error("An error occurred deleting the user: "+ JSON.stringify(error));
    });
}



/*
    var IBMData = {
		initializeService : function(successCallback, failureCallback) {
	    	 exec(successCallback, failureCallback, "IBMData", "initializeService", []);
	    },
		createObject : function(className, attributes, successCallback, failureCallback) {
	    	 exec(successCallback, failureCallback, "IBMData", "createObject", [className, attributes]);
	    },
		updateObject : function(dataObject, successCallback, failureCallback) {
	    	 exec(successCallback, failureCallback, "IBMData", "updateObject", [dataObject]);
	    },
		deleteObject : function(dataObject, successCallback, failureCallback) {
	    	 exec(successCallback, failureCallback, "IBMData", "deleteObject", [dataObject]);
	    }
        */
