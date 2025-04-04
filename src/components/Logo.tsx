import React from 'react';
import { GameMode } from '../game/types';
import TriFactaCard from './TriFacta/TriFactaCard';

interface LogoProps {
  size?: number;
  gameMode: GameMode;
}

export const Logo: React.FC<LogoProps> = ({ size = 600, gameMode }) => {
  const value = gameMode === GameMode.ADDITION ? 9 : 20;
  return (
    <div className="relative mx-auto" style={{ width: size }}>
      <TriFactaCard topNumber={value} leftNumber={5} rightNumber={4} gameMode={gameMode} />
    </div>
  );
};
