class SpaceComplexityDemonstration {
    
    // O(1) - Constant Space
    constantSpaceExample(n) 
    {
        let result = 0; 
        for (let i = 1; i <= n; i++) 
        {
            result += i; 
        }
        return result;
    }

    // O(log n)
    logarithmicSpaceExample(n) 
    {
        if (n <= 1) 
        {
            return 1;
        }
        return n * this.logarithmicSpaceExample(Math.floor(n / 2)); // Recursive calls with decreasing input
    }

    // O(n) 
    linearSpaceExample(n)
    {
        let array = []; 
        for (let i = 0; i < n; i++) 
        {
            array.push(i); 
        }
        return array;
    }

    // O(n^2) - Quadratic Space
    quadraticSpaceExample(n)
    {
        let matrix = []; 
        for (let i = 0; i < n; i++) 
        {
            let row = [];
            for (let j = 0; j < n; j++)
            {
                row.push(i + j);
            }
            matrix.push(row); // Add row to matrix
        }
        return matrix;
    }

    

}

function getUserInput(message) 
{
    let input = prompt(message);
    while (isNaN(input) || input < 0 || input > 10)
    {
        input = prompt("Invalid input! Please enter a positive number (0 to 10):");
    }
    return parseInt(input.trim());
}


const Demo = new SpaceComplexityDemonstration();
let n = getUserInput("Enter a number to demonstrate space complexities (0 to 10):");

console.log("Demonstrating Space Complexities:");
console.log(`O(1) Space Example: Sum of first ${n} numbers =`, Demo.constantSpaceExample(n));
console.log(`O(log n) Space Example: Result =`, Demo.logarithmicSpaceExample(n));
console.log(`O(n) Space Example: Array of size ${n} =`, Demo.linearSpaceExample(n));
console.log(`O(n^2) Space Example: ${n}x${n} Matrix =`, Demo.quadraticSpaceExample(n));


