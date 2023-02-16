import { hash, verify } from "argon2";
import jwt from "jsonwebtoken";
import { ErrorResponse } from "./error.js";

export const hashPassword = async (password) => {
    return await hash(password);
};

export const verifyPassword = async (currentPassword, inputPassword) => {
    return await verify(currentPassword, inputPassword);
};

export const createJWT = async (userID, expiresIn = "12h") => new Promise((resolve, reject) => {
    const payload = { userID };
    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn }, (err, token) => {
        if (err != undefined) reject(err);
        resolve(token);
    });
});

export const verifyJWT = async (req) => new Promise((resolve, reject) => {
    const rawBearer = req.headers['authorization'];
    if (rawBearer == undefined || rawBearer == null)
        return reject(new ErrorResponse("MISSING_HEADER_AUTHORIZATION", 401));
    const bearer = rawBearer.replace(/^Bearer /u, '');
    jwt.verify(bearer, process.env.JWT_SECRET, (err, decoded) => {
        if (err != undefined) reject(err);
        resolve(decoded);
    });
});