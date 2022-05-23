import styledComponent from "styled-components";

export const AppDiv = styledComponent.div`

`
export const HeaderDiv = styledComponent.div`
    display:flex;
    .left{
        float: left!important;
    }
    .default{
        border: solid;
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
        border: solid;
    }
`
export const Description = styledComponent.p`
    font-size: 20px;
`