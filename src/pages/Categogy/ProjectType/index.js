import React from 'react'

import ContentProjectManager from './table'
import {NotificationContainer} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

export default function ProjectType() {

    return (
        <>
            <ContentProjectManager />
            <NotificationContainer/>
        </>
    )
}
