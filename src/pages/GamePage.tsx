import React from 'react';
import { useTranslation } from 'react-i18next';
import { observer } from 'mobx-react-lite';
import { Header } from '../components/game/Header';
import { PlayerArea } from '../components/game/PlayerArea';
import { GameCenter } from '../components/game/GameCenter';
import { WildcardModal } from '../components/game/WildcardModal';
import { GameStore } from '../stores/GameStore';
import { useTheme } from '../hooks/useTheme';
import { useToast } from '../components/ToastProvider';
import { router } from '../router';

interface ToastOptions {
  title?: string;
  description: string;
  status?: 'info' | 'warning' | 'success' | 'error';
  duration?: number;
  isClosable?: boolean;
}

export const GamePage = observer(() => {
  const { t } = useTranslation();
  const store = GameStore.getInstance();
  const { theme } = useTheme();
  const { showToast } = useToast();

  const currentPlayerBorderColor = theme === 'dark' ? 'border-blue-300' : 'border-blue-500';

  React.useEffect(() => {
    store.setToast((options: ToastOptions) => {
      const translatedDescription = t(options.description);
      showToast({
        ...options,
        description: translatedDescription,
      });
    });
  }, [store, t, showToast]);

  const handleExit = () => {
    router.navigate('/');
  };

  return (
    <div className="container mx-auto max-w-4xl py-8 px-4 h-full overflow-hidden flex flex-col">
      <div className="flex flex-col space-y-8 flex-1 overflow-auto">
        <Header onExit={handleExit} />

        <PlayerArea currentPlayerBorderColor={currentPlayerBorderColor} />

        <GameCenter store={store} />
      </div>

      <WildcardModal
        isOpen={store.isWildcardModalOpen}
        onClose={() => store.closeWildcardModal()}
        onChange={(value) => store.setWildcardValueInput(+value)}
        onConfirm={() => store.setWildcardValue()}
      />
    </div>
  );
});
