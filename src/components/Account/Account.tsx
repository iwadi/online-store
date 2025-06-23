import './MyAccount.css';
import image from '../../images/svg_elements/Elements/Image.svg';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import Header from '../Header/Header';
import Sidebar from './Sidebar/Sidebar';

function MyAccount() {
    const location = useLocation();
    const [formData, setFormData] = useState({
        firstName: location.state?.userData?.name || '',
        lastName: '',
        email: location.state?.userData?.email || '',
        phone: '',
        username: location.state?.userData?.name || '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="body-wraper">
            <Header />
            <main>
                <div className="Section_1">
                    <div className="container">
                        <div className="content-flex">
                            <Sidebar />
                            <div className="form">
                                <div className="personal-information">
                                    <h2 className="title-Form">Personal Information</h2>
                                    <form>
                                        <div className="form-row">
                                            <div className="form-group">
                                                <label htmlFor="firstName" className="title-form">
                                                    First Name <span className="required">*</span>
                                                </label>
                                                <input 
                                                    type="text" 
                                                    id="firstName" 
                                                    name="firstName" 
                                                    className="form-group-input" 
                                                    value={formData.firstName}
                                                    onChange={handleInputChange}
                                                    required 
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="lastName" className="title-form">
                                                    Last Name <span className="required">*</span>
                                                </label>
                                                <input 
                                                    type="text" 
                                                    id="lastName" 
                                                    name="lastName" 
                                                    className="form-group-input" 
                                                    value={formData.lastName}
                                                    onChange={handleInputChange}
                                                    required 
                                                />
                                            </div>
                                        </div>
                                        
                                        <div className="form-row">
                                            <div className="form-group">
                                                <label htmlFor="email" className="title-form">
                                                    Email address <span className="required">*</span>
                                                </label>
                                                <input 
                                                    type="email" 
                                                    id="email" 
                                                    name="email" 
                                                    className="form-group-input" 
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    required 
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="phone" className="title-form">
                                                    Phone Number <span className="required">*</span>
                                                </label>
                                                <div className="phone-input">
                                                    <div className="country-code">
                                                        <select className="select-phone">
                                                            <option>+966</option>
                                                        </select>
                                                        <input 
                                                            type="tel" 
                                                            id="phone" 
                                                            name="phone" 
                                                            className="form-group-input phone" 
                                                            value={formData.phone}
                                                            onChange={handleInputChange}
                                                            required 
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-row">
                                            <div className="form-group">
                                                <label htmlFor="username" className="title-form">
                                                    Username <span className="required">*</span>
                                                </label>
                                                <input 
                                                    type="text" 
                                                    id="username" 
                                                    name="username" 
                                                    className="form-group-input" 
                                                    value={formData.username}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="photo" className="title-form">
                                                    Photo <span className="required">*</span>
                                                </label>
                                                <div className="buttons-photo">
                                                    <button type="button" className="add-photo">
                                                        <img src={image} alt="" />
                                                    </button>
                                                    <button type="button" className="Change" disabled>Change</button>
                                                    <button type="button" className="Remove" disabled>Remove</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                
                                <div className="password-change">
                                    <h2 className="title-Form">Password change</h2>
                                    <form>
                                        <div className="form-row">
                                            <div className="form-group">
                                                <label htmlFor="current-password" className="title-form">
                                                    Current password <span className="required">*</span>
                                                </label>
                                                <input
                                                    type="password"
                                                    name="currentPassword"
                                                    id="current-password"
                                                    className="form-group-input"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="form-row">
                                            <div className="form-group">
                                                <label htmlFor="new-password" className="title-form">
                                                    New password <span className="required">*</span>
                                                </label>
                                                <input
                                                    type="password"
                                                    name="newPassword"
                                                    id="new-password"
                                                    className="form-group-input"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="form-row">
                                            <div className="form-group">
                                                <label htmlFor="confirm-password" className="title-form">
                                                    Confirm new password <span className="required">*</span>
                                                </label>
                                                <input
                                                    type="password"
                                                    name="confirmPassword"
                                                    id="confirm-password"
                                                    className="form-group-input"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                
                                <button type="button" className="Change save">
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default MyAccount;