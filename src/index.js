function min (array) {
        if (!array || array.length == 0)//проверка пустой ли массив
        return 0;
        else{
              return Math.min.apply(Math, array);
        }
      };
      
function max (array) {
        if (!array || array.length == 0)//проверка пустой ли массив
        return 0;
        else{
          return Math.max.apply(Math, array);
        }
      };
      
function avg (array) {
        if (!array || array.length == 0)//проверка пустой ли массив
        return 0;
        else{
          var a;
          var b;
              return array.reduce((a, b) => (a + b)) / array.length;
        }
        
      };
      