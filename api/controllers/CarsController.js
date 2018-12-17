module.exports = {
	
	_config: {
		actions: true,
		shortcuts: true,
		rest: true
	},
	
	userRedirect: (req, res) => {
		Cars.find().exec( (err, cars) => {
			return res.view('userCars',{userCars: cars});
		});
	},

	sellerRedirect: (req, res) => {
		Cars.find().exec( (err, cars) => {
			return res.view('sellerCars',{sellerCars: cars});
		});
	},
	
	
	sellerRefresh: function(req, res) {
		return res.redirect('/sellerCars');
	}
};