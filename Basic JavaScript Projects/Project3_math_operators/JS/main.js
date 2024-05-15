
        // Create a paragraph element with the id "Math"
        const mathParagraph = document.createElement("p");
        mathParagraph.id = "Math";
        mathParagraph.textContent = "Initial content for Math paragraph.";

        // subtracion
        const mathParagraph1 = document.createElement("p");
        mathParagraph1.id = "Math";
        mathParagraph1.textContent = "Initial content for Math paragraph.";

         // multiplication
         const mathParagraph2 = document.createElement("p");
         mathParagraph2.id = "Math";
         mathParagraph2.textContent = "Initial content for Math paragraph.";

          // division
          const mathParagraph3 = document.createElement("p");
          mathParagraph3.id = "Math";
          mathParagraph3.textContent = "Initial content for Math paragraph.";

        // Add an event handler to the paragraph element
        mathParagraph.addEventListener("click", function() {
            // Call the JavaScript function to perform an addition operation
            const result = addNumbers(5, 3); // Example: 5 + 3
            mathParagraph.textContent = `Result: ${result}`;
        });

         // Add an event handler to the paragraph element
         mathParagraph1.addEventListener("click", function() {
            // Call the JavaScript function to perform an addition operation
            const result = subtractNumbers(5, 3); // Example: 5 - 3
            mathParagraph1.textContent = `Result: ${result}`;
        });

         // Add an event handler to the paragraph element
         mathParagraph2.addEventListener("click", function() {
            // Call the JavaScript function to perform an addition operation
            const result = multiplyNumbers(5, 3); // Example: 5 * 3
            mathParagraph2.textContent = `Result: ${result}`;
        });

        // Add an event handler to the paragraph element
        mathParagraph3.addEventListener("click", function() {
            // Call the JavaScript function to perform an addition operation
            const result = divideNumbers(5, 3); // Example: 5 / 3
            mathParagraph3.textContent = `Result: ${result}`;
        });

        //all math operations all together
        function printResult() {
            var simple_math = (1 + 2) * 10 / 2 - 5;
            document.getElementById("Math").textContent = "1 plus 2, multiplied by 10, divided in half and subracted by 5 equals" + simple_math;
        }

        // the reminder operator
        function modulus_Operator() {
            var simple_math1 = 25 % 6;
            document.getElementById("Math1").textContent = "When you divide 25 by 6 you have a reminder of: " + simple_math1;
        }

        //unary operator
        function negation_Operator() {
            var x = 10;
            document.getElementById("Math2").textContent = -x;
        }

        //increment and decrement
        let y = 8;
        y++;
        document.getElementById("result1").textContent = y++;

        var k = 5.2;
        k--;
        document.getElementById("result2").textContent = k--;

        //random numbers
        window.alert(Math.random() *100);

        
        const numberToCalculate = 25; // Change this to any positive number

        // Calculate the square root using Math.sqrt()
        const squareRoot = Math.sqrt(numberToCalculate);

        // Display the result
        document.getElementById("result").textContent = `The square root of ${numberToCalculate} is approximately ${squareRoot.toFixed(2)}`;



        // Function to perform addition
        function addNumbers(a, b) {
            return a + b;
        }

        // Function to perform subtraction
        function subtractNumbers(a, b) {
            return a - b;
        }

        // Function to perform multiplication
        function multiplyNumbers(a, b) {
            return a * b;
        }

         // Function to perform division
         function divideNumbers(a, b) {
            return a / b;
        }    
        // Append the paragraph element to the body
        document.body.appendChild(mathParagraph);
        document.body.appendChild(mathParagraph1);
        document.body.appendChild(mathParagraph2);
        document.body.appendChild(mathParagraph3);