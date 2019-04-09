var MongoClient = require( 'mongodb' ).MongoClient;
var _db;
module.exports = {
  connectToServer: function( callback ) {
    MongoClient.connect( "mongodb://localhost/test",{ useNewUrlParser: true }, function( err, client ) {
      _db = client.db("test");
      return callback( err );
    } );
  },
  getDb: function() {
    return _db;
  }
};