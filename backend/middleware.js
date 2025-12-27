const {
    productSchema,
    CustomerInfoSchema,
    ItemSchema,
    SummarySchema,
} = require("./schema");

const ExpressError = require("./utils/ExpressError.js");

const isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        return res.status(401).json({ message: "Access denied. You must be logged in." });
    }
    next();
};

const isAdmin = (req, res, next) => {
    if (!req.user) {
        return res.status(401).json({ message: "Access denied. Login required." });
    }
    if (req.user.username === "admin") return next();
    return res.status(403).json({ message: "Access denied." });
};

const validateProduct = (req, res, next) => {
    const { error } = productSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(e => e.message).join(", ");
        next(new ExpressError(400, msg));
    }
    next();
};

const validateOrder = (req, res, next) => {
    const { customerInfo, items, summary } = req.body;

    const customerError = CustomerInfoSchema.validate(customerInfo, { abortEarly: false }).error;
    if (customerError) {
        const msg = customerError.details.map(e => e.message).join(", ");
        return next(new ExpressError(400, msg));
    }

    for (const item of items || []) {
        const itemError = ItemSchema.validate(item, { abortEarly: false }).error;
        if (itemError) {
            const msg = itemError.details.map(e => e.message).join(", ");
        return next(new ExpressError(400, msg));
        }
    }

    const summaryError = SummarySchema.validate(summary, { abortEarly: false }).error;
    if (summaryError) {
        const msg = summaryError.details.map(e => e.message).join(", ");
        return next(new ExpressError(400, msg));
    }

    next();
};

module.exports = {
    isLoggedIn,
    isAdmin,
    validateProduct,
    validateOrder
};
