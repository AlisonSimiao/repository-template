const app = require('./src/app')

const port = process.env.PORT || 3000

app.listen(port, () => {
  /* eslint-disable no-console */
  console.log('Server running on port: ' + port)
  console.log('Started: ' + new Date().toLocaleString('pt-BR'))
})