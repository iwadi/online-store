// import { createContext, useContext, useState } from "react";

// interface AuthContextType {
//     userData: { name: string; email: string } | null;
//     login: (data: { name: string; email: string }) => void;
//     logout: () => void;
// }

// const AuthContext = createContext<AuthContextType | null>(null);

// export function useAuth() {
//     const context = useContext(AuthContext);
//     if (!context) throw new Error("useAuth must be used within AuthProvider");
//     return context;
// }

// export function AuthProvider({ children }: { children: React.ReactNode }) {
//     const [userData, setUserData] = useState<{ name: string; email: string } | null>(null);

//     const login = (data: { name: string; email: string }) => {
//         setUserData(data);
//         localStorage.setItem('userData', JSON.stringify(data));
//     };

//     const logout = () => {
//         setUserData(null);
//         localStorage.removeItem('userData');
//     };

//     return (
//         <AuthContext.Provider value={{ userData, login, logout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// }


// import { createContext, useContext, useState, ReactNode } from 'react';

// interface UserData {
//     name: string;
//     email: string;
//     photo?: string;
// }

// interface AuthContextType {
//     userData: UserData | null;
//     login: (user: UserData) => void;
//     logout: () => void;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export function AuthProvider({ children }: { children: ReactNode }) {
//     const [userData, setUserData] = useState<UserData | null>(null);

//     const login = (user: UserData) => {
//         setUserData({
//             name: user.name,
//             email: user.email,
//             photo: user.photo || "images/defaultFoto/cd75572dab033a6d4eba0fee9373d834.jpg"
//         });
//     };

//     const logout = () => {
//         setUserData(null);
//     };

//     return (
//         <AuthContext.Provider value={{ userData, login, logout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// }

// export function useAuth() {
//     const context = useContext(AuthContext);
//     if (context === undefined) {
//         throw new Error('useAuth must be used within an AuthProvider');
//     }
//     return context;
// }




// import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { createContext, useContext, useState, ReactNode } from 'react';
import defaultfoto from '../../images/defaultFoto/default.jpg';

interface UserData {
    name: string;
    email: string;
    photo?: string;
}

interface AuthContextType {
    userData: UserData | null;
    login: (user: UserData) => void;
    logout: () => void;
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [userData, setUserData] = useState<UserData | null>(null);

    // es ist nicht notwendig

    // useEffect(() => {
    //     const storedUser = localStorage.getItem('userData');
    //     if (storedUser) {
    //         try {
    //             const parsedUser = JSON.parse(storedUser) as UserData;
    //             setUserData({
    //                 name: parsedUser.name,
    //                 email: parsedUser.email,
    //                 photo: parsedUser.photo || "/images/defaultFoto/cd75572dab033a6d4eba0fee9373d834.jpg"
    //             });
    //         } catch (error) {
    //             console.error('Failed to parse user data from localStorage', error);
    //             localStorage.removeItem('userData');
    //         }
    //     }
    // }, []);

    const login = (user: UserData) => {
        const userWithPhoto = {
            name: user.name,
            email: user.email,
            photo: user.photo || defaultfoto
        };
        
        setUserData(userWithPhoto);
        localStorage.setItem('userData', JSON.stringify(userWithPhoto));
    };

    const logout = () => {
        setUserData(null);
        localStorage.removeItem('userData');
    };

    const isAuthenticated = !!userData;

    return (
        <AuthContext.Provider value={{ userData, login, logout, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}