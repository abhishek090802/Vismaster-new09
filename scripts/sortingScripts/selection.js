// Selection sort is a simple and efficient sorting algorithm that works by repeatedly selecting the smallest (or largest) element from the unsorted portion of the list and moving it to the sorted portion of the list. 
async function selection() {
    const ele = document.querySelectorAll(".bar");
    for (let i = 0; i < ele.length; i++) {
        let min_index = i;
        // considering the min_index as the min element from the unsorted array and move it to its correct position in the sorted array 
        ele[i].style.background = 'red';
        for (let j = i + 1; j < ele.length; j++) {
            ele[j].style.background = 'red';
            await waitforme(delay);
            if (parseInt(ele[j].style.height) < parseInt(ele[min_index].style.height)) {
                // if the element at jth index less than theqmin_index element then update the min_index 
                if (min_index !== i) {
                    ele[min_index].style.background = 'cyan';
                    // the above statement is benefically such that it appears to diiferent in the array 
                }
                min_index = j;
            }
            else {
                ele[j].style.background = 'cyan';
            }
            // if else means the elements are at correct position 
        }
        await waitforme(delay);
        swap(ele[min_index], ele[i]);
        // as we have find the minimum element to the right of i then simply swap the min_index element with ith index 
        ele[min_index].style.background = 'cyan';
        ele[i].style.background = 'red';
    }
}

const selectionSortbtn = document.querySelector(".selectionSort");
selectionSortbtn.addEventListener('click', async function () {
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await selection();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});