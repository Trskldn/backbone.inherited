# BackboneInheritedMixin

```javascript
		var Backbone = require('backbone');
		var InheritedMixin = require('backbone.inherited');

		Model1 = Backbone.Model.extend(_.extend({
			someMethod: function(){
				return 'Model1.someMethod returned value';
			}
		}, InheritedMixin));

		Model2 = Model1.extend({
			someMethod:function(){ 
				return this.inherited('someMethod', arguments);
			}

		});
		
		Model3 = Model2.extend({
			someMethod:function(){ 
				return this.inherited('someMethod', arguments);
			}
		});

		model3 = new Model3();
		model3.someMethod(); //invoks Model3.someMethod() -> Model2.someMethod() -> Model1.someMethod()
```
