import React from 'react'

import * as converter from 'units-converter'


const unitconv = (units,un1,un2,c,btindex) => {
    const e=units[btindex][un1];
    const f=units[btindex][un2];
    if(btindex==='0'){
        if(e===''|| f==='' || c===undefined){
            
        }
        else{return converter.area(c).from(e).to(f).value;}
    }
    else if(btindex==='1'){
        if(e===''|| f==='' || c===undefined){
            
        }
        else{return converter.length(c).from(e).to(f).value;}
    }
    else if(btindex==='2'){
        if(e===''|| f==='' || c===undefined){
            
        }
        else{return converter.volume(c).from(e).to(f).value;}
    }
    else{
        if(e===''|| f==='' || c===undefined){
            
        }
        else{return converter.mass(c).from(e).to(f).value;}
    }
  
  
    
}

export default unitconv;
