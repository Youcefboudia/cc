const txt = require('tesseract.js')
txt.recognize('./uploads/rr.png','eng').then(output => console.log(output.data.text))