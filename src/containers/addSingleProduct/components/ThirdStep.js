import React, {useEffect, useState} from 'react';
import "./Steps.css";

function ThirdStep({product, setProduct, nextStep, step}) {

    const genders = [
        {
            id: 0,
            name: "Erkek"
        },
        {
            id: 1,
            name: "Kadın"
        }
    ];
    const colors = [
        {
            id: 0,
            name: "Kırmızı"
        },
        {
            id: 1,
            name: "Beyaz"
        },
        {
            id: 2,
            name: "Lacivert"
        }
    ];
    const types = [
        {
            id: 0,
            name: "Outdoor"
        },
        {
            id: 1,
            name: "Spor"
        },
        {
            id: 2,
            name: "Yazlık"
        }
    ];


    return (
        <div>
            <div className="add-single-product-title">Ürün Özelliklerini Girin</div>
            <div className="underline"></div>
            <div>
                Cinsiyet <span className="text-red">*</span>
            </div>
            <select
                className="block w-full border border-gray-200 text-gray-700 px-4 pr-8 rounded-sm
                    text-base focus:outline-none focus:bg-white focus:border-gray-500 add-single-product-input"
                id="grid-state" onChange={(event)=>{setProduct({...product, "gender": event.target.value})}}
            >
                {
                    genders.map(gender => {
                        return (
                            <option
                                selected={product && product.category ? gender.id === product.gender : false}
                                value={gender.id}
                            >
                                {gender.name}
                            </option>
                        )
                    })
                }
            </select>
            <div>
                Renk <span className="text-red">*</span>
            </div>
            <select
                className="block w-full border border-gray-200 text-gray-700 px-4 pr-8 rounded-sm
                    text-base focus:outline-none focus:bg-white focus:border-gray-500 add-single-product-input"
                id="grid-state" onChange={(event)=>{setProduct({...product, "color": event.target.value})}}
            >
                {
                    colors.map(color => {
                        return (
                            <option
                                selected={product && product.category ? color.id === product.color : false}
                                value={color.id}
                            >
                                {color.name}
                            </option>
                        )
                    })
                }
            </select>
            <div>
                Türü <span className="text-red">*</span>
            </div>
            <select
                className="block w-full border border-gray-200 text-gray-700 px-4 pr-8 rounded-sm
                    text-base focus:outline-none focus:bg-white focus:border-gray-500 add-single-product-input"
                id="grid-state" onChange={(event)=>{setProduct({...product, "type": event.target.value})}}
            >
                {
                    types.map(type => {
                        return (
                            <option
                                selected={product && product.category ? type.id === product.type : false}
                                value={type.id}
                            >
                                {type.name}
                            </option>
                        )
                    })
                }
            </select>


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

export default ThirdStep;
