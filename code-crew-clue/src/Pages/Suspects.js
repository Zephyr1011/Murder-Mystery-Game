import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

const suspects = [
    {
      name: 'Vo',
      photo: '/assets/Vo profile.jpg',
      motive: 'Made a 50 score on his Module 3 exam',
      weapon: 'Gun'
    },
    {
      name: 'Chelsea',
      photo: '/assets/Chelsea profile.jpg',
      motive: 'Chelsea is always so bubbly and happy I wonder if today was the day she snapped ',
      weapon: 'Bare Hands'
    },
    {
      name: 'Jay',
      photo: '/assets/jay profile.jpg',
      motive: 'Jay was put on probation for being the worst TA of all the TAs',
      weapon: 'Knife'
    },
    {
      name: 'Lakeisha',
      photo: '/assets/Lakeisha profile.jpg',
      motive: 'No one knows but Lakeisha is a secret assasin outside of school hours',
      weapon: 'Rope'
    },
    {
      name: 'Quincy',
      photo: '/assets/quincy profile.jpg',
      motive: 'Quincy spends so much of his time helping others he rarely has time to complete his own work.  He recieved a 0/100 on his latest homework assignment.',
      weapon: 'Computer'
    },
    {
      name: 'Shakyra',
      photo: '/assets/shakyra profile.jpg',
      motive: 'JR snatched Shakyras wig off at the Excite Awards in front of everyone including the CEO of Code Crew',
      weapon: 'Poison'
    }
  ];

function Suspect() {
  return (

    <div className="container">
      <h1>Suspects</h1>
      <div className="row">
        {suspects.map((suspect, index) => (
          <div className="col-md-4" key={index}>
            <div className="card mb-4">
              <img src={suspect.photo} className="card-img-top" alt={suspect.name} />
              <div className="card-body">
                <h5 className="card-title">{suspect.name}</h5>
                <p className="card-text"><strong>Motive:</strong> {suspect.motive}</p>
                <p className="card-text"><strong>Weapon of Choice:</strong> {suspect.weapon}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link to="/Game">
      <Button variant="warning" size='lg' style={{fontSize: "2rem"}}>
          Play!
        </Button>{' '}
      </Link>
    </div>
  );
}

    

export default Suspect;
    
    
    
