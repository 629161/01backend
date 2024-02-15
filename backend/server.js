import express from "express";

const app = express();

app.get('/',(req,res) => {
    res.send('Server is ready');
});

app.get('/api/jokes',(req,res) =>{
    const jokes =[
        {
            id:1,
            title: 'A joke',
            content: 'This is a joke'
        }
    ]
})

const port = process.env.PORT || 3000;

app.listen(port,() => {
    console.log(`Serve at http://localhost:${port}`);
}
);