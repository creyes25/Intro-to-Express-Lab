import express from 'express'
import { bucketList } from './data/bucketlist-data.js'

const app = express()
app.set('view engine', 'ejs')


app.use(express.static('public'))

app.get('/home', function(req, res) {
  res.render('home', {
    bucketList: bucketList
  })
})



app.listen(3000, function() {
  console.log('Listening on port 3000')
})
