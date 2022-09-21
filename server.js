import express from 'express'
import { todos } from './data/todo-data.js'

const app = express()
app.set('view engine', 'ejs')


app.use(express.static('public'))

app.get('/home', function(req, res) {
  res.render('home', {
    todos: todos
  })
})



app.listen(3000, function() {
  console.log('Listening on port 3000')
})
