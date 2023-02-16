import { registerUser } from "./register.js";
import { loginUser } from "./login.js";

export const userPlugin = (fastify, options, done) => {
    fastify.post("/register", registerUser);
    fastify.post("/login", loginUser);

    done();
};