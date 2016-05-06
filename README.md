# BackboneInheritedMixin

```javascript
		Model1 = Backbone.Model.extend(_.extend({
			someMethod: function(){
				done();
				return 'M1.someMethod returned value';
			}
		}, InheritedMixin));

		Model2 = Model1.extend();
		Model3 = Model2.extend({
			someMethod:function(){ 
				return this.inherited('someMethod', arguments);
			}
		});

		model3 = new Model3();
		model3.someMethod(); //invoks Model3.someMethod() - > Model1.someMethod()
```