import { moduleForModel, test } from 'ember-qunit';

moduleForModel('planet', 'Unit | Serializer | planet', {
  // Specify the other units that are required for this test.
  needs: ['serializer:planet']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
