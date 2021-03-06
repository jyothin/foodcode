cordova.define("com.ibm.mobile.cordova.ibmcloudcode.hybrid", function(require, exports, module) { /*!
 *  Licensed Materials - Property of IBM
 *  5725-I43 (C) Copyright IBM Corp. 2011, 2014. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or
 *  disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 *
 *  IBM Mobile Cloud Services, 
 *  CloudCode Service JavaScript SDK v1.0.0.20150311-1224
 *
 */

 
// Define a global for use by Cordova
global = window;

// Global To handle name parameters based selection of require depending on runtime
// Load the Cordova Exec
try {	

	if (typeof(cordova) == 'object' && typeof(cordova.require) == 'function') {
		var exec = cordova.require("cordova/exec");
	}	
} catch (e) {
	console.log(e);
}	

// Generated by IBMCloudCode SDK v0.6.13-01 - template: 'combined' 
// Combined template optimized with RequireJS/r.js v2.1.11 & almond.
(function (global, window){
  
var __isAMD = !!(typeof define === 'function' && define.amd),
    __isNode = (typeof exports === 'object'),
    __isWeb = !__isNode;
	__isAMD=false;

  var __nodeRequire = (__isNode ? require :
      function(dep){
        throw new Error("IBMCloudCode SDK detected missing dependency: '" + dep + "' - in a non-nodejs runtime. All it's binding variables were 'undefined'.")
      });
var bundleFactory = function() {/**
 * @license almond 0.2.9 Copyright (c) 2011-2014, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/almond for details
 */
//Going sloppy to avoid 'use strict' string cost, but strict practices should
//be followed.
/*jslint sloppy: true */
/*global setTimeout: false */

var requirejs, require, define;
(function (undef) {
    var main, req, makeMap, handlers,
        defined = {},
        waiting = {},
        config = {},
        defining = {},
        hasOwn = Object.prototype.hasOwnProperty,
        aps = [].slice,
        jsSuffixRegExp = /\.js$/;

    function hasProp(obj, prop) {
        return hasOwn.call(obj, prop);
    }

    /**
     * Given a relative module name, like ./something, normalize it to
     * a real name that can be mapped to a path.
     * @param {String} name the relative name
     * @param {String} baseName a real name that the name arg is relative
     * to.
     * @returns {String} normalized name
     */
    function normalize(name, baseName) {
        var nameParts, nameSegment, mapValue, foundMap, lastIndex,
            foundI, foundStarMap, starI, i, j, part,
            baseParts = baseName && baseName.split("/"),
            map = config.map,
            starMap = (map && map['*']) || {};

        //Adjust any relative paths.
        if (name && name.charAt(0) === ".") {
            //If have a base name, try to normalize against it,
            //otherwise, assume it is a top-level require that will
            //be relative to baseUrl in the end.
            if (baseName) {
                //Convert baseName to array, and lop off the last part,
                //so that . matches that "directory" and not name of the baseName's
                //module. For instance, baseName of "one/two/three", maps to
                //"one/two/three.js", but we want the directory, "one/two" for
                //this normalization.
                baseParts = baseParts.slice(0, baseParts.length - 1);
                name = name.split('/');
                lastIndex = name.length - 1;

                // Node .js allowance:
                if (config.nodeIdCompat && jsSuffixRegExp.test(name[lastIndex])) {
                    name[lastIndex] = name[lastIndex].replace(jsSuffixRegExp, '');
                }

                name = baseParts.concat(name);

                //start trimDots
                for (i = 0; i < name.length; i += 1) {
                    part = name[i];
                    if (part === ".") {
                        name.splice(i, 1);
                        i -= 1;
                    } else if (part === "..") {
                        if (i === 1 && (name[2] === '..' || name[0] === '..')) {
                            //End of the line. Keep at least one non-dot
                            //path segment at the front so it can be mapped
                            //correctly to disk. Otherwise, there is likely
                            //no path mapping for a path starting with '..'.
                            //This can still fail, but catches the most reasonable
                            //uses of ..
                            break;
                        } else if (i > 0) {
                            name.splice(i - 1, 2);
                            i -= 2;
                        }
                    }
                }
                //end trimDots

                name = name.join("/");
            } else if (name.indexOf('./') === 0) {
                // No baseName, so this is ID is resolved relative
                // to baseUrl, pull off the leading dot.
                name = name.substring(2);
            }
        }

        //Apply map config if available.
        if ((baseParts || starMap) && map) {
            nameParts = name.split('/');

            for (i = nameParts.length; i > 0; i -= 1) {
                nameSegment = nameParts.slice(0, i).join("/");

                if (baseParts) {
                    //Find the longest baseName segment match in the config.
                    //So, do joins on the biggest to smallest lengths of baseParts.
                    for (j = baseParts.length; j > 0; j -= 1) {
                        mapValue = map[baseParts.slice(0, j).join('/')];

                        //baseName segment has  config, find if it has one for
                        //this name.
                        if (mapValue) {
                            mapValue = mapValue[nameSegment];
                            if (mapValue) {
                                //Match, update name to the new value.
                                foundMap = mapValue;
                                foundI = i;
                                break;
                            }
                        }
                    }
                }

                if (foundMap) {
                    break;
                }

                //Check for a star map match, but just hold on to it,
                //if there is a shorter segment match later in a matching
                //config, then favor over this star map.
                if (!foundStarMap && starMap && starMap[nameSegment]) {
                    foundStarMap = starMap[nameSegment];
                    starI = i;
                }
            }

            if (!foundMap && foundStarMap) {
                foundMap = foundStarMap;
                foundI = starI;
            }

            if (foundMap) {
                nameParts.splice(0, foundI, foundMap);
                name = nameParts.join('/');
            }
        }

        return name;
    }

    function makeRequire(relName, forceSync) {
        return function () {
            //A version of a require function that passes a moduleName
            //value for items that may need to
            //look up paths relative to the moduleName
            return req.apply(undef, aps.call(arguments, 0).concat([relName, forceSync]));
        };
    }

    function makeNormalize(relName) {
        return function (name) {
            return normalize(name, relName);
        };
    }

    function makeLoad(depName) {
        return function (value) {
            defined[depName] = value;
        };
    }

    function callDep(name) {
        if (hasProp(waiting, name)) {
            var args = waiting[name];
            delete waiting[name];
            defining[name] = true;
            main.apply(undef, args);
        }

        if (!hasProp(defined, name) && !hasProp(defining, name)) {
            throw new Error('No ' + name);
        }
        return defined[name];
    }

    //Turns a plugin!resource to [plugin, resource]
    //with the plugin being undefined if the name
    //did not have a plugin prefix.
    function splitPrefix(name) {
        var prefix,
            index = name ? name.indexOf('!') : -1;
        if (index > -1) {
            prefix = name.substring(0, index);
            name = name.substring(index + 1, name.length);
        }
        return [prefix, name];
    }

    /**
     * Makes a name map, normalizing the name, and using a plugin
     * for normalization if necessary. Grabs a ref to plugin
     * too, as an optimization.
     */
    makeMap = function (name, relName) {
        var plugin,
            parts = splitPrefix(name),
            prefix = parts[0];

        name = parts[1];

        if (prefix) {
            prefix = normalize(prefix, relName);
            plugin = callDep(prefix);
        }

        //Normalize according
        if (prefix) {
            if (plugin && plugin.normalize) {
                name = plugin.normalize(name, makeNormalize(relName));
            } else {
                name = normalize(name, relName);
            }
        } else {
            name = normalize(name, relName);
            parts = splitPrefix(name);
            prefix = parts[0];
            name = parts[1];
            if (prefix) {
                plugin = callDep(prefix);
            }
        }

        //Using ridiculous property names for space reasons
        return {
            f: prefix ? prefix + '!' + name : name, //fullName
            n: name,
            pr: prefix,
            p: plugin
        };
    };

    function makeConfig(name) {
        return function () {
            return (config && config.config && config.config[name]) || {};
        };
    }

    handlers = {
        require: function (name) {
            return makeRequire(name);
        },
        exports: function (name) {
            var e = defined[name];
            if (typeof e !== 'undefined') {
                return e;
            } else {
                return (defined[name] = {});
            }
        },
        module: function (name) {
            return {
                id: name,
                uri: '',
                exports: defined[name],
                config: makeConfig(name)
            };
        }
    };

    main = function (name, deps, callback, relName) {
        var cjsModule, depName, ret, map, i,
            args = [],
            callbackType = typeof callback,
            usingExports;

        //Use name if no relName
        relName = relName || name;

        //Call the callback to define the module, if necessary.
        if (callbackType === 'undefined' || callbackType === 'function') {
            //Pull out the defined dependencies and pass the ordered
            //values to the callback.
            //Default to [require, exports, module] if no deps
            deps = !deps.length && callback.length ? ['require', 'exports', 'module'] : deps;
            for (i = 0; i < deps.length; i += 1) {
                map = makeMap(deps[i], relName);
                depName = map.f;

                //Fast path CommonJS standard dependencies.
                if (depName === "require") {
                    args[i] = handlers.require(name);
                } else if (depName === "exports") {
                    //CommonJS module spec 1.1
                    args[i] = handlers.exports(name);
                    usingExports = true;
                } else if (depName === "module") {
                    //CommonJS module spec 1.1
                    cjsModule = args[i] = handlers.module(name);
                } else if (hasProp(defined, depName) ||
                           hasProp(waiting, depName) ||
                           hasProp(defining, depName)) {
                    args[i] = callDep(depName);
                } else if (map.p) {
                    map.p.load(map.n, makeRequire(relName, true), makeLoad(depName), {});
                    args[i] = defined[depName];
                } else {
                    throw new Error(name + ' missing ' + depName);
                }
            }

            ret = callback ? callback.apply(defined[name], args) : undefined;

            if (name) {
                //If setting exports via "module" is in play,
                //favor that over return value and exports. After that,
                //favor a non-undefined return value over exports use.
                if (cjsModule && cjsModule.exports !== undef &&
                        cjsModule.exports !== defined[name]) {
                    defined[name] = cjsModule.exports;
                } else if (ret !== undef || !usingExports) {
                    //Use the return value from the function.
                    defined[name] = ret;
                }
            }
        } else if (name) {
            //May just be an object definition for the module. Only
            //worry about defining if have a module name.
            defined[name] = callback;
        }
    };

    requirejs = require = req = function (deps, callback, relName, forceSync, alt) {
        if (typeof deps === "string") {
            if (handlers[deps]) {
                //callback in this case is really relName
                return handlers[deps](callback);
            }
            //Just return the module wanted. In this scenario, the
            //deps arg is the module name, and second arg (if passed)
            //is just the relName.
            //Normalize module name, if it contains . or ..
            return callDep(makeMap(deps, callback).f);
        } else if (!deps.splice) {
            //deps is a config object, not an array.
            config = deps;
            if (config.deps) {
                req(config.deps, config.callback);
            }
            if (!callback) {
                return;
            }

            if (callback.splice) {
                //callback is an array, which means it is a dependency list.
                //Adjust args if there are dependencies
                deps = callback;
                callback = relName;
                relName = null;
            } else {
                deps = undef;
            }
        }

        //Support require(['a'])
        callback = callback || function () {};

        //If relName is a function, it is an errback handler,
        //so remove it.
        if (typeof relName === 'function') {
            relName = forceSync;
            forceSync = alt;
        }

        //Simulate async callback;
        if (forceSync) {
            main(undef, deps, callback, relName);
        } else {
            //Using a non-zero value because of concern for what old browsers
            //do, and latest browsers "upgrade" to 4 if lower value is used:
            //http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#dom-windowtimers-settimeout:
            //If want a value immediately, use require('id') instead -- something
            //that works in almond on the global level, but not guaranteed and
            //unlikely to work in other AMD implementations.
            setTimeout(function () {
                main(undef, deps, callback, relName);
            }, 4);
        }

        return req;
    };

    /**
     * Just drops the config on the floor, but returns req in case
     * the config return value is used.
     */
    req.config = function (cfg) {
        return req(cfg);
    };

    /**
     * Expose module registry for debugging and tooling
     */
    requirejs._defined = defined;

    define = function (name, deps, callback) {

        //This module may not have dependencies
        if (!deps.splice) {
            //deps is not an array, so probably means
            //an object literal or factory function for
            //the value. Adjust args.
            callback = deps;
            deps = [];
        }

        if (!hasProp(defined, name) && !hasProp(waiting, name)) {
            waiting[name] = [name, deps, callback];
        }
    };

    define.amd = {
        jQuery: true
    };
}());

define("almond", function(){});

define('ibm/mobile/service/cloudcode/IBMCloudCodeService', ['require','exports','module'],function (require, exports, module) {
  

function IBMCloudCodeService(requester) {
    this.logger = IBMLogger.getLogger();
    this.requester = requester;
  }
  ;
  var SLASH = "/";
  IBMCloudCodeService.prototype = {
    METHOD_GET: "GET",
    METHOD_POST: "POST",
    METHOD_DELETE: "DELETE",
    METHOD_PUT: "PUT",
    hostName: null,
    logger: null,
    requester: null,
    setBaseUrl: function (baseUrl) {
      if (!_.isString(baseUrl)) {
        throw new Error("The base Url has not been passed to the method");
      }
      return this.requester.setBaseUrl(baseUrl);
    },
    getBaseUrl: function () {
      return this.requester.getBaseUrl();
    },
    get: function (resource, options) {
      return this._callHttpRequest(this.METHOD_GET, resource, null, options);
    },
    post: function (resource, payload, options) {
      return this._callHttpRequest(this.METHOD_POST, resource, payload, options);
    },
    put: function (resource, payload, options) {
      return this._callHttpRequest(this.METHOD_PUT, resource, payload, options);
    },
    del: function (resource, options) {
      return this._callHttpRequest(this.METHOD_DELETE, resource, null, options);
    },
    request: function (type, url, payload, options) {
      if (_.isUndefined(options) || _.isNull(options)) {
        options = {};
      }
      var type = type.toUpperCase();
      if (!_.contains([
          "GET",
          "POST",
          "PUT",
          "DELETE"
        ], type)) {
        throw new Error("Unsupported request type: " + type);
      }
      return this._callHttpRequest(type, url, payload, options);
    },
    _callHttpRequest: function (type, resource, payload, options) {
      if (_.isUndefined(options) || _.isNull(options)) {
        options = {};
      }
      return this.requester.send(type, resource, payload, options, this);
    }
  };
  return IBMCloudCodeService;


});
define('ibm/mobile/service/_IBMCloudCode', ['require', 'exports', 'module', './cloudcode/IBMCloudCodeService'], function (require, exports, module, IBMCloudCodeService) {
  

var _IBMCloudCode = {
      VERSION: "1.0.0.20150311-1224",
      _cc: null,
      logger: null,
      initializeService: function () {
        return this._init();
      },
      _init: function () {
        throw new TypeError("Unimplemented _IBMCloudCode._init()");
      },
      getVersion: function () {
        return this.VERSION;
      },
      getService: function () {
        if (!_.isObject(this._cc)) {
          throw new Error("CloudCode Service not initialized. Call initializeService()");
        }
        return this._cc;
      }
    };
  return _IBMCloudCode;


});
define('ibm/mobile/service/cloudcode/request/_CloudCodeRequest', ['require','exports','module'],function (require, exports, module) {
  

var _CloudCodeRequest = {
      send: function () {
        return Q.reject("_CloudCodeRequest.send() Not implemented");
      }
    };
  return _CloudCodeRequest;


});
define('ibm/mobile/service/cloudcode/request/CordovaRequest', ['require', 'exports', 'module', './_CloudCodeRequest'], function (require, exports, module, _CloudCodeRequest) {
  

var ibmlogger = IBMLogger.getLogger();
  var HttpRequestError = function (message, info) {
    info = info || {};
    return new IBMError({
      name: "HttpRequestError",
      message: message,
      info: info
    });
  };
  var ErrorServerStatus = function (code, responseBody, info) {
    info = info || {};
    var err = {
        statusCode: code,
        responseText: responseBody
      };
    _.extend(err, info);
    return HttpRequestError("Server responded with an error status: " + code, err);
  };
  var ErrorCommunicating = function (info) {
    info = info || {};
    return HttpRequestError("Error communicating with server", info);
  };
  function CordovaRequest(hybrid) {
    if (!hybrid) {
      throw new TypeError("CordovaRequest constructor - hybrid was null");
    }
    this.hybrid = hybrid;
    this.baseUrl = null;
  }
  _.extend(CordovaRequest.prototype, _CloudCodeRequest, {
    hybrid: null,
    baseUrl: null,
    setBaseUrl: function (baseUrl) {
      var defer = Q.defer();
      this.hybrid.exec("setBaseUrl", [baseUrl]).done(function (status) {
        defer.resolve(status);
      }, function (err) {
        defer.reject("Failed " + err);
      });
      this.baseUrl = baseUrl;
      return defer.promise;
    },
    getBaseUrl: function () {
      return this.baseUrl;
    },
    send: function (type, resource, payload, options, caller) {
      defer = Q.defer();
      if (!_.isObject(this.hybrid)) {
        defer.reject("IBMHybrid cannot be access, has IBMBluemix being initialized");
      }
      if (!_.isString(resource)) {
        defer.reject("url parameter is either null or not passed as a valid option");
      }
      if (!_.isString(type)) {
        defer.reject("type parameter is either null or not passed as a valid option GET|POST|PUT|DELETE");
      }
      var headers = {};
      if (_.has(options, "headers")) {
        headers = _.extend(headers, options.headers);
      }
      if (_.has(options, "contentType")) {
        headers = _.extend(headers, { "content-Type": options.contentType });
      }
      data = [];
      if (!_.isNull(payload)) {
        data = payload;
      }
      var handleAs = "json";
      if (_.has(options, "handleAs")) {
        handleAs = options.handleAs.toLowerCase();
      }
      switch (type) {
      case "GET":
        this.hybrid.exec("get", [
          resource,
          headers
        ]).then(this._onSuccess(defer, handleAs), this._onError(defer));
        break;
      case "POST":
        this.hybrid.exec("post", [
          resource,
          headers,
          data
        ]).then(this._onSuccess(defer, handleAs), this._onError(defer));
        break;
      case "PUT":
        this.hybrid.exec("put", [
          resource,
          headers,
          data
        ]).then(this._onSuccess(defer, handleAs), this._onError(defer));
        break;
      case "DELETE":
        this.hybrid.exec("delete", [
          resource,
          headers
        ]).then(this._onSuccess(defer, handleAs), this._onError(defer));
        break;
      default:
        defer.reject("options.get has an invalid value GET|POST|PUT|DELETE");
      }
      return defer.promise;
    },
    _onError: function (defer) {
      return function (error) {
        if (error.code > 0) {
          defer.reject(ErrorServerStatus(error.code, error.message, { exception: error.message }));
        } else {
          defer.reject(ErrorCommunicating({
            status: error.code,
            exception: error.message
          }));
        }
      };
    },
    _onSuccess: function (defer, handleAs) {
      return function (response) {
        if (_.has(response, "code") && _.has(response, "data") && response.code === 200) {
          response = response.data;
        } else {
          defer.reject(response);
        }
        var _response = null;
        switch (handleAs) {
        case "text":
          if (_.isString(response)) {
            _response = response;
          } else {
            _response = JSON.stringify(response);
          }
          break;
        case "json":
          if (_.isObject(response)) {
            _response = response;
          } else {
            try {
              var parsedResponse = JSON.parse(response);
              _response = parsedResponse;
            } catch (ex) {
              _response = response;
            }
          }
          break;
        default:
          console.warn("Unsupported handleAs: " + handleAs);
        }
        defer.resolve(_response);
      };
    }
  });
  return CordovaRequest;


});
define('ibm/mobile/service/IBMCloudCodeHybrid', ['require', 'exports', 'module', './_IBMCloudCode', './cloudcode/IBMCloudCodeService', './cloudcode/request/CordovaRequest'], function (require, exports, module, _IBMCloudCode, IBMCloudCodeService, CordovaRequest) {
  

var IBMCloudCodeHybrid = _.extend({}, _IBMCloudCode, {
      hybrid: null,
      _init: function () {
        var defer = Q.defer();
        if (!(IBMBluemix && Q && _ && IBMHybrid)) {
          defer.reject("IBMBluemix has not been initialised");
          return defer.promise;
        }
        if (_.isNull(this.hybrid) || !_.isObject(this.hybrid) || !this.hybrid.exec) {
          this.hybrid = new IBMHybrid("IBMCloudCodeHybrid");
        }
        var self = this;
        this.hybrid.exec("initializeService", [IBMCloudCode]).done(function (status) {
          self._cc = new IBMCloudCodeService(new CordovaRequest(self.hybrid));
          if (!_.isObject(self._cc)) {
            defer.reject("Failed to create an IBM CloudCode Service Object");
          }
          defer.resolve(self._cc);
        }, function (err) {
          defer.reject("Failed to create an IBM CloudCode Service Object");
        });
        return defer.promise;
      }
    });
  module.exports = IBMCloudCodeHybrid;
  if (!window.IBMCloudCode) {
    window.IBMCloudCode = IBMCloudCodeHybrid;
  }
  return IBMCloudCodeHybrid;


});
    return require('ibm/mobile/service/IBMCloudCodeHybrid');
  };
if (__isAMD) {
  return define(bundleFactory);
} else {
    if (__isNode) {
        return module.exports = bundleFactory();
    } else {
        return bundleFactory();
    }
}
}).call(this, (typeof exports === 'object' ? global : window),
              (typeof exports === 'object' ? global : window))
});
