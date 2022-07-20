import './App.css';
import React, { Component } from 'react';
import BasicInfo from './components/BasicInfo'
export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      person:
      [
        {
          name: "Luce",
          number: "2",
          dob: "01/01/1998",
          class: "knight",
          aspect: "hope"
        }
        , 
        {
          name: "Aza",
          number: "4",
          dob: "00/00/0000",
          class: "witch",
          aspect: "blood"
        },
        {
          name: "Mags",
          number: "2",
          dob: "04/08/1998",
          class: "mage",
          aspect: "space"
        },
        {
          name: "J",
          number: "1",
          dob: "02/21/1998",
          class: "heir",
          aspect: "mind"
        }, 
        {
          name: "June",
          number: "5",
          dob: "04/13/1996",
          class: "Page",
          aspect: "Breath"
        },
        {
          name: "Dave",
          number: "6",
          dob: "12/03/1995",
          class: "Knight",
          aspect: "Time"
        },
        {
          name: "Rose",
          number: "7",
          dob: "12/04/1995",
          class: "Seer",
          aspect: "Light"
        }, {
          name: "Jade",
          number: "8",
          dob: "12/01/1995",
          class: "Witch",
          aspect: "Space"
        }, 
        {
          name: "Roxy",
          number: "9",
          dob: "12/04/2409",
          class: "Rogue",
          aspect: "Void"
        },
        {
          name: "Jake",
          number: "10",
          dob: "12/01/1995",
          class: "Page",
          aspect: "Hope"
        },
        {
          name: "Jane",
          number: "11",
          dob: "04/13/1996",
          class: "Sylph",
          aspect: "Life"
        }, {
          name: "Dirk",
          number: "12",
          dob: "12/03/2409",
          class: "Prince",
          aspect: "Heart"
        }, 
        {
          name: "Karkat",
          number: "13",
          dob: "01/01/2000",
          class: "Knight",
          aspect: "Blood"
        },
        {
          name: "Terezi",
          number: "14",
          dob: "01/01/2000",
          class: "Seer",
          aspect: "Light"
        },
        {
          name: "Vriska",
          number: "15",
          dob: "01/01/2000",
          class: "Thief",
          aspect: "Light"
        },
        {
          name: "Aradia",
          number: "16",
          dob: "01/01/2000",
          class: "",
          aspect: "Time"
        },
        {
          name: "Sollux",
          number: "17",
          dob: "01/01/2000",
          class: "Mage",
          aspect: "Doom"
        },
        {
          name: "Gamzee",
          number: "18",
          dob: "01/01/2000",
          class: "Bard",
          aspect: "Rage"
        },
        {
          name: "Tavros",
          number: "19",
          dob: "01/01/2000",
          class: "page",
          aspect: "breath"
        },
        {
          name: "equius",
          number: "20",
          dob: "01/01/2000",
          class: "heir",
          aspect: "void"
        },
        {
          name: "Feferi",
          number: "21",
          dob: "01/01/2000",
          class: "Witch",
          aspect: "Life"
        },
        {
          name: "Eridan",
          number: "22",
          dob: "01/01/2000",
          class: "Prince",
          aspect: "Hope"
        },
        {
          name: "Kanaya",
          number: "23",
          dob: "01/01/2000",
          class: "Sylph",
          aspect: "Space"
        },
        {
          name: "Nepeta",
          number: "24",
          dob: "01/01/2000",
          class: "Rogue",
          aspect: "Heart"
        }
      ] 
    }
  }
  render() {
    const {person}=this.state;
    return(
    <div className="App">
      <p>test</p>

      {/* Below is the Medium Version */}
      {/* <BasicInfo data={person[0]}/> */}
      
      {/* Hard version */}
      <div>
        {person.map((people) =>
          {
            return(
              <BasicInfo data = {people} />
            )
          }
          )
        }
      </div>

        {/* <h2>Name: Luce</h2>
        <p>Number: 2</p>
        <p>DOB: 05/20/1998</p>
        <p>Class: Knight</p>
        <p>Aspect: Hope</p> */}
      </div>
    )
  }
}