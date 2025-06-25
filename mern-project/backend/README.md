Multer is a middleware used to upload multimedia file(s) at server side.
It is a third party module which is easy to use with Expressjs as npm page

app.post('/profile', upload.single('avatar'), function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
})

The default behavior of the code above is to provide .txt file without desired filename as it provides random alpha numeric string as a file name.

To fix this, we will to explore more about multer
const multer  = require('multer')
const upload = multer({ dest: './public/data/uploads/' })
app.post('/stats', upload.single('uploaded_file'), function (req, res) {
  // req.file is the name of your file in the form above, here 'uploaded_file'
  // req.body will hold the text fields, if there were any
  console.log(req.file, req.body)
});

You can compare the code inside backend folder in a structured way i.e, Middleware, controller, and routes.

Authorization and authentication are also completed with the backend code.