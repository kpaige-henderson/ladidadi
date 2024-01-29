// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  // current date in the header of the page
  $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'));

  // listener for click events on the save button
  $('.saveBtn').on('click', function () {
    const timeBlockId = $(this).closest('.time-block').attr('id');
    console.log(timeBlockId)

    // saves user input in local storage
    const userInput = $(this).siblings('.description').val();
    localStorage.setItem(timeBlockId, userInput);
  });

  //past, present, future class to each time block
  $('.time-block').each(function () {
    const currentHour = dayjs().hour();
    const blockHour = parseInt($(this).attr('id').split('-')[1]);
    console.log(blockHour, currentHour)
    if (blockHour < currentHour) {
      $(this).children('textarea').addClass('past');
    } else if (blockHour === currentHour) {
      $(this).children('textarea').addClass('present');
    } else {
      $(this).children('textarea').addClass('future');
    }
    console.log(blockHour)
    var timeBlock = $(this).attr('id');
    const savedEvents = localStorage.getItem(timeBlock);
    if (savedEvents) {
      $(this).children('textarea').val(savedEvents);
    }
  });
});

