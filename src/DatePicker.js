import React, { Component } from 'react';
import datepicker from 'js-datepicker';

export default class DatePicker extends Component {

    componentDidMount() {
        datepicker('#date-picker', {
            onSelect: (selectedDate) => {
                console.log(typeof selectedDate.dateSelected);
            },
            dateSelected: new Date() //select the current date at first
        });

        document.getElementsByClassName('qs-active')[0].style.background = this.props.localPlayer.color;
    }
    
    render() {
        return (
                <button
                    id="date-picker">
                    Yolo - Click Me
                </button>     
        );
    }
}