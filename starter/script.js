$(document).ready(function () {
  // Display current day at the top of the calendar
  $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

  // Check current time and color-code each timeblock based on past, present, and future
  var currentHour = moment().hour();
  $(".time-block").each(function() {
  var blockHour = parseInt($(this).attr("id").substring($(this).attr("id").indexOf("-") + 1));
    
    if (blockHour < currentHour) {
      $(this).addClass("past");
    } else if (blockHour === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
    } else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });

  // Save events in local storage
  $(".saveBtn").on("click", function () {
    var time = $(this).parent().attr("id");
    var description = $(this).siblings(".description").val();

    localStorage.setItem(time, description);
  });

  // Load events from local storage
  $(".time-block").each(function () {
    var time = $(this).attr("id");
    var description = localStorage.getItem(time);

    if (description !== null) {
      $(this).children(".description").val(description);
    }
  });
});
