import React from 'react'
import {Card,CardBody,CardTitle,CardText} from 'reactstrap'
import './userCard.css'

function UserCard(props) {
  return (
    <Card>
    <CardBody>
      <CardTitle tag="h5">
        {props.name}
      </CardTitle>
      <CardText>
        Username: {props.username}
        Email: {props.email}
      </CardText>
    </CardBody>
  </Card>
  )
}

export default UserCard