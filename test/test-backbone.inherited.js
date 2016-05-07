var expect = require('chai').expect;
var InheritedMixin = require('../backbone.inherited.js'); 
var _ = require('underscore'); 
var Backbone = require('backbone'); 

describe('InheritedMixin', function() {

	it('this.inherited("someMethod") should call parents prototype method', function() {
 
		var counter = 0;
		Model1 = Backbone.Model.extend(_.extend({
			someMethod: function(){
				counter++;
				if (counter > 10)  return;
				return 'M1.someMethod returned value'; 
			}
		}, InheritedMixin));

		Model2 = Model1.extend({
			someMethod:function(){
				counter++;
				if (counter > 10)  return;
				return this.inherited('someMethod', arguments);
			}
		});

		Model3 = Model2.extend({
			someMethod:function(){
				counter++;
				if (counter > 10) return; 
				return this.inherited('someMethod', arguments);
			}
		});

		model3 = new Model3();
		model3.someMethod();
		expect(counter).be.equal(3);
	});
});