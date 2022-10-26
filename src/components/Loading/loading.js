import { useEffect, useRef, useState } from 'react';
import './loading.css';
import loader from './334-loader-5.gif';

const Loading = (prop)=>{
    if(prop.load){
        return(
            <div className="load">
                <img src={loader}/>
            </div>
        );
    }
    return(
        <></>
    );
}

export default Loading;