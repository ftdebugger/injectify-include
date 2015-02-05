(function () {
    //noinspection BadExpressionStatementJS
    "use strict";

    /**
     * @type {Handlebars}
     */
    var Handlebars = require("injectify/runtime"),
        utils = require('injectify/utils');

    /**
     * @param {Function} template
     * @param {Object} [hash]
     * @param {{hash: Object}} options
     *
     * @returns {Handlebars.SafeString}
     */
    var includeHelper = function () {
        var args = utils.extractArguments(this, _.toArray(arguments)),
            options = args.options,
            template = args.module,
            hash = args.hash,
            parentView = args.parentView;

        hash.__parent__ = this;
        hash.view = parentView;

        if (options.fn) {
            hash.content = options.fn(hash);
        }

        return new Handlebars.SafeString(template(hash));
    };

    Handlebars.registerHelper("include", includeHelper);

    module.exports = includeHelper;

})();
