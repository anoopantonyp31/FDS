var mysql = require("mysql");
function handler(req,res){

    console.log(req);
    const  branch = req.body.branch;
    const deposit_type = req.body.depositType;
    const customerno = req.body.customerNo;
    const receivedfrom = req.body.receivedFrom;
    const rupee  = req.body.rupee;
    const modeofoperation  = req.body.modeOfOperations;
    const nominee  = req.body.nominee;
    const reciptno = req.body.recipt;
    const date = req.body.date.split("T");
    const effectiveDate = req.body.effectiveDate.split("T");
    const accountno = req.body.accountno;
    const period = req.body.period;
    const duedate = req.body.duedate.split("T");
    const interestrate = req.body.interestRate;
    const amtrs = req.body.amtRs;
    const maturityamt = req.body.maturityamt;
    const dob = req.body.dob;

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

        var query = `INSERT INTO fixed_deposits (branch,deposit_type,customerno,receivedfrom,rupee,modeofoperation,nominee,reciptno,date,effectiveDate,accountno,period,duedate,interestrate,amtrs,maturityamt,dob) VALUES ('${branch}','${deposit_type}','${customerno}','${receivedfrom}','${rupee}','${modeofoperation}','${nominee}','${reciptno}','${date[0]}','${effectiveDate[0]}','${accountno}','${period}','${duedate[0]}','${interestrate}','${amtrs}','${maturityamt}','${dob}')`;   
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