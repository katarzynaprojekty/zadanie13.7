var fs = require('fs');
var StatMode = require('stat-mode');
var colors = require('colors');

fs.readdir('./', function(err, files) {
	console.log('Read file!'.red);
	console.log(files)

	fs.writeFile("./test.txt", files, function(err) {
		if(err) {
			return console.log(err);
		}
    	console.log("The files was saved!".red);
	}); 
});



// ------------------------------------------------------------------------
// zadanie robione w rozdziale 13.7
//fs.stat('./cat.jpeg', function(err, stats) {
//    console.log(stats);
//	console.log("----------------");
//	var statMode = new StatMode(stats);
//    console.log(statMode.toString());
//});

//fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
//    console.log('Dane przed zapisem!'.red);
//    console.log(data);
//    fs.appendFile('./tekst.txt', '\t A tak wyglądają po zapisie!', function(err) {
//        if (err) throw err;
//        console.log('Zapisano!'.red);
//        fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
//            console.log('Dane po zapisie'.red)
//            console.log(data);
//        });
//    });
//});
// ------------------------------------------------------------------------
