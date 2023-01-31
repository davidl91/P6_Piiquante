const Sauce = require('../models/sauce');
 
module.exports = (req, res, next) => {
    try {
        Sauce.findOne({ _id: req.params.id })
            .then(sauce => {
                if (sauce.userId != req.auth.userId) {
                    res.status(403).json({ message: 'Unauthorized' })
                }else {
                    next();
                }
            })
    } catch(error) {
        res.status(401).json({ error });
    }
};