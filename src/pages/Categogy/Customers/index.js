import React from 'react'

import ContentCustomers from './table'
import {NotificationContainer} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

export default function Customers() {

    return (
        <>
            <ContentCustomers />
            <NotificationContainer/>
        </>
    )
}
