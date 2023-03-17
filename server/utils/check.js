import jwt from "jsonwebtoken";

export const check = (req, res) => {
     const token = (req.headers.authorization || '').replace(/Bearer\s?/, '')

     if (token){
        try {
            const _decodeJwt = jwt.verify(token, process.JWT)

            req.userId = _decodeJwt.id

            next()

        } catch (error) {
            return res.json({
                message: "Block"
            })
        }
     } else {
        return res.json({
            message: "Block"
        })
     }
}