import * as converter from 'units-converter'
const unitConvertor = (units , currentQuantity ,currentUnitFrom , currentUnitTo , value) => 
{
    if(currentQuantity === 0) {
        return converter.length(value).from(units[0][currentUnitFrom]).to(units[0][currentUnitTo]).value
    }
    else if(currentQuantity === 1) {
        return converter.area(value).from(units[1][currentUnitFrom]).to(units[1][currentUnitTo]).value
    }
    else if(currentQuantity === 2) {
        return converter.mass(value).from(units[2][currentUnitFrom]).to(units[2][currentUnitTo]).value
    }
    else {
        return converter.volume(value).from(units[3][currentUnitFrom]).to(units[3][currentUnitTo]).value
    }   
    
}
export default unitConvertor;