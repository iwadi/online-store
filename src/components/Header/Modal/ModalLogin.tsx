import { useState } from 'react';
import './ModalLogin.css';
import ModalRegister from "./ModalRegister";
import { useNavigate } from 'react-router-dom';
// img content
import GoogleOriginal from '../../../images/svg_elements/SocialMedia/GoogleOriginal.svg';
import FacebookOriginal from '../../../images/svg_elements/SocialMedia/FacebookOriginal.svg';
import CrossGreen from '../../../images/svg_elements/Elements/CrossGreen.svg';

interface ModalLoginProps {
    active: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
    onLoginSuccess?: (data: { name: string; email: string }) => void;
}

interface LoginFormData {
    email: string;
    password: string;
}

function ModalLogin({ active, setActive, onLoginSuccess }: ModalLoginProps) {
    const [RegisterActive, setRegisterActive] = useState(false);
    const [formData, setFormData] = useState<LoginFormData>({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState<Partial<LoginFormData>>({});
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const validateForm = (): boolean => {
        const newErrors: Partial<LoginFormData> = {};

        if (!formData.email.trim()) {
            newErrors.email = 'Введите email';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Введите правильный email';
        }

        if (!formData.password) {
            newErrors.password = 'Введите пароль';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Пароль должен быть не меньше 6 символов';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        if (errors[name as keyof LoginFormData]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name as keyof LoginFormData];
                return newErrors;
            });
        }
    };

    // const handleSubmit = (e: React.FormEvent) => {
    //     e.preventDefault();
    //     if (!validateForm()) return;

    //     setIsLoading(true);

    //     setTimeout(() => {
    //         setActive(false);
    //         navigate('/account', { 
    //             state: { 
    //                 userData: {
    //                     email: formData.email,
    //                     name: formData.email.split('@')[0] 
    //                 } 
    //             } 
    //         });
    //         setIsLoading(false);
    //     }, 1000);
    // };

    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);

    setTimeout(() => {
        const userData = {
            email: formData.email,
            name: formData.email.split('@')[0]
        };

        if (onLoginSuccess) {
            onLoginSuccess(userData);
        }

        setActive(false);
        navigate('/account', {
            state: { userData }
        });
        setIsLoading(false);
    }, 1000);
};

    return (
        <>
            <div className={active ? "ModalL active" : "ModalL"} onClick={() => setActive(false)}>
                <div className="modal-content" onClick={e => e.stopPropagation()}>
                    <div className="transition">
                        <div className="button-close" onClick={() => setActive(false)}>
                            <img src={CrossGreen} alt=""/>
                        </div>
                        <div className="center-transition">
                            <h2 className="title-transition Login">Login</h2>
                            <div className="border"></div>
                            <h2 
                                className="title-transition" 
                                onClick={() => {
                                    setActive(false);
                                    setRegisterActive(true);
                                }}
                            >
                                Register
                            </h2>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit} className="entrance-content">
                        <div className="data-content">
                            <h3 className="modal-text">Enter your username and password to login.</h3>
                            <div className="label-content">
                                {errors.email && <span className="error-message">{errors.email}</span>}
                                <input 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="almamun_uxui@outlook.com" 
                                    className={errors.email ? 'error input-data' : 'input-data'}  
                                />

                                {errors.password && <span className="error-message">{errors.password}</span>}
                                <input 
                                    type="password" 
                                    name="password" 
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Password" 
                                    className={errors.password ? 'error input-data' : 'input-data'}  
                                />
                            </div>
                            <h3 className="title-forgot">
                                <a href="#">Forgot Password?</a>
                            </h3>
                            <button type="submit" className="button-entrance" disabled={isLoading}>
                                {isLoading ? 'Loging...' : 'Login'}
                            </button>
                        </div>
                        <div className="differently-content">
                            <h3 className="modal-text borders">Or login with</h3>
                            <div className="buttons-choices">
                                <button type="button" className="choice">
                                    <img src={GoogleOriginal} alt="" />
                                    <p className="text-choice">Login with Google</p>
                                </button>
                                <button type="button" className="choice">
                                    <img src={FacebookOriginal} alt="" />
                                    <p className="text-choice">Login with Facebook</p>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <ModalRegister 
                active={RegisterActive} 
                setActive={setRegisterActive} 
                setLoginActive={setActive}
            />
        </>
    )
}

