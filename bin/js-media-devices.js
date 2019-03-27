(function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):(a=a||self,a.JsMediaDevices=b())})(this,function(){'use strict';function a(a,b,c,d,e,f,g){try{var h=a[f](g),i=h.value}catch(a){return void c(a)}h.done?b(i):Promise.resolve(i).then(d,e)}function b(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}var c=function(a,b){return b={exports:{}},a(b,b.exports),b.exports}(function(a){/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */!function(b){function c(a,b,c,d){// If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
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
function h(a){["next","throw","return"].forEach(function(b){a[b]=function(a){return this._invoke(b,a)}})}function i(a){function b(c,e,f,g){var h=d(a[c],a,e);if("throw"===h.type)g(h.arg);else{var i=h.arg,j=i.value;return j&&"object"==typeof j&&s.call(j,"__await")?Promise.resolve(j.__await).then(function(a){b("next",a,f,g)},function(a){b("throw",a,f,g)}):Promise.resolve(j).then(function(a){// When a yielded Promise is resolved, its final value becomes
// the .value of the Promise<{value,done}> result for the
// current iteration.
i.value=a,f(i)},function(a){// If a rejected Promise was yielded, throw the rejection back
// into the async generator function so it can be handled there.
return b("throw",a,f,g)})}}function c(a,c){function d(){return new Promise(function(d,e){b(a,c,d,e)})}return e=// If enqueue has been called before, then we want to wait until
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
e?e.then(d,// Avoid propagating failures to Promises returned by later
// invocations of the iterator.
d):d()}// Define the unified helper method that is used to implement .next,
// .throw, and .return (see defineIteratorMethods).
var e;this._invoke=c}function j(a,b,c){var e="suspendedStart";return function(f,g){if(e==="executing")throw new Error("Generator is already running");if("completed"===e){if("throw"===f)throw g;// Be forgiving, per 25.3.3.3.3 of the spec:
// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
return p()}for(c.method=f,c.arg=g;;){var h=c.delegate;if(h){var i=k(h,c);if(i){if(i===y)continue;return i}}if("next"===c.method)// Setting context._sent for legacy support of Babel's
// function.sent implementation.
c.sent=c._sent=c.arg;else if("throw"===c.method){if("suspendedStart"===e)throw e="completed",c.arg;c.dispatchException(c.arg)}else"return"===c.method&&c.abrupt("return",c.arg);e="executing";var j=d(a,b,c);if("normal"===j.type){if(e=c.done?"completed":"suspendedYield",j.arg===y)continue;return{value:j.arg,done:c.done}}"throw"===j.type&&(// Dispatch the exception by looping back around to the
// context.dispatchException(context.arg) call above.
e="completed",c.method="throw",c.arg=j.arg)}}}// Call delegate.iterator[context.method](context.arg) and handle the
// result, either by returning a { value, done } result from the
// delegate iterator, or by modifying context.method and context.arg,
// setting context.delegate to null, and returning the ContinueSentinel.
function k(a,b){var c=a.iterator[b.method];if(c===q){if(b.delegate=null,"throw"===b.method){if(a.iterator.return&&(b.method="return",b.arg=q,k(a,b),"throw"===b.method))// If maybeInvokeDelegate(context) changed context.method from
// "return" to "throw", let that override the TypeError below.
return y;b.method="throw",b.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var e=d(c,a.iterator,b.arg);if("throw"===e.type)return b.method="throw",b.arg=e.arg,b.delegate=null,y;var f=e.arg;if(!f)return b.method="throw",b.arg=new TypeError("iterator result is not an object"),b.delegate=null,y;if(f.done)b[a.resultName]=f.value,b.next=a.nextLoc,"return"!==b.method&&(b.method="next",b.arg=q);else// Re-yield the result returned by the delegate method.
return f;// The delegate iterator is finished, so forget it and continue with
// the outer generator.
return b.delegate=null,y}// Define Generator.prototype.{next,throw,return} in terms of the
// unified ._invoke helper method.
function l(a){var b={tryLoc:a[0]};1 in a&&(b.catchLoc=a[1]),2 in a&&(b.finallyLoc=a[2],b.afterLoc=a[3]),this.tryEntries.push(b)}function m(a){var b=a.completion||{};b.type="normal",delete b.arg,a.completion=b}function n(a){// The root entry object (effectively a try statement without a catch
// or a finally block) gives us a place to store values thrown from
// locations where there is no enclosing try statement.
this.tryEntries=[{tryLoc:"root"}],a.forEach(l,this),this.reset(!0)}function o(a){if(a){var b=a[u];if(b)return b.call(a);if("function"==typeof a.next)return a;if(!isNaN(a.length)){var c=-1,d=function b(){for(;++c<a.length;)if(s.call(a,c))return b.value=a[c],b.done=!1,b;return b.value=q,b.done=!0,b};return d.next=d}}// Return an iterator with no values.
return{next:p}}function p(){return{value:q,done:!0}}var q,r=Object.prototype,s=r.hasOwnProperty,t="function"==typeof Symbol?Symbol:{},u=t.iterator||"@@iterator",v=t.asyncIterator||"@@asyncIterator",w=t.toStringTag||"@@toStringTag",x=b.regeneratorRuntime;if(x)// Don't bother evaluating the rest of this file if the runtime was
// already defined globally.
return void(// If regeneratorRuntime is defined globally and we're in a module,
// make the exports object identical to regeneratorRuntime.
a.exports=x);// Define the runtime globally (as expected by generated code) as either
// module.exports (if we're in a module) or a new, empty object.
x=b.regeneratorRuntime=a.exports,x.wrap=c;var y={},z={};z[u]=function(){return this};var A=Object.getPrototypeOf,B=A&&A(A(o([])));B&&B!==r&&s.call(B,u)&&(z=B);var C=g.prototype=e.prototype=Object.create(z);// Within the body of any async function, `await x` is transformed to
// `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
// `hasOwn.call(value, "__await")` to determine if the yielded value is
// meant to be awaited.
// Note that simple async functions are implemented on top of
// AsyncIterator objects; they just return a Promise for the value of
// the final result produced by the iterator.
// A Generator should always return itself as the iterator object when the
// @@iterator function is called on it. Some browsers' implementations of the
// iterator prototype chain incorrectly implement this, causing the Generator
// object to not be returned from this call. This ensures that doesn't happen.
// See https://github.com/facebook/regenerator/issues/274 for more details.
f.prototype=C.constructor=g,g.constructor=f,g[w]=f.displayName="GeneratorFunction",x.isGeneratorFunction=function(a){var b="function"==typeof a&&a.constructor;return!!b&&(b===f||// For the native GeneratorFunction constructor, the best we can
// do is to check its .name property.
"GeneratorFunction"===(b.displayName||b.name))},x.mark=function(a){return Object.setPrototypeOf?Object.setPrototypeOf(a,g):(a.__proto__=g,!(w in a)&&(a[w]="GeneratorFunction")),a.prototype=Object.create(C),a},x.awrap=function(a){return{__await:a}},h(i.prototype),i.prototype[v]=function(){return this},x.AsyncIterator=i,x.async=function(a,b,d,e){var f=new i(c(a,b,d,e));return x.isGeneratorFunction(b)?f// If outerFn is a generator, return the full iterator.
:f.next().then(function(a){return a.done?a.value:f.next()})},h(C),C[w]="Generator",C[u]=function(){return this},C.toString=function(){return"[object Generator]"},x.keys=function(a){var b=[];for(var c in a)b.push(c);// Rather than returning an object with a next method, we keep
// things simple and return the next function itself.
return b.reverse(),function c(){for(;b.length;){var d=b.pop();if(d in a)return c.value=d,c.done=!1,c}// To avoid creating an additional object, we just hang the .value
// and .done properties off the next function object itself. This
// also ensures that the minifier will not anonymize the function.
return c.done=!0,c}},x.values=o,n.prototype={constructor:n,reset:function(a){if(this.prev=0,this.next=0,this.sent=this._sent=q,this.done=!1,this.delegate=null,this.method="next",this.arg=q,this.tryEntries.forEach(m),!a)for(var b in this)// Not sure about the optimal order of these conditions:
"t"===b.charAt(0)&&s.call(this,b)&&!isNaN(+b.slice(1))&&(this[b]=q)},stop:function(){this.done=!0;var a=this.tryEntries[0],b=a.completion;if("throw"===b.type)throw b.arg;return this.rval},dispatchException:function(a){function b(b,d){return f.type="throw",f.arg=a,c.next=b,d&&(c.method="next",c.arg=q),!!d}if(this.done)throw a;for(var c=this,d=this.tryEntries.length-1;0<=d;--d){var e=this.tryEntries[d],f=e.completion;if("root"===e.tryLoc)// Exception thrown outside of any try block that could handle
// it, so set the completion value of the entire function to
// throw the exception.
return b("end");if(e.tryLoc<=this.prev){var g=s.call(e,"catchLoc"),h=s.call(e,"finallyLoc");if(g&&h){if(this.prev<e.catchLoc)return b(e.catchLoc,!0);if(this.prev<e.finallyLoc)return b(e.finallyLoc)}else if(g){if(this.prev<e.catchLoc)return b(e.catchLoc,!0);}else if(!h)throw new Error("try statement without catch or finally");else if(this.prev<e.finallyLoc)return b(e.finallyLoc)}}},abrupt:function(a,b){for(var c,d=this.tryEntries.length-1;0<=d;--d)if(c=this.tryEntries[d],c.tryLoc<=this.prev&&s.call(c,"finallyLoc")&&this.prev<c.finallyLoc){var e=c;break}e&&("break"===a||"continue"===a)&&e.tryLoc<=b&&b<=e.finallyLoc&&(e=null);var f=e?e.completion:{};return f.type=a,f.arg=b,e?(this.method="next",this.next=e.finallyLoc,y):this.complete(f)},complete:function(a,b){if("throw"===a.type)throw a.arg;return"break"===a.type||"continue"===a.type?this.next=a.arg:"return"===a.type?(this.rval=this.arg=a.arg,this.method="return",this.next="end"):"normal"===a.type&&b&&(this.next=b),y},finish:function(a){for(var b,c=this.tryEntries.length-1;0<=c;--c)if(b=this.tryEntries[c],b.finallyLoc===a)return this.complete(b.completion,b.afterLoc),m(b),y},catch:function(a){for(var b,c=this.tryEntries.length-1;0<=c;--c)if(b=this.tryEntries[c],b.tryLoc===a){var d=b.completion;if("throw"===d.type){var e=d.arg;m(b)}return e}// The context.catch method must only be called with a location
// argument that corresponds to a known catch block.
throw new Error("illegal catch attempt")},delegateYield:function(a,b,c){return this.delegate={iterator:o(a),resultName:b,nextLoc:c},"next"===this.method&&(this.arg=q),y}}}(// In sloppy mode, unbound `this` refers to the global object, fallback to
// Function constructor if we're in global strict mode. That is sadly a form
// of indirect eval which violates Content Security Policy.
function(){return this||"object"==typeof self&&self}()||Function("return this")())}),d=function(){return this||"object"==typeof self&&self}()||Function("return this")(),e=d.regeneratorRuntime&&0<=Object.getOwnPropertyNames(d).indexOf("regeneratorRuntime"),f=e&&d.regeneratorRuntime;/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */ // This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
d.regeneratorRuntime=void 0;if(e)// Restore the original runtime.
d.regeneratorRuntime=f;else// Remove the global property added by runtime.js.
try{delete d.regeneratorRuntime}catch(a){d.regeneratorRuntime=void 0}var g=c,h=function(b){return function(){var c=this,d=arguments;return new Promise(function(e,f){function g(b){a(i,e,f,g,h,"next",b)}function h(b){a(i,e,f,g,h,"throw",b)}var i=b.apply(c,d);g(void 0)})}},i=function(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")},j=function(a,c,d){return c&&b(a.prototype,c),d&&b(a,d),a},k=/*#__PURE__*/function(){function a(){i(this,a),this.deviceList=null}return j(a,[{key:"checkMediaDevicesSupport",value:function(){if(!navigator)throw new Error("navigator not supported.");if(!navigator.mediaDevices)throw new Error("mediaDevices not supported.");if(!navigator.mediaDevices.enumerateDevices)throw new Error("mediaDevices.enumerateDevices() not supported.");return!0}},{key:"stopMediaTracks",value:function(a){a.getTracks().forEach(function(a){a.stop()})}},{key:"getVideoMedia",value:function(){var a=h(/*#__PURE__*/g.mark(function a(b){var c;return g.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,navigator.mediaDevices.getUserMedia({video:!b||{deviceId:{exact:b}},audio:!1});case 2:return c=a.sent,a.abrupt("return",c);case 4:case"end":return a.stop();}},a)}));return function(){return a.apply(this,arguments)}}()},{key:"getAudioMedia",value:function(){var a=h(/*#__PURE__*/g.mark(function a(b){var c;return g.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,navigator.mediaDevices.getUserMedia({video:!1,audio:!b||{deviceId:{exact:b}}});case 2:return c=a.sent,a.abrupt("return",c);case 4:case"end":return a.stop();}},a)}));return function(){return a.apply(this,arguments)}}()},{key:"getVideoAndAudioMedia",value:function(){var a=h(/*#__PURE__*/g.mark(function a(b,c){var d;return g.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,navigator.mediaDevices.getUserMedia({video:{deviceId:{exact:b}},audio:{deviceId:{exact:c}}});case 2:return d=a.sent,a.abrupt("return",d);case 4:case"end":return a.stop();}},a)}));return function(){return a.apply(this,arguments)}}()},{key:"getDeviceList",value:function(){var a=h(/*#__PURE__*/g.mark(function a(){return g.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,navigator.mediaDevices.getUserMedia({video:!0,audio:!0});case 2:return a.next=4,navigator.mediaDevices.enumerateDevices();case 4:return this.deviceList=a.sent,a.abrupt("return",this.deviceList);case 6:case"end":return a.stop();}},a,this)}));return function(){return a.apply(this,arguments)}}()},{key:"getOnlyAudioDeviceList",value:function(){var a=h(/*#__PURE__*/g.mark(function a(){return g.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,navigator.mediaDevices.getUserMedia({video:!1,audio:!0});case 2:return a.abrupt("return",navigator.mediaDevices.enumerateDevices());case 3:case"end":return a.stop();}},a)}));return function(){return a.apply(this,arguments)}}()},{key:"getOnlyVideoDeviceList",value:function(){var a=h(/*#__PURE__*/g.mark(function a(){return g.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,navigator.mediaDevices.getUserMedia({video:!0,audio:!1});case 2:return a.abrupt("return",navigator.mediaDevices.enumerateDevices());case 3:case"end":return a.stop();}},a)}));return function(){return a.apply(this,arguments)}}()},{key:"getAudioDeviceList",value:function(){var a=h(/*#__PURE__*/g.mark(function a(){var b;return g.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(a.t0=this.deviceList,a.t0){a.next=5;break}return a.next=4,this.getDeviceList();case 4:a.t0=a.sent;case 5:return b=a.t0,a.abrupt("return",b.filter(function(a){return"audioinput"===a.kind||"audiooutput"===a.kind}));case 7:case"end":return a.stop();}},a,this)}));return function(){return a.apply(this,arguments)}}()},{key:"getVideoDeviceList",value:function(){var a=h(/*#__PURE__*/g.mark(function a(){var b;return g.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(a.t0=this.deviceList,a.t0){a.next=5;break}return a.next=4,this.getDeviceList();case 4:a.t0=a.sent;case 5:return b=a.t0,a.abrupt("return",b.filter(function(a){return"videoinput"===a.kind}));case 7:case"end":return a.stop();}},a,this)}));return function(){return a.apply(this,arguments)}}()},{key:"getOutAudioDeviceList",value:function(){var a=h(/*#__PURE__*/g.mark(function a(){var b;return g.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(a.t0=this.deviceList,a.t0){a.next=5;break}return a.next=4,this.getDeviceList();case 4:a.t0=a.sent;case 5:return b=a.t0,a.abrupt("return",b.filter(function(a){return"audiooutput"===a.kind}));case 7:case"end":return a.stop();}},a,this)}));return function(){return a.apply(this,arguments)}}()},{key:"getInAudioDeviceList",value:function(){var a=h(/*#__PURE__*/g.mark(function a(){var b;return g.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(a.t0=this.deviceList,a.t0){a.next=5;break}return a.next=4,this.getDeviceList();case 4:a.t0=a.sent;case 5:return b=a.t0,a.abrupt("return",b.filter(function(a){return"audioinput"===a.kind}));case 7:case"end":return a.stop();}},a,this)}));return function(){return a.apply(this,arguments)}}()},{key:"setOutAudioDevices",value:function(a,b){return new Promise(function(c,d){"undefined"==typeof a.sinkId?d("Browser does not support output device selection."):a.setSinkId(b).then(function(){c("Success, audio output device attached: ".concat(b," to element with ").concat(a.title," as source."))}).catch(function(a){var b=a;"SecurityError"===a.name&&(b="You need to use HTTPS for selecting audio output device: ".concat(a)),d(b)})})}}]),a}();return k});
//# sourceMappingURL=js-media-devices.js.map
