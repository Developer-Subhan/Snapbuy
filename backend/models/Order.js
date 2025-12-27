const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    customerInfo: {
        type: new mongoose.Schema({
            email: {
                type: String,
                required: [true, 'Email is required.'],
                trim: true,
                lowercase: true,
                match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.'],
            },
            firstName: {
                type: String,
                required: [true, 'First name is required.'],
                trim: true,
            },
            lastName: {
                type: String,
                required: [true, 'Last name is required.'],
                trim: true,
            },
            address: {
                type: String,
                required: [true, 'Street address is required.'],
                trim: true,
            },
            apartment: {
                type: String,
                trim: true,
                default: '',
            },
            city: {
                type: String,
                required: [true, 'City is required.'],
                trim: true,
            },
            state: {
                type: String,
                required: [true, 'State/Province is required.'],
                trim: true,
            },
            zip: {
                type: String,
                required: [true, 'Postal code is required.'],
                trim: true,
            },
            phone: {
                type: String,
                required: [true, 'Phone number is required.'],
                trim: true,
                match: [/^\d{10,}$/, 'Phone number must be at least 10 digits.'],
            },
        }),
        required: true,
    },

    items: {
        type: [
            new mongoose.Schema({
                id: { type: String, required: true },
                name: { type: String, required: true },
                color: { type: String, required: true },
                price: { type: Number, required: true, min: 0 },
                size: { type: String, required: true },
                quantity: { type: Number, required: true, min: 1 },
                imageSrc: { type: String },
            }, { _id: false })
        ],
        required: true,
        validate: {
            validator: function(v) {
                return v.length > 0;
            },
            message: 'Order must contain at least one item.',
        },
    },

    summary: {
        type: new mongoose.Schema({
            subtotal: { type: Number, required: true, min: 0 },
            shipping: { type: Number, required: true, min: 0 },
            taxes: { type: Number, required: true, min: 0 },
            total: { type: Number, required: true, min: 0 },
            deliveryMethod: { 
                type: String, 
                required: true, 
                enum: ['Standard', 'Express'],
            },
        }, { _id: false }),
        required: true,
    },

    status: {
        type: String,
        enum: ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'],
        default: 'Pending',
    },
    
}, {
    timestamps: true, 
});

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;