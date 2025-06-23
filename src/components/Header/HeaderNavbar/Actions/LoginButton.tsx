// import { useState } from "react";
// import { Link } from 'react-router-dom'
// import '../../../../css/App.css';
// import ModalLogin from "../../Modal/ModalLogin";
// import { useAuth } from "../../../context/AuthContext";

// function LoginButton() {
//     const [LoginActive, setLoginActive] = useState(false);
//     const { userData, login, logout } = useAuth();

//     return (
//         <>
//             {userData ? (
//                 <Link to='/account'>
//                     <div className="user-profile-button"> {/* onClick={logout} */}
//                         <img src="images/defaultFoto/cd75572dab033a6d4eba0fee9373d834.jpg" alt="Profile" className="profile-pic" />
//                         <span className="user-name">{userData.name}</span>
//                     </div>
//                 </Link>
//             ) : (
//                 <button className="login-button" onClick={() => setLoginActive(true)}>
//                     <img src="images/svg_elements/Elements/exit.svg" alt="exit"/>
//                     <span>Login</span>
//                 </button>
//             )}
//             <ModalLogin 
//                 active={LoginActive} 
//                 setActive={setLoginActive} 
//                 // onLoginSuccess={login}
//                 // onRegisterSuccess={login}
//             />
//         </>
//     );
// }

// export default LoginButton;


// import { useState } from "react";
// import { Link } from 'react-router-dom';
// import '../../../../css/App.css';
// import ModalLogin from "../../Modal/ModalLogin";
// import { useAuth } from "../../../context/AuthContext";

// function LoginButton() {
//     const [LoginActive, setLoginActive] = useState(false);
//     const { userData } = useAuth();

//     return (
//         <>
//             {userData ? (
//                 <Link to='/account'>
//                     <div className="user-profile-button">
//                         <img 
//                             src={userData.photo || "/images/defaultFoto/cd75572dab033a6d4eba0fee9373d834.jpg"} 
//                             alt="Profile" 
//                             className="profile-pic" 
//                         />
//                         <span className="user-name">{userData.name}</span>
//                     </div>
//                 </Link>
//             ) : (
//                 <button className="login-button" onClick={() => setLoginActive(true)}>
//                     <img src="/images/svg_elements/Elements/exit.svg" alt="exit"/>
//                     <span>Login</span>
//                 </button>
//             )}
//             <ModalLogin 
//                 active={LoginActive} 
//                 setActive={setLoginActive}
//             />
//         </>
//     );
// }

// export default LoginButton;



import { useState } from "react";
import { Link } from 'react-router-dom';
import '../../../../css/App.css';
import ModalLogin from "../../Modal/ModalLogin";
import { useAuth } from "../../../context/AuthContext";
import Elements from '../../../../images/svg_elements/Elements/exit.svg';
import defaultFoto from '../../../../images/defaultFoto/default.jpg'

function LoginButton() {
    const [LoginActive, setLoginActive] = useState(false);
    const { userData, login } = useAuth();

    const handleLoginSuccess = (parsedUser: {name: string; email: string }) => {
        login({
            name: parsedUser.name,
            email: parsedUser.email
        });
        setLoginActive(false);
    }

    return (
        <>
            {userData ? (
                <Link to='/account'>
                    <div className="user-profile-button">
                        <img 
                            // src={defaultFoto}
                            src={userData.photo || defaultFoto} 
                            alt="Profile" 
                            className="profile-pic" 
                        />
                        <span className="user-name">{userData.name}</span>
                    </div>
                </Link>
            ) : (
                <button className="login-button" onClick={() => setLoginActive(true)}>
                    <img src={Elements} alt="exit"/>
                    <span>Login</span>
                </button>
            )}
            <ModalLogin 
                active={LoginActive} 
                setActive={setLoginActive}
                onLoginSuccess={handleLoginSuccess}
            />
        </>
    );
}

export default LoginButton;