import express from 'express';


const app = express();

app.get('/teste', (request, response) => {
  return response.send('NLW')
});

app.post('/teste', (request, response) => {
  return response.send('NLW POST')
})

app.listen(3000, ()=> console.log('API starter'))
