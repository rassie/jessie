/*global bind,attachWindowListener */

/*
Description:
Relies on bind and attachWindowListener
*/
var attachBoundWindowListener;

if(attachWindowListener && bind) {
	attachBoundWindowListener = function(eventType, fn, thisObject) {
		var listener = bind(fn, thisObject);
		return attachWindowListener(eventType, listener);
	};
}