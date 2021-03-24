import React, {useState} from 'react';
import defAvatar from  "../sources/avatar/defAvatar.png";
import "./AvatarInfo.css";
import avatarGp from "../sources/avatar/avatarGp.png";


export default function AvatarInfo() {

    return (
        <div className="flex">
            <div>
                <img className="h-14" src={defAvatar} alt="avatar"/>
            </div>
            <div className="flex flex-col justify-center ml-4">
                <div>
                    Aras Şüküroğlu
                </div>
                <div className="flex justify-end">
                    <div>1000</div>
                    <div className="gp-circle">GP</div>
                </div>
            </div>
        </div>
    );
}