import {redirect} from 'next/navigation'
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'

export const withAuth = (WrappedComponent) => {
    return function WithAuth(props) {
      const isAuthenticated = true;
      const router = useRouter()
      useEffect(() => {
        if (!isAuthenticated) {
          router.push("/login");
        }
      }, []);
  
      if (!isAuthenticated) {
        return null;
      }
      return <WrappedComponent {...props} />;
    };
  };