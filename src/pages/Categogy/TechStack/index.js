import React from 'react'

import ContentTechStack from './table'
import {NotificationContainer} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

export default function TechStack() {

    return (
        <>
            <ContentTechStack />
            <NotificationContainer/>
        </>
    )
}
