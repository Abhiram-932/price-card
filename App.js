import React from 'react';
import Card from './Card';

function App(){

let jsonCard=[
    {
        title:'Free',
        price:'0',
        facilities:[{muted:false,name:'Single User',},
        {muted:false, name:'5GB storage '},
        {muted:false, name:'Unlimited Public Projects'},
        {muted:false, name:'Community Access'},
        {muted:true, name:'Unlimited Private Projects'},
        {muted:true, name:'Dedicated Phone Support'},
        {muted:true, name:'Free Subdomain'},
        {muted:true, name:'Monthly Status Reports'}]
    },
    {
        title:'Plus',
        price:'9',
        facilities:[{muted:false, name:'5 Users'},
        {muted:false, name:'50GB storage '},
        {muted:false, name:'Unlimited Public Projects'},
        {muted:false, name:'Community Access'},
        {muted:false, name:'Unlimited Private Projects'},
        {muted:false, name:'Dedicated Phone Support'},
        {muted:false, name:'Free Subdomain'},
        {muted:true, name:'Monthly Status Reports'}]
    },
    {
        title:'Pro',
        price:'49',
        facilities:[{muted:false, name:'Unlimited Users'},
        {muted:false, name:'150GB storage '},
        {muted:false, name:'Unlimited Public Projects'},
        {muted:false, name:'Community Access'},
        {muted:false, name:'Unlimited Private Projects'},
        {muted:false, name:'Dedicated Phone Support'},
        {muted:false, name:' Unlimited Free Subdomain'},
        {muted:false, name:'Monthly Status Reports'}]
    }
];

return(
    <div>
        <header>
            <Card jsonCard={jsonCard}/>
        </header>
    </div>
)
}
export default App;