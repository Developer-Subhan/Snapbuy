const Order = require("../models/Order");

module.exports.getAllOrders = async (req, res, next) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (error) {
        next(error);
    }
};

module.exports.updateOrderStatus = async (req, res, next) => {
    const { id } = req.params;
    const { newStatus } = req.body;

    const allowedStatuses = ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'];
    if (!allowedStatuses.includes(newStatus)) {
        return next(new ExpressError(400, 'Invalid status value provided.'));
    }

    try {
        const order = await Order.findByIdAndUpdate(
            id,
            { status: newStatus },
            { new: true, runValidators: true }
        );

        if (!order) {
            return next(new ExpressError(404, 'Order not found.'));
        }

        res.status(200).json(order);

    } catch (error) {
        next(error);
    }
};

module.exports.getOrderStatus = async (req, res, next) => {
    const { id } = req.params;

    try {
        const order = await Order.findById(id).select('status createdAt items summary.deliveryMethod customerInfo.email');

        if (!order) {
            const err = new Error('Order not found.');
            err.statusCode = 404;
            return next(err);
        }

        res.status(200).json(order);

    } catch (error) {
        if (error.kind === 'ObjectId') {
            const err = new Error('Order ID format is invalid.');
            err.statusCode = 400;
            return next(err);
        }
        next(error);
    }
};

module.exports.placeOrder = async (req, res, next) => {
    const orderData = req.body;
    
    try {
        const newOrder = new Order(orderData);
        const savedOrder = await newOrder.save();

        return res.status(201).json({
            message: 'Order successfully placed!',
            orderId: savedOrder._id,
            status: savedOrder.status,
            createdAt: savedOrder.createdAt
        });

    } catch (error) {
        if (error.name === 'ValidationError') {
            const validationErrors = Object.values(error.errors).map(val => val.message).join(', ');
            return next(new ExpressError(400, `Data validation failed: ${validationErrors}`));
        }
        next(error);
    }
};
