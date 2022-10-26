import { useState } from "react";
import axios from 'axios';
import './Login.css'


const Login = (prop)=>{

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const userLogin = async ()=>{
        const id = await prop.auth();
        if(id){
            console.log(id);
        }
        else{
            axios({
                method : "post",
                url : "https://weatherfoarge.herokuapp.com/login",
                headers : {},
                data : {
                    email : `${email}`,
                    password : `${password}`
                }
            })
            .then((ob)=>{
                if(ob.data.auth){
                    console.log(ob.data);
                    prop.sendToken(ob.data.session, ob.data.username.user);
                }else{
                    prop.sendToken("");
                }
            })
            .catch((err)=>{
                console.log(err);
                prop.sendToken("");
            })
        }
    }

    if(prop.login){
        return(
            <>
                <div className="login">
                    <div className="login2">
                        <input type="text" placeholder="Email"
                            onChange={
                                (e)=>{
                                    setEmail(e.target.value);
                                }
                            }
                        />
                        <input type="password" placeholder="Password" 
                            onChange={
                                (e)=>{
                                    setPassword(e.target.value);
                                }
                            }
                        />
                        <button type="submit" onClick={userLogin}>Login</button>
                        <span>New to us - <a>Register</a></span>
                    </div>
                </div>
            </>
        );
    }
    return(
        <></>
    );
}

export default Login;