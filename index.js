(function () {
    //noinspection BadExpressionStatementJS
    "use strict";

    /**
     * @type {Handlebars}
     */
    var Handlebars = require("injectify/runtime");

    /**
     * @param {Function} template
     * @param {Object} [hash]
     * @param {{hash: Object}} options
     *
     * @returns {Handlebars.SafeString}
     */
    var includeHelper = function () {
        var args = _.toArray(arguments),
            options = args.pop(),
            template = args.shift(),
            hash;

        if (args.length) {
            hash = args.pop();
        }

        if (hash) {
            hash = _.extend({}, hash, options.hash);
        }
        else {
            hash = options.hash;
        }

        hash.__parent__ = this;

        return new Handlebars.SafeString(template(hash));
    };

    Handlebars.registerHelper("include", includeHelper);

    module.exports = includeHelper;

})();
