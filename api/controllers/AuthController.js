var passport = require('passport');

module.exports = {
    
    _config: {
        actions: false,
        shortcuts: false,
        rest: false
    },
    
    userLogin: function(req, res) {
        
        passport.authenticate('local', function(err, user, info) {
            if ((err) || (!user)) {
                return res.send({
                    message: info.message,
                    user: user
                });
            }
            req.logIn(user, function(err) {
                if (err) res.send(err);
                return res.redirect('/userCars');
            });
            
        })(req, res);
    },
    
    userLogout: function(req, res) {
        req.logout();
        res.redirect('/');
    },
    
    sellerLogin: function(req, res) {
        
        passport.authenticate('sellerStrat', function(err, seller, info) {
            if ((err) || (!seller)) {
                return res.send({
                    message: info.message,
                    seller: seller
                });
            }
            req.logIn(seller, function(err) {
                if (err) res.send(err);
                 return res.send({
                    message: info.message,
                    seller: seller
                });
            });
            
        })(req, res);
    },
    
    sellerLogout: function(req, res) {
        req.logout();
        res.redirect('/');
    }
};