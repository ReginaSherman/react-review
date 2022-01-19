import React from 'react'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'


const Breadcrumbs = () => {
    return (
        <div>
  <Breadcrumb listTag="div">
    <BreadcrumbItem href="#" tag="a">Washington, D.C.</BreadcrumbItem>
    <BreadcrumbItem href="#" tag="a">all Washington, D.C.</BreadcrumbItem>
    <BreadcrumbItem href="#" tag="a">For Sale</BreadcrumbItem>
    <BreadcrumbItem active tag="span">Furniture</BreadcrumbItem>
  </Breadcrumb>
</div>
    )
}

export default Breadcrumbs