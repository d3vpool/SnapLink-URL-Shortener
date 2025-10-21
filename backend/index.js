const express = require("express");
const { connectToMongoDB } = require("./connect");
const cors = require('cors');

const urlRoute = require("./routes/url");
const URL = require("./models/url")
const app = express();
app.use(cors());
const port = 8001;

app.use(express.json());

connectToMongoDB('mongodb://localhost:27017/snapLink')
.then(()=> console.log('MongoDB connected'))
app.use("/url", urlRoute);

app.get('/:shortId', async (req, res)=>{
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
    {
        shortId,
    }, 
    { 
        $push: {
        visitHistory: {
            timestamp: Date.now(),
            }
        },
    }
    );
    res.redirect(entry.redirectURL);
});

app.listen(port, ()=> console.log(`Server is running at port:${port}`));