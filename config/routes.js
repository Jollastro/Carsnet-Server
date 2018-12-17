module.exports.routes = {

	'/': {
		view: 'homepage'
	},

	'get /userLogin': {
		view: 'userLogin'
	},
	
	'post /userLogin': 'AuthController.userLogin',
	
	'get /userSignup': {
		view: 'userSignup'
	},
	
	'/userLogout': 'AuthController.userLogout',

	'get /sellerLogin': {
		view: 'sellerLogin'
	},
	
	'post /sellerLogin': 'AuthController.sellerLogin',
	
	'get /sellerSignup': {
		view: 'sellerSignup'
	},
	
	'/sellerLogout': 'AuthController.sellerLogout',

	'/userCars': 'CarsController.userRedirect',

	'/sellerCars': 'CarsController.sellerRedirect',

	'/addCar': 'SellerController.sellerCompany'
	
//	'post /addCar': 'CarsController.sellerRefresh'
	
};
