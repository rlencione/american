var db = openDatabase('AAdb', '1.0', 'AAdb_Home', '4048');
db.transaction(function(tx)){
    tx.execute("create table")
}
