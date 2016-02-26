const expect = require('chai').expect;
const request =  require('superagent');
const exec =  require('child_process').exec;

describe('test', function() {

	// before(function() {
	// 	exec('npm start')		
	// })	


	it('should work', function(done) {



		request
			.get('http://localhost:9000')
			.end(function(err, res) {
				if(err) {
					throw new Error(err)
				}
				expect(res.body).to.be.a('string');
				expect(res.body).to.equal('Hello World!');	
				done();
			});


	});

});