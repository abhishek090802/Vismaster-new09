// bubble sort is an sorting algorithm based on the adjacent swappig of the elements if they are in the wrong order repeatedly 

async function bubble() {
    const ele = document.querySelectorAll(".bar");
    for (let i = 0; i < ele.length - 1; i++) {
        for (let j = 0; j < ele.length - i - 1; j++) {
            ele[j].style.background = 'blue';
            ele[j + 1].style.background = 'blue';
            // in the iteration in the array elements the elements changes to blue as the swapping at each iteration from left to right 
            if (parseInt(ele[j].style.height) > parseInt(ele[j + 1].style.height)) {
                await waitforme(delay);
                swap(ele[j], ele[j + 1]);
            }
            ele[j].style.background = 'cyan';
            ele[j + 1].style.background = 'cyan';
            // the elements in the array represented as the cyan color initially 
        }
        ele[ele.length - 1 - i].style.background = '#1abc9c';
        // as the first iteration finishes the last or the highest element will reaches into its exact position at the last element and after each iteration from the last element to first will gets their exact position 
    }
    ele[0].style.background = '#1abc9c';
    // after this element reaches into the current position then it will changes into darker cyan color 
}

const bubSortbtn = document.querySelector(".bubbleSort");
bubSortbtn.addEventListener('click', async function () {
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await bubble();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});

// in the above function as the sorting algorithm executed then sorting button,size slider,and new array button is getting freezed 
