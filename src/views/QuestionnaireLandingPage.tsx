import React from 'react';

import { QuestionnaireLandingPageWithHomeBanner } from '../components';
import '../styles/questionnaire.scss'

interface QuestionnaireProps {
  // Add your component's props here
}

const Questionnaire: React.FC<QuestionnaireProps> = (props) => {
  return (
    <QuestionnaireLandingPageWithHomeBanner/>
  );
};

export default Questionnaire;