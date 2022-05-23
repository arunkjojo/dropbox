import React from 'react'
import Button from 'react-bootstrap/Button'
import { ArrowDown } from 'react-bootstrap-icons';
import siteImg from '../site.png';
import {BodyDiv, SiteDescription, Description, SiteImage} from './../style/';
const Body = () => {
  return (
    <BodyDiv>
      <SiteDescription>
        <Description>
          Organize all your Team's content, tune out distractions, and get everyone coordinate with the world's first smart workspace.
        </Description>
        <div className="d-grid gap-2">
          <Button variant="primary" size="lg">
          Try Free for 30 Days
          </Button>
          <Button variant="default" size="lg" className="default">
          Purchase Now
          </Button>
        </div>
        <p>or <span className='link'>Get Dropbox Basic</span></p>
        <ArrowDown color="#5b034c" size={50} />
      </SiteDescription>
      <SiteImage>
        <img src={siteImg} alt="site"/>
      </SiteImage>
    </BodyDiv>
  )
}

export default Body