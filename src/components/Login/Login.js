import React from 'react'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../../firebase';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
export default function Login (props) {

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            // console.log(result);
            // console.log(result.user.accessToken);
            axios({
                url: 'https://old-stuff-exchange.azurewebsites.net/api/v1.0/authorizes/firebase',
                method: 'POST',
                data: {
                    token: result.user.accessToken,
                }
            }).then((value) => {
                console.log(value);
            })

            console.log(result.user.accessToken);
            localStorage.setItem('token', result.user.accessToken);
            localStorage.setItem('a', result.user.displayName);
            localStorage.setItem('userlogin', result.user.email);
            // console.log(result.user.displayName);
            // <Redirect to="/admin/dashboard" />

            props.history.push("/home");

        }).catch((error) => {
            console.log(error);
        })
    }


    return (

        <div>
            <div className="theme-layout">
                <div className="authtication  high-opacity">

                    <ul className="welcome-caro">
                        <li className="welcome-box">
                            <figure>
                                <img
                                    style={{
                                        width: 573,
                                        height: 435,
                                    }}
                                    src="./images/background/background.jpg"
                                    alt=""
                                />
                            </figure>

                            <h4 style={{ color: 'black' }}>OLD-STUFF-EXCHANGE</h4>
                            <p style={{ color: 'black' }}>
                                Trao đổi những sản phẩm vật dụng cần thiết trong chung cư
                            </p>
                        </li>

                    </ul>
                </div>
                <div className="auth-login">
                    <div className="logo">
                        <img src="images/logo.png" alt="" />
                        <span>Socimo</span>
                    </div>
                    <div className="mockup left-bottom">
                        <img src="images/mockup.png" alt="" />
                    </div>
                    <div className="verticle-center">
                        <div className="login-form">
                            <h4>
                                <i className="icofont-key-hole" /> Đăng nhập
                            </h4>
                            <form className="c-form">
                                <input
                                    name="email"
                                    type="text"
                                    placeholder="Email"
                                />
                                <input
                                    name="password"
                                    type="password"
                                    placeholder="Mật khẩu"
                                />

                                <p
                                    style={{
                                        marginTop: 20,
                                        fontSize: 16,
                                        borderBottom: "2px solid #17a2b8",
                                        paddingBottom: 4,
                                        width: "max-content",
                                        cursor: "pointer",
                                    }}
                                    onClick={signInWithGoogle}
                                >

                                    Đăng nhập với Google
                                </p>
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >

                                    <button
                                        style={{
                                            marginLeft: 8,
                                        }}
                                        className="main-btn"
                                    >
                                        <i className="icofont-key" /> Đăng nhập
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )

}
