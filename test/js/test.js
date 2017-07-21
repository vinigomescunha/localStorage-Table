var key = 'mock';
var s = new Storage(key);
var l = Lipsum;
var u = QUnit;
var tb = new Table({
    id: 'mock'
});
u.test("Storage: key is same that defined...", function (assert) {
    assert.equal(s.key, key);
});
u.test("Storage: set array, get expect array...", function (assert) {
    s.set([key]); // only array
    assert.equal(s.get(), key);
});
u.test("Storage: set non-array, get expect empty array...", function (assert) {
    s.set(key); // empty array as return
    assert.equal(s.get().length, 0);
});
u.test("Lipsum: lipsum is defined...", function (assert) {
    assert.notEqual(l.lipsum, '');
});
u.test("Table: lipsum var is defined...", function (assert) {
    var spy = sinon.spy();
    l.random = spy;
    tb.addItem();
    // sinon.assert.called(spy);
    assert.equal(spy.called, true)
});
