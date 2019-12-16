$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var value = $(this).siblings(".description").val();
        var time = $(this).siblings(".hour").text();
        console.log(this);
        localStorage.setItem(time, value);
    });
    $('#currentDay').text(moment());
});
