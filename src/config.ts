import { registerAs } from "@nestjs/config";
import { env } from "process";

export default registerAs('config', () => {
    return{
        PORT: env.PORT,
        CONECTION_DB: env.CONECTION_DB
    }
})