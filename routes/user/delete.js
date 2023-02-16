import { verifyJWT } from "../../libs/authentication.js";
import User from "../../models/User.js";

const handler = async (req, res) => {
    const { userID } = await verifyJWT(req);
    const user = await User.findById({ _id: userID }).exec();
    console.log("US", user);
    if (!user) return res.status(500).send({ result: "User no longer exists" });
    const deleted = await User.deleteOne({ _id: userID }).exec();
    console.log({ deleted });
    res.status(200).send({ result: "deleted" });
};

export const deleteUser = {
    schema: {
        tags: ["USER"],
        response: {
            200: {
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