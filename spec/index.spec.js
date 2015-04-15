window._ = require("underscore");

//register 'view' helper
require("../index");

describe("Injectify include helper", function() {
    it("include file on level-0", function() {
        var template = require("./fixture/tpl/level-0.hbs");
        expect(template()).toBe("included 'low level\n'\n");
    });

    it("include file on level-1", function() {
        var template = require("./fixture/tpl/level-1.hbs");
        expect(template({flag: true})).toBe("included 'low level\n'\n");
    });

    it("include file with subinclude", function() {
        var template = require("./fixture/tpl/subinclude.hbs");
        expect(template({flag: true})).toBe("subinclude <included 'low level\n'\n>\n");
    });

    it("include file on level-0", function() {
        var template = require("./fixture/tpl/params.hbs");
        expect(template({ param1: 'abc', param2: 'cde' })).toBe("abc-cde\n");
    });

    it('include as block helper', function () {
        var template = require('./fixture/tpl/block-include.hbs');
        expect(template()).toBe('"1-2\n"\na\n');
    });

    it('include modules with exported string', function () {
        var template = require('./fixture/tpl/string-include.hbs');
        expect(template()).toBe('-me is string-exporting module-');
    });

    it('include module that exports nothing', function () {
        var template = require('./fixture/tpl/empty-include.hbs');
        expect(template()).toBe('--');
    });

});
