import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

interface MenuContextType {
  expandedMenuItemId: string;
  setExpandedMenuItemId: (id: string) => void;
  collapseSubItemsExcept: (id?: string) => void;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const useMenuContext = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('useMenuContext must be used within a MenuProvider');
  }
  return context;
};

export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [expandedMenuItemId, setExpandedMenuItemId] = useState<string>('');

  const collapseSubItemsExcept = useCallback((id?: string) => setExpandedMenuItemId(id || ''), []);

  return <MenuContext.Provider value={{ expandedMenuItemId, setExpandedMenuItemId, collapseSubItemsExcept }}>{children}</MenuContext.Provider>;
};
