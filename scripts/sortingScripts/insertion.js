// insertion sort is based on the method where the array is being virtually split into two parts and at each iteration the element from the unsorted is being taken and kept it aat the required correct position in the sorted array 
// the insertion sort will work in kind of backword sorting in the backward fashion by keep positioning each smaller element at its correct position after each iteration in the backward trend 


async function insertion() {
    const ele = document.querySelectorAll(".bar");
    for (let i = 1; i < ele.length; i++) {
        // the elements after the ith cell will be considered as the unsorted apart of the array and after each iteration the element from the unsorted array is kept aat its required position in the sorted array on the left part 

        let j = i - 1;
        let key = ele[i].style.height;
        // we want to place the key at its correct position while traversing in the backward direction 
        ele[i].style.background = 'blue';

        await waitforme(delay);

        while (j >= 0 && (parseInt(ele[j].style.height) > parseInt(key))) {
            ele[j].style.background = 'blue';
            // the blue color sigifies the iteration on the array in the backward direction and the color is dark blue 
            ele[j + 1].style.height = ele[j].style.height;
            j--;

            await waitforme(delay);

            for (let k = i; k >= 0; k--) {
                ele[k].style.background = '#1abc9c';
            }
        }

        // by the above while loop the current key element will reach at its correct place in the backward sorted array and also the j has decrement has decreased by 1 step extra so we have to ammend the key on the j+1 index and that will be its final place in the sorted array and change its color to "#1abc9c"
        ele[j + 1].style.height = key;
        ele[i].style.background = '#1abc9c';
    }
}

const inSortbtn = document.querySelector(".insertionSort");
inSortbtn.addEventListener('click', async function () {
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await insertion();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});


