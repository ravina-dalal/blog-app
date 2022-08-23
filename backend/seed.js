const mongoose=require('mongoose');
const Quotes=require('./models/quotes');

const DUMMY_QUOTES=[
    {
        author:'Mahatma',
        text:'njknjwnjkwnxwxjwbwjnxjw'
    },
    {
        author:'Mahatma',
        text:'njknjwnjkwnxwxjwbwjnxjw'
    },
    {
        author:'Mahatma',
        text:'njknjwnjkwnxwxjwbwjnxjw'
    },
]

async function seedDB(){
    await Quotes.insertMany(DUMMY_QUOTES);
    console.log('db seed');
}
module.exports=seedDB;