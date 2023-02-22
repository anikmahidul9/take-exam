import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import './Quiz.css'

const Quiz = ({sub}) => {
        const {name,logo,total} = sub;
    return (
        <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={logo} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Take Exam</Button>
      </Card.Body>
    </Card>
        </div>
    );
};

export default Quiz;
