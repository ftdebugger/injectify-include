(function () {
    //noinspection BadExpressionStatementJS
    "use strict";

    /**
     * @type {Handlebars}
     */
    var Handlebars = require("injectify/runtime");

    Handlebars.registerHelper("include", function (template, options) {
        return Handlebars.SafeString(template(options.hash));
    });

})();
