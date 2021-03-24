import React, {useState, useEffect} from 'react';


function DateFormat({ISODate}) {

    function formatDate(string){
        let options = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric'};
        return new Date(string).toLocaleDateString([],options);
    }


    return (
        <div className="">
            <p className="">{formatDate(ISODate)}</p>
        </div>
    );
}

export default DateFormat;