testHarmony
===========

Meteor and ES6 Harmony (EcmaScript 6) interoperability

How to:

1. Created a new meteor app
2. Run meteor add mquandalle:harmony
3. Added some code.

Testing:
In your browser:

1. var tut1 = new Tutorial(1, 'tutorial1', 10, 'myself');
2. tut1.save(function(that, err, result) { console.log(that); console.log(err); console.log(result); });
3. Tutorials.find().fetch()

tutorial added