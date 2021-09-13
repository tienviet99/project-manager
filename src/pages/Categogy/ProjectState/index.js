import React from 'react'

import ContentProjectState from './table'
import {NotificationContainer} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

export default function ProjectState() {

    return (
        <>
            <ContentProjectState />
            <NotificationContainer/>
        </>
    )
}
