const app = require('./app') // the actual Express application
const port = process.env.PORT || 3000

app.listen(port, () => {
  console.info(`Server running on port ${port}`)
})
