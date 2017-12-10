var tesseract = require('node-tesseract');

// Recognize text of any language in any format
tesseract.process(__dirname + '/test-2.jpeg',function(err, text) {
	if(err) {
		console.error(err);
	} else {
		console.log(text);
	}
});

// Recognize German text in a single uniform block of text and set the binary path

var options = {
	binary: '/usr/local/bin/tesseract'
};

tesseract.process(__dirname + '/test-2.jpeg', options, function(err, text) {
	if(err) {
		console.error(err);
	} else {
		console.log(text);
	}
});
