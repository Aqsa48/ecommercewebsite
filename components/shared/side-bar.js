import React from 'react';
import Head from './Head';

export default class extends React.Component{
    render(){
        return(
            <main>
                <Head />
                <div style={styles.sideBar} className='col-md-2 side-bar'>
                    <div className='sidebar-container'>
                        {/* ITEMS OF SIDEBAR */}
                        <a style={styles.sidebarAnchor}>
                            <div style={styles.item} className='item'>
                                <h4><i className='glyphicon glyphicon-home'></i> Home</h4>
                            </div>
                        </a>
                        <a style={styles.sidebarAnchor}>
                            <div style={styles.item} className='item'>
                                <h4><i className='glyphicon glyphicon-home'></i> Home</h4>
                            </div>
                        </a>
                        <a style={styles.sidebarAnchor}>
                            <div style={styles.item} className='item'>
                                <h4><i className='glyphicon glyphicon-home'></i> Home</h4>
                            </div>
                        </a>
                        <a style={styles.sidebarAnchor}>
                            <div style={styles.item} className='item'>
                                <h4><i className='glyphicon glyphicon-home'></i> Home</h4>
                            </div>
                        </a>
                    </div>
                </div>
            </main>
        )
    }
}

var styles = {
    sideBar:{
        backgroundColor:"#e74c3c",
        minHeight:"650px",
        color:"#fff",
        boxShadow: "0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)"
    },
    item:{
        paddingBottom:"10px",
        paddingLeft:"5px",
        borderBottom:"1px solid rgba(0,0,0,0.1)"
    },
    sidebarAnchor:{
        cursor: "pointer",
        color: "#fff",
        textDecoration: "none"
    }
}