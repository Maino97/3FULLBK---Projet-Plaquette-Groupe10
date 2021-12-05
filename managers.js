module.exports = (app, mysqlConnection) => {

    // Api : Index of managers
    app.get('/managers', (request, response) => {
        mysqlConnection.query('SELECT * FROM managers', (err, rows, fields) => {
            if(!err){
                response.send(rows);
            }else {
                console.log(err);
            }
        })
    });

    // Api : Get a manager
    app.get('/managers/:id', (request, response) => {
        mysqlConnection.query('SELECT * FROM managers WHERE id = ?', [request.params.id], (err, rows, fields) => {
            if(!err){
                response.send(rows[0]);
            }else {
                console.log(err);
            }
        })
    });

    // Api : Create a manager
    app.post('/managers/create', (request, response) => {
        mysqlConnection.query('INSERT INTO managers SET ?', request.body, (err, manager) => {
            if(!err){
                response.send(manager);
            }else {
                console.log(err);
            }
        })
    });

    // Api : Update a manager
    app.put('/managers/:id', (request, response) => {
        mysqlConnection.query('UPDATE managers SET ? WHERE id = ?', [request.body ,request.params.id], (err, rows, fields) => {
            if(!err){
                response.send('Updated successfully');
            }else {
                console.log(err);
            }
        })
    });

    // Api : Delete a manager
    app.delete('/managers/:id', (request, response) => {
        mysqlConnection.query('DELETE FROM managers WHERE id = ?', [request.params.id], (err, rows, fields) => {
            if(!err){
                response.send('Deleted successfully');
            }else {
                console.log(err);
            }
        })
    });

}