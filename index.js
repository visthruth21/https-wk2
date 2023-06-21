const express = require('express')
const app = express()
const port = 3000


function calculateSum(counter){
    let sum = 0 
    for(let i = 0 ; i <counter ; i++){
        sum = sum + i;
    }
    return sum;
}
//query param - http://localhost:3000/getsum?counter=1000&counter=19999 (?follwedbyvalue)
//caught using req - req.query.name
app.get('/getsum', (req, res) => {
  var counter = req.query.counter;
  var calculatedSum = calculateSum(counter);
  console.log(calculatedSum);
  
  res.send(`The sum is ${calculatedSum}`)
})
app.post('/createUser',(req,res)=>{
    res.send("hello world");
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


