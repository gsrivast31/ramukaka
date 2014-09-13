var mcapi = require('../node_modules/mailchimp-api/mailchimp');

var mc = new mcapi.Mailchimp('53b703bd208115173012aba8271f64a3-us8');

module.exports = {
  getIndex: function(req, res) {
    res.render('index');
  },

  subscribeUser: function(req, res) {
    mc.lists.subscribe({
	    id:'f9fd81fd82', 
	    email:{email:req.body.email},
	    merge_vars: {zipcode:req.body.zipcode}
	  }, function(data) {
   	  res.send(200);
    }, function(error) {
      res.send(500);
    });
  }
};
