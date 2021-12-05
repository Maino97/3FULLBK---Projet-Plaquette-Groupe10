module.exports = (app, mysqlConnection) => {

    // Api : Index of certifications
    app.get('/certifications', (request, response) => {
        mysqlConnection.query('SELECT * FROM certifications', (err, rows, fields) => {
            if(!err){
                response.send(rows);
            }else {
                console.log(err);
            }
        })
    });

    // Api : Get a certification
    app.get('/certifications/:id', (request, response) => {
        mysqlConnection.query('SELECT * FROM certifications WHERE id = ?', [request.params.id], (err, rows, fields) => {
            if(!err){
                response.send(rows[0]);
            }else {
                console.log(err);
            }
        })
    });

    // Api : Create a certification
    app.post('/certifications/create', (request, response) => {
        mysqlConnection.query('INSERT INTO certifications SET ?', request.body, (err, certification) => {
            if(!err){
                response.send(certification);
            }else {
                console.log(err);
            }
        })
    });

    // Api : Update a certification
    app.put('/certifications/:id', (request, response) => {
        mysqlConnection.query('UPDATE certifications SET ? WHERE id = ?', [request.body ,request.params.id], (err, rows, fields) => {
            if(!err){
                response.send('Updated successfully');
            }else {
                console.log(err);
            }
        })
    });

    // Api : Delete a certification
    app.delete('/certifications/:id', (request, response) => {
        mysqlConnection.query('DELETE FROM certifications WHERE id = ?', [request.params.id], (err, rows, fields) => {
            if(!err){
                response.send('Deleted successfully');
            }else {
                console.log(err);
            }
        })
    });

}