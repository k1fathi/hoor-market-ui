import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { withRouter } from 'react-router';
import { useForm } from 'react-hook-form';
import CircularProgress from '@material-ui/core/CircularProgress';

function Login(props) {
    const dispatch = useDispatch();
    const { handleSubmit, errors } = useForm();
    const {message, loading} = useSelector(state => state.settings.layout);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");


    useEffect(() => {
        // let token = localStorage.getItem("gsbToken");
        //
        // if(token){
        //     props.history.push('/home');
        // }

    },[]);

    function onSubmit() {
        console.log("username", userName, "password", password);
     }

    function handleUsername(event) {
        setUserName(event.target.value);
    }
    function handlePassword(event) {
        setPassword(event.target.value);
    }

    return (
        <div className="absolute flex w-full h-full justify-center items-center">

            <div className="w-full max-w-xs">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Kullanıcı Adı
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="username" value={userName} onChange={handleUsername} />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Şifre
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            name="password" value={password} type="password" onChange={handlePassword} />
                        <p className="text-red-500 text-xs italic">{errors.exampleRequired && <span>This field is required</span>}</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit">
                            Giriş
                        </button>
                        {/*<a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"*/}
                        {/*   href="#">*/}
                        {/*    {t('login.forgot-password')}*/}
                        {/*</a>*/}
                    </div>
                </form>
            </div>
        </div>
    );
}

export default withRouter(Login);