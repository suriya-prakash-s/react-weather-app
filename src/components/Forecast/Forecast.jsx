import React from 'react'
import './Forecast.css'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from "react-accessible-accordion";

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const Forecast = ({ data }) => {

    const dayInWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInWeek).concat(WEEK_DAYS.slice(0, dayInWeek));

    return (
        <>
            <label className='title'>Daily Forecast</label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, index) => (
                    <AccordionItem key={index}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className='daily-item'>
                                    <img alt="weather" className='icon-small' src={`icons/${item.weather[0].icon}.png`} />
                                    <label className='day'>{forecastDays[index]}</label>
                                    <label className='description'>{item.weather[0].description}</label>
                                    <label className="min-max">{Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_min)}°C</label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="daily-details-grid">
                                <div className="daily-details-grid-item">
                                    <label>Feels like</label>
                                    <label>{Math.round(item.main.feels_like)}°C</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Wind</label>
                                    <label>{item.wind.speed} m/s</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Humidity</label>
                                    <label>{item.main.humidity}%</label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>

                ))}
            </Accordion>
        </>
    )
}

export default Forecast