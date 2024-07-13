document.addEventListener("DOMContentLoaded", function() {
  const numbersContainer = document.getElementById("numbersContainer");

  // Function to generate numbers and classify them
  function generateNumbersAndClassify(count) {
      for (let i = 1; i <= count; i++) {
          const numberBox = document.createElement("div");
          numberBox.textContent = i;
          numberBox.classList.add("number-box");
          
          // Classify number as even, odd, or prime
          if (i % 2 === 0) {
              numberBox.classList.add("even");
          } else {
              numberBox.classList.add("odd");
          }
          if (isPrime(i)) {
              numberBox.classList.add("prime");
          }

          numbersContainer.appendChild(numberBox);
      }
  }

  // Function to check if a number is prime
  function isPrime(num) {
      if (num <= 1) return false;
      if (num <= 3) return true;
      if (num % 2 === 0 || num % 3 === 0) return false;
      let i = 5;
      while (i * i <= num) {
          if (num % i === 0 || num % (i + 2) === 0) return false;
          i += 6;
      }
      return true;
  }

  // Generate 100 numbers and classify them
  generateNumbersAndClassify(100);
});
