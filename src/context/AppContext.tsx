import React, { createContext, useContext, useState, useEffect } from 'react';

interface AppContextType {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  isInvestorModalOpen: boolean;
  openInvestorModal: () => void;
  closeInvestorModal: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('tejas-theme');
      return (saved as 'dark' | 'light') || 'dark';
    }
    return 'dark';
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInvestorModalOpen, setIsInvestorModalOpen] = useState(false);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem('tejas-theme', next);
      return next;
    });
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const openInvestorModal = () => setIsInvestorModalOpen(true);
  const closeInvestorModal = () => setIsInvestorModalOpen(false);

  useEffect(() => {
    const root = window.document.documentElement;
    
    if (theme === 'light') {
      root.classList.add('light');
      root.classList.remove('dark'); // Clean up just in case
    } else {
      root.classList.add('dark');
      root.classList.remove('light');
    }
    
    // Optional: Keep body class for legacy CSS but root is the priority
    document.body.className = theme; 
  }, [theme]);

  return (
    <AppContext.Provider value={{ 
      theme, 
      toggleTheme, 
      isModalOpen, 
      openModal, 
      closeModal,
      isInvestorModalOpen,
      openInvestorModal,
      closeInvestorModal
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}
