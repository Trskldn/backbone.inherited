var expect = require('chai').expect;
var InheritedMixin = require('../backbone.inherited.js'); 
var _ = require('underscore'); 
var Backbone = require('backbone'); 

describe('InheritedMixin', function() {
	it('this.inherited("someMethod") should call parents prototype method', function(done) {

		M1 = Backbone.Model.extend(_.extend({
			someMethod: function(){
				done();
				return 'M1.someMethod returned value';
			}
		}, InheritedMixin));

		M2 = M1.extend();
		M3 = M2.extend({
			someMethod:function(){ 
				return this.inherited('someMethod', arguments);
			}
		});

		m3 = new M3();
		m3.someMethod();
	});
});