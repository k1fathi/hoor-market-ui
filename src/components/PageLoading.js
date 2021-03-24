import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

function PageLoading() {
    return (
        <div className="flex w-full h-full justify-center items-center">
            <div>
                <div className="flex justify-center mb-8 ">
                    <CircularProgress className="text-blue"/>
                </div>
                <h2 className="text-blue">Yükleniyor</h2>
            </div>
        </div>
    )
}

export default PageLoading;