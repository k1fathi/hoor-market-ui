import React, {useEffect, useState, useCallback} from 'react';
import "./Steps.css";
import {useDropzone} from 'react-dropzone';
import Cropper from 'react-easy-crop';
import Slider from "@material-ui/core/Slider";
import  getCroppedImg from "../../../utils/cropImage";
import {Button, IconButton,} from "@material-ui/core";
import BackupIcon from '@material-ui/icons/Backup';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

function ForthStep({product, setProduct, nextStep, step}) {



    const [loaded, setLoaded] = useState(null);
    const [showCrop, setShowCrop] = useState(null);

    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [aspectR, setAspectR] = useState(1/1);
    const [croppedArea, setCroppedArea] = useState(false);

    const onDownload = async () => {
        setShowCrop(false);
        const croppedImg = await getCroppedImg(loaded, croppedArea, 0);

        fetch(croppedImg)
            .then(res => res.blob())
            .then(blob => {
                // dispatch(setField("image", new File([blob], "loadedImage.jpg",{ type: "image/jpg" })))
            });

        // dispatch(setField("image", event.target.files[0]))

        let tempImages = product.images;
        tempImages.push(croppedImg)
        setProduct({...product, "images": tempImages})

        setLoaded(croppedImg);
        // setLoaded(croppedArea);
    };

    const onCancel = async () => {
        setLoaded(null);
        setShowCrop(null);
    };

    const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
        setCroppedArea(croppedAreaPixels);
    };


    const onDrop = useCallback((acceptedFiles) => {
        // acceptedFiles.forEach((file) => {
        //     const reader = new FileReader()
        //
        //     reader.onabort = () => console.log('file reading was aborted')
        //     reader.onerror = () => console.log('file reading has failed')
        //     // reader.onload = () => {
        //     //     // Do whatever you want with the file contents
        //     //     const binaryStr = reader.result
        //     //     console.log(binaryStr)
        //     // }
        //     reader.onload =function(e){
        //         const binaryStr = reader.result
        //         console.log("BİNARY",binaryStr)
        //         setShowCrop(true);
        //         setLoaded(e.target.result)
        //         console.log("TARGET", typeof e.target.result)
        //     };
        //     reader.readAsArrayBuffer(file)
        // })
        //
        // console.log("TARGET", acceptedFiles)


        const reader = new FileReader();
        reader.onload =function(e){
            setShowCrop(true);
            setLoaded(e.target.result)
        };
        reader.readAsDataURL(acceptedFiles[0]);

    }, []);

    const {getRootProps, getInputProps} = useDropzone({onDrop});

    const handleLoad =(event)=>{
        let reader = new FileReader();
        reader.onload = function(e){
            setShowCrop(true);
            setLoaded(e.target.result)
        };
        reader.readAsDataURL(event.target.files[0]);
        // dispatch(setField("image", event.target.files[0]))
    };

    const handleClick = (event) =>{
        event.target.value = null;
    };


    const deleteImage = (ind) =>{
        console.log(ind);
        let tempImages = [];
        product.images.map((img, index)=>{
            if(ind !== index ){
                tempImages.push(img);
            }
        });
        setProduct({...product, "images": tempImages})
    };


    return (
        <div>
            <div className="add-single-product-title">Ürün Görsellerini Yükleyin</div>
            <div className="underline-custom"></div>
            <div>
                Ürün Görselleri:
            </div>

            <div className="flex my-4">
            {product && product.images && product.images.length && product.images.length > 0 ?
                product.images.map((img, index)=>(
                    <div className="add-single-product-small-image">
                        <span className="add-single-product-delete-small-image" onClick={()=>deleteImage(index)}>
                            <DeleteForeverIcon style={{fontSize: 44, color: "#07A0DA"}}/>
                        </span>
                        <img className="h-full" src={img} alt="img"/>
                    </div>
                    )
                ) : null
            }
            </div>


            <div className="add-single-product-forth-content" {...getRootProps()}>
                <input {...getInputProps()} />

                <div className="flex justify-center">
                    <BackupIcon style={{fontSize: 80, color: "#07A0DA"}}/>
                </div>
                <p className="upload-text">Ürün görselini bu alana sürükleyin</p>
                <p className="upload-text">ya da</p>
                <p className="upload-text">yüklemek için bilgisayarınıza <span className="text-blue font-bold underline ml-4"> göz atın</span></p>
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
                    className="bg-blue-500 mt-8 text-white text-xl self-center h-16 w-1/3 hover:bg-blue-300 font-semibold flex justify-center items-center
                            hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    onClick={()=> console.log("finish")}
                >
                    Ürün Ekle
                </button>
            </div>


            <div className='crop-container'>
                <div className='container-cropper'>
                    {showCrop ? (
                        <>
                            <div className='cropper'>
                                <Cropper
                                    image={loaded}
                                    crop={crop}
                                    zoom={zoom}
                                    aspect={aspectR}
                                    onCropChange={setCrop}
                                    onZoomChange={setZoom}
                                    onCropComplete={onCropComplete}
                                />
                            </div>

                            <div className='slider'>
                                <Slider
                                    min={1}
                                    max={3}
                                    step={0.1}
                                    color={"secondary"}
                                    value={zoom}
                                    onChange={(e, zoom) => setZoom(zoom)}
                                />
                            </div>
                        </>
                    ) : null}
                </div>
                {showCrop ?
                    <div className='mb-8 flex justify-center'>
                            <span className="mr-8">
                                <Button variant='contained' color="secondary" onClick={onDownload}>
                                    <p className="font-bold">Kaydet</p>
                                </Button>
                            </span>
                            <span className="mr-8">
                                <Button variant='contained' color="#fff" onClick={onCancel}>
                                    <p className="text-black font-bold">İptal</p>
                                </Button>
                            </span>
                    </div> : null }
            </div>



        </div>
    );
}

export default ForthStep;
