import React from 'react'

import ContentCenter from './table'
import {NotificationContainer} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

export default function Center() {

    return (
        <>
            <ContentCenter />
            <NotificationContainer/>
        </>
    )
}
