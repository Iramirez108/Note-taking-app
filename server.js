const express = require('express');
const fs = require('fs');
const path = require('path')




const app = express();
const PORT = 3001;





app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);