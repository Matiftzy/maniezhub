
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const MainScriptPage = () => {
  const [isAllowed, setIsAllowed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Deteksi apakah request berasal dari Roblox executor dengan sistem yang lebih ketat
    const detectRobloxExecutor = () => {
      // Periksa User-Agent untuk mendeteksi Roblox executor
      const userAgent = navigator.userAgent.toLowerCase();
      
      // Kunci deteksi: Browser biasa memiliki UA yang dikenal
      const browserSignatures = [
        'chrome', 'firefox', 'safari', 'edge', 'opera', 'brave', 
        'vivaldi', 'seamonkey', 'navigator', 'msie', 'trident', 'gecko',
        'webkit', 'mozilla'
      ];
      
      // Jika memiliki signature browser umum & tidak memiliki signature executor, kemungkinan browser biasa
      const isBrowser = browserSignatures.some(sig => userAgent.includes(sig)) && 
        !userAgent.includes('roblox') && 
        !userAgent.includes('synapse') && 
        !userAgent.includes('fluxus') &&
        !userAgent.includes('script') &&
        !userAgent.includes('krnl');
      
      // Periksa jika ini adalah executor Roblox melalui global variables
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
          window.getrawmetatable !== undefined ||
          // @ts-ignore
          window.identifyexecutor !== undefined ||
          // @ts-ignore
          window.getexecutorname !== undefined
        );
      
      // Hanya izinkan akses jika sepertinya bukan browser biasa, atau memiliki global variables executor
      return !isBrowser || hasRobloxGlobals;
    };

    // Cek akses dengan delay kecil untuk memastikan script detector berjalan
    const checkAccess = () => {
      setTimeout(() => {
        // Hanya ijinkan akses dari executor Roblox
        const isExecutor = detectRobloxExecutor();
        
        // Untuk pengembangan/testing, Anda bisa menambahkan override di sini jika diperlukan
        // misalnya dengan parameter khusus di URL atau kondisi lainnya
        // contoh: const isAdmin = new URLSearchParams(window.location.search).has('admin_access');
        
        setIsAllowed(isExecutor);
        setIsLoading(false);
      }, 100);
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
    <pre className="w-full min-h-screen bg-black text-white p-0 m-0 font-mono overflow-hidden">
      {`print("hello")`}
    </pre>
  );
};

export default MainScriptPage;
