(function($){
  $(document).ready(function(){
    $(function() {

      $("#edit-field-duration-0-time-wrapper-value-date, #edit-field-duration-0-time-wrapper-end-value-date").on('click', function(event) {
       	event.preventDefault();
      })
      $("#edit-field-duration-0-time-wrapper-value-date").datepicker({
	dateFormat: "yy-mm-dd",
        changeDay: true,
        changeMonth: true,
        changeYear: true,
        beforeShowDay: $.datepicker.noWeekends, 
	altField: "#edit-field-duration-0-time-wrapper-end-value-date",
        altFormat: "yy-mm-dd"
      }); 
      $("#edit-field-duration-0-time-wrapper-end-value-date").datepicker({
        dateFormat: "yy-mm-dd",
        changeDay: true,
        changeMonth: true,
        changeYear: true,
        beforeShowDay: $.datepicker.noWeekends
      });
    });
  });
}(jQuery));


