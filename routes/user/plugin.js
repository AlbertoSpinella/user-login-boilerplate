import { registerUser } from "./register.js";
import { loginUser } from "./login.js";
import { deleteUser } from "./delete.js";

export const userPlugin = (fastify, options, done) => {
    fastify.post("/register", registerUser);
    fastify.post("/login", loginUser);
    fastify.delete("/", deleteUser);

    done();
};