import ListFDComponent from "../../components/ListFDComponent/ListFDComponent";


function ListFD(value){
    console.log("rrrrr");
    console.log(value);
    return(
        <ListFDComponent  data={value}></ListFDComponent>
    );
}
export async function getServerSideProps(context){ 
    console.log("getServerSideProps");
                    var inputData = {
                        select:"all"
                    }
                    const response = await fetch('http://localhost:3000/api/list-fd-service',{
                    method:'POST',
                    body:JSON.stringify(inputData),
                    headers:{
                        'Content-type':'application/json'
                    }
                    });
                    const data = await response.json();
                    console.log("data");
                    console.log(data);
                    
   
  return {
    props:data
  };
}

export default ListFD;