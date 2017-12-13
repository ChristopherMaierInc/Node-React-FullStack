const express = require('express');
require('./services/passport'); // Helper modules and business logic

// require('./services/passport');
// require('./models/User');

const app = express();

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
