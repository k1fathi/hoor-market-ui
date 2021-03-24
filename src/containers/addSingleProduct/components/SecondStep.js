import React, {useEffect, useState} from 'react';
import "./Steps.css";

function SecondStep({product, setProduct, nextStep, step}) {

    const sizes = [
        {
            id: 0,
            name: "XS"
        },
        {
            id: 1,
            name: "S"
        },
        {
            id: 2,
            name: "M"
        },
        {
            id: 3,
            name: "L"
        },
        {
            id: 4,
            name: "XL"
        }
    ];


    return (
        <div>
            <div className="add-single-product-title">Satış Bilgilerini Girin</div>

            <div className="secondStepContent">
                <div className="flex justify-between">
                    1.Beden
                    <div className="flex">
                        <select
                            className="block mr-4 w-36 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-sm
                        text-base focus:outline-none focus:bg-white focus:border-gray-500 add-single-product-input"
                            id="grid-state" onChange={(event)=>{setProduct({...product, "size": event.target.value})}}
                        >
                            {
                                sizes.map(category => {
                                    return (
                                        <option
                                            selected={product && product.size ? category.id === product.size : false}
                                            value={category.id}
                                        >
                                            {category.name}
                                        </option>
                                    )
                                })
                            }
                        </select>
                        <button
                            className="bg-blue-500 text-white text-base self-center h-12 w-16 hover:bg-blue-300 font-semibold
                                hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                            onClick={()=> {}}
                        >
                            Sil
                        </button>
                    </div>
                </div>

                <div className="flex">
                    <div className="w-1/6 pr-4">
                        <div className="second-step-small-title">
                            Barkod <span className="text-red">*</span>
                        </div>
                        <input
                            className=" block w-full text-gray-700 border border-gray-200 rounded-sm px-4
                                text-base focus:outline-none focus:bg-white focus:border-gray-500 add-single-product-input"
                            id="grid-last-name" type="text" placeholder=""
                            value={product && product.barcode ? product.barcode : ""}
                            onChange={(event) => {setProduct({...product, "barcode": event.target.value})}}/>
                    </div>
                    <div className="w-1/6 px-2">
                        <div className="second-step-small-title">
                            Satıcı Stok Kodu <span className="text-red">*</span>
                        </div>
                        <input
                            className=" block w-full text-gray-700 border border-gray-200 rounded-sm px-4
                                text-base focus:outline-none focus:bg-white focus:border-gray-500 add-single-product-input"
                            id="grid-last-name" type="text" placeholder=""
                            value={product && product.stockCode ? product.stockCode : ""}
                            onChange={(event) => {setProduct({...product, "stockCode": event.target.value})}}/>
                    </div>
                    <div className="w-1/6 px-2">
                        <div className="second-step-small-title">
                            TL Satıcı Fiyatı <span className="text-red">*</span>
                        </div>
                        <input
                            className=" block w-full text-gray-700 border border-gray-200 rounded-sm px-4
                                text-base focus:outline-none focus:bg-white focus:border-gray-500 add-single-product-input"
                            id="grid-last-name" type="text" placeholder=""
                            value={product && product.TLPrice ? product.TLPrice : ""}
                            onChange={(event) => {setProduct({...product, "TLPrice": event.target.value})}}/>
                    </div>
                    <div className="w-1/6 px-2" >
                        <div className="second-step-small-title">
                            KDV Tutarı <span className="text-red">*</span>
                        </div>
                        <input
                            className=" block w-full text-gray-700 border border-gray-200 rounded-sm px-4
                                text-base focus:outline-none focus:bg-white focus:border-gray-500 add-single-product-input"
                            id="grid-last-name" type="text" placeholder=""
                            value={product && product.kdv ? product.kdv : ""}
                            onChange={(event) => {setProduct({...product, "kdv": event.target.value})}}/>
                    </div>
                    <div className="w-1/6 px-2">
                        <div className="second-step-small-title">
                            GP Karşılığı <span className="text-red">*</span>
                        </div>
                        <input
                            className=" block w-full text-gray-700 border border-gray-200 rounded-sm px-4
                                text-base focus:outline-none focus:bg-white focus:border-gray-500 add-single-product-input"
                            id="grid-last-name" type="text" placeholder=""
                            value={product && product.GPPrice ? product.GPPrice : ""}
                            onChange={(event) => {setProduct({...product, "GPPrice": event.target.value})}}/>
                    </div>
                    <div className="w-1/6 pl-4">
                        <div className="second-step-small-title">
                            Stok Adedi <span className="text-red">*</span>
                        </div>
                        <input
                            className=" block w-full text-gray-700 border border-gray-200 rounded-sm px-4
                                text-base focus:outline-none focus:bg-white focus:border-gray-500 add-single-product-input"
                            id="grid-last-name" type="text" placeholder=""
                            value={product && product.stock ? product.stock : ""}
                            onChange={(event) => {setProduct({...product, "stock": event.target.value})}}/>
                    </div>
                </div>


                <div className="add-single-product-second-step-description">
                    <div>
                        <span className="font-bold">Barkod:</span> Sarente GameOn Market’e yeni bir ürün eklemek için ürünlerinize ait barkodları girmeniz ya da ürününüze ait barkod
                        yoksa kendiniz oluşturmanız gerekmektedir. <span className="font-bold text-blue">Örnek Barkod</span>
                    </div>
                    <div>
                        <span className="font-bold">Satıcı Stok Kodu:</span> Ürünleri kendi stoklarınızda tanımak için kullanabileceğiniz koddur. Zorlunlu alan değildir.
                    </div>
                    <div>
                        <span className="font-bold">GP Karşılığı:</span> Sistem tarafından otomatik oluşturulmaktadır. Herhangi bir işlem yapmanıza gerek yoktur.
                    </div>
                </div>


            </div>


            <div className="flex justify-center">
                <button
                    className="bg-green-500 mt-8 text-white text-xl self-center h-16 w-full hover:bg-green-300 font-semibold flex justify-center items-center
                            hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    onClick={()=> {}}
                >
                    YENİ BEDEN EKLE
                </button>
            </div>

            <div className="flex justify-center">
                <button
                    className="bg-blue-500 mt-8 mx-8 text-white text-xl self-center h-16 w-1/3 hover:bg-blue-300 font-semibold flex justify-center items-center
                            hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    onClick={()=> nextStep(step-1)}
                >
                    GERİ DÖN
                </button>
                <button
                    className="bg-blue-500 mt-8 mx-8 text-white text-xl self-center h-16 w-1/3 hover:bg-blue-300 font-semibold flex justify-center items-center
                            hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    onClick={()=> nextStep(step+1)}
                >
                    DEVAM ET
                </button>
            </div>

        </div>
    );
}

export default SecondStep;
