import React from 'react';
import Card from 'react-bootstrap/Card';
import './offre.css';
const Offre = (props) => {
    var offre = props.offre;
    return <Card style={{width:'33rem'}} >
                <Card.Title className="card-title "><a className={props.color} href={"https://www.anpe-mali.org/appels-doffres/"+offre.link} target="blank">{offre.title}</a></Card.Title>
                <Card.Subtitle className="card-subtitle by text-muted">Par ANPE</Card.Subtitle>
                <Card.Body>
                    {offre.content}
                </Card.Body>
                <div className={"card-bottom-band "+props.bcolor}>
                    <div className="date-container text-left">
                    <span className="date">date: </span><span className="date-value">{offre.date}</span>
                    </div>

                    <div className="reads-container text-right">
                        <span className="reads">{offre.read}</span>
                    </div>
                </div>
    </Card>

    
}

export default Offre;