function oursum() {
  const args = Array.from(arguments);
  return args.reduce((acc, el) => acc + el); 
}

function sumDot(...args) {
  return args.reduce((acc, el) => acc + el); 
}

Function.prototype.myBind = function(){
  const args = Array.from(arguments);
  const ctx = args[0];
  const bindArgs = args.slice(1);
  const that = this;
  
  return function() {
    const callArgs = Array.from(arguments);
    return that.apply(ctx, bindArgs.concat(callArgs));
  };
};

Function.prototype.myBindDot = function(ctx, ...bindArgs){
  return (...callArgs) => {
    return this.apply(ctx, bindArgs.concat(callArgs));
  };
};

function curriedSum(numArgs) {
  const numbers = [];
  
  function _curriedSum(num) {
    numbers.push(num);
    
    if (numbers.length === numArgs) {
      return numbers.reduce((acc, num) => acc + num);
    } else {
      return _curriedSum;
    }
  }
  
  return _curriedSum;
}


Function.prototype.curryApply = function(numArgs) {
  const args = [];
  const that = this;
  
  function _curry(arg) {
    args.push(arg);
    
    if (args.length === numArgs) {
      return that.apply(null, args);
    } else {
      return _curry;
    }
  }
  
  return _curry;
};

Function.prototype.curry = function(numArgs) {
  const args = [];
  const that = this;
  
  function _curry(arg) {
    args.push(arg);
    
    if (args.length === numArgs) {
      return that(...args);
    } else {
      return _curry;
    }
  }
  
  return _curry;
};

function sum(...args) {
  return args.reduce((acc, el) => acc + el);
}

// const a = sum.curry(3);
// console.log(a(1));
// console.log(a(2));
// console.log(a(3));