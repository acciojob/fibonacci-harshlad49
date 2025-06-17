  function fibonacci(num) {
      if (num === 1) return 0;
      if (num === 2) return 1;

      let a = 0, b = 1;
      for (let i = 3; i <= num; i++) {
        let next = a + b;
        a = b;
        b = next;
      }
      return b;
    }

    function calculateFibonacci() {
      const num = parseInt(document.getElementById("inputNum").value);
      const resultElement = document.getElementById("result");

      if (isNaN(num) || num < 1 || num > 50) {
        resultElement.textContent = "Please enter a valid number between 1 and 50.";
        return;
      }

      const fibValue = fibonacci(num);
      resultElement.textContent = `The ${num}ᵗʰ Fibonacci number is: ${fibValue}`;
    }