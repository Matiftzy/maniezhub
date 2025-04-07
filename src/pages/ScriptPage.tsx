
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const ScriptPage = () => {
  const [isAllowed, setIsAllowed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Deteksi apakah request berasal dari Roblox executor
    const detectRobloxExecutor = () => {
      // Periksa User-Agent untuk mendeteksi Roblox executor
      // Perhatikan: ini adalah deteksi sederhana dan bisa dibypass dengan mudah
      const userAgent = navigator.userAgent.toLowerCase();
      
      // Periksa jika ini adalah executor Roblox
      // Beberapa executor Roblox menggunakan User-Agent kustom atau memiliki pola tertentu
      // Di sini kita menggunakan beberapa cek umum, tetapi tidak 100% akurat
      const possibleExecutors = [
        'roblox', 'synapse', 'script', 'exploit', 'krnl', 'executor', 
        'fluxus', 'oxygen', 'electron', 'webkit', 'scriptware'
      ];
      
      const isExecutor = possibleExecutors.some(term => userAgent.includes(term));
      
      // Deteksi tambahan untuk fitur-fitur yang biasanya hanya ada di executor
      const hasRobloxGlobals = 
        typeof window !== 'undefined' && 
        (
          // @ts-ignore - Periksa variabel global executor Roblox
          window.syn !== undefined || 
          // @ts-ignore
          window.getgenv !== undefined || 
          // @ts-ignore
          window.hookfunction !== undefined ||
          // @ts-ignore
          window.getrawmetatable !== undefined
        );
      
      return isExecutor || hasRobloxGlobals;
    };

    // Cek apakah pengguna diizinkan mengakses script
    const checkAccess = () => {
      // Cek dari executor Roblox
      if (detectRobloxExecutor()) {
        setIsAllowed(true);
      } else {
        // Jika bukan dari executor, periksa juga jika ini adalah admin atau
        // akses khusus untuk testing purposes
        // (ini adalah contoh, sebenarnya Anda bisa menambahkan logic yang lebih canggih)
        const isAdmin = false; // ganti dengan logic yang sesuai jika diperlukan
        setIsAllowed(isAdmin);
      }
      setIsLoading(false);
    };

    checkAccess();
  }, []);

  if (isLoading) {
    return <div className="min-h-screen bg-black flex items-center justify-center text-white">Loading...</div>;
  }

  if (!isAllowed) {
    return <Navigate to="/" replace />;
  }

  return (
    <pre className="w-full min-h-screen bg-black text-white p-0 m-0 font-mono">
      {`print("hello")`}
    </pre>
  );
};

export default ScriptPage;
