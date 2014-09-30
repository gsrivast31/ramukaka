var mcapi = require('../node_modules/mailchimp-api/mailchimp');

var API_KEY = "*";
var mc = new mcapi.Mailchimp(API_KEY);

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
