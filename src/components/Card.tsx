import React from 'react';

interface CardProps {
  title: string;
  children: React.ReactNode;
}

/**
 * Cardコンポーネント
 * 
 * このコンポーネントには、リントで検出されるべき生の値が含まれています：
 * - カラー値: #ffffff, #e5e5e5, #333333
 * - ピクセル値: 20px, 16px, 12px, 4px
 * - フォントサイズ: 18px, 14px
 */
export const Card: React.FC<CardProps> = ({ title, children }) => {
  const cardStyle: React.CSSProperties = {
    backgroundColor: '#ffffff',
    border: '1px solid #e5e5e5',
    borderRadius: '12px',
    padding: '20px',
    marginBottom: '16px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '18px',
    fontWeight: 600,
    color: '#333333',
    marginBottom: '12px',
    paddingLeft: '4px',
  };

  const contentStyle: React.CSSProperties = {
    fontSize: '14px',
    lineHeight: 1.6,
    color: '#666666',
  };

  return (
    <div style={cardStyle}>
      <h3 style={titleStyle}>{title}</h3>
      <div style={contentStyle}>{children}</div>
    </div>
  );
};

