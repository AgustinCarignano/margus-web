'use client'

import React, {useState} from "react";

type Options = 'web' | 'design'

function WorkToggleBtn({className}:{className:string}) {
    const [active,setActive] = useState<Options>("web")
    function handleClick(option:Options){
        setActive(option) 
    }

  return (
    <div className={className}>
      <button onClick={()=>handleClick("web")}>WEB</button>
      <button onClick={()=>handleClick("design")}>DESIGN</button>
    </div>
  );
}

export default WorkToggleBtn;
