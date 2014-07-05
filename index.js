(function () {
    //noinspection BadExpressionStatementJS
    "use strict";

    /**
     * @type {Handlebars}
     */
    var Handlebars = require("injectify/runtime");

    Handlebars.registerHelper("include", function (template, options) {
        return new Handlebars.SafeString(template(options.hash));
    });

})();
