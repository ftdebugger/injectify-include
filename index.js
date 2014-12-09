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

        var context = this;

        while (context && !context.view && context.__parent__) {
            context = context.__parent__;
        }

        var view = context ? context.view : null;

        hash.__parent__ = this;
        hash.view = view;

        if (options.fn) {
            hash.content = options.fn(hash);
        }

        return new Handlebars.SafeString(template(hash));
    };

    Handlebars.registerHelper("include", includeHelper);

    module.exports = includeHelper;

})();
