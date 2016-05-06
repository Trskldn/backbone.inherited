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
			    args = [].slice.call(arguments, 1);

			try{
				method = this.__proto__.constructor.__super__[name];
			} catch(e){
				console.warn('can\'t find ',name, ' in prototype chains. error: ', e);
				throw e;
			}
			if (typeof method === 'function') return method.apply(this, args);
		}
	};
}));
