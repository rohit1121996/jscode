function isBalanced() {
          var parensStr = document.getElementById('input-one');
           var inputStr = parensStr.value
             if (inputStr === null) { printToScreen(true); }
             var expression = inputStr.split('');
               var stack = [];
             for (var i = 0; i < expression.length; i++) {
              if (isParanthesis(expression[i])) {
                 if (isOpenParenthesis(expression[i])) {
                     stack.push(expression[i]);
              } else {
               if (stack.length === 0) {
                 return printToScreen(false);
              }
            var top = stack.pop();
             if (!matches(top, expression[i])) {
          return printToScreen(false);
        }
      }
    }
  }