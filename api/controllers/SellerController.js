module.exports = {
	
	_config: {
		actions: true,
		shortcuts: true,
		rest: true
	},
	
    sellerCompany: (req, res) => {
        Seller.find().exec( (err, seller) => {
            return res.view('addCar',{addCar: seller});
            
        });
    }
	
};