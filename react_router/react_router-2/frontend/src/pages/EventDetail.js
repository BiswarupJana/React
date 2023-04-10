import React from 'react';
import EventItem from '../components/EventItem';
import { json,useRouteLoaderData } from 'react-router-dom';

const EventDetailPage = () => {
  const data = useRouteLoaderData('event-detail');
  const event =data.event;
  
  return (
    <>
    <EventItem event={event}/>
    </>
    
  )
}

export default EventDetailPage;

export async function loader({request, params}){
  const id = params.eventId;
  const response = await fetch('http://localhost:8080/events/'+id);
  console.log(response);
  if(!response.ok){
    throw json({message: 'Could not fetch details for selected event.'},{
      status: 500
    })
  } else {
    return response;
  }
}