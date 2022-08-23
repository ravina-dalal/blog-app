const express=require('express');
const app=express();
const mongoose=require('mongoose');
const seedDB=require('./seed');
const quotesRoutes=require('./apis/quoteRoute');
const cors=require('cors');

mongoose.connect('mongodb://localhost:27017/quotes-db')
.then(()=>console.log('connection'))
.catch((err)=>console.log(err));


app.use(cors({
    origin:['http://localhost:3000']
}));

app.use(express.json());
// seedDB();


app.get('/hello', (req,res)=>{
    res.status(200).json({msg:'hello quotes'});
})

app.use(quotesRoutes);

const port=process.env.PORT || 8000;
app.listen(port,()=>{
    console.log(`server start at ${port}`);
});