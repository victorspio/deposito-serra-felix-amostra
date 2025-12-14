import React from 'react';
import { Package } from 'lucide-react';

const Logo = ({ className = "", size = "md" }) => {
  const sizes = {
    sm: "h-12 w-auto",
    md: "h-16 w-auto",
    lg: "h-40 w-auto",
    xl: "h-48 w-auto"
  };

  const iconSizes = {
    sm: 48,
    md: 64,
    lg: 160,
    xl: 192
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="flex items-center gap-2">
        <Package className="text-primary-600" size={iconSizes[size] / 2} />
        <div className="flex flex-col">
          <span className="font-bold text-lg text-primary-700 dark:text-primary-400">Depósito</span>
          <span className="font-semibold text-base text-primary-600 dark:text-primary-500">Serra do Félix</span>
        </div>
      </div>
    </div>
  );
};

export default Logo;
