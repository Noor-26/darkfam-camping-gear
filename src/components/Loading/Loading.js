import React from 'react';
import './Loading.css'
const Loading = () => {
    return (
        <div className="mt-5 p-4 h-100 loading-container">
            <div className="loading">
             <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
            </div>
        </div>
    );
};

export default Loading;