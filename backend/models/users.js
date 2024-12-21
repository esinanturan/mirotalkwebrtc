'use strict';

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    role: { type: String, default: 'guest' },
    allow: { type: Array, default: ['ALL'] },
    allowedRooms: { type: Array, default: ['*'] },
    email: { type: String, index: { unique: true } },
    username: { type: String, index: { unique: false } },
    password: { type: String },
    token: { type: String },
    active: { type: Boolean, enum: [true, false], default: false },
    createdAt: { type: Date, default: new Date().toISOString() },
    updatedAt: { type: Date, default: new Date().toISOString() },
});

module.exports = mongoose.model('User', userSchema);
