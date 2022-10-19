// Write your code here

import './index.css'

const EventItem = props => {
  const {eventDetails, isActive, setActiveEventId} = props
  const {imageUrl, name, location, id} = eventDetails

  const eventImageClassName = isActive ? 'event-image active' : 'event-image'

  const onClickEvent = () => {
    setActiveEventId(id)
  }

  return (
    <li className="event-item">
      <button type="button" onClick={onClickEvent} className="event-button">
        <img src={imageUrl} alt="event" className={eventImageClassName} />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
