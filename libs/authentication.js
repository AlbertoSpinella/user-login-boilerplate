import { hash, verify } from "argon2";
import jwt from "jsonwebtoken";

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