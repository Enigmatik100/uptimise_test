import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
    Scheduler,
    Appointments,
    Toolbar,
    MonthView,
    DateNavigator,
    ViewSwitcher,
    DayView,
} from '@devexpress/dx-react-scheduler-material-ui';
import { TodayButton } from '@devexpress/dx-react-scheduler-material-ui';
import { appointments } from '../Data/appointments-data';
import moment from 'moment';



const Calendar = () => {
    const [calendarData, setCalendarData] = useState({
        data: appointments,
        currentViewName: 'Month',
        currentDate: new Date()
    })
    const { data, currentViewName, currentDate } = calendarData;

    const TodayCustomButton = () => {
        return (
            <button onClick={() => setCalendarData({data: appointments, currentViewName: 'Day', currentDate: new Date()})}> Ajourd'hui </button>
        )
    }
 

    return (
        <Paper>
            <Scheduler data={data} locale="fr-FR" >
                <ViewState defaultCurrentDate={new Date()}/>
                <MonthView name='Month'/>
                <DayView name='Day'/>
                <Toolbar />
                <DateNavigator />
                <TodayButton buttonComponent={TodayCustomButton} />
                <ViewSwitcher />
                <Appointments />
            </Scheduler>
        </Paper>
    );
}
export default Calendar;