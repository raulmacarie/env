console.log('i18n');

export class i18n extends Backbone.Model  {
    // Default attributes for the todo.
    defaults() {
 	return {
        "car" : "%{smart_count} masina |||| %{smart_count} masini",
        "hello" : "Salut %{name}"
    	};
    }

};
