var connection = require("../config/connection.js")


module.exports = function(app) {
    // Discover Data
    app.get("/api/all", function(req, res) {
        var dbUFO = "SELECT * FROM ufo_data";
        
        connection.query(dbUFO, function(err, result) {
            if (err) throw err;
            res.json(result);
        });
    });
};