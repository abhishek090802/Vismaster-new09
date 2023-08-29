// The code provided is a JavaScript implementation of the QuickSort algorithm for visualizing the sorting of bars in a bar chart. The code uses asynchronous functions and animations to display the sorting process step by step.

// Here's how the code works:

async function partitionLomuto(ele, l, r) {
    let i = l - 1;
    for (let j = l; j <= r - 1; j++) {
        ele[j].style.background = 'yellow';
        await waitforme(delay);

        if (parseInt(ele[j].style.height) < parseInt(ele[r].style.height)) {
            i++;
            swap(ele[i], ele[j]);
            ele[i].style.background = 'orange';
            if (i != j) ele[j].style.background = 'orange';
            await waitforme(delay);
        }
        else {
            ele[j].style.background = 'orange';
        }
    }
    i++;
    await waitforme(delay);
    swap(ele[i], ele[r]); 
    ele[r].style.background = 'orange';
    ele[i].style.background = '#1abc9c';

    await waitforme(delay);

    for (let k = 0; k < ele.length; k++) {
        if (ele[k].style.background != '#1abc9c')
            ele[k].style.background = '#1abc9c';
    }

    return i;
}

// The partitionLomuto function is responsible for partitioning the array (represented by the ele parameter) using the Lomuto partition scheme.

// The function takes three parameters: ele (an array of DOM elements representing bars), l (the left index of the current partition), and r (the right index of the current partition).

// Inside the partitionLomuto function, two pointers, i and j, are used. i is initialized to l-1.

// The function starts a loop from index l to r-1, and during each iteration, it marks the bar at index j with a yellow background color to visualize the current comparison.

// If the height of the bar at index j is less than the height of the pivot element (the bar at index r), the i pointer is incremented, and the bars at indices i and j are swapped. The bars involved in the swap are marked with an orange background color.

// After the loop ends, the pivot element is placed at its correct position by swapping it with the element at index i+1. The pivot element and the element at index i+1 are marked with appropriate background colors.

// The function then resets the background colors for all elements, except for the ones that have been placed correctly (marked with '#1abc9c').

// The function returns the index i+1, which represents the correct position of the pivot element after partitioning.


async function quickSort(ele, l, r) {
    if (l < r) {
        let pivot_index = await partitionLomuto(ele, l, r);
        // pick an pivot element and keep it at its correct position at the sorted array 
        await quickSort(ele, l, pivot_index - 1);
        await quickSort(ele, pivot_index + 1, r);
    }
}


const quickSortbtn = document.querySelector(".quickSort");
quickSortbtn.addEventListener('click', async function () {
    let ele = document.querySelectorAll('.bar');
    let l = 0;
    let r = ele.length - 1;
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await quickSort(ele, l, r);
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});


// The quickSort function is the main sorting function based on the QuickSort algorithm.

// It takes ele (the array of bar elements), l (the left index of the current partition), and r (the right index of the current partition) as parameters.

// Inside the quickSort function, if l is less than r, it calls the partitionLomuto function to obtain the pivot index and then recursively calls quickSort on the left and right sub-arrays of the pivot.

// The quickSortbtn click event listener triggers the QuickSort algorithm when the "Quick Sort" button is clicked on the webpage.

// Before starting the sorting process, the event listener disables the sorting button, size slider, and new array button to prevent interference.

// After the sorting is complete, the event listener enables the sorting button, size slider, and new array button again.


// In summary, the code visualizes the QuickSort algorithm by animating the sorting process on a bar chart, making it easier to understand how the algorithm works step by step.
