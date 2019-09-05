

$(document).ready(function() {
		

		$('#mycalendar').fullCalendar({
			header: {
				left: 'prev,next today',
				center: 'title',
			right:"month,agendaWeek,agendaDay,listMonth"
			},
			height:650,
               // defaultDate: '2019-07-05',
			
			defaultView: 'month',
			editable: true,
                selectable:!0,
                selectHelper:!0,
			weekNumbers: true,
      navLinks: true, // can click day/week names to navigate views
      eventLimit: true, // allow "more" link when too many events

                 // for single event source use line below
                 //events: 'data/events.json'
                 
// for multiple event sources use below 
			eventSources: [

    // your event source
    {
      url: 'data/ds_events.json', // use the `url` property
      //color: 'yellow',    // an option!
      //textColor: 'blue'  // an option!
    }


    // any other sources...

  ],
  eventRender: function(event, element, view) {
            element.qtip({
                content: '<b>' + event.title + '</b>' + '<br />' + event.additional_info + '<br />' + 'Owner: ' + event.owner + '<br />' + event.url,
                style: {
                     classes: 'qtip-white qtip-shadow'
                }, 
hide: {
        fixed: true
    },
                position: {
				at: 'top right',
target: 'mouse',
				my: 'top right',
				adjust: { 
mouse: false,
resize: true
}
                    
                }
            });
        }

});
	
	});
  
  
  
