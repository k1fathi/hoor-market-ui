import React, {useEffect, useState} from 'react';
import {withRouter} from "react-router";
import withReducer from "../../store/withReducer";
import "./AddSingleProduct.css";
import addSingleProduct from "./store/reducers/addSingleProduct.reducer";
import FirstStep from "./components/FirstStep";
import SecondStep from "./components/SecondStep";
import ThirdStep from "./components/ThirdStep";
import ForthStep from "./components/ForthStep";


function AddSingleProduct(props) {
    const [product, setProduct] = useState({images: []});
    const step = props.match.params.step;

    const nextStep = (step) => {
        console.log(step);
        props.history.push("/tek-urun-ekleme/" + step);
    };

    return (
        <div className="flex w-full h-full add-single-product-container">
            <div className="add-single-products-steps">
                step
            </div>
            <div className="add-single-products-content">

                {
                    step === "1" && <FirstStep product={product} setProduct={setProduct} nextStep={nextStep} step={1}/>
                }
                {
                    step === "2" && <SecondStep product={product} setProduct={setProduct} nextStep={nextStep} step={2}/>
                }
                {
                    step === "3" && <ThirdStep product={product} setProduct={setProduct} nextStep={nextStep} step={3}/>
                }
                {
                    step === "4" && <ForthStep product={product} setProduct={setProduct} nextStep={nextStep} step={4}/>
                }


            </div>
            <div className="add-single-products-description">
                <div className="add-single-product-description-title">
                    Girilen Ürün Özeti
                </div>
                <p className="mt-8">
                Gireceğiniz ürün bilgileri bu alanda
                özetlenecektir.
                </p>
                <p className="mt-8">
                Ürün bilgilerinizi
                eksiksiz girerek
                kullanıcıların
                ürününüze daha kolay
                ulaşmasını
                sağlayabilirsiniz.
                </p>
            </div>
        </div>
    );
}

export default withRouter(withReducer("addSingleProduct", addSingleProduct)(AddSingleProduct));
