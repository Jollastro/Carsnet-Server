module.exports.policies = {
	
	'*': true,

	'CarsController': {
		'userRedirect' : 'isAuthenticated',
		'sellerRedirect': 'isAuthenticatedSeller'
	},

	'SellerController': {
		'sellerCompany': 'isAuthenticatedSeller'
	}
};