export default ModalLogin;

// ===================================
// ===================================

// import { useState } from 'react';
// import './ModalLogin.css';
// import ModalRegister from "./ModalRegister";
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// interface ModalLoginProps {
//     active: boolean;
//     setActive: React.Dispatch<React.SetStateAction<boolean>>;
//     onLoginSuccess?: (data: { name: string; email: string }) => void
//     onRegisterSuccess?: (data: { name: string; email: string }) => void;
// }

// interface LoginFormData {
//     email: string;
//     password: string;
// }

// function ModalLogin({ active, setActive, onLoginSuccess, onRegisterSuccess }: ModalLoginProps) {
//     const [RegisterActive, setRegisterActive] = useState(false);
//     const [formData, setFormData] = useState<LoginFormData>({
//         email: '',
//         password: ''
//     });
//     const [errors, setErrors] = useState<Partial<LoginFormData>>({});
//     const [isLoading, setIsLoading] = useState(false);
//     const navigate = useNavigate();

//     const validateForm = (): boolean => {
//         const newErrors: Partial<LoginFormData> = {};

//         if (!formData.email.trim()) {
//             newErrors.email = 'Введите email';
//         } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//             newErrors.email = 'Введите правильный email';
//         }

//         if (!formData.password) {
//             newErrors.password = 'Введите пароль';
//         } else if (formData.password.length < 6) {
//             newErrors.password = 'Пароль должен быть не меньше 6 символов';
//         }

//         setErrors(newErrors);
//         return Object.keys(newErrors).length === 0;
//     };

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = e.target;
//         setFormData(prev => ({
//             ...prev,
//             [name]: value
//         }));

//         if (errors[name as keyof LoginFormData]) {
//             setErrors(prev => {
//                 const newErrors = { ...prev };
//                 delete newErrors[name as keyof LoginFormData];
//                 return newErrors;
//             });
//         }
//     };

//     // const handleSubmit = (e: React.FormEvent) => {
//     //     e.preventDefault();
//     //     if (!validateForm()) return;

//     //     setIsLoading(true);

//     //     setTimeout(() => {
//     //         const userData = {
//     //             email: formData.email,
//     //             name: formData.email.split('@')[0]
//     //         };
            
//     //         if (onLoginSuccess) {
//     //             onLoginSuccess(userData);
//     //         }
            
//     //         setActive(false);
//     //         navigate('/account', { 
//     //             state: { 
//     //                 userData 
//     //             } 
//     //         });
//     //         setIsLoading(false);
//     //     }, 1000);
//     // };

//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();
//         if (!validateForm()) return;

//         setIsLoading(true);

//         try {
//             const response = await axios.post('http://localhost:5000/api/login', {
//             email: formData.email,
//             password: formData.password
//             });

//             const userData = {
//             email: formData.email,
//             name: formData.email.split('@')[0]
//             };
            
//             if (onLoginSuccess) {
//             onLoginSuccess(userData);
//             }
            
//             setActive(false);
//             navigate('/account', { 
//             state: { 
//                 userData 
//             } 
//             });
//         } catch (error) {
//             console.error('Login failed:', error);
//             // Здесь можно добавить обработку ошибок, например:
//             setErrors({ password: 'Invalid email or password' });
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     return (
//         <>
//             <div className={active ? "ModalL active" : "ModalL"} onClick={() => setActive(false)}>
//                 <div className="modal-content" onClick={e => e.stopPropagation()}>
//                     <div className="transition">
//                         <div className="button-close" onClick={() => setActive(false)}>
//                             <img src="images/svg_elements/Elements/CrossGreen.svg" alt=""/>
//                         </div>
//                         <div className="center-transition">
//                             <h2 className="title-transition Login">Login</h2>
//                             <div className="border"></div>
//                             <h2 
//                                 className="title-transition" 
//                                 onClick={() => {
//                                     setActive(false);
//                                     setRegisterActive(true);
//                                 }}
//                             >
//                                 Register
//                             </h2>
//                         </div>
//                     </div>
//                     <form onSubmit={handleSubmit} className="entrance-content">
//                         <div className="data-content">
//                             <h3 className="modal-text">Enter your username and password to login.</h3>
//                             <div className="label-content">
//                                 {errors.email && <span className="error-message">{errors.email}</span>}
//                                 <input 
//                                     type="email" 
//                                     name="email" 
//                                     id="email" 
//                                     value={formData.email}
//                                     onChange={handleChange}
//                                     placeholder="almamun_uxui@outlook.com" 
//                                     className={errors.email ? 'error input-data' : 'input-data'}  
//                                 />

//                                 {errors.password && <span className="error-message">{errors.password}</span>}
//                                 <input 
//                                     type="password" 
//                                     name="password" 
//                                     value={formData.password}
//                                     onChange={handleChange}
//                                     placeholder="Password" 
//                                     className={errors.password ? 'error input-data' : 'input-data'}  
//                                 />
//                             </div>
//                             <h3 className="title-forgot">
//                                 <a href="#">Forgot Password?</a>
//                             </h3>
//                             <button type="submit" className="button-entrance" disabled={isLoading}>
//                                 {isLoading ? 'Loging...' : 'Login'}
//                             </button>
//                         </div>
//                         <div className="differently-content">
//                             <h3 className="modal-text borders">Or login with</h3>
//                             <div className="buttons-choices">
//                                 <button type="button" className="choice">
//                                     <img src="images/svg_elements/SocialMedia/GoogleOriginal.svg" alt="" />
//                                     <p className="text-choice">Login with Google</p>
//                                 </button>
//                                 <button type="button" className="choice">
//                                     <img src="images/svg_elements/SocialMedia/FacebookOriginal.svg" alt="" />
//                                     <p className="text-choice">Login with Facebook</p>
//                                 </button>
//                             </div>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//             <ModalRegister 
//                 active={RegisterActive} 
//                 setActive={setRegisterActive} 
//                 setLoginActive={setActive}
//                 onRegisterSuccess={(data) => {
//                     if (onRegisterSuccess) {
//                         onRegisterSuccess(data);
//                     }
//                     setActive(false);
//                 }}
//             />
//         </>
//     )
// }

// export default ModalLogin;

// ===================================
// ===================================

// import { useState } from 'react';
// import './ModalLogin.css';
// import ModalRegister from "./ModalRegister";
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// interface ModalLoginProps {
//     active: boolean;
//     setActive: React.Dispatch<React.SetStateAction<boolean>>;
//     onLoginSuccess?: (data: { name: string; email: string }) => void;
// }

// interface LoginFormData {
//     email: string;
//     password: string;
// }

// function ModalLogin({ active, setActive, onLoginSuccess }: ModalLoginProps) {
//     const [RegisterActive, setRegisterActive] = useState(false);
//     const [formData, setFormData] = useState<LoginFormData>({
//         email: '',
//         password: ''
//     });
//     const [errors, setErrors] = useState<Partial<LoginFormData & { server: string }>>({});
//     const [isLoading, setIsLoading] = useState(false);
//     const navigate = useNavigate();

//     const validateForm = (): boolean => {
//         const newErrors: Partial<LoginFormData> = {};

//         if (!formData.email.trim()) {
//             newErrors.email = 'Введите email';
//         } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//             newErrors.email = 'Введите правильный email';
//         }

//         if (!formData.password) {
//             newErrors.password = 'Введите пароль';
//         } else if (formData.password.length < 6) {
//             newErrors.password = 'Пароль должен быть не меньше 6 символов';
//         }

//         setErrors(newErrors);
//         return Object.keys(newErrors).length === 0;
//     };

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = e.target;
//         setFormData(prev => ({
//             ...prev,
//             [name]: value
//         }));

//         // Очищаем ошибку при изменении поля
//         setErrors(prev => ({ ...prev, [name]: undefined, server: undefined }));
//     };

//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();
//         if (!validateForm()) return;

//         setIsLoading(true);

//         try {
//             const response = await axios.post('http://localhost:5000/api/login', {
//                 email: formData.email,
//                 password: formData.password
//             });

//             const userData = response.data.user;
            
//             if (onLoginSuccess) {
//                 onLoginSuccess(userData);
//             }
            
//             setActive(false);
//             navigate('/account', { 
//                 state: { userData } 
//             });
//         } catch (error: any) {
//             console.error('Login failed:', error);
            
//             if (error.response) {
//                 // Ошибка от сервера
//                 setErrors({ server: error.response.data.message || 'Ошибка при входе' });
//             } else {
//                 setErrors({ server: 'Не удалось подключиться к серверу' });
//             }
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     return (
//         <>
//             <div className={active ? "ModalL active" : "ModalL"} onClick={() => setActive(false)}>
//                 <div className="modal-content" onClick={e => e.stopPropagation()}>
//                     <div className="transition">
//                         <div className="button-close" onClick={() => setActive(false)}>
//                             <img src="images/svg_elements/Elements/CrossGreen.svg" alt=""/>
//                         </div>
//                         <div className="center-transition">
//                             <h2 className="title-transition Login">Login</h2>
//                             <div className="border"></div>
//                             <h2 
//                                 className="title-transition" 
//                                 onClick={() => {
//                                     setActive(false);
//                                     setRegisterActive(true);
//                                 }}
//                             >
//                                 Register
//                             </h2>
//                         </div>
//                     </div>
//                     <form onSubmit={handleSubmit} className="entrance-content">
//                         <div className="data-content">
//                             <h3 className="modal-text">Enter your username and password to login.</h3>
//                             {errors.server && <span className="error-message server-error">{errors.server}</span>}
//                             <div className="label-content">
//                                 {errors.email && <span className="error-message">{errors.email}</span>}
//                                 <input 
//                                     type="email" 
//                                     name="email" 
//                                     id="email" 
//                                     value={formData.email}
//                                     onChange={handleChange}
//                                     placeholder="almamun_uxui@outlook.com" 
//                                     className={errors.email ? 'error input-data' : 'input-data'}  
//                                 />

//                                 {errors.password && <span className="error-message">{errors.password}</span>}
//                                 <input 
//                                     type="password" 
//                                     name="password" 
//                                     value={formData.password}
//                                     onChange={handleChange}
//                                     placeholder="Password" 
//                                     className={errors.password ? 'error input-data' : 'input-data'}  
//                                 />
//                             </div>
//                             <h3 className="title-forgot">
//                                 <a href="#">Forgot Password?</a>
//                             </h3>
//                             <button type="submit" className="button-entrance" disabled={isLoading}>
//                                 {isLoading ? 'Logging in...' : 'Login'}
//                             </button>
//                         </div>
//                         <div className="differently-content">
//                             <h3 className="modal-text borders">Or login with</h3>
//                             <div className="buttons-choices">
//                                 <button type="button" className="choice">
//                                     <img src="images/svg_elements/SocialMedia/GoogleOriginal.svg" alt="" />
//                                     <p className="text-choice">Login with Google</p>
//                                 </button>
//                                 <button type="button" className="choice">
//                                     <img src="images/svg_elements/SocialMedia/FacebookOriginal.svg" alt="" />
//                                     <p className="text-choice">Login with Facebook</p>
//                                 </button>
//                             </div>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//             <ModalRegister 
//                 active={RegisterActive} 
//                 setActive={setRegisterActive} 
//                 setLoginActive={setActive}
//                 onRegisterSuccess={(data) => {
//                     if (onLoginSuccess) {
//                         onLoginSuccess(data);
//                     }
//                     setActive(false);
//                 }}
//             />
//         </>
//     )
// }

// export default ModalLogin;