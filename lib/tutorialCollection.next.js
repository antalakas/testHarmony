export var Tutorials = new Mongo.Collection("tutorials", {
  transform: function(doc) {
    return new Tutorial(doc._id, doc.name, doc.capacity, doc.currentCapacity, doc.owner);
  }
});

export class Tutorial {
  
  constructor(id, name, capacity, currentCapacity, owner) {
    this._id = id;
    this._name = name;
    this._capacity = capacity;
    this._currentCapacity = currentCapacity ? currentCapacity : 0;
    this._owner = owner;    
  }
  
  get id() {
    // readonly
    return this._id;
  }

  get owner() {
    // readonly
    return this._owner;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get capacity() {
    return this._capacity;
  }

  get currentCapacity() {
    return this._currentCapacity;
  }

  set capacity(value) {
    this._capacity = value;
  }

  save(callback) {
    
    console.log('saving...');
    
    var doc = {
      name: this.name,
      capacity: this.capacity,
      owner: this._owner,
      currentCapacity: 0      
    };  
    
    var that = this;
    Tutorials.insert(doc, function(error, result) {
      that._id = result;

      if (callback !== null) {
        callback.call(that, error, result);
      }
    });    
  }
}