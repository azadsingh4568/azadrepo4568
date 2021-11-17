var Server = require('server');

var BasketMgr = require('dw/order/BasketMgr');

Server.get('Slow' , function(req,res,next){

    var basket = BasketMgr.getCurrentBasket();

    var postalc = basket.defaultShipment.shippingAddress.postalCode;

    res.json({
        "items":postalc,
    });
    next();

})

module.exports = server.exports();