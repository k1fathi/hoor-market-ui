import React, {useEffect, useState} from 'react';
import "./Steps.css";

function FirstStep({product, setProduct, nextStep, step}) {

    const categories = [
        {
            id: 0,
            name: "Elektronik"
        },
        {
            id: 1,
            name: "Giyim"
        },
        {
            id: 2,
            name: "Kitap"
        },
        {
            id: 3,
            name: "Yemek"
        }
    ];


    return (
            <div>
                <div className="add-single-product-title">Ürün Ekleme</div>
                <div className="underline"></div>
                <div>
                    Ürün Adı <span className="text-red">*</span>
                </div>
                <input
                    className=" block w-full text-gray-700 border border-gray-200 rounded-sm px-4
                                text-lg focus:outline-none focus:bg-white focus:border-gray-500 add-single-product-input"
                    id="grid-last-name" type="text" placeholder=""
                    value={product && product.name ? product.name : ""}
                    onChange={(event) => {setProduct({...product, "name": event.target.value})}}/>
                <div>
                    Ürün Kategorisi<span className="text-red">*</span>
                </div>
                <select
                    className="block w-full border border-gray-200 text-gray-700 px-4 pr-8 rounded-sm
                    text-lg focus:outline-none focus:bg-white focus:border-gray-500 add-single-product-input"
                    id="grid-state" onChange={(event)=>{setProduct({...product, "category": event.target.value})}}
                >
                    {
                        categories.map(category => {
                            return (
                                <option key={category.id}
                                    selected={product && product.category ? category.id === product.category : false}
                                    value={category.id}
                                >
                                    {category.name}
                                </option>
                            )
                        })
                    }
                </select>
                <div className="add-single-product-sub-title">
                    Ürün Bilgilerini Giriniz
                </div>
                <div>
                    Marka<span className="text-red">*</span>
                </div>
                <input
                    className=" block w-full text-gray-700 border border-gray-200 rounded-sm px-4
                                text-lg focus:outline-none focus:bg-white focus:border-gray-500 add-single-product-input"
                    id="grid-last-name" type="text" placeholder=""
                    value={product && product.brand ? product.brand : ""}
                    onChange={(event) => {setProduct({...product, "brand": event.target.value})}}/>
                <div>
                    Ürün Açıklaması<span className="text-red">*</span>
                </div>
                <textarea
                    className="mb-2 block w-full text-gray-700 border border-gray-200 text-lg
                    rounded-sm py-3 px-4 focus:outline-none focus:bg-white focus:border-gray-500"
                    rows="5"
                    id="grid-last-name" placeholder=""
                    value={product && product.description ? product.description : ""}
                    onChange={(event) => {setProduct({...product, "description": event.target.value})}}/>

                <div className="flex justify-center">
                    <button
                        className="bg-blue-500 mt-8 text-white text-xl self-center h-16 w-1/2 hover:bg-blue-300 font-semibold
                            hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                        onClick={()=> nextStep(step+1)}
                    >
                        DEVAM ET
                    </button>
                </div>

            </div>
    );
}

export default FirstStep;
