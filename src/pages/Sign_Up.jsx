
import React, { useEffect } from "react";
import axios from 'axios'
import formData from 'form-data'


export default ()=>{



    const [data, setData] = React.useState({});
    const [succ, setsucc] = React.useState('');
    const [file_up, setfile_up] = React.useState(null);




    const Click = (e)=>
    {
      e.preventDefault();
      let formdata = new formData()
      formdata.append("file",file_up)
      formdata.append("username",e.target.elements.username.value)
      formdata.append("lastname",e.target.elements.lastname.value)
      formdata.append("firstname",e.target.elements.firstname.value)
      formdata.append("city",e.target.elements.city.value)
      formdata.append("number",e.target.elements.number.value)
      console.log(e);
      axios.post(`http://localhost:2000/test`,formdata).then( (res)=>{
      setsucc('succ')
      })
    }

    // useEffect(()=>{
    //   axios.get(`http://localhost:2000/`).then( (res)=>{
        
    //   })
    //   axios.post(`http://localhost:2000/testcc`,{text :'cc'})
    // },[])
      
return (
  <>
  <section className="container rounded-2" id="Sign" >
      
  <div class=" container df al-c h-5 p-5 mb-4 mt-4"style={{width:'500px'}} >
      {/* <div class="">
          <img src="ballot-safe.png" alt="" class="w-50"/>
      </div> */}
      <form action="/" method="post" class=" g-3 needs-validation" encType="multipart/form-data" novalidate onSubmit={Click}>
          <h1 className="bg-primary"> {succ}</h1>
          <div class="form-floating mb-3">
            <label for="validationCustom01" class="form-label">First name :</label>
            <input type="text" class="form-control" id="validationCustom01" name="firstname" />
            <div class="valid-feedback">
              Looks good!
            </div>
          </div>
          <div class="form-floating mb-3">
            <label for="validationCustom02" class="form-label">Last name :</label>
            <input type="text" name="lastname" class="form-control" id="validationCustom02" />
            <div class="valid-feedback">
              Looks good!
            </div>
          </div>
          <div class="form-floating mb-3">
            <label for="validationCustomUsername" class="form-label">Country :</label>
            <div class="input-group has-validation">
              <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" name="username" />
              <div class="invalid-feedback">
                Please choose a username.
              </div>
            </div>
          </div>
          <div class="form-floating mb-3">
            <label for="validationCustom03" class="form-label">Distrect :</label>
            <input type="text" class="form-control" id="validationCustom03" name="city" />
            <div class="invalid-feedback">
              Please provide a valid city.
            </div>
          </div>
          <div class="form-floating mb-3">
            <label for="validationCustom03" class="form-label">Your birth date :</label>
            <input type="date" class="form-control" id="validationCustom03" name="date" placeholder="" />
            <div class="invalid-feedback">
              Please provide a valid city.
            </div>
          </div>
          <div class="form-floating mb-3">
            <label for="validationCustom04" class="form-label">ID Number :</label>
            <input type="text" class="form-control" id="validationCustom04" name="number" />
            <div class="invalid-feedback">
              Please provide a valid city.
            </div>
          </div>
          <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">Type something :</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
          <div class="col-md-3">
            <label for="validationCustom05" class="form-label"> Please import a photo of your ID</label>
            <input type="file" class="form-control" id="validationCustom05" name="file"  onChange={(e)=>{
              setfile_up(e.target.files[0])
              }}/>
            <div class="invalid-feedback">
              Please provide a valid zip.
            </div>
          </div>
          <div class="col-12">
            <button class="btn btn-warning  d-inline-block" type="submit">Sign up</button>
          </div>
        </form>
  </div>

</section>
  </>
)
}