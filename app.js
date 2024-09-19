const express = require('express')
const bodyParser = require("body-parser")

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const requestLogger = (req, res, next) =>{
  console.info('Method: ', req.method)
  console.info('Path: ', req.path)
  console.info('Body: ', req.body)
  console.info(`---`)
  next()
}

app.use(requestLogger)

// Routes
app.use(express.static("build"))

// app.use('/build/Login&SignupForm', (req, res, next) => {
//   // console.log("next")
//   console.log(req.session)
//   express.static(path.join(__dirname, 'build/Login&SignupForm'))(req, res, next)
//   // res.sendFile(__dirname + "build/main/Login&SignupForm/js/script.js")
// });




// app.use('/build/confarm-certificate/:customLink', (req, res, next) => {
//   // console.log("next")
//   // console.log(req.session)
//   express.static(path.join(__dirname, 'build/confarm-certificate'))(req, res, next)
//   // res.sendFile(__dirname + "build/main/Login&SignupForm/js/script.js")
// });

// User-specific routes
// app.get('/confarm-certificate/:customLink', (req, res) => {
//   // Replace 'https://www.example.com' with your desired URL
//   const user = req.params.customLink;
//   console.log(user)
//   const customUrl = `/build/confarm-certificate/${user}`;
//   res.redirect(customUrl);
//   // res.redirect('/build/dev/')
// });
// 
// app.use('/build/confarm-send.html', (req, res, next) => {
//   // console.log("next")
//   // console.log(req.session)
//   express.static(path.join(__dirname, 'build/confarm-send.html'))(req, res, next)
//   // res.sendFile(__dirname + "build/main/Login&SignupForm/js/script.js")
// });
//
// // User-specific routes
// app.get('/confarm-send.html', (req, res) => {
//   // Replace 'https://www.example.com' with your desired URL
//   // const user = req.params.customLink;
//   // console.log(user)
//   const customUrl = `/build/confarm-send.html`;
//   res.redirect(customUrl);
//   // res.redirect('/build/dev/')
// });

app.get('/', async(req, res)=>{
  return res.status(200).json({"message": 'background working'})
});


const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

const errorHandler = (error, request, response, next) => {
  logger.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }

  next(error)
}

app.use(unknownEndpoint)
app.use(errorHandler)

module.exports = app
