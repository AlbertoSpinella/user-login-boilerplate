import User from "../../models/User.js";
import { hashPassword } from "../../libs/authentication.js";

const handler = async (req, res) => {
    const { email, password } = req.body;
    const alreadyExists = await User.find({ email }).exec();
    if (alreadyExists.length != 0) return res.status(500).send({ result: "Error: user already exists" });
    const hashed = await hashPassword(password);
    await User.create({ email, password: hashed });
    return res.status(201).send({ result: `Welcome ${email}!` });
};

export const registerUser = {
    schema: {
        tags: ["USER"],
        body: {
            type: "object",
            required: ["email", "password"],
            properties: {
                email: { type: "string", format: "email" },
                password: { type: "string" }
            },
            additionalProperties: false
        },
        response: {
            201: {
                type: "object",
                required: ["result"],
                properties: {
                    result: { type: "string" }
                }
            }
        }
    },
    handler
};