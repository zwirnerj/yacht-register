const Yacht = require('../models/yacht');

exports.getIndex = (req, res, next) => {
    if (req.session)
        console.log(req.session);
    else
        console.log('From getIndex... no session found!!!');
    if (req.userContext)
        console.log('Hi ' + req.userContext.userinfo.name);
    Yacht.findAll()
        .then(yachts => {
            res.render('yacht/index', {
                user: req.userContext,
                yachts: yachts,
                pageTitle: 'Classic Yacht Register',
                path: '/'
            });
        })
        .catch(err => {
            console.log(err);
        });
};