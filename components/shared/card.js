import React from 'react';
import Head from './Head';

export default class extends React.Component{
    render(){
        return(
            <div className='thumbnail col-md-4'>
                <img src={'static/images/'+this.props.image+'.jpg'} />
                <div className="caption">
                    <div>
                        <h4><span className='label label-primary'>{this.props.label}</span></h4>
                    </div>
                    <div>
                        <h4>Price: <label>${this.props.price}</label></h4>
                    </div>
                    <div>
                        <p>{this.props.desc}</p>
                    </div>
                </div>
            </div>
        )
    }
}
