(function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):(a="undefined"==typeof globalThis?a||self:globalThis,a.JsMediaDevices=b())})(this,function(){'use strict';function a(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a["default"]:a}function b(a,b){return b={exports:{}},a(b,b.exports),b.exports}var c=b(function(a){function b(a,b,c,d,e,f,g){try{var h=a[f](g),i=h.value}catch(a){return void c(a)}h.done?b(i):Promise.resolve(i).then(d,e)}a.exports=function(a){return function(){var c=this,d=arguments;return new Promise(function(e,f){function g(a){b(i,e,f,g,h,"next",a)}function h(a){b(i,e,f,g,h,"throw",a)}var i=a.apply(c,d);g(void 0)})}},a.exports["default"]=a.exports,a.exports.__esModule=!0}),d=a(c),e=b(function(a){a.exports=function(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")},a.exports["default"]=a.exports,a.exports.__esModule=!0}),f=a(e),g=b(function(a){function b(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}a.exports=function(a,c,d){return c&&b(a.prototype,c),d&&b(a,d),a},a.exports["default"]=a.exports,a.exports.__esModule=!0}),h=a(g),i=b(function(a){/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */var b=function(a){function b(a,b,c){return Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}),a[b]}function c(a,b,c,d){// If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
var f=b&&b.prototype instanceof e?b:e,g=Object.create(f.prototype),h=new n(d||[]);return g._invoke=j(a,c,h),g}// Try/catch helper to minimize deoptimizations. Returns a completion
// record like context.tryEntries[i].completion. This interface could
// have been (and was previously) designed to take a closure to be
// invoked without arguments, but in all the cases we care about we
// already have an existing method we want to call, so there's no need
// to create a new function object. We can even get away with assuming
// the method takes exactly one argument, since that happens to be true
// in every case, so we don't have to touch the arguments object. The
// only additional allocation required is the completion record, which
// has a stable shape and so hopefully should be cheap to allocate.
function d(a,b,c){try{return{type:"normal",arg:a.call(b,c)}}catch(a){return{type:"throw",arg:a}}}// Dummy constructor functions that we use as the .constructor and
// .constructor.prototype properties for functions that return Generator
// objects. For full spec compliance, you may wish to configure your
// minifier not to mangle the names of these two functions.
function e(){}function f(){}function g(){}// This is a polyfill for %IteratorPrototype% for environments that
// don't natively support it.
// Helper for defining the .next, .throw, and .return methods of the
// Iterator interface in terms of a single ._invoke method.
function h(a){["next","throw","return"].forEach(function(c){b(a,c,function(a){return this._invoke(c,a)})})}function i(a,b){function c(e,f,g,h){var i=d(a[e],a,f);if("throw"===i.type)h(i.arg);else{var j=i.arg,k=j.value;return k&&"object"==typeof k&&s.call(k,"__await")?b.resolve(k.__await).then(function(a){c("next",a,g,h)},function(a){c("throw",a,g,h)}):b.resolve(k).then(function(a){j.value=a,g(j)},function(a){// If a rejected Promise was yielded, throw the rejection back
// into the async generator function so it can be handled there.
return c("throw",a,g,h)})}}function e(a,d){function e(){return new b(function(b,e){c(a,d,b,e)})}return f=// If enqueue has been called before, then we want to wait until
// all previous Promises have been resolved before calling invoke,
// so that results are always delivered in the correct order. If
// enqueue has not been called before, then it is important to
// call invoke immediately, without waiting on a callback to fire,
// so that the async generator function has the opportunity to do
// any necessary setup in a predictable way. This predictability
// is why the Promise constructor synchronously invokes its
// executor callback, and why async functions synchronously
// execute code before the first await. Since we implement simple
// async functions in terms of async generators, it is especially
// important to get this right, even though it requires care.
f?f.then(e,// Avoid propagating failures to Promises returned by later
// invocations of the iterator.
e):e()}// Define the unified helper method that is used to implement .next,
// .throw, and .return (see defineIteratorMethods).
var f;this._invoke=e}function j(a,b,c){var e="suspendedStart";return function(f,g){if("executing"===e)throw new Error("Generator is already running");if("completed"===e){if("throw"===f)throw g;// Be forgiving, per 25.3.3.3.3 of the spec:
// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
return p()}for(c.method=f,c.arg=g;;){var h=c.delegate;if(h){var i=k(h,c);if(i){if(i===x)continue;return i}}if("next"===c.method)c.sent=c._sent=c.arg;else if("throw"===c.method){if("suspendedStart"===e)throw e="completed",c.arg;c.dispatchException(c.arg)}else"return"===c.method&&c.abrupt("return",c.arg);e="executing";var j=d(a,b,c);if("normal"===j.type){if(e=c.done?"completed":"suspendedYield",j.arg===x)continue;return{value:j.arg,done:c.done}}"throw"===j.type&&(// Dispatch the exception by looping back around to the
// context.dispatchException(context.arg) call above.
e="completed",c.method="throw",c.arg=j.arg)}}}// Call delegate.iterator[context.method](context.arg) and handle the
// result, either by returning a { value, done } result from the
// delegate iterator, or by modifying context.method and context.arg,
// setting context.delegate to null, and returning the ContinueSentinel.
function k(a,b){var c=a.iterator[b.method];if(c===q){if(b.delegate=null,"throw"===b.method){// Note: ["return"] must be used for ES3 parsing compatibility.
if(a.iterator["return"]&&(b.method="return",b.arg=q,k(a,b),"throw"===b.method))// If maybeInvokeDelegate(context) changed context.method from
// "return" to "throw", let that override the TypeError below.
return x;b.method="throw",b.arg=new TypeError("The iterator does not provide a 'throw' method")}return x}var e=d(c,a.iterator,b.arg);if("throw"===e.type)return b.method="throw",b.arg=e.arg,b.delegate=null,x;var f=e.arg;if(!f)return b.method="throw",b.arg=new TypeError("iterator result is not an object"),b.delegate=null,x;if(f.done)b[a.resultName]=f.value,b.next=a.nextLoc,"return"!==b.method&&(b.method="next",b.arg=q);else// Re-yield the result returned by the delegate method.
return f;// The delegate iterator is finished, so forget it and continue with
// the outer generator.
return b.delegate=null,x}// Define Generator.prototype.{next,throw,return} in terms of the
// unified ._invoke helper method.
function l(a){var b={tryLoc:a[0]};1 in a&&(b.catchLoc=a[1]),2 in a&&(b.finallyLoc=a[2],b.afterLoc=a[3]),this.tryEntries.push(b)}function m(a){var b=a.completion||{};b.type="normal",delete b.arg,a.completion=b}function n(a){this.tryEntries=[{tryLoc:"root"}],a.forEach(l,this),this.reset(!0)}function o(a){if(a){var b=a[u];if(b)return b.call(a);if("function"==typeof a.next)return a;if(!isNaN(a.length)){var c=-1,d=function b(){for(;++c<a.length;)if(s.call(a,c))return b.value=a[c],b.done=!1,b;return b.value=q,b.done=!0,b};return d.next=d}}// Return an iterator with no values.
return{next:p}}function p(){return{value:q,done:!0}}var q,r=Object.prototype,s=r.hasOwnProperty,t="function"==typeof Symbol?Symbol:{},u=t.iterator||"@@iterator",v=t.asyncIterator||"@@asyncIterator",w=t.toStringTag||"@@toStringTag";try{b({},"")}catch(a){b=function(a,b,c){return a[b]=c}}a.wrap=c;var x={},y={};y[u]=function(){return this};var z=Object.getPrototypeOf,A=z&&z(z(o([])));A&&A!==r&&s.call(A,u)&&(y=A);var B=g.prototype=e.prototype=Object.create(y);// Regardless of whether this script is executing as a CommonJS module
// or not, return the runtime object so that we can declare the variable
// regeneratorRuntime in the outer scope, which allows this module to be
// injected easily by `bin/regenerator --include-runtime script.js`.
return f.prototype=B.constructor=g,g.constructor=f,f.displayName=b(g,w,"GeneratorFunction"),a.isGeneratorFunction=function(a){var b="function"==typeof a&&a.constructor;return!!b&&(b===f||// For the native GeneratorFunction constructor, the best we can
// do is to check its .name property.
"GeneratorFunction"===(b.displayName||b.name))},a.mark=function(a){return Object.setPrototypeOf?Object.setPrototypeOf(a,g):(a.__proto__=g,b(a,w,"GeneratorFunction")),a.prototype=Object.create(B),a},a.awrap=function(a){return{__await:a}},h(i.prototype),i.prototype[v]=function(){return this},a.AsyncIterator=i,a.async=function(b,d,e,f,g){void 0===g&&(g=Promise);var h=new i(c(b,d,e,f),g);return a.isGeneratorFunction(d)?h// If outerFn is a generator, return the full iterator.
:h.next().then(function(a){return a.done?a.value:h.next()})},h(B),b(B,w,"Generator"),B[u]=function(){return this},B.toString=function(){return"[object Generator]"},a.keys=function(a){var b=[];for(var c in a)b.push(c);// Rather than returning an object with a next method, we keep
// things simple and return the next function itself.
return b.reverse(),function c(){for(;b.length;){var d=b.pop();if(d in a)return c.value=d,c.done=!1,c}// To avoid creating an additional object, we just hang the .value
// and .done properties off the next function object itself. This
// also ensures that the minifier will not anonymize the function.
return c.done=!0,c}},a.values=o,n.prototype={constructor:n,reset:function(a){if(this.prev=0,this.next=0,this.sent=this._sent=q,this.done=!1,this.delegate=null,this.method="next",this.arg=q,this.tryEntries.forEach(m),!a)for(var b in this)// Not sure about the optimal order of these conditions:
"t"===b.charAt(0)&&s.call(this,b)&&!isNaN(+b.slice(1))&&(this[b]=q)},stop:function(){this.done=!0;var a=this.tryEntries[0],b=a.completion;if("throw"===b.type)throw b.arg;return this.rval},dispatchException:function(a){function b(b,d){return f.type="throw",f.arg=a,c.next=b,d&&(c.method="next",c.arg=q),!!d}if(this.done)throw a;for(var c=this,d=this.tryEntries.length-1;0<=d;--d){var e=this.tryEntries[d],f=e.completion;if("root"===e.tryLoc)// Exception thrown outside of any try block that could handle
// it, so set the completion value of the entire function to
// throw the exception.
return b("end");if(e.tryLoc<=this.prev){var g=s.call(e,"catchLoc"),h=s.call(e,"finallyLoc");if(g&&h){if(this.prev<e.catchLoc)return b(e.catchLoc,!0);if(this.prev<e.finallyLoc)return b(e.finallyLoc)}else if(g){if(this.prev<e.catchLoc)return b(e.catchLoc,!0);}else if(!h)throw new Error("try statement without catch or finally");else if(this.prev<e.finallyLoc)return b(e.finallyLoc)}}},abrupt:function(a,b){for(var c,d=this.tryEntries.length-1;0<=d;--d)if(c=this.tryEntries[d],c.tryLoc<=this.prev&&s.call(c,"finallyLoc")&&this.prev<c.finallyLoc){var e=c;break}e&&("break"===a||"continue"===a)&&e.tryLoc<=b&&b<=e.finallyLoc&&(e=null);var f=e?e.completion:{};return f.type=a,f.arg=b,e?(this.method="next",this.next=e.finallyLoc,x):this.complete(f)},complete:function(a,b){if("throw"===a.type)throw a.arg;return"break"===a.type||"continue"===a.type?this.next=a.arg:"return"===a.type?(this.rval=this.arg=a.arg,this.method="return",this.next="end"):"normal"===a.type&&b&&(this.next=b),x},finish:function(a){for(var b,c=this.tryEntries.length-1;0<=c;--c)if(b=this.tryEntries[c],b.finallyLoc===a)return this.complete(b.completion,b.afterLoc),m(b),x},catch:function(a){for(var b,c=this.tryEntries.length-1;0<=c;--c)if(b=this.tryEntries[c],b.tryLoc===a){var d=b.completion;if("throw"===d.type){var e=d.arg;m(b)}return e}// The context.catch method must only be called with a location
// argument that corresponds to a known catch block.
throw new Error("illegal catch attempt")},delegateYield:function(a,b,c){return this.delegate={iterator:o(a),resultName:b,nextLoc:c},"next"===this.method&&(this.arg=q),x}},a}(// If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
a.exports);try{regeneratorRuntime=b}catch(a){// This module should not be running in strict mode, so the above
// assignment should always work unless something is misconfigured. Just
// in case runtime.js accidentally runs in strict mode, we can escape
// strict mode using a global Function call. This could conceivably fail
// if a Content Security Policy forbids using Function, but in that case
// the proper solution is to fix the accidental strict mode problem. If
// you've misconfigured your bundler to force strict mode and applied a
// CSP to forbid Function, and you're not willing to fix either of those
// problems, please detail your unique predicament in a GitHub issue.
Function("r","regeneratorRuntime = r")(b)}}),j=i,k=/*#__PURE__*/function(){function a(){f(this,a),this.deviceList=[]}/**
	   * 检查浏览器是否支持MediaDevices
	   * @returns 是或否
	   */return h(a,[{key:"checkMediaDevicesSupport",value:function(){if(!navigator)throw new Error("navigator not supported.");if(!navigator.mediaDevices)throw new Error("mediaDevices not supported.");if(!navigator.mediaDevices.enumerateDevices)throw new Error("mediaDevices.enumerateDevices() not supported.");return!0}/**
	     * 授权并获取设备列表（所有）
	     * @returns 媒体设备信息列表
	     */},{key:"getDeviceList",value:function(){var a=d(/*#__PURE__*/j.mark(function a(){return j.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,navigator.mediaDevices.getUserMedia({video:!0,audio:!0});case 2:return a.next=4,navigator.mediaDevices.enumerateDevices();case 4:return this.deviceList=a.sent,a.abrupt("return",this.deviceList);case 6:case"end":return a.stop();}},a,this)}));return function(){return a.apply(this,arguments)}}()/**
	     * 只授权音频设备并获取音频设备列表
	     * @returns 音频设备信息列表
	     */},{key:"getOnlyAudioDeviceList",value:function(){var a=d(/*#__PURE__*/j.mark(function a(){return j.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,navigator.mediaDevices.getUserMedia({video:!1,audio:!0});case 2:return a.abrupt("return",navigator.mediaDevices.enumerateDevices());case 3:case"end":return a.stop();}},a)}));return function(){return a.apply(this,arguments)}}()/**
	     * 只授权视频并获取视频设备列表
	     * @returns 视频设备信息列表
	     */},{key:"getOnlyVideoDeviceList",value:function(){var a=d(/*#__PURE__*/j.mark(function a(){return j.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,navigator.mediaDevices.getUserMedia({video:!0,audio:!1});case 2:return a.abrupt("return",navigator.mediaDevices.enumerateDevices());case 3:case"end":return a.stop();}},a)}));return function(){return a.apply(this,arguments)}}()/**
	     * 获取音频设备列表（输入+输出）
	     * @returns 音频设备信息列表
	     */},{key:"getAudioDeviceList",value:function(){var a=d(/*#__PURE__*/j.mark(function a(){var b;return j.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!this.deviceList.length){a.next=4;break}a.t0=this.deviceList,a.next=7;break;case 4:return a.next=6,this.getDeviceList();case 6:a.t0=a.sent;case 7:return b=a.t0,a.abrupt("return",b.filter(function(a){return"audioinput"===a.kind||"audiooutput"===a.kind}));case 9:case"end":return a.stop();}},a,this)}));return function(){return a.apply(this,arguments)}}()/**
	     * 获取视频输入设备列表
	     * @returns 视频设备信息列表
	     */},{key:"getVideoDeviceList",value:function(){var a=d(/*#__PURE__*/j.mark(function a(){var b;return j.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!this.deviceList.length){a.next=4;break}a.t0=this.deviceList,a.next=7;break;case 4:return a.next=6,this.getDeviceList();case 6:a.t0=a.sent;case 7:return b=a.t0,a.abrupt("return",b.filter(function(a){return"videoinput"===a.kind}));case 9:case"end":return a.stop();}},a,this)}));return function(){return a.apply(this,arguments)}}()/**
	     * 获取音频输出设备列表
	     * @returns 音频设备信息列表
	     */},{key:"getAudioOutDeviceList",value:function(){var a=d(/*#__PURE__*/j.mark(function a(){var b;return j.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!this.deviceList.length){a.next=4;break}a.t0=this.deviceList,a.next=7;break;case 4:return a.next=6,this.getDeviceList();case 6:a.t0=a.sent;case 7:return b=a.t0,a.abrupt("return",b.filter(function(a){return"audiooutput"===a.kind}));case 9:case"end":return a.stop();}},a,this)}));return function(){return a.apply(this,arguments)}}()/**
	     * 获取音频输入设备列表
	     * @returns 音频设备信息列表
	     */},{key:"getAudioInDeviceList",value:function(){var a=d(/*#__PURE__*/j.mark(function a(){var b;return j.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!this.deviceList.length){a.next=4;break}a.t0=this.deviceList,a.next=7;break;case 4:return a.next=6,this.getDeviceList();case 6:a.t0=a.sent;case 7:return b=a.t0,a.abrupt("return",b.filter(function(a){return"audioinput"===a.kind}));case 9:case"end":return a.stop();}},a,this)}));return function(){return a.apply(this,arguments)}}()/**
	     * 根据设备ID获取对应的视频输出流
	     * @param deviceId 设备ID
	     * @param options 选项 { minWidth, minHeight, width, height }
	     * @returns 视频流
	     */},{key:"getVideoMediaStream",value:function(){var a=d(/*#__PURE__*/j.mark(function a(b,c){var d,e,f,g,h,i,k,l;return j.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(d=Object.assign({minWidth:null,minHeight:null,width:null,height:null},c),e=d.minWidth,f=d.minHeight,g=d.width,h=d.height,!(g&&h)){a.next=8;break}return a.next=4,navigator.mediaDevices.getUserMedia({video:!b||{width:g,height:h,deviceId:{exact:b}},audio:!1});case 4:return i=a.sent,a.abrupt("return",i);case 8:if(!(e&&f)){a.next=13;break}return a.next=11,navigator.mediaDevices.getUserMedia({video:!b||{width:{min:e},height:{min:f},deviceId:{exact:b}},audio:!1});case 11:return k=a.sent,a.abrupt("return",k);case 13:return a.next=15,navigator.mediaDevices.getUserMedia({video:!b||{deviceId:{exact:b}},audio:!1});case 15:return l=a.sent,a.abrupt("return",l);case 17:case"end":return a.stop();}},a)}));return function(){return a.apply(this,arguments)}}()/**
	     * 根据设备ID获取对应的音频输出流
	     * @param deviceId 设备ID
	     * @returns 音频流
	     */},{key:"getAudioMediaStream",value:function(){var a=d(/*#__PURE__*/j.mark(function a(b){var c;return j.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,navigator.mediaDevices.getUserMedia({video:!1,audio:!b||{deviceId:{exact:b}}});case 2:return c=a.sent,a.abrupt("return",c);case 4:case"end":return a.stop();}},a)}));return function(){return a.apply(this,arguments)}}()/**
	     * 根据视频输入设备ID和音频输入设备ID获取相应媒体流
	     * @param videoDeviceId 视频输入设备ID
	     * @param audioDeviceId 音频输入设备ID
	     * @returns 媒体流
	     */},{key:"getVideoAndAudioMediaStream",value:function(){var a=d(/*#__PURE__*/j.mark(function a(b,c){var d;return j.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,navigator.mediaDevices.getUserMedia({video:{deviceId:{exact:b}},audio:{deviceId:{exact:c}}});case 2:return d=a.sent,a.abrupt("return",d);case 4:case"end":return a.stop();}},a)}));return function(){return a.apply(this,arguments)}}()/**
	     * 停止视频流/音频流
	     * @param stream 视频流或音频流
	     */},{key:"stopMediaTracks",value:function(a){a.getTracks().forEach(function(a){a.stop()})}/**
	     * 根据音频输出设备ID设置当前音频输出设备
	     * @param element HTMLAudioElement
	     * @param deviceId 音频输出设备ID
	     * @returns 提示信息
	     */},{key:"setAudioOutDevice",value:function(a,b){return new Promise(function(c,d){"undefined"==typeof a.sinkId?d(new Error("Browser does not support output device selection.")):a.setSinkId(b).then(function(){c("Success, audio output device attached: ".concat(b," to element with ").concat(a.title," as source."))})// @ts-ignore
.catch(function(a){var b=a;"SecurityError"===a.name&&(b="You need to use HTTPS for selecting audio output device: ".concat(a)),d(b)})})}}]),a}();return k});
//# sourceMappingURL=js-media-devices.js.map
