describe('nested', function () {

    describe('get', function () {

        var haystack = {
            a: {
                aa: {
                    aaa: 123
                }
            },
            b: {
                bb: false
            },
            c: 'no deeper'
        };

        it('should return undefined if no object passed', function () {
            expect(learn.nested.get('not an object', 'key')).to.be(undefined);
        });

        it('should return undefined if the key is not found in the object', function () {

            expect(learn.nested.get('d', haystack)).to.be(undefined);
        });

        it('should return the expected value from the top level', function () {
            expect(learn.nested.get('c', haystack)).to.be('no deeper');
        });

        it('should return the expected value from beneath the top level using dot notated keys', function () {
            expect(learn.nested.get('a.aa', haystack)).to.eql({
                aaa: 123
            });

            expect(learn.nested.get('a.aa.aaa', haystack)).to.be(123);
            expect(learn.nested.get('b.bb', haystack)).to.be(false);
        });
    });

    describe('set', function () {

        it('should return undefined if no object passed', function () {
            expect(learn.nested.set('key', 'value', 'not an object')).to.be(undefined);
        });

        it('should set values at the top level', function () {
            var data = {};
            learn.nested.set('key', 'value', data);
            expect(data.key).to.be('value');
        });

        it('should be able to set existing values', function () {
            var data = {
                count: 1
            };

            learn.nested.set('count', 3, data);
            expect(data.count).to.be(3);
        });

        it('should set the expected value from beneath the top level using dot notated keys', function () {

            var data = {
                one: {
                    two: [2, 2, 2],
                    three: {
                        four: 4
                    }
                }
            };

            learn.nested.set('one.three.five', 5, data);
            expect(data.one.three.five).to.be(5);

            learn.nested.set('one.three.four', 5, data);
            expect(data.one.three.four).to.be(5);

            learn.nested.set('one.two', [2], data);
            expect(data.one.two).to.eql([2]);
        });
    });
});
