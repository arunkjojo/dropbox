import React from 'react'
import { ArrowDown } from 'react-bootstrap-icons';
import siteImg from '../site.png';
import {SiteDescription,} from './../style/';
import { Container, Row } from 'react-bootstrap';
const Body = () => {
  return (
    <Container>
      <Row>
        <div className='col-sm-12 col-md-6'>
          <SiteDescription>
            <p>
              Organize all your Team's content, tune out distractions, and get everyone coordinate with the world's first smart workspace.
            </p>
            <div className="container row d-grid gap-3">
              <button className='col-xs-12 col-sm-9 col-md-12 col-xl-9 btn btn-primary btn-lg' >
              Try Free for 30 Days
              </button>
              <button className='col-xs-12 col-sm-9 col-md-12 col-xl-9 default btn btn-default btn-lg'>
              Purchase Now
              </button>
            </div>
            <p>or <span className='link'>Get Dropbox Basic</span></p>
            <ArrowDown className='d-none d-md-block' color="#5b034c" size={50} />
          </SiteDescription>
        </div>
        <div className='col-sm-12 col-md-6'>
          <img src={siteImg} className="img-fluid" alt="site"/>
        </div>
      </Row>
    </Container>
  )
}

export default Body