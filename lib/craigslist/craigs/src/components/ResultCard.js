import React, { useEffect, useState } from 'react'
import { Card, CardImg, CardBody, CardGroup, CardTitle, CardSubtitle } from 'reactstrap'

const ResultCard = () => {
  const [ result, setResult ] = useState([])
  const url='https://tranquil-oasis-57351.herokuapp.com/'

  useEffect(() => {
    fetch(url)
    .then((res) => res.json())
    .then((result) => setResult(result))
    
  }, [])
    return (
      <div>
  {result.map(couch => {
      return (
  
      <Card>
      <CardImg
        alt={ couch.title }
        src={ couch.image }
        top width="100%"/>
      <CardBody>
        <CardTitle tag="h5">{ couch.title }</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">{ couch.cost }</CardSubtitle>
      </CardBody>
    </Card>
  
    )})
        
      }
      </div>)
}

export default ResultCard