 //JEN
 const express = require ('express');
 const bodyParser = require ('body-parser');
 const warehouse = require('./warehousedata');
 const allInventory = require('./data.json');
 const app = express();
 
 app.use(express.static('public'));
 app.use(bodyParser.urlencoded({ extended: false }));
 app.use(bodyParser.json());
 
 app.all('/*', function(req, res, next) {
     res.header("Access-Control-Allow-Origin", "*");
     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
     res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE');
     next();
   }); 

//LANDON
// GET REQUEST FOR ALL INVENTORTY 
app.get("/inventory", (req,res) => {
    res.json(allInventory);
});

// POST WAREHOUSE
app.post("/warehouse", (req,res) => {
    warehouse.push(req.body)
    res.json(warehouse);
});

//JENN
// Back-End: GET Inventory Item
app.get('/inventory/:id', (req, res) => { 
    let parsedReq = parseInt(req.params.id);
    let foundId = allInventory.find(rightItem => rightItem.id === (parsedReq));
    if(foundId) {
        res.json(foundId);
    } else {
        res.status(404).send('Error - Item ID not found.');
    }  
});

//KAJEN
// GET WAREHOUSE
app.get('/warehouses',  (req, res) => {
    res.json(warehouse);
})

//GET FOR EACH WAREHOUSE
app.get('/warehouses/:warehouse_id', (req, res) => {
    let inventory = allInventory.filter(item => Number(item.warehouse_id) === Number(req.params.warehouse_id));
    inventory.length ? res.json(inventory) : res.status(400).send(`Error: warehouse ${req.params.warehouse_id} not found`);
});

// app.get('/warehouse/:warehouse_id', (req, res) => {
//     let inventory = allInventory.filter(item => item.warehouse_id === req.params.warehouse_id);
//     inventory.length ? res.json(inventory) : res.status(400).send(`Error: warehouse ${req.params.id} not found`);
// });

//DELETE 
app.delete('/product/:id', (req, res) => {
    let index = allInventory.findIndex(item => Number(item.id) === Number(req.params.id));
    if(index === -1) return res.json({});
    res.json(allInventory.splice(index, 1));
});

app.listen(8080, ()=> {
    console.log("Mom-m! I'm listening! Gah!🙄");
});