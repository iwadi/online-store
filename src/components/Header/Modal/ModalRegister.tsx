import "./ModalLogin.css";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
// img content
import CrossGreen from '../../../images/svg_elements/Elements/CrossGreen.svg';
import GoogleOriginal from '../../../images/svg_elements/SocialMedia/GoogleOriginal.svg';
import FacebookOriginal from '../../../images/svg_elements/SocialMedia/FacebookOriginal.svg';

interface ModalRegisterProps {
    active: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
    setLoginActive: React.Dispatch<React.SetStateAction<boolean>>;
}

interface FormData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

function ModalRegister({ active, setActive, setLoginActive }: ModalRegisterProps) {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState<Partial<FormData>>({});
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { login } = useAuth();

    const validateForm = (): boolean => {
        const newErrors: Partial<FormData> = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Введите своё имя';
        } else if (formData.name.length < 3) {
            newErrors.name = 'Имя не должно быть меньше 3 букв';
        }

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

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Пароли не совпадают';
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

        if (errors[name as keyof FormData]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name as keyof FormData];
                return newErrors;
            });
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsLoading(true);

        setTimeout(() => {
            const userData = {
                name: formData.name,
                email: formData.email
            };
            
            login(userData);
            
            setActive(false);
            navigate('/account', {
                state: { 
                    userData 
                } 
            });
            setIsLoading(false);
        }, 1000);
    };

    return (
        <div className={active ? "Modal active" : "Modal"} onClick={() => setActive(false)}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="transition">
                    <div className="button-close" onClick={() => setActive(false)}>
                        <img src={CrossGreen} alt=""/>
                    </div>
                    <div className="center-transition">
                        <h2 
                            className="title-transition" 
                            onClick={() => {
                                setActive(false);
                                setLoginActive(true);
                            }}
                        >
                            Login
                        </h2>
                        <div className="border"></div>
                        <h2 className="title-transition Register">Register</h2>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className="entrance-content">
                    <div className="data-content">
                        <h3 className="modal-text">Enter your email and password to register.</h3>
                        <div className="label-content">
                            {errors.name && <span className="error-message">{errors.name}</span>}
                            <input 
                                type="text" 
                                name="name" 
                                value={formData.name} 
                                onChange={handleChange} 
                                className={errors.name ? 'error input-data' : "input-data"} 
                                placeholder="Username" 
                            />

                            {errors.email && <span className="error-message">{errors.email}</span>}
                            <input 
                                type="email" 
                                name="email" 
                                value={formData.email} 
                                onChange={handleChange} 
                                className={errors.email ? 'error input-data' : "input-data"} 
                                placeholder="Enter your email address" 
                            />

                            {errors.password && <span className="error-message">{errors.password}</span>}
                            <input 
                                type="password" 
                                name="password" 
                                value={formData.password} 
                                onChange={handleChange} 
                                className={errors.password ? 'error input-data' : "input-data"} 
                                placeholder="Password" 
                            />

                            {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
                            <input 
                                type="password" 
                                name="confirmPassword" 
                                value={formData.confirmPassword} 
                                onChange={handleChange} 
                                className={errors.confirmPassword ? 'error input-data' : "input-data"} 
                                placeholder="Confirm Password" 
                            />
                        </div>
                        <button type="submit" className="button-entrance" disabled={isLoading}>
                            {isLoading ? 'Registering...' : 'Register'}
                        </button>
                    </div>
                    <div className="differently-content">
                        <h3 className="modal-text borders">Or register with</h3>
                        <div className="buttons-choices">
                            <button type="button" className="choice">
                                <img src={GoogleOriginal} alt="" />
                                <p className="text-choice">Continue with Google</p>
                            </button>
                            <button type="button" className="choice">
                                <img src={FacebookOriginal} alt="" />
                                <p className="text-choice">Continue with Facebook</p>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ModalRegister;