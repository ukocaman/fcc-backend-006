/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  function isNumberValid(input) {
    return /^\d+(\.\d+)?(\/\d+(\.\d+)?)?$/.test(input) //3.5/1.7
  }
  
  this.getNum = function(input) {
    const unitIndex = input.search(/[a-zA-Z]+$/)
    if (unitIndex === 0) {
      return 1
    } else { //-1 or >0
      const numberString = unitIndex > 0 ? input.slice(0, unitIndex) : input
      return isNumberValid(numberString) ? eval(numberString) : NaN
    }
  };
  
  this.getUnit = function(input) {
    const unitIndex = input.search(/[a-zA-Z]+$/)
    const unit = unitIndex >= 0 ? input.slice(unitIndex) : ''
    const units = ['gal','l', 'lbs', 'kg', 'mi','km']
    return units.includes(unit.toLowerCase()) ? unit : ''
  };
  
  this.getReturnUnit = function(initUnit) {
    const returnUnits= {
      'gal': 'l',
      'l': 'gal',
      'lbs': 'kg',
      'kg': 'lbs',
      'mi': 'km',
      'km': 'mi'
    }
    return initUnit ? returnUnits[initUnit.toLowerCase()] : '';
  };

  this.spellOutUnit = function(unit) {
    const spellOutUnits= {
      'gal': 'gallons',
      'l': 'liters',
      'lbs': 'pounds',
      'kg': 'kilograms',
      'mi': 'miles',
      'km': 'kilometers'
    }
    
    return spellOutUnits[unit.toLowerCase()];
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    switch (initUnit.toLowerCase()) {
      case 'gal':
        result = initNum * galToL
        break
      case 'l':
        result = initNum / galToL
        break
      case 'lbs':
        result = initNum * lbsToKg
        break
      case 'kg':
        result = initNum / lbsToKg
        break
      case 'mi':
        result = initNum * miToKm
        break
      case 'km':
        result = initNum / miToKm
        break
      default:
        result = null
    }
    
    return result ? Math.round(result*100000)/100000 : null;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return (initNum && initUnit && returnUnit) 
      ? `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`
      : ''
    // '3.1 miles converts to 5.00002 kilometers'
  };
  
}

module.exports = ConvertHandler;
