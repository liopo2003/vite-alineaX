import React, {useState} from 'react'
import {Data} from './Data'
import * as XLSX from 'xlsx'
import "./Exceldata.css"

const Exceldata=()=> {
  
  // on change states
  const [excelFile, setExcelFile]=useState(null);
  const [excelFileError, setExcelFileError]=useState(null);  
  const [excelData, setExcelData]=useState(null);
  const [Dato, setDato]=useState("");
  // it will contain array of objects

  // handle File
  const fileType=['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];
  const handleFile = (e)=>{
    let selectedFile = e.target.files[0];
    if(selectedFile){
     // console.log(selectedFile.type);
       if(selectedFile&&fileType.includes(selectedFile.type)){
        let reader = new FileReader();
        reader.readAsArrayBuffer(selectedFile);
        reader.onload=(e)=>{
          setExcelFileError(null);
          setExcelFile(e.target.result);
        } 
      }
      else{
        setExcelFileError('Please select only excel file types');
        setExcelFile(null);
      }
    } 
    else{
      console.log('plz select your file');
    }
  }

  // submit function
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(excelFile!==null){
      const workbook = XLSX.readFile(excelFile);
      const worksheetName = workbook.SheetNames[0];
      const worksheet=workbook.Sheets[worksheetName];  
      const data = XLSX.utils.sheet_to_json(worksheet,{header :"A" , defval:""});
      delete(data[0]);
      delete(data[1]);
      const data1 = data.filter(dat=>dat.Y=="AC" || dat.Y == "")
      const data2 = data1.filter(dat=>dat.F.length >7 || dat.F.length< 4)   
      // los tres puntos indica q toma todas las columnas
      const data32 = data2.map(function(dat){
        const dec = (dat.D * 100 - Math.trunc(dat.D) * 100)
      
          if ( dec < 10)
          return{   
        ...dat, D : Math.trunc(dat.D) + (dec/10)
        }
        else
        return{...dat, D : Math.trunc(dat.D) + (dec/100)
      }
      })
      const data3 = data32.map(function(dat){
         return{   
        ...dat, D : dat.D.toFixed(2)
        }      
      })
      setExcelData(data3);
      setDato(data3.length);
    }
    else{
      setExcelData(null);
    }
  }  
  return ( 
    <div className="container">
      {/* upload file section */}
      <div className='form'>
        <form className='form-group' autoComplete="off"
          onSubmit={handleSubmit}>
          <label>Subir un Archivo Excel</label>
          <div>Cantidas de registros :{Dato}</div>
          <br></br>
          <input type='file' className='form-control'
            onChange={handleFile} required></input>
          {excelFileError && <div className='text-danger'
            style={{ marginTop: 5 + 'px' }}>{excelFileError}</div>}
    <div class="d-grid gap-2 col-6 mx-auto">

          <button type='submit' className='btn btn-success'
            style={{ marginTop: 5 + 'px' }}>Submit</button>
            </div>
        </form>
      </div>
      <br></br>
      <h5>View Excel file</h5>
      <hr></hr>
      <br></br>
      {/* view file section */}
      <div className='viewer'>
        {excelData===null&&<>No file selfected</>}
        {excelData!==null&&(
          <div className='table-responsive'>
            <table className='table table-striped'>
              <thead className='thear'>
                <tr className='tr'>
                  <th scope='col'width = '4px'>Op</th>
                  <th scope='col'width = '4px' >Cliente</th>
                  <th scope='col'width = '4px'>Tipo</th>
                  <th scope='col'width = '4px'>Color</th>
                  <th scope='col'width = '4px'>Estado</th>
                </tr>
              </thead>
              <tbody className='body'>
                <Data excelData={(excelData)}/>
              </tbody>
            </table>            
          </div>
        )} 
      </div>
    </div>
  );
}

export default Exceldata;
