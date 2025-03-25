
import express from 'express';
import { PORT } from './configs/configs';
import cors from'cors'



const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/hello", (req, res) => {

    res.json({ message: "Hola desde el back"});

})

app.listen(PORT, () => {

    console.log(`Listening on port: ${PORT}`);

});