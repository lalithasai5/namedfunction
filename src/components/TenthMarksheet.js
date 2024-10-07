
import { useRef } from 'react';

function TenthMarksheet() {

          let engInputRef = useRef();
          let telInputRef = useRef();
          let telSpanRef = useRef();
          let hinSpanRef = useRef();
          let engSpanRef = useRef();
          let matSpanRef = useRef();
          let sciSpanRef = useRef();
          let socSpanRef = useRef();
          let hinInputRef = useRef();
          let matInputRef = useRef();
          let sciInputRef = useRef();
          let socInputRef = useRef();
          let firstInputRef =useRef();
          let lastInputRef =useRef();
          let reslabRef =useRef();
          
          let finalResult =()=>{
            alert("welcome")
          let FirstName =firstInputRef.current.value;
          let LastName =lastInputRef.current.value;
          let english = Number(engInputRef.current.value);
          let telugu = Number(telInputRef.current.value);
          let hindi = Number(hinInputRef.current.value);
          let maths =Number(matInputRef.current.value);
          let science = Number(sciInputRef.current.value);
          let social = Number(socInputRef.current.value);
          let result;
          if(english>=35 || telugu>=35 || hindi>=35 || maths>=35 || science>=35 || social>=35 ){
            result ="passed"

          }else{
            result ="failed"

          }
          /*
         if(english >=0 && english <=100){
          if(english>=35){
            result="passed"
          }else{
            result="failed"
          }

         }else{
          engSpanRef.current.innerHTML='invalid'
          
         }*
         
          if(english<35 || telugu<35 || hindi<35 || maths<35 || science<35 || social<35 ){
            result ="failed"

          }else{
            result ="passed"

          }
          /*
          if(english<=35 || telugu<=35 || hindi<=35 || maths<=35 || science<=35 || social<=35 ){
            result ="failed"

          }else{
            result ="passed"

          }*/

          let totalmarks = english+telugu+hindi+maths+science+social;
          reslabRef.current.innerHTML= `total marks of ${FirstName} ${LastName} are ${totalmarks} she is ${result}`
          
        }
            console.log("result final")
            let telOnFocus =()=>{
              console.log("tel onfocus");
              telInputRef.current.style.backgroundColor ="Orange";
            }
            let hinOnFocus =()=>{
              console.log("hin onfocus");
              hinInputRef.current.style.backgroundColor ="Orange" 
              
            }
            let engOnFocus =()=>{
              console.log("eng onfocus");
              engInputRef.current.style.backgroundColor ="Orange" 

            }
            let matOnFocus =()=>{
              console.log("mat onfocus");
              matInputRef.current.style.backgroundColor ="Orange" 

            }
            let sciOnFocus =()=>{
              console.log("sci onfocus");
             sciInputRef.current.style.backgroundColor ="Orange" 

            }
            let socOnFocus =()=>{
              console.log("soc onfocus");
              socInputRef.current.style.backgroundColor ="Orange" 

            }
            let telOnChange=()=>{
              console.log("tel onchange");
              telInputRef.current.style.backgroundColor ="Yellow"
          let telugu = Number(telInputRef.current.value);
          if(telugu >=0 && telugu<=100){
            if(telugu>=35){
              telSpanRef.current.innerHTML =  "Pass";
              telSpanRef.current.style.backgroundColor = "Green";
            }else{
              telSpanRef.current.innerHTML =  "fail"
              telSpanRef.current.style.backgroundColor = "Red"
  
            }   
          }else{
            telSpanRef.current.innerHTML =  "Invalid";
            telSpanRef.current.style.backgroundColor = "purple";
          }
              
            }
            let hinOnChange=()=>{
              console.log("hin onchange");
              let hindi = Number(hinInputRef.current.value);
              
              hinInputRef.current.style.backgroundColor ="Yellow"
              if(hindi >=0 && hindi<=100){
                if(hindi>=35){
                  hinSpanRef.current.innerHTML =  "Pass";
                  hinSpanRef.current.style.backgroundColor = "Green";
                }else{
                  hinSpanRef.current.innerHTML =  "fail"
                  hinSpanRef.current.style.backgroundColor = "Red"
      
                }   
              }else{
                hinSpanRef.current.innerHTML =  "Invalid";
                hinSpanRef.current.style.backgroundColor = "purple";
              }
            }
            let engOnChange=()=>{
              console.log("eng onchange");
              let english = Number(engInputRef.current.value);
              
              engInputRef.current.style.backgroundColor ="Yellow";
              if(english >=0 && english<=100){
                if(english>=35){
                  engSpanRef.current.innerHTML =  "Pass";
                  engSpanRef.current.style.backgroundColor = "Green";
                }else{
                  engSpanRef.current.innerHTML =  "fail"
                  engSpanRef.current.style.backgroundColor = "Red"
      
                }   
              }else{
                engSpanRef.current.innerHTML =  "Invalid";
                engSpanRef.current.style.backgroundColor = "purple";
              }
              
            }
            let matOnChange=()=>{
              console.log("mat onchange");
              let maths = Number(matInputRef.current.value);
              
              matInputRef.current.style.backgroundColor ="Yellow"
              if(maths >=0 && maths<=100){
                if(maths>=35){
                  matSpanRef.current.innerHTML =  "😄";
                  matSpanRef.current.style.backgroundColor = "Green";
                }else{
                  matSpanRef.current.innerHTML =  "😔"
                  matSpanRef.current.style.backgroundColor = "Red"
      
                }   
              }else{
                matSpanRef.current.innerHTML =  "Invalid";
                matSpanRef.current.style.backgroundColor = "purple";
              }
              
            }
            let sciOnChange=()=>{
              console.log("sci onchange");
              let science = Number(sciInputRef.current.value);
              sciInputRef.current.style.backgroundColor ="Yellow";
              if(science >=0 && science<=100){
                if(science>=35){
                  sciSpanRef.current.innerHTML =  "😄";
                  sciSpanRef.current.style.backgroundColor = "Green";
                }else{
                  sciSpanRef.current.innerHTML =  "😔"
                  sciSpanRef.current.style.backgroundColor = "Red"
      
                }   
              }else{
                sciSpanRef.current.innerHTML =  "Invalid";
                sciSpanRef.current.style.backgroundColor = "purple";
              }
            }
            let socOnChange=()=>{
              console.log("soc onchange");
              let social = Number(socInputRef.current.value);
              socInputRef.current.style.backgroundColor ="Yellow";
              if(social>=0 && social<=100){
                if(social>=35){
                  socSpanRef.current.innerHTML =  "😄";
                  socSpanRef.current.style.backgroundColor = "Green";
                }else{
                  socSpanRef.current.innerHTML =  "😔"
                  socSpanRef.current.style.backgroundColor = "Red"
      
                }   
              }else{
                socSpanRef.current.innerHTML =  "Invalid";
                socSpanRef.current.style.backgroundColor = "purple";
              }
            }
            let telonBlur=()=>{
               console.log("tel onblur");
              telInputRef.current.style.backgroundColor =""
            }
            let hinonBlur=()=>{
               console.log("hin onblur");
              hinInputRef.current.style.backgroundColor =""
            }
            let engonBlur=()=>{
               console.log("eng onblur");
              engInputRef.current.style.backgroundColor =""
            }
            let scionBlur=()=>{
               console.log("sci onblur");
              sciInputRef.current.style.backgroundColor =""
            }
            let matonBlur=()=>{
               console.log("mat onblur");
              matInputRef.current.style.backgroundColor =""
            }
            let soconBlur=()=>{ 
              console.log("soc onblur");
              socInputRef.current.style.backgroundColor =""
            }
        
          
          
  
  return ( 
    <div>
      <h1>Tenth Marks Sheet</h1>
      <form>
        <div>
          <label>First Nme</label>
          <input ref={firstInputRef}></input>
        </div>
        <div>
          <label>Last Nme</label>
          <input ref={lastInputRef}></input>
        </div>
        <div>
            <label>Telugu</label>
            <input type="number" ref={telInputRef} onFocus={()=>{
              telOnFocus();
            }} 
            onChange={()=>{
              telOnChange();

            }} 
            onBlur={()=>{
              telonBlur();
            }}></input>
            <span ref={telSpanRef}></span>
        </div>
        <div>
            <label>Hindi</label>
            <input type="number" ref={hinInputRef} onFocus={()=>{
               hinOnFocus();
              
            }} 
            onChange={()=>{
             hinOnChange();
            }} 
            onBlur={()=>{
             hinonBlur();
            }}></input>
            <span ref={hinSpanRef}></span>

        </div>
        <div>
            <label>English</label>
            <input type="number" ref={engInputRef} onFocus={()=>{
               engOnFocus();
            }}
             onChange={()=>{
             engOnChange();
            }}
             onBlur={()=>{
             engonBlur();
            }}></input>
            <span ref={engSpanRef}></span>

        </div>
        <div>
            <label>Maths</label>
            <input type="number" ref={matInputRef} onFocus={()=>{
               matOnFocus();
             
            }} 
            onChange={()=>{
              matOnChange();
            }} 
            onBlur={()=>{
             matonBlur(); 
            }}></input>
            <span ref={matSpanRef}></span>

        </div>
        <div>
            <label>Science</label>
            <input type="number" ref={sciInputRef}onFocus={()=>{
               sciOnFocus();
             
            }} 
            onChange={()=>{
           sciOnChange();
            }} 
            onBlur={()=>{
              scionBlur();
            }} ></input>
            <span ref={sciSpanRef}></span>

        </div>
        <div>
            <label>Social</label>
            <input type="number" ref={socInputRef} onFocus={()=>{
              socOnFocus();
              
            }}
             onChange={()=>{
              socOnChange();
            }} 
            onBlur={()=>{
             soconBlur();
            }}></input>
            <span ref={socSpanRef}></span>

        </div>
        <button type="button" onClick={()=>{
           finalResult();
        }}> total marks</button>
        
        <button type='button' onClick={()=>{
          let a = 20;
          console.log(a);
        }}> scope of variables</button>
        <br></br>
        <label ref={reslabRef}></label>
      </form>
    </div>
  );


}





export default TenthMarksheet ;
