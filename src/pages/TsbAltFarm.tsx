
import React, { useEffect } from 'react';

const TsbAltFarm = () => {
  useEffect(() => {
    // This will make it harder for normal users to see the content
    // by disabling right-click and selection
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };
    
    const handleSelectStart = (e: Event) => {
      e.preventDefault();
    };
    
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('selectstart', handleSelectStart);
    
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('selectstart', handleSelectStart);
    };
  }, []);

  return (
    <pre 
      style={{ 
        fontFamily: 'monospace',
        whiteSpace: 'pre-wrap',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        msUserSelect: 'none'
      }}
    >
      print("hello")
    </pre>
  );
};

export default TsbAltFarm;
