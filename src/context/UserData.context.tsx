import React, { createContext, useContext, useState, ReactNode } from 'react';


interface UserData {
    name: string;
    email: string;
    password: string;
}


interface UserContextType {
    UserData: UserData;
    updateUserData: (key: keyof UserData, value: string) => void;
}


const defaultUserData: UserData = {
    name: '',
    email: '',
    password: '',
};


const UserContext = createContext<UserContextType | undefined>(undefined);


interface UserProviderProps {
    children: ReactNode;
}


export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [UserData, setUserData] = useState<UserData>(defaultUserData);

    // Function to update User data
    const updateUserData = (key: keyof UserData, value: string) => {
        setUserData((prev) => ({
            ...prev,
            [key]: value,
        }));
    };


    
    return (
        <UserContext.Provider value={{ UserData, updateUserData }}>
            {children}
        </UserContext.Provider>
    );
};


export const useUserContext = (): UserContextType => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUserContext must be used within a UserProvider');
    }
    return context;
};
