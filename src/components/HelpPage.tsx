import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  List,
  ListItem,
  ListIcon,
  Divider,
  useColorModeValue,
  IconButton,
  Button,
} from '@chakra-ui/react';
import { CheckIcon, ArrowBackIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import TriFactaCard from './TriFactaCard';
import { GameMode } from '../game/types';

const HelpPage: React.FC = () => {
  const textColor = useColorModeValue('gray.700', 'gray.200');
  const headingColor = useColorModeValue('blue.600', 'blue.300');
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const handleBack = () => {
    navigate('/');
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'zh' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <Container maxW="container.lg" py={8}>
      <VStack spacing={8} align="stretch">
        <HStack justify="space-between">
          <IconButton
            aria-label={t('common.back')}
            icon={<ArrowBackIcon />}
            onClick={handleBack}
            variant="ghost"
            size="lg"
          />
          <Heading textAlign="center" color={headingColor} flex="1">
            {t('help.title')}
          </Heading>
          <Button
            onClick={toggleLanguage}
            variant="ghost"
            size="lg"
            aria-label={i18n.language === 'en' ? '切换到中文' : 'Switch to English'}
          >
            {i18n.language === 'en' ? '中文' : 'English'}
          </Button>
        </HStack>

        <Box>
          <Heading size="md" mb={4} color={headingColor}>
            {t('help.introduction.title')}
          </Heading>
          <Text color={textColor}>{t('help.introduction.content')}</Text>
        </Box>

        <Box>
          <Heading size="md" mb={4} color={headingColor}>
            {t('help.basicRules.title')}
          </Heading>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.500" />
              {t('help.basicRules.players')}
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.500" />
              {t('help.basicRules.duration')}
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.500" />
              {t('help.basicRules.winCondition')}
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.500" />
              {t('help.basicRules.initialCards')}
            </ListItem>
          </List>
        </Box>

        <Box>
          <Heading size="md" mb={4} color={headingColor}>
            {t('help.gameFlow.title')}
          </Heading>
          <VStack align="stretch" spacing={4}>
            <Box>
              <Text fontWeight="bold" mb={2}>
                {t('help.gameFlow.setup.title')}
              </Text>
              <Text>{t('help.gameFlow.setup.shuffle')}</Text>
              <Text>{t('help.gameFlow.setup.draw')}</Text>
            </Box>

            <Box>
              <Text fontWeight="bold" mb={2}>
                {t('help.gameFlow.turn.title')}
              </Text>
              <Text>{t('help.gameFlow.turn.replace')}</Text>
              <Text fontSize="sm" color="gray.500" ml={4}>
                {t('help.gameFlow.turn.replaceExample')}
              </Text>
              <Text>{t('help.gameFlow.turn.mathRelation')}</Text>
              <Text fontSize="sm" color="gray.500" ml={4}>
                {t('help.gameFlow.turn.mathExample')}
              </Text>
              <Text>{t('help.gameFlow.turn.priority')}</Text>
            </Box>

            <Box>
              <Text fontWeight="bold" mb={2}>
                {t('help.gameFlow.noPlay.title')}
              </Text>
              <Text>{t('help.gameFlow.noPlay.draw')}</Text>
              <Text>{t('help.gameFlow.noPlay.continue')}</Text>
              <Text>{t('help.gameFlow.noPlay.pass')}</Text>
            </Box>
          </VStack>
        </Box>

        <Box>
          <Heading size="md" mb={4} color={headingColor}>
            {t('help.examples.title')}
          </Heading>
          <HStack spacing={8} justify="center" mb={4}>
            <Box>
              <Text mb={2} textAlign="center" color={textColor}>
                {t('help.examples.additionMode')}
              </Text>
              <TriFactaCard
                topNumber={12}
                leftNumber={5}
                rightNumber={7}
                gameMode={GameMode.ADDITION}
              />
            </Box>
            <Box>
              <Text mb={2} textAlign="center" color={textColor}>
                {t('help.examples.multiplicationMode')}
              </Text>
              <TriFactaCard
                topNumber={24}
                leftNumber={6}
                rightNumber={4}
                gameMode={GameMode.MULTIPLICATION}
              />
            </Box>
          </HStack>
          <Text color={textColor}>{t('help.examples.inExamples')}</Text>
          <List spacing={2} mt={2}>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.500" />
              {t('help.examples.additionExample')}
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.500" />
              {t('help.examples.multiplicationExample')}
            </ListItem>
          </List>
        </Box>

        <Box>
          <Heading size="md" mb={4} color={headingColor}>
            {t('help.specialRules.title')}
          </Heading>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.500" />
              {t('help.specialRules.wildcardValue')}
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.500" />
              {t('help.specialRules.wildcardDeclaration')}
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.500" />
              {t('help.specialRules.wildcardPersistence')}
            </ListItem>
          </List>
        </Box>
      </VStack>
    </Container>
  );
};

export default HelpPage;
