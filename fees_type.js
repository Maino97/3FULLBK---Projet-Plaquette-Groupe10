module.exports = (app, mysqlConnection) => {

    // Api : Index of fees_type
    app.get('/fees_type', (request, response) => {
        mysqlConnection.query('SELECT * FROM fees_type', (err, rows, fields) => {
            if(!err){
                response.send(rows);
            }else {
                console.log(err);
            }
        })
    });


    // Api : Get a fee_type
    app.get('/fees_type/:id', (request, response) => {
        mysqlConnection.query('SELECT * FROM fees_type WHERE id = ?', [request.params.id], (err, rows, fields) => {
            if(!err){
                response.send(rows[0]);
            }else {
                console.log(err);
            }
        })
    });

    // Api : Create a fee_type
    app.post('/fees_type/create', (request, response) => {
        mysqlConnection.query('INSERT INTO fees_type SET ?', request.body, (err, fee_type) => {
            if(!err){
                response.send(fee_type);
            }else {
                console.log(err);
            }
        })
    });

    // Api : Update a fee_type
    app.put('/fees_type/:id', (request, response) => {
        mysqlConnection.query('UPDATE fees_type SET ? WHERE id = ?', [request.body ,request.params.id], (err, rows, fields) => {
            if(!err){
                response.send('Updated successfully');
            }else {
                console.log(err);
            }
        })
    });

    // Api : Delete a fee_type
    app.delete('/fees_type/:id', (request, response) => {
        mysqlConnection.query('DELETE FROM fees_type WHERE id = ?', [request.params.id], (err, rows, fields) => {
            if(!err){
                response.send('Deleted successfully');
            }else {
                console.log(err);
            }
        })
    });

}