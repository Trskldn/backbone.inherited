var expect = require('chai').expect;
var InheritedMixin = require('../backbone.inherited.js'); 
var _ = require('underscore'); 
var Backbone = require('backbone'); 

describe('InheritedMixin', function() {

	it('this.inherited("someMethod") should call parents prototype chained methods', function() {
 
		var counter = 0;
		var results = [];
		
		Model1 = Backbone.Model.extend(_.extend({
			someMethod: function(){
				counter++;
				if (counter > 10)  return;
				results.push('Model1.someMethod'); 
				return 'M1.someMethod returned value'; 
			}
		}, InheritedMixin));

		Model2 = Model1.extend({
			someMethod:function(){
				counter++;
				if (counter > 10)  return;
				results.push('Model2.someMethod'); 
				return this.inherited('someMethod', arguments);
			}
		});

		Model3 = Model2.extend({
			someMethod:function(){
				counter++;
				if (counter > 10) return;
				results.push('Model3.someMethod'); 
				return this.inherited('someMethod', arguments);
			}
		});

		model3 = new Model3();
		model3.someMethod();
		expect(results).to.be.deep.equal(['Model3.someMethod', 'Model2.someMethod', 'Model1.someMethod']);
	});
});