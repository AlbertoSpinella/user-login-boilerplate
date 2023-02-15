import User from "../../models/User.js";

const handler = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.create({ email, password });
    console.log("USER", user);
    return res.status(201).send({ result: `Hello ${email}!` });
};

export const registerUser = {
    schema: {
        tags: ["USER"],
        body: {
            type: "object",
            required: ["email", "password"],
            properties: {
                email: { type: "string" },
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