const express = require ('express');
const path = require ('path');

const app = express();

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

app.listen(process.env.PORT || 3002, function (){
    console.log('Servidor corriendo en el puerto 3002');
})

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
});

