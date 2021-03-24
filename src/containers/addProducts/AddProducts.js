import React, {useEffect, useState} from 'react';
import {withRouter} from "react-router";
import withReducer from "../../store/withReducer";
import "./AddProducts.css";
import addProducts from "./store/reducers/addProducts.reducer";
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import excel from "../../sources/admin/excellicon.png";
function AddProducts(props) {


    return (
        <div className="flex w-full h-full add-products-container">
            <div className="add-products-main-title">
                GameOn Market | <span className="font-bold">İş Ortağı</span>
            </div>
            <div className="add-products-sub-menus">
                <div className="add-products-single-submenu">
                    <div className="submenu-icon">
                        <AddBoxOutlinedIcon style={{ fontSize: 120, color:"#07A0DA", cursor: "pointer" }} onClick={()=>props.history.push("/tek-urun-ekleme/1")}/>
                    </div>
                    <div className="submenu-title">
                        Tekil Ürün Ekle
                    </div>
                </div>
                <div className="add-products-single-submenu">
                    <div className="submenu-icon">
                        <img src={excel} alt="excel" style={{height: "120px", cursor: "pointer"}}/>
                    </div>
                    <div className="submenu-title">
                         Toplu Ürün Ekle <span className="font-normal">(Excel)</span>
                     </div>
                </div>
                <div className="add-products-single-submenu">
                    <div className="submenu-icon">
                        <EditOutlinedIcon style={{ fontSize: 120, color:"#07A0DA",cursor: "pointer"}}/>
                    </div>
                    <div className="submenu-title">
                        Ürün/Fiyat Güncelle
                    </div>
                </div>
                <div className="add-products-single-submenu">
                    <div className="submenu-icon">
                        <DeleteOutlineIcon style={{ fontSize: 120, color:"#07A0DA", cursor: "pointer" }}/>
                    </div>
                    <div className="submenu-title">
                        Ürün Silme
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withRouter(withReducer("addProducts", addProducts)(AddProducts));
