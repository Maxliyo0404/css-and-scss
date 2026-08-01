


// var ism = "Malika";
// console.log(ism);


import React, { useState } from 'react'

function main() {
    const [name, setName] = useState();
    function handchange(e){
      setName
    }
  return (
    <div>
        
<form >
  <label >Name is ...</label>
  
  <button id="btn" type="submit">Submit</button>



</form>


        
    </div>
  )
}

export default main