// backend/app.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// import router
const authRoutes = require('./routes/')


// Gunakan routes
app.use('/api/auth', authRoutes)

