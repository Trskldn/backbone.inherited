;(function (root, factory) {

  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.BackboneInheritedMixin = factory();
  }

}(this, function () {
	return {
		inherited: function(name) {
			var method,
			    args = [].slice.call(arguments, 1),
			    impl = arguments.callee.caller,
			    implFound = false,
			    parent = this;

			while((parent = Object.getPrototypeOf(parent))){
				if (parent.hasOwnProperty(name) && parent[name] === impl) {
					implFound = true;
					continue;
				}
				if (implFound && parent.hasOwnProperty(name)) {
					method = parent[name];
					break;
				}
			}
			
			if (typeof method === 'function') return method.apply(this, args);
		}
	};
}));
