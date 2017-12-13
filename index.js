const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');  // Protected API keys and settings
require('./services/passport'); // Helper modules and business logic
require('./models/User');

mongoose.connect(keys.mongoURI);

const app = express();

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
