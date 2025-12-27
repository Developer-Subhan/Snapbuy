const Joi = require("joi");

const productSchema = Joi.object({
    name: Joi.string().min(2).required(),
    price: Joi.number().required(),
    images: Joi.array().length(4).items(
        Joi.object({
            src: Joi.string().uri().required(),
            alt: Joi.string().min(3).required(),
        })
    ),
    colors: Joi.array().items(
        Joi.object({
            id: Joi.string().allow(""),
            name: Joi.string().required(),
            classes: Joi.string().allow(""),
        })
    ),
    sizes: Joi.array().items(
        Joi.object({
            name: Joi.string().required(),
            inStock: Joi.boolean().required(),
        })
    ),
    description: Joi.string().allow(""),
    highlights: Joi.array().items(Joi.string().allow("")),
    details: Joi.string().allow(""),
});

const CustomerInfoSchema = Joi.object({
    email: Joi.string().email().required(),
    firstName: Joi.string().trim().required(),
    lastName: Joi.string().trim().required(),
    address: Joi.string().trim().required(),
    apartment: Joi.string().trim().allow("", null),
    city: Joi.string().trim().required(),
    state: Joi.string().trim().required(),
    zip: Joi.string().trim().required(),
    phone: Joi.string().pattern(/^\d{10,}$/).required(),
    delivery: Joi.string().valid("Standard", "Express").optional(),
});

const ItemSchema = Joi.object({
    id: Joi.string().required(),
    name: Joi.string().required(),
    color: Joi.string().required(),
    size: Joi.string().required(),
    price: Joi.number().min(0).required(),
    quantity: Joi.number().integer().min(1).required(),
    imageSrc: Joi.string().uri().allow("", null),
    href: Joi.string().uri().allow("", null),
});

const SummarySchema = Joi.object({
    subtotal: Joi.number().min(0).required(),
    shipping: Joi.number().min(0).required(),
    taxes: Joi.number().min(0).required(),
    total: Joi.number().min(0).required(),
    deliveryMethod: Joi.string().required(),
});

module.exports = {
    productSchema,
    CustomerInfoSchema,
    ItemSchema,
    SummarySchema,
};
