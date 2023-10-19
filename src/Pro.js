import { useRef, useState } from "react";
import './Pro.css'
import './Pro2'
import { arr1 } from "./Pro2";


function Pro(){

   
    // var act=useRef();
    // var getcatagory=()=>{
    //   var act2=act.current.value;
    //   if(act2!=""){
    //     var xct=arr1.filter((dod)=>{
    //       return dod.brand==act2
    //     })
    //     setNbrand(xct)
    //   }
    // }

    var [nbrand,setNbrand]=useState(arr1);
    var [gcart,setGcart]=useState([]);
    var [modal,setModal]=useState(true)
  
    

   
    var one1=useRef();
    var two2=useRef();
    var three3=useRef();
    var four4=useRef();
    var btn1=useRef();
   
   

                       
    var geton1=()=>{
      var bond1=one1.current.value
      var mind1=two2.current.value   
      var kind1=three3.current.value
      var gun1=four4.current.value
      var bbtt1=btn1.current.value







      if(bond1!==""&&mind1==""&&kind1==""&&gun1==""){
            var prt=arr1.filter((bet)=>{
              return bet.brand==bond1
            })
            setNbrand(prt)
      } 
      if(bond1==""&&mind1!==""&&kind1==""&&gun1==""){
        var prt1=arr1.filter((vet)=>{
          return vet.categories==mind1
        })
        setNbrand(prt1)
      }
      if(bond1==""&&mind1==""&&kind1!==""&&gun1==""){
        var prt2=arr1.filter((cat)=>{
          return cat.cost>=kind1
        })
        setNbrand(prt2)
      }
      if(bond1==""&&mind1==""&&kind1==""&&gun1!==""){
        var prt3=arr1.filter((not)=>{
          return not.cost<=gun1
        })
        setNbrand(prt3)
      }
      if(bond1!==""&&mind1!==""&&kind1==""&&gun1==""){
        var prt4=arr1.filter((run)=>{
          return run.brand==bond1&&run.categories==mind1
        })
        setNbrand(prt4)
      }
      if(bond1==""&&mind1!==""&&kind1!==""&&gun1==""){
        var prt5=arr1.filter((run1)=>{
          return run1.categories==mind1&&run1.cost>=kind1
        })
        setNbrand(prt5)
      }
      
      if(bond1==""&&mind1==""&&kind1!==""&&gun1!==""){
        var prt6=arr1.filter((run2)=>{
          return run2.cost>=kind1&&run2.cost1<=gun1
        })
        setNbrand(prt6)
      }
      if(bond1!==""&&mind1==""&&kind1!==""&&gun1==""){
        var prt7=arr1.filter((run3)=>{
          return run3.brand==bond1&&run3.cost>=kind1
        })
        setNbrand(prt7)
      }
      if(bond1!==""&&mind1==""&&kind1==""&&gun1!==""){
        var prt8=arr1.filter((run4)=>{
          return run4.brand==bond1&&run4.cost1<=gun1
        })
        setNbrand(prt8)
      }
      if(bond1==""&&mind1!==""&&kind1==""&&gun1!==""){
        var prt9=arr1.filter((run5)=>{
          return run5.categories==mind1&&run5.cost1<=gun1
        })
        setNbrand(prt9)
      }
      if(bond1!==""&&mind1!==""&&kind1!==""&&gun1==""){
        var prt10=arr1.filter((run6)=>{
          return run6.brand==bond1&&run6.categories==mind1&&run6.cost>=kind1
        })
        setNbrand(prt10)
      }
      
      if(bond1==""&&mind1!==""&&kind1!==""&&gun1!==""){
        var prt11=arr1.filter((run7)=>{
          return run7.categories==mind1&&run7.cost>=kind1&&run7.cost1<=gun1
        })
        setNbrand(prt11)
      } 
      
      if(bond1!==""&&mind1==""&&kind1!==""&&gun1!==""){
        var prt12=arr1.filter((run8)=>{
          return run8.brand==bond1&&run8.cost>=kind1&&run8.cost1<=gun1
        })
        setNbrand(prt12)
      }
      
      if(bond1!==""&&mind1!==""&&kind1==""&&gun1!==""){
        var prt13=arr1.filter((run9)=>{
          return run9.brand==bond1&&run9.categories==mind1&&run9.cost1<=gun1
        })
        setNbrand(prt13)
      }
      if(bond1!==""&&mind1!==""&&kind1!==""&&gun1!==""){
        var prt14=arr1.filter((run10)=>{
          return run10.brand==bond1&&run10.categories==mind1&&run10.cost>=kind1&&run10.cost1<=gun1
        })
        setNbrand(prt14)
      }

      if(bbtt1!==""){
        var sc=arr1.filter((wew)=>{  
          return wew.brand.includes(bbtt1) || wew.categories.includes(bbtt1)
        })
        setNbrand(sc)
      }
      
      

    }

    var caart=(saaa)=>{
      gcart.push(saaa);
      console.log(gcart);

    }
    var showcart=()=>{
      // setNbrand(gcart)
      
      setModal(false)
    }
    var goBack=()=>{
      // setNbrand(arr1)
      setModal(true)
    }
   
    var rem=(cardInd)=>{
     var removeItem=gcart.filter((ele,ind)=>{return ind!=cardInd});
     setGcart(removeItem);
    }

    return(
        <div>
          <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="1000">
    <img src="./images/one.jpg" className="d-block w-100" alt="..." height="500px"/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
    <img src="./images/two.jpg" className="d-block w-100" alt="..." height="500px"/>
    </div>
    <div class="carousel-item" data-bs-interval="1000">
    <img src="./images/three.jpg" className="d-block w-100" alt="..." height="500px"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div><br></br>

      <div  style={{marginLeft:"20px"}}>
      &nbsp;&nbsp; <h6>Brands: </h6> <select className="btn btn-warning"  id="sb"  ref={one1}  onChange={geton1}>
         <option></option>
         <option>Nike</option>
         <option>Reebock</option>
         <option>Puma</option>
         <option>fastrack</option>
         <option>bajaj</option>
    </select> 

    &nbsp;&nbsp; <h6>Categories: </h6>    <select  className="btn btn-warning"  id="sc" ref={two2} onChange={geton1}>
         <option></option>
         <option>cloths</option>
         <option>watchs</option>
         <option>electronic</option>
         <option>sports</option>
         <option>shoe</option>
       
    </select> 

    &nbsp;&nbsp;<h6>Min-Cost:</h6> <select  className="btn btn-warning" id="sone" ref={three3} onChange={geton1}>
         <option></option>
         <option>500</option>
         <option>1000</option>
         <option>1500</option>
         <option>2000</option>
         <option>2500</option>
         <option>3000</option>
         <option>3500</option>
         <option>5000</option>
         <option>5500</option>
         <option>6000</option>
         <option>6500</option>
         <option>8000</option>
         <option>8500</option>
         <option>9000</option>
         <option>9500</option>
         <option>10000</option>
       
      </select> 

      &nbsp;&nbsp; <h6>Max-Cost:</h6>  <select  className="btn btn-warning" id="stwo" ref={four4} onChange={geton1}>
         <option></option>
         <option>500</option>
         <option>1000</option>
         <option>1500</option>
         <option>2000</option>
         <option>2500</option>
         <option>3000</option>
         <option>3500</option>
         <option>5000</option>
         <option>5500</option>
         <option>6000</option>
         <option>6500</option>
         <option>8000</option>
         <option>8500</option>
         <option>9000</option>
         <option>9500</option>
         <option>10000</option>
       
    </select> 
    &nbsp;&nbsp; <input type="text"  ref={btn1} placeholder="enter the product" id="aaa" onChange={geton1}/>
                 
                 {modal?<button  onClick={showcart} className="b11">Cart</button>:<button  onClick={goBack} className="b11">back</button>}
        
      </div>   
     
            {modal? <div>
                {nbrand.map((saaa)=>{
                  return (
                    <div  className="n1"> 
                      <img className="im1" src={saaa.product} width="200px" height="200px"></img>
                      <p>Brand:{saaa.brand}</p>
                      <p>categories:{saaa.categories}</p>
                      <p>cost:{saaa.cost}</p>
                      <button onClick={()=>caart(saaa)} >Add </button>
                  
                    </div>
                  )
                })}
                </div>

                // {/* cart Item  */}
                :
                <div>
                 {gcart.map((ele,ind)=>{
                  return (
                    <div  className="n1"> 
                      <img className="im1" src={ele.product} width="200px" height="200px"></img>
                      <p>Brand:{ele.brand}</p>
                      <p>categories:{ele.categories}</p>
                      <p>cost:{ele.cost}</p>
                      <button onClick={()=>{rem(ind)}}>remove </button>
                  
                    </div>
                  )
                })}
                </div>}

               

                <footer className="f1">
                    <div className="a1">
                    <a href="Contact">Contact</a>
                    <a href="About">About</a>
                    <a href="Help">Help</a>
                    <a href="Review">Review</a>
                    </div>
                    <br></br>
                  <div className="a2">
                   <a href="https://www.facebook.com/">Facebook</a>
                   <a href="https://www.whatsapp.com/">Whatsapp</a>
                   <a href="https://www.instagram.com/">Instagram</a>
                   <a href="https://twitter.com/i/flow/login">Twitter</a>
                   <hr></hr>
                   </div>
                 
               
                      
                </footer>
          
         </div>
    
    )
}
export default Pro;

