import React, { useState, useEffect } from 'react';

const Popping: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Open the pop-up after 5 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    // Clean up the timer on unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            padding: '20px',
            border: '1px solid black',
          }}
        >
          <h2>Hi there!</h2>
          <p>Thanks for visiting our website.</p>
        </div>
      )}
    </>
  );
};

export default Popping
