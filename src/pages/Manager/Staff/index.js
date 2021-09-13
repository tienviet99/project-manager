import React from 'react'

import ContentStaff from './table'
import {NotificationContainer} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

export default function Center() {

    return (
        <>
            <ContentStaff />
            <NotificationContainer/>
        </>
    )
}
