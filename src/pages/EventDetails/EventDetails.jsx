import { useParams } from "react-router-dom";
import { eventList } from "../../utils/EventDatabase";
import Navigation from "../../components/Navigation/Navigation";
import "./EventDetails.css";
import {MdCalendarMonth} from "react-icons/md";
import {IoLocationSharp} from "react-icons/io5"
const EventDetails=()=>{
    const {id}=useParams()
    const numId=Number(id)

  const filteredEvent = eventList.find(
  eventDetail=>(eventDetail.id===numId))

    return(
        <div className="event-details-container">
      <Navigation />
    </div>
    )
}
export default EventDetails;