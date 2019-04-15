const assert = require('assert');

describe('Math in JS', function () {
    it('should support addition', function () {
        assert.equal(1 + 1, 2);
    });

    it('should support addition', function (done) {
        setTimeout(function () {
            assert.equal(1 + 1, 2);
            done();
        }, 100);
    });
});

