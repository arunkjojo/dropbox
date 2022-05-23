import styledComponent from "styled-components";

export const AppDiv = styledComponent.div`
    background-color: rgb(207 214 231);
`
export const HeaderDiv = styledComponent.div`
    .left{
        float: left!important;
    }
    .default{
        background:#ffffff;
        :hover{
            background:#f4f4f4ed
        }
    }
    .rightItem{
        padding-left: 65%;
    }
    .navToggle{
        border-color: rgba(0,0,0,0)!important;
    }
`
export const BodyDiv = styledComponent.div`
    padding:20px;
    display:flex;
    Button{
        width: 50%;
    }
`
export const SiteImage = styledComponent.div`
    flex:1
`

export const SiteDescription = styledComponent.div`
    flex:1;
    padding: 25px;
    ArrowDown{
        margin-top: 30px;
    }
    .default{
        background:#ffffff;
        :hover{
            background:#f4f4f4ed
        }
    }
    .link{
        text-decoration: underline;
    }
    p{
        padding-bottom:10px;
        padding-top:10px;
    }
`
export const Description = styledComponent.p`
    font-size: 20px;
`