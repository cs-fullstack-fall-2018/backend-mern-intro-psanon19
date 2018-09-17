// We first need to load our mongoose data model
const Todos = require('../models/todoModel');
const moment = require('moment');

module.exports = function(app) {
    // Add an API endpoint with some dummy data
   app.get('/api/setupTodos', function(req, res) {
       
       // seed database
       const starterTodos = [
           {
               username: 'DrWilly',
               todo: 'Build castle',
               isDone: true,
               dueDate: moment().subtract(10, 'days').calendar()
           },
           {
               username: 'DrWilly',
               todo: 'Make more minions',
               isDone: true,
               dueDate: moment().format()
           },
           {
               username: 'DrWilly',
               todo: 'Eat some Noodles',
               isDone: true,
               dueDate: moment().subtract(7,'days').calendar()
           }
       ];

       // Use the mongo method create to create records fopr the test data. err will hold any errors after create
       // and results will show records created.
       Todos.create(starterTodos, function(err, results) {
           // Lets us confirm that the seed data added via mongoose without any errors
           res.send(results);
       }); 
   });
    
};