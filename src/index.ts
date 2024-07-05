import express, {NextFunction, Request, Response} from 'express';
import routes from "./routes";
import {errors} from "celebrate";
import AppError from "./errors/AppError";

const app = express();
const port = 3000;

app.use(express.json());
app.use(routes);

app.use(errors());
app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message,
        });
    }

    return response.status(500).json({
        status: "error",
        message: "Internal server error",
    });
});


app.get('/', (req, res) => {
    res.json({message: 'API executando'});
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});