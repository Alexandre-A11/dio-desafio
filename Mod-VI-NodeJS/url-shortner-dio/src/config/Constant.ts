require("dotenv").config();

export const config = {
    API_URL: "http://localhost:5000",
    MONGO_CONNECTION: `mongodb+srv://${process.env.LOGIN_USER}:${process.env.LOGIN_PASSWORD}@${process.env.DATABASE}.myov5df.mongodb.net/?retryWrites=true&w=majority`,
};
