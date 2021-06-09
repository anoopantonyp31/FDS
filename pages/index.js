import AddFDComponent from "../components/AddFDComponent/AddFDComponent"


 function MainApp() {
  async function addnewParentFunction(element){
    const response = await fetch('/api/new-fd-service',{
      method:'POST',
      body:JSON.stringify(element),
      headers:{
        'Content-type':'application/json'
      }
    });
    const data = await response.json();
    console.log("data");
    console.log(data);
    if(data.status=="success"){
      alert("Iserted Sucessfully");
    }
  }
  return (
      <AddFDComponent addNeFDParentFunction={addnewParentFunction}></AddFDComponent>
  )
}
export default MainApp