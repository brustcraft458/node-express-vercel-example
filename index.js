import express from "express"

/** Config */
const appConfig = {    
    target: {
        init: process.env.TARGET_INIT || "http://",
        host: process.env.TARGET_HOST || "localhost"
    },
    port: process.env.PORT || 443
}

/* Start */
const app = express()

/** Server Start */
app.listen(appConfig.port, () => {
    // Bug
    console.log(`Server Started on localhost:${appConfig.port}`)
})

/** Server Error */
app.use(function(err, req, res, next) {
    if (err) {
        res.sendStatus(400)
    }
})

/**
 * Server Connection
 */
app.get("/socket", (req, res) => {
    // End
    res.sendStatus(401)
})

app.post("/socket", async(req, res) => {
    // End
    res.sendStatus(400)
})


/**
 * Player Message Procces
 * @param {Player} player
 */
async function clientMessageJson(msg, res, player) {
    res.sendStatus(400)
    return false
}
