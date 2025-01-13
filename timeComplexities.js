class TimeComplexity{
    //O(1)
    accessElement(arr) 
    {
        return arr[0];
    }

    // O(log n)
    binarySearch(arr, target) {
        let left = 0, right = arr.length - 1;
        while (left <= right)
        {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] === target)
            {
                return mid; // Target found
            } else if (arr[mid] < target)
            {
                left = mid + 1;
            } else
            {
                right = mid - 1;
            }
        }
        return -1; // Target not found
    }

    // O(n)
    findMax(arr) 
    {
        let max = arr[0];
        for (let i = 1; i < arr.length; i++) 
        {
            if (arr[i] > max) 
            {
                max = arr[i];
            }
        }
        return max;
    }

    // O(n log n)
    mergeSort(arr) {
        if (arr.length <= 1) return arr;
        const mid = Math.floor(arr.length / 2);
        const left = this.mergeSort(arr.slice(0, mid));
        const right = this.mergeSort(arr.slice(mid));
        return this.merge(left, right);
    }

    merge(left, right)
    {
        let result = [];
        while (left.length && right.length) 
        {
            if (left[0] < right[0]) 
            {
                result.push(left.shift());
            } else 
            {
                result.push(right.shift());
            }
        }
        return result.concat(left, right);
    }

    // O(n^2)
    bubbleSort(arr)
    {
        for (let i = 0; i < arr.length; i++) 
        {
            for (let j = 0; j < arr.length - i - 1; j++) 
            {
                if (arr[j] > arr[j + 1]) 
                {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; 
                }
            }
        }
        return arr;
    }

    // O(2^n)
  fibo(n)
  {
        if (n <= 1) {
            return n;
        }
        return this.fibo(n - 1) + this.fibo(n - 2);
    }
}

function getUserInput(message) 
{
    const input = prompt(message);
    return input ? input.split(',').map(num => parseInt(num.trim())) : [];
}
const result = new TimeComplexity();

let arr = getUserInput("Enter an array of numbers separated by commas:");

console.log("Demonstrating O(1) Example!:");
console.log("First element:", result.accessElement(arr));

let target = parseInt(prompt("Enter a target number for binary search:"));
console.log("Demonstrating O(log n) Example!:");
let val = result.binarySearch(arr, target)
console.log("Index of target:",val!=-1 ? val:"Value not found" );

console.log("Demonstrating O(n) Example!:");
console.log("Max element:", result.findMax(arr));

console.log("Demonstrating O(n log n) Example!:");
console.log("Sorted array:", result.mergeSort(arr));

console.log("Demonstrating O(n^2) Example:");
console.log("Sorted array (Bubble Sort):", result.bubbleSort(arr));

console.log("Demonstrating O(2^n) Example:");
let n = getUserInput("Enter a number (0 to 40) to calculate the Fibonacci sequence:");
console.log("Finonacci(recursive):", result.fibo(n));

