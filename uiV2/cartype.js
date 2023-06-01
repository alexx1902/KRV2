const cartype ={template:`
<div>

<button type="button"
class="btn btn-primary m-2 fload-end" 
data-bs-toggle="modal"
data-bs-target="#exampleModal"
@click="addClick()">
    Add Type 
 </button>   


<table class="table table-striped">
<thead>
        <tr>
            <th>


            <div class="d-flex flex-row">


             <input class="form-control m-2"
                v-model="CarTypeIdFilter"
                v-on:key="FilterFn()"
                 placeholder="Filter">


                <button type="button" class="btn btn-light"
                 @click="sortResult('typeId',true)">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
                </svg>
                 </button>


                 <button type="button" class="btn btn-light"
                 @click="sortResult('typeId',false)">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
                 <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
                 </svg>
                 </button> 
             </div>
             TypeId
            </th>
            <th>

            <div class="d-flex flex-row">

            <input class="form-control m-2"
                v-model="CarTypeNameFilter"
                v-on:keyup="FilterFn()"
                placeholder="Filter">
                
                <button type="button" class="btn btn-light"
                @click="sortResult('typeName',true)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
                </svg>
                </button>

                <button type="button" class="btn btn-light"
                @click="sortResult('typeName',false)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
                <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/>
                </svg>
                </button>

            </div>
            TypeName
        </th>
        
        
                
       
        <th>
        Options
        </th>
        </tr>
    </thead>
 
    <tbody>
        <tr v-for="cartyp in cartypes">
            <td>{{cartyp.id}}</td>
            <td>{{cartyp.typeName}}</td>
            <td>
                 <button type="button"
                 class="btn btn-light mr-1"
                 data-bs-toggle="modal"
                 data-bs-target="#exampleModal"
                 @click="editClick(cartyp)">
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                     <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                     </svg>
                 </button>
                 <button type="button" @click="deleteClick(cartyp.id)"
                 class="btn btn-light mr-1">
            
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                     <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                     </svg>
                  </button>
        </td>
    </tr>
    
</tbody>
</thead>
</table>

    <div class="modal fade" id="exampleModal" tabindex="-1"
         aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered">
    <div class="modal-content">
    <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">{{modalTitle}}</h5>

             <button type="button" class="btn-close" data-bs-dismiss="modal"
             aria-label="Close"></button>
    </div>

    <div class="modal-body">

        <div class="input-group mb-3">
        <span class="input-group-text"> Type Name</span>
        <input type="text" class="form-control" v-model="typeName">
        </div>
        
        <button type="button" @click="createClick()" 
        v-if="id==0"  class="btn btn-primary">
        Create
        </button>
        <tr v-for="cartyp in cartypes">
        <button type="button" @click="updateClick(cartyp.id)"
        v-if="id!=0"  class="btn btn-primary">
        Update
        </button>
        </tr


    </div>

</div>    
</div>
</div>
</div>
`,


data(){
    return{
        cartypes:[],
        modalTitle:"",
        typeName:"",
        id:0,
        CarTypeIdFilter:"",
        CarTypeNameFilter:"",
        carTypesWithoutFilter:[]
    }
},
methods:{
    refreshData(){
        axios.get(variables.API_URL)
        .then((response)=>{
            this.cartypes=response.data;
          //  this.cartypesWithoutFilter=response.data;
          console.log(response.data);
            console.log(this.cartypes);
            
        });
    },
    addClick(){
        this.modalTitle="add Type";
        this.id=0;
        this.typeName="";
    },
    editClick(cartyp){
        this.modalTitle="edit Type";
        this.id=cartyp.id;
        this.typeName=cartyp.typeName;
    },
    createClick(){
        axios.post(variables.API_URL,{
            typeName:this.typeName
        })
        .then((response)=>{
            this.refreshData();
        alert(response.data);
        });
    },
    updateClick(id){
        axios.put(variables.API_URL+"/update?id="+id,{
            typeName:this.typeName,
            id:this.id
        })
        .then((response)=>{
            this.refreshData();
        alert(response.data);
        });
    },
    deleteClick(id){
        if(!confirm("are you sure?")){
            return;
        }
        axios.delete(variables.API_URL+"/delete?id="+id)
        .then((response)=>{
            this.refreshData();
            alert(response.data);
        });
    },
    FilterFn(){
         var CarTypeIdFilter=this.CarTypeIdFilter;
         var CarTypeNameFilter=this.CarTypeNameFilter;
         this.cartypes=this.carTypesWithoutFilter.filter(
            function(el){
            return el.id.toString().toLowerCase().includes(
                CarTypeIdFilter.toString().trim().toLowerCase()
            )&&
            el.typeName.toString().toLowerCase().includes(
                CarTypeNameFilter.toString().trim().toLowerCase()
            )
            });
    },
    sortResult(prop,asc){
        this.cartypes=this.carTypesWithoutFilter.sort(function(a,b){
            if(asc){
                return (a[prop]>b[prop])?1:((a[prop]<b[prop])?-1:0);
            } 
            else{
                return (b[prop]>[prop])?1:((b[prop]<a[prop])?-1:0);
            }
        })
    }   

},
mounted:function(){
    this.refreshData()
}
}
