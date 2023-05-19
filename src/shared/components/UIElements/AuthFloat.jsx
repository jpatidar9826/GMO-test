import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import './AuthFloat.css';
import { AuthContext } from "../../context/auth-context";

const AuthFloat = () => {
    const history = useHistory();
    const auth = useContext(AuthContext);
        return(
        <div className="auth-float-wrap">
            {auth.isLoggedIn && <div className="home-button" onClick={() => { history.push("/home")}}><HomeRoundedIcon/></div>}
            <div className="auth-name">{auth.isLoggedIn ? auth.token.name : "Please, Login!!"}</div>
            {auth.isLoggedIn && <div className="logout-button" onClick={() => { auth.logout(); }}><PowerSettingsNewIcon/></div> }
        </div>
    );
}

export default AuthFloat;