import express from 'express';
const app = express()

const port = process.env.PORT || 5000;


app.get("/", () => {
    console.log("hdllo bdtz!")
})
app.listen(port, () => {
    console.log("listening on port 3000");
});