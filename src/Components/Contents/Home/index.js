import React,{useEffect, useState} from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { httpSimpleRequest } from '../../Utils/httpClient';
import { setCookie, getCookie, deleteCookie } from '../../Utils/cookies';

let Signin = (props) => {
    let [signInInfo, setsignInInfo] = useState( { email: "", password: "" } );

    let historyObj = useHistory();
    let routChange = (value) => {
        historyObj.push(value)
    };

    useEffect(
        () => {
            let loginToken = getCookie(process.env.REACT_APP_LOGIN_TOKEN_KEY)
            if (loginToken) {
               // routChange(`/admin/users`);
               console.log("Token Found", loginToken);
            }
        }, []
    );
    return (
        <div className="row justify-content-center mt-5">
            <div className="col-12 col-md-8 col-xl-5 col-lg-5 col-sm-10">
                <div className="container custom_form mt-5">
                    <div className="row mt-0 mr-n4 ml-n4">
                        <div className="col-12">
                            <div className="container">
                                <div className="row justify-content-center font-weight-bold h3 "><div className="col-12 mx-0  border-top-0 border-right-0 border-left-0  border-bottom text-center pb-2"> Sign In</div></div>
                                Home Page
                                
                                {/* <form onSubmit={handleSubmit}>
                                    <div className="row mx-2">
                                        {
                                            formFieldName.map((item, itemIndex) => {
                                                return <TextInput
                                                    key={itemIndex}
                                                    {...item}
                                                    value={formValue[item.valueName]}
                                                    error={errorValue[item.errorName]}
                                                    onChange={handleChange}
                                                />
                                            })
                                        }
                                    </div>
                                    <div className="row mx-2 justify-content-center">
                                        <div className="col-12 float-right">
                                            <button type="submit" className="btn new_bnt_1 btn-block font-weight-bold ">Sign In</button>
                                        </div>
                                    </div>
                                    <div className="row m-2 ">
                                        <div className="col-12 col-md-6 mr-auto float-left">
                                            <div>
                                                <button onClick={() => routChange("/authe/signup")} className="btn btn-light  btn-block "><span className="">Forgot email?</span></button>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 float-right">
                                        <button onClick={() => routChange("/authe/signup")} className="btn btn-secondary btn-block"><span className="">Create an account</span></button>
                                        </div>
                                    </div>
                                </form> */}

                                {/* <div className="row justify-content-center mt-4 ">
                                    <div className="col-12 mx-0 text-center font-weight-light pb-2">
                                        <NavLink className="mx-1 " to="/">Terms</NavLink>
                                        <NavLink className="mx-1 " to="/">Privacy</NavLink>
                                        <NavLink className="mx-1 " to="/">Security</NavLink>
                                        <NavLink className="mx-1 " to="/">Contact</NavLink>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signin;
