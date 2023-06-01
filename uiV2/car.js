const car ={template: `<h1> Car </h1>
const cartype ={template:

<div>
    

<button type="button"
class="btn btn-primary m-2 fload-end" 
data-bs-toggle="modal"
data-bs-target="#exampleModal"
@click="addClick()">
    Add Car
 </button>   


<table class="table table striped">
    <thead>
     <tr>
        <th>
            CarId
        </th>
        <th>
            Name Car
        </th>
        <th>
            Type
        </th>
        <th>
            Date of joining
        </th>
        <th>
            Options
        </th>
    </tr>
<tbody>
    <tr v-for="carr in carrs">
        <td>{{carr.CarId}}</td>
        <td>{{carr.CarName}}</td>
        <td>{{carr.Type}}</td>
        <td>{{carr.DOJ}}</td>
        <td>
        <button type="button"
        class="btn btn-light mr-1"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        @click="editClick(carr)">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
            </svg>
        </button>
        <button type="button" @click="deleteClick(carr.CarId)"
        class="btn btn-light mr-1">
            
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
      </svg>
        </button>
        </td>
    </tr>
    </thead>
</tbody>
</thead>
</table>

    <div class="modal fade" id="exampleModal" tabindex="-1"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered">
    <div class="modal-content">
    <div class="modal-header">
    <h5 class=modal-title" id="exampleModalLabel">{{modalTitle}}</h5>
    <button type="button" class="btn-close" data-bs-dismiss="modal"
    aria-label="Close"></button>
    </div>

    <div class="modal-body">
        <div class="d-flex flex-row bd-highlight mb-3">
        <div class="p-2 w-50 bd-highlight"
        <div class="input-group mb-3">
        <span class="input-group-text"> Car Name</span>
        <input type="text" class="form-control" v-model="CarName">
        </div>

        <div class="input-group mb-3">
        <span class="input-group-text"> Type</span>
        <select class="form-select" v-model="Type">
            <option v-for="cartyp in cartypes">
                {{cartyp.TypeName}}
                </option>
            </select>
        </div>

        <div class="input-group mb-3">
        <span class="input-group-text"> DOJ</span>
        <input type="date" class="form-control" v-model="DateOfJoining">
        </div>
        
        </div>
        <div class="p-2 w-50 bd-highlight">
            <img width="250px" height="250px"
                :src"="PhotoPath+PhotoFileName"/>
                <input class="m-2" type="file" @change="imageUpload">
        </div>
        </div>
        <button type="button" @click="createClick()" 
        v-if="CarId==0"  class="btn btn-primary">
        Create
        </button>
        <button type="button" @click="updateClick()"
        v-if="CarId!=0"  class="btn btn-primary">
        Update
        </button>


    </div>

</div>    
</div>
</div>
</div>
`,


data(){
    return{
        cartypes:[],
        cars:[],
        modalTitle:"",
        CarId:0,
        CarName:"",
        CarType:"",
        DateOfJoining:"",
        PhotoFileName:"anonymous.png",
        PhotoPath:variables.PHOTO_URL
        
    }
},
methods:{
    refreshData(){
        axios.get(variables.API_URL)
        .then((response)=>{
            this.cars=response.data;
        });
        axios.get(variables.API_URL)//cartype
        .then((response)=>{
            this.cartypes=response.data;
        });
    },
    addClick(){
        this.modalTitle="Add car";
        this.CarId=0;
        this.CarName="";
        this.CarType="";
        this.DateOfJoining="";
        this.PhotoFileName="anonymous.png";
    },
    editClick(carr){
        this.modalTitle="Edit car";
        this.CarId=carr.CarId;
        this.CarName=carr.CarName;
        this.CarType=carr.CarType;
        this.DateOfJoining=carr.DateOfJoining;
        this.PhotoFileName=carr.PhotoFileName;
    },
    createClick(){
        axios.post(variables.API_URL+"carr",{
            CarName:this.CarName,
            CarType:this.CarType,
            DateOfJoining:this.DateOfJoining,
            PhotoFileName:this.PhotoFileName
        })
        .then((response)=>{
            this.refreshData();
        alert(response.data);
        });
    },
    updateClick(){
        axios.put(variables.API_URL+"car",{
            CarId:this.CarId,
            CarName:this.CarName,
            CarType:this.CarType,
            DateOfJoining:this.DateOfJoining,
            PhotoFileName:this.PhotoFileName
        })
        .then((response)=>{
            this.refreshData();
        alert(response.data);
        });
    },
    deleteClick(id){
        if(!confirm("ТЫ УВЕРЕН??")){
            return;
        }
        axios.delete(variables.API_URL+id)
        .then((response)=>{
            this.refreshData();
            alert(response.data);
        });
    },
    imageUpload(event){
        let formData=new FormData();
        formData.append('file',event.target.files[0]);
        axios.post(
            variables.API_URL+"car/savefile", 
            formData)
            .then((response)=>{
                this.PhotoFileName=response.data;S
            })
    } 
},
mounted:function(){
    this.refreshData()
}
}

