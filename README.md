# BackboneInheritedMixin

'''javascript
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
'''