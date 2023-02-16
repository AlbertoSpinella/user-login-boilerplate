import { hashPassword, verifyPassword, createJWT } from "../../libs/authentication.js";
import User from "../../models/User.js";

const handler = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.find({ email }).exec();
    console.log("US", user);
    if (user.length != 1) res.status(500).send({ result: "Invalid email or password" });
    const match = await verifyPassword(user[0].password, password);
    if (!match) res.status(500).send({ result: "Invalid email or password" });
    const jwt = await createJWT(user[0]._id);
    return res.status(200).send({ jwt });
};

export const loginUser = {
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
            200: {
                type: "object",
                required: ["jwt"],
                properties: {
                    jwt: { type: "string" }
                }
            }
        }
    },
    handler
};