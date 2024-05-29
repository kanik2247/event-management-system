import { useCallback, useState } from "react";
import SearchEventList from "../../components/SearchEventList/SearchEventList";
import FilterBox from "../../components/FilterBox/FilterBox";
import './FilterEvents.css';
import Navigation from "../../components/Navigation/Navigation"
const FilterEvents=()=>{
    const [monthYear,setMonthYear]=useState({
        selectedMonth:null,
        selectedYear:null
    });

    const getMonthYear=useCallback((selectedMonth,selectedYear)=>{
        setMonthYear({selectedYear,selectedMonth})
    },[])

    return(
        <div>
            <Navigation/>
        <div className="find-events-wrapper">
        <FilterBox getMonthYear={getMonthYear}/>
        <SearchEventList monthYear={monthYear}/>
        
        </div>
        </div>
    )
}
export default FilterEvents;