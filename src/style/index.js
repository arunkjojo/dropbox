import styledComponent from "styled-components";

export const AppDiv = styledComponent.div`
    background-color: rgba(179, 207, 229, 255)
`
export const HeaderDiv = styledComponent.div`
    
    .default{
        color: #000000;
        background-color: #ffffff;
        :hover{
            background:#f4f4f4ed
        }
    }
    .navToggle{
        border-color: rgba(0,0,0,0)!important;
    }
`
export const BodyDiv = styledComponent.div`
    padding:20px;
`
export const SiteDescription = styledComponent.div`
    font-family: 'Lato';
    font-size:20px;
    padding: 25px;
    ArrowDown{
        cursor:pointer;
        margin-top: 30px;
    }
    .default{
        background:#ffffff;
        :hover{
            background:#f4f4f4ed
        }
    }
    .link{
        cursor:pointer;
        text-decoration: underline;
    }
`
export const Heading = styledComponent.h1`
    color:#5b034c;
    font-family: 'Lato';
    font-size:5vw;
    font-weight: 900;
    text-align: center;
`