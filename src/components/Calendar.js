import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
    Scheduler,
    WeekView,
    Appointments,
    Toolbar,
    ViewSwitcher,
    MonthView,
    DayView,
    DateNavigator,
    TodayButton
} from '@devexpress/dx-react-scheduler-material-ui';

import { appointments } from '../Data/appointments-data';
import moment from 'moment';

const formatDayScaleDate = (date, options) => {
    const momentDate = moment(date);
    const { weekday } = options;
    return momentDate.format(weekday ? 'dddd' : 'D');
};

const Calendar = () => {
    const [state, setState] = useState({
        data: appointments,
        currentViewName: 'work-week',
    })

    const currentViewNameChange = (currentViewName) => {
        setState({ currentViewName });
    };

    const { data, currentViewName } = state;

    return (
        <Paper>
            <Scheduler
                data={data}
            >
                <ViewState
                    defaultCurrentDate={new Date()}
                />
                <MonthView />
                <Toolbar />
                <DateNavigator />
                <TodayButton />
                <Appointments />
            </Scheduler>
        </Paper>
    );
}
export default Calendar;