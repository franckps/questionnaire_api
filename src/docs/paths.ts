import {
  loginPath,
  signUpPath,
  mePath,
  questionnairePath,
  questionnaireDetailsPath,
  questionnaireDataPath,
  questionnaireDataDetailsPath,
  questionPath,
  questionDetailsPath,
  answerOptionPath,
  answerOptionDetailsPath,
  answerPath,
  answerDetailsPath,
  applierPath,
  applierDetailsPath,
  devicePath,
  deviceDetailsPath,
  audioUploadPath,
  healthCheckPath,
} from './paths/';
export default {
  '/login': loginPath,
  '/signup': signUpPath,
  '/me': mePath,
  '/questionnaires': questionnairePath,
  '/questionnaires/{id}': questionnaireDetailsPath,
  '/questionnaire_data': questionnaireDataPath,
  '/questionnaire_data/{id}': questionnaireDataDetailsPath,
  '/questions': questionPath,
  '/questions/{id}': questionDetailsPath,
  '/answer_options': answerOptionPath,
  '/answer_options/{id}': answerOptionDetailsPath,
  '/answers': answerPath,
  '/answers/{id}': answerDetailsPath,
  '/appliers': applierPath,
  '/appliers/{id}': applierDetailsPath,
  '/devices': devicePath,
  '/devices/{id}': deviceDetailsPath,
  '/upload/audio': audioUploadPath,
  '/healthcheck': healthCheckPath,
};
