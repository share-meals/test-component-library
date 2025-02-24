// src/components/Button/Button.tsx
import React from 'react';
import { IonButton } from '@ionic/react';

interface ButtonProps {
  color?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ color = 'primary', onClick, children }) => {
  return (
    <IonButton color={color} onClick={onClick}>
      hello world {children}
    </IonButton>
  );
};
