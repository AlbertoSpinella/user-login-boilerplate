import Fastify from "fastify";
import fastifySwaggerPlugin from './libs/swaggerPlugin.js';
import fastifySwagger from "@fastify/swagger";
import { userPlugin } from "./routes/user/plugin.js";
import Ajv2020 from 'ajv/dist/2020.js';
import addFormats from "ajv-formats";
import { mongooseConnect } from "./libs/mongoose.js";
import dotenv from "dotenv";
dotenv.config();

const ajv = new Ajv2020({
    coerceTypes: true,
    useDefaults: true,
    removeAdditional: false,
    allErrors: false
});

addFormats(ajv);

const app = Fastify();

mongooseConnect();

app.register(fastifySwagger, {
    openapi: {
        info: { title: "fastify-api", version: "1.0.0" },
        tags: [
            { name: "USER", description: "User API" }
        ],
        openapi: "3.1.0"
    }
});
app.register(fastifySwaggerPlugin, {
    exposeRoute: true,
    routePrefix: '/docs'
});

app.register(userPlugin, { prefix: "/user" });

export default app;