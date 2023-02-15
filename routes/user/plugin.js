import {
    registerUser
} from "./register.js";

export const userPlugin = (fastify, options, done) => {
    fastify.post("/register", registerUser);

    done();
};