$(document).ready(function () {
    $(`button`).on("click", removeElementWithAnimation);
});

function removeElementWithAnimation(event){
    $(`#${event.target.id}`).closest("tr").hide(1000);
}