import { Fragment } from 'react';
import  { Component } from 'react';
import MultiSelect from "react-multi-select-component";
import {Button, Nav} from 'react-bootstrap';
import equal from 'fast-deep-equal'
class ListFDComponent extends Component {
    constructor(props){
        console.log(props);
        super(props)
        this.state = {
            data:[],
            options : [ 
            { label: "Anoop Antony P", value: "Anoop Antony P" },
            { label: "Neenu Joseph", value: "Neenu Joseph" },
            { label: "Adhinav P Anoop", value: "Adhinav P Anoop" },
            { label: "Angel Augustina KA", value: "Angel Augustina KA" },
            { label: "Antony PJ", value: "Antony PJ" }, 
            {label:"Antony & Angel",value: "Antony & Angel"}          
           ],
            selected:[],
        }
    }
    componentDidMount(){
        console.log("component did mount");
        console.log(this.props);
        this.setState({
            data:this.props.data.dataValue           
        })
      
    }
    

     
    setSelectedNew = (e)=>{
        console.log(e);
        this.setState({
            selected:e
        })
    }
    ResetFDList = (e)=>{
        this.setState({
            selected:[]
        })
        var inputData = {
            select: "all"
        }
            fetch("http://localhost:3000/api/list-fd-service",{
                method:'POST',
                body:JSON.stringify(inputData),
                headers:{
                  'Content-type':'application/json'
                }
            })
            .then(res => res.json())
            .then(
              (result) => {
                console.log("result");
                console.log(result);
                this.setState({
                    data:result.dataValue       
                })
              },
              // Note: it's important to handle errors here
              // instead of a catch() block so that we don't swallow
              // exceptions from actual bugs in components.
              (error) => {
                
              }
            )

    }
    serchFDList = (e)=>{
       // this.props.searchFDParentFunction(this.state.selected);
       var inputData = {
        select: this.state.selected
    }
        fetch("http://localhost:3000/api/list-fd-service",{
            method:'POST',
            body:JSON.stringify(inputData),
            headers:{
              'Content-type':'application/json'
            }
        })
        .then(res => res.json())
        .then(
          (result) => {
            console.log("result");
            console.log(result);
            this.setState({
                data:result.dataValue       
            })
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            
          }
        )
    }
    

    render(){
        return(
            <Fragment>
                <div className="row form-row-spacing">
                    <div className="col-md-3">
                        Filter Fixed Deposit
                    <MultiSelect
                        options={this.state.options}
                        value={this.state.selected}
                         onChange={this.setSelectedNew}
                         labelledBy="Select"
                         />
                    </div>
                    <div className="col-md-3">
                        <Button disabled={this.state.selected.length<=0}  variant="primary" className='buttonAdd btnspacing' onClick={this.serchFDList}>Search</Button>                   
                        <Button   variant="secondary" className='buttonAdd btnspacing' onClick={this.ResetFDList}>Reset</Button>                   
                    </div>
                    <div className="col-md-3">
                        
                    </div>

                </div>
            <div className="row form-row-spacing">
                <div className="col-md-12">
                    <table className="table table-bordered table-striped">
                         <thead>
                                  <tr>
                                        <td>Sl no</td>
                                        <td>Recipt No</td>
                                        <td>Branch</td>
                                        <td>Deposit Type</td>
                                        <td>Customer No</td> 
                                        <td>Account No</td>                                           
                                        <td>Received From</td>  
                                        <td>Interest Rate</td>
                                        <td>Effective Date</td>
                                        <td>Due Date</td>                                         
                                        <td>Period</td>                                       
                                        <td>Amount</td>
                                        <td>Maturity Amt</td>                                          
                                                                                                                                                            
                                    </tr>
                              </thead>
                              <tbody>                                                                            
                              {
                                        this.totalAmt = 0,
                                        this.totalMAturityAMT = 0,
                                        this.state.data.map((item,key)=>{
                                             this.totalAmt = Number(this.totalAmt)+Number(item.amtrs);
                                             this.totalMAturityAMT = Number(this.totalMAturityAMT)+Number(item.maturityamt);
                                 return(
                                       <tr key={key}>
                                           <td>{key+1}</td>
                                            <td>{item.reciptno}</td>
                                             <td>{item.branch}</td>
                                            <td>{item.deposit_type}</td>
                                            <td>{item.customerno}</td> 
                                            <td>{item.accountno}</td>                                           
                                            <td>{item.receivedfrom}</td>  
                                            <td>{item.interestrate}</td>
                                            <td>{item.effectiveDate}</td>
                                            <td>{item.duedate}</td>                                         
                                            <td>{item.period}</td>                                           
                                            <td>{item.amtrs}</td>  
                                            <td>{item.maturityamt}</td>                                                                                                                                                              
                                         </tr>)
                                            })
                                       }                                                                         
                                  </tbody>
                               </table>
                              
                </div>
                
            </div>
             <div className="row">
                <div className="col-md-6">
                    <div>
                    TOTAL AMOUNT Deposited : {this.totalAmt} RS
                    </div>
                 </div>
                 <div className="col-md-6">
                    <div>
                    TOTAL MATURITY AMOUNT : {this.totalMAturityAMT} RS
                    </div>
                 </div>
             </div>
             </Fragment>
        )
    }
    
}

export default ListFDComponent;