import React, {useState, useEffect} from 'react';
import './ApproveModal.css';
import Modal from '@material-ui/core/Modal';
import CustomButton from "./CustomButton";


function ApproveModal({openModal, handleClose, title, content, handleApprove, id}) {


    return (

        <Modal
            open={openModal}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <div className="expenses-modal-container">
                <>
                    <div className="expenses-modal-title"><p>{title}</p></div>
                    <div className = "expenses-modal-text" > {content}</div>
                    {/*<div className = "expenses-modal-text2">10 dk içiresinde siparişinizi iptal edebilirsiniz.</div>*/}
                    <div className="flex justify-center justify-evenly">
                        <CustomButton primaryColor="#848c94" hoverColor="#7ab9f0" title="Kaydet" Height={36} padding={18} borderRadius={30} paddingTB={5}
                                      onClick={()=>handleApprove(id)} />
                        <CustomButton primaryColor="#fff" hoverColor="#f5f5f0" title="İptal Et" Height={36} padding={18} borderRadius={30} paddingTB={5} borderColor="#848c94"
                                      onClick={() => handleClose()} fontColor="#DA291C" />

                    </div>
                </>
            </div>
        </Modal>
    );
}

export default ApproveModal;