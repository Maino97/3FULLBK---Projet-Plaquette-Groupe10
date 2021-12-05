module.exports = (app, mysqlConnection) => {

    // Api : Index of fees
    app.get('/fees', (request, response) => {
        mysqlConnection.query('SELECT * FROM fees', (err, rows, fields) => {
            if(!err){
                response.send(rows);
            }else {
                console.log(err);
            }
        })
    });

    // Api : Get a fee
    app.get('/fees/:id', (request, response) => {
        mysqlConnection.query('SELECT * FROM fees WHERE id = ?', [request.params.id], (err, rows, fields) => {
            if(!err){
                response.send(rows[0]);
            }else {
                console.log(err);
            }
        })
    });

    // Api : Create a fee
    app.post('/fees/create', (request, response) => {
        mysqlConnection.query('INSERT INTO fees SET ?', request.body, (err, fee) => {
            if(!err){
                response.send(fee);
            }else {
                console.log(err);
            }
        })
    });

    // Api : Update a fee
    app.put('/fees/:id', (request, response) => {
        mysqlConnection.query('UPDATE fees SET ? WHERE id = ?', [request.body ,request.params.id], (err, rows, fields) => {
            if(!err){
                response.send('Updated successfully');
            }else {
                console.log(err);
            }
        })
    });

    // Api : Delete a fee
    app.delete('/fees/:id', (request, response) => {
        mysqlConnection.query('DELETE FROM fees WHERE id = ?', [request.params.id], (err, rows, fields) => {
            if(!err){
                response.send('Deleted successfully');
            }else {
                console.log(err);
            }
        })
    });

}