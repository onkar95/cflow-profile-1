import React from 'react';

import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

import VpnKeyIcon from '@material-ui/icons/VpnKey';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';

const VendorAproach=()=> {
    


  return (
      <div className="container">
    <Timeline align="right">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot><VpnKeyIcon/></TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Fill your details and Service</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot><LaptopMacIcon/></TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Offer your best price to user</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot><ConfirmationNumberIcon/></TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>User has accept your proposal</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot><AirportShuttleIcon/> </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>After recipt of payment deliver the goods </TimelineContent>
      </TimelineItem>
    </Timeline>
    </div>
  );
}

export default VendorAproach; 