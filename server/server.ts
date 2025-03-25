
import express from 'express';
import { PORT } from './configs/configs';

const app = express();


app.get("/api/hello", (req, res) => {

    res.json({ message: "Hola desde el back"});

})

app.listen(PORT, () => {

    console.log(`Listening on port: ${PORT}`);

});