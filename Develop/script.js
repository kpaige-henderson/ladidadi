// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  // current date in the header of the page
  $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'));

  // listener for click events on the save button
  $('.save-btn').on('click', function () {
      const timeBlockId = $(this).closest('.time-block').attr('id');

  // saves user input in local storage
  const userInput = $(this).siblings('.description').val();   
  localStorage.setItem(timeBlockedId, userInput);
});

  //past, present, future class to each time block
  $(function (){
  const currentHour = dayjs().hour();

  $('.time_block').each(function () {
    const blockHour = parselInt($(this).attr('id').split('-')[1]);
    if (blockHour < currentHour) {
      $(this).removeClass('present future').addClass('past');
  } else if (blockHour === currentHour) {
    $(this).removeClass('past future').addClass('present');
  } else {
    $(this).removeClass('past present').addClass('future');
  }
  });
  });

  });
  
  // Load saved events
  const savedEvents = localStorage.getItem('event-$event-${hour}');
    if (savedEvent) {
      eventInput.val(savedEvent);
    } 
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
