import  { Component } from 'react';
import styleClass from './AddFDComponent.module.css';
import Button from 'react-bootstrap/Button';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
class AddFDComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
           branch:'',
           depositType:'',
           customerNo:'',
           receivedFrom:'',
           rupee:'',
           modeOfOperations:'',
           nominee:'',
           recipt:'',
           date: new Date(),
           effectiveDate: new Date(),
           accountno:'',
           period:'',
           interestRate:'',
           duedate:new Date(),
           amtRs:'',
           maturityamt:'',
           dob:''           
        }
    } 

    addNewFd = ()=>{
        console.log("sending state to parrent");
        this.props.addNeFDParentFunction(this.state);
        this.setState({
            branch:'',
            depositType:'',
            customerNo:'',
            receivedFrom:'',
            rupee:'',
            modeOfOperations:'',
            nominee:'',
            recipt:'',
            date:new Date(),
            effectiveDate:new Date(),
            accountno:'',
            period:'',
            interestRate:'',
            duedate:new Date(),
            amtRs:'',
            maturityamt:'',
            dob:''           
        })
    }
    branchTexBoxChange = (e)=>{
        this.setState({
            branch:e.target.value
        })
    }
    depositTypeChange = (e)=>{
        this.setState({
            depositType:e.target.value
        })
    }
    customerNoChange = (e)=>{
        this.setState({
            customerNo:e.target.value
        })
    }
    receivedFromChange = (e)=>{
        this.setState({
            receivedFrom:e.target.value
        })
    }
    rupeeOnChange = (e)=>{
        this.setState({
            rupee:e.target.value
        })
    }
    modeOFoperationOnChange=(e)=>{
        this.setState({
            modeOfOperations:e.target.value
        })
    }
    nomineeOnChange=(e)=>{
        this.setState({
            nominee:e.target.value
        })
    }
    reciptOnChange=(e)=>{
        this.setState({
            recipt:e.target.value
        })
    }
    dateOnChange=(e)=>{
        this.setState({
            date:e.target.value
        })
    }
    effectiveDateOnChange=(date)=>{
        this.setState({
            effectiveDate:date
        })        
    }
    accountOnChange=(e)=>{
        this.setState({
            accountno:e.target.value
        })
    }
    periodOnChange=(e)=>{
        this.setState({
            period:e.target.value
        })
    }
    duedateOnChange=(date)=>{
        this.setState({
            duedate:date
        })
    }
    interestRateOnChange=(e)=>{
        this.setState({
            interestRate:e.target.value
        })
    }
    amtRsOnChange=(e)=>{
        this.setState({
            amtRs:e.target.value
        })
    }
    maturityamtOnChange=(e)=>{
        this.setState({
            maturityamt:e.target.value
        })
    }
    dobOnChange=(e)=>{
        this.setState({
            dob:e.target.value
        })
    }
    
    
    
    
    handleChangeDate = (date)=>{
        this.setState({
            date:date
        })
    }
    
    
    
    

    render(){
        return(
            <div  className="row">
                <div  className="col-md-12"  >
                    <div className="row">
                        <div  className="col-md-12"  >
                        <div className={styleClass.rowHeader}>
                        ADD New Fixed Deposit
                        </div>
                        </div>               
                    </div>
                    <div className="row">
                           <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-12">
                                        <label>Bank/Branch</label>
                                        
                                        <select className="form-control" value={this.state.branch} onChange={this.branchTexBoxChange}>
                                            <option>Select</option>
                                            <option>PUBC Edapally</option>
                                            <option>PUBC Elamakara</option>
                                            <option>PUBC Ernakulam</option>
                                            <option>SIB Naracal</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <label>Type of Deposit</label>                                        
                                        <select className="form-control" value={this.state.depositType} onChange={this.depositTypeChange}>
                                            <option>Select</option>
                                            <option>FD Non Members</option>
                                            <option>FD Members</option>                                           
                                        </select>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                    <label>Customer No</label>
                                    <input className="form-control" type="text" name="" value={this.state.customerNo} onChange={this.customerNoChange}></input>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                    <label>Received From</label>                                    
                                    <select  className="form-control" value={this.state.receivedFrom} onChange={this.receivedFromChange}>
                                    <option>Select</option>
                                        <option>Anoop Antony P</option>
                                        <option>Neenu Joseph</option>
                                        <option>Adhinav P Anoop</option>
                                        <option>Angel Augustina KA</option>
                                        <option>Antony PJ</option>
                                        <option>Antony & Angel</option>
                                    </select>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                    <label>Rupees</label>
                                <input className="form-control" value={this.state.rupee} type="text" name="" onChange={this.rupeeOnChange}></input>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                    <label>Mode of Operation</label>                               
                                    <select className="form-control" value={this.state.modeOfOperations} name="" onChange={this.modeOFoperationOnChange}>
                                        <option>Select</option>
                                        <option>Self</option>
                                        <option>Either or Surviovor</option>
                                        <option>S/O Neenu Joseph</option>
                                        <option>S/O Anoop Antony </option>
                                    </select>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                    <label>Nominee</label>
                               
                                <select  className="form-control" value={this.state.nominee} name="" onChange={this.nomineeOnChange}>
                                    <option>Select</option>
                                    <option>Anoop Antony P</option>
                                        <option>Neenu Joseph</option>
                                        <option>Adhinav P Anoop</option>
                                        <option>Angel Augustina KA</option>
                                        <option>Antony PJ</option>
                                        <option>Antony & Angel</option>
                                </select>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                    <label>Recipt No</label>
                                <input className="form-control" type="text" value={this.state.recipt} name="" onChange={this.reciptOnChange}></input>
                                    </div>
                                </div>
                              
                           </div>
                           <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-12">
                                    <label>Date</label>                               
                                <DatePicker className="form-control" selected={this.state.date} onChange={this.handleChangeDate} name="date" dateFormat="yyyy-MM-dd" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                    <label>Effective Date</label>                                
                                <DatePicker className="form-control" selected={this.state.effectiveDate} onChange={this.effectiveDateOnChange} name="date" dateFormat="yyyy-MM-dd" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                    <label>Account No</label>
                                <input className="form-control" type="text" name="" value={this.state.accountno} onChange={this.accountOnChange}></input>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                    <label>Period</label>
                                <input className="form-control" type="text" name="" value={this.state.period} onChange={this.periodOnChange}></input>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                    <label>Due Date</label>                               
                                <DatePicker className="form-control" selected={this.state.duedate} value={this.state.duedate} onChange={this.duedateOnChange} name="date" dateFormat="yyyy-MM-dd" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                    <label>Interest Rate</label>
                                <input className="form-control" type="text" name="" value={this.state.interestRate} onChange={this.interestRateOnChange}></input>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                    <label>Amt RS</label>
                                <input className="form-control" type="text" name="" value={this.state.amtRs} onChange={this.amtRsOnChange}></input>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                    <label>Maturity Amt Rs</label>
                                <input className="form-control" type="text" name="" value={this.state.maturityamt} onChange={this.maturityamtOnChange}></input>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                    <label>DOB(if minor)</label>
                                <input className="form-control" type="text" name="" value={this.state.dob} onChange={this.dobOnChange}></input>
                                    </div>
                                </div>
                                

                           </div>
                    </div>
                    
                    <div className="row form-row-spacing">
                        <div className="col-md-4">
                        
                        </div>
                        <div className="col-md-4">
                        <Button variant="primary" size="lg" block onClick={this.addNewFd}>
                           Save
                        </Button>
                        </div>
                        <div className="col-md-4">
                       
                        </div>
                    </div>
                    
                </div>
              
            </div>
            
            
        );
    }
}

export default AddFDComponent;
