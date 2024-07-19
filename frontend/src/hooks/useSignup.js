import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const {setAuthUser} = useAuthContext()

    const signup = async ({ fullName, username, mobile, password, confirmPassword, gender }) => {
        const success = handleInputErrors({ fullName, username, mobile, password, confirmPassword, gender });
        if (!success) return;

        setLoading(true);
        setError(null);
        
        try {
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fullName, username, mobile, password, confirmPassword, gender })
            });

            const data = await res.json();

            if(data.error){
              throw new Error(data.error)
            }

            localStorage.setItem("chat-user", JSON.stringify(data))
            setAuthUser(data)


            if (res.ok) {
                toast.success('Signup successful!');
                // Optionally, handle successful signup actions here (e.g., redirecting the user)
            } else {
                setError(data.message || 'Signup failed');
                toast.error(data.message || 'Signup failed');
            }
        } catch (error) {
            setError(error.message);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    return { loading, error, signup };
}

export default useSignup;

function handleInputErrors({ fullName, username, mobile, password, confirmPassword, gender }) {
    if (!fullName || !username || !mobile || !password || !confirmPassword || !gender) {
        toast.error('Please fill all details!');
        return false;
    }

    if (password !== confirmPassword) {
        toast.error('Passwords do not match!');
        return false;
    }

    if (password.length < 6) {
        toast.error('Password must be at least 6 characters!');
        return false;
    }

    return true;
}
