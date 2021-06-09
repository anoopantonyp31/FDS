var mysql = require("mysql");
function handler(req,res){

    console.log(req.body.select);
    var receivedLEmenets = req.body.select;
    var query = "";
    if(req.body.select!="all"){
        var valueStr = "";
        var finalList = "";
        for(var j=0;j<receivedLEmenets.length;j++)  {
            valueStr += "'"+receivedLEmenets[j].value+"',"
        } 
        console.log("Anoopc"); 
        console.log(valueStr); 
        finalList = valueStr.slice(0, -1);        
         query = `SELECT * FROM fixed_deposits WHERE receivedfrom in (${finalList}) order by effectiveDate desc`;  
    }
    else{
         query = `Select * FROM fixed_deposits order by effectiveDate desc`;  
    }
     

    if(req.method === "POST"){
        var con = mysql.createConnection({
            host:"localhost",
            user:"root",
            password:"",
            database:"mybankingdb" 
        
        });
        con.connect((error)=>{
            if(error){
                throw error;
            }
            console.log("Database connected");
        });

       
        con.query(query,(err,result,fields)=>{
       if(err){
           throw err;
           res.end(JSON.stringify("error")); 
       }
       
       var returnObj = {
           status:"success",
           dataValue:result
       };
       res.end(JSON.stringify(returnObj));    

        })
    }
}

export default handler;