import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // needs additional webpack config!
// import { Calendar } from '@fullcalendar/core';
import formatDate from '../helpers/formatDate';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';

function Calendar(calendarEl) {
  return (
    <div id="cal-container">
      <FullCalendar
        plugins={[
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin,
          bootstrap5Plugin,
        ]}
        initialView={'dayGridMonth'}
        themeSystem={'bootstrap5'}
        headerToolbar={{
          start: 'title', // will normally be on the left. if RTL, will be on the right
          center: '',
          end: 'prev,next',
        }}
        footerToolbar={{
          start: 'dayGridMonth,timeGridWeek,timeGridDay',
          center: '',
          end: 'today',
        }}
        height={'100%'}
        width={'100%'}
        selectable={true}
        dateClick={function (info) {
          alert('clicked ' + formatDate(info.dateStr));
          console.log(info);
        }}
        // select={function (info) {
        //     $(this)
        //   console.log(info);
        //   alert(
        //     'selected ' +
        //       formatDate(info.startStr) +
        //       ' to ' +
        //       formatDate(info.endStr)
        //   );
        // }}
      />
    </div>
  );
}

export default Calendar;
