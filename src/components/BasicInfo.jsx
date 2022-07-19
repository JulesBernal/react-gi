import React, { Component } from 'react'

export default class BasicInfo extends Component {
  render() {    
    const people=this.props.data;
    console.log(people);
    return (
        <div>
            <h2>Name: {people.name}</h2>
            <p>Number: {people.number}</p>
            <p>DOB: {people.dob}</p>
            <p>Class: {people.class}</p>
            <p>Aspect: {people.aspect}</p> 
        </div>
    )
  }
}
