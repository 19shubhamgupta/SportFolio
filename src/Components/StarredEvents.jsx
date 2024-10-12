import React from 'react'
import EventList from './EventList'

function StarredEvents() {
  return (
    <div>
      <h2 style={{ marginTop: "20px" }}>Starred Events</h2>
      <EventList />
    </div>
  )
}

export default StarredEvents
