import {
  accountSchema,
  errorSchema,
  loginParamsSchema,
  accessTokenSchema,
  signUpParamsSchema,
  questionnaireParamsSchema,
  questionnaireDataParamsSchema,
  questionParamsSchema,
  answerOptionParamsSchema,
  answerParamsSchema,
  applierParamsSchema,
  deviceParamsSchema,
  questionnaireSchema,
  questionnaireCreationSchema,
  questionnaireDataSchema,
  questionnaireDataPostSchema,
  questionSchema,
  questionCreationSchema,
  answerOptionSchema,
  answerSchema,
  answerCreationSchema,
  applierSchema,
  deviceSchema,
  audioUploadSchema,
  healthCheckSchema,
} from './schemas/';

export default {
  signUpParams: signUpParamsSchema,
  loginParams: loginParamsSchema,
  questionnaireParams: questionnaireParamsSchema,
  questionnaireDataParams: questionnaireDataParamsSchema,
  questionParams: questionParamsSchema,
  answerOptionParams: answerOptionParamsSchema,
  answerParams: answerParamsSchema,
  applierParams: applierParamsSchema,
  deviceParams: deviceParamsSchema,

  questionnaire: questionnaireSchema,
  questionnaireCreation: questionnaireCreationSchema,
  questionnaireData: questionnaireDataSchema,
  questionnaireDataCreation: questionnaireDataPostSchema,
  question: questionSchema,
  questionCreation: questionCreationSchema,
  answerOption: answerOptionSchema,
  answer: answerSchema,
  answerCreation: answerCreationSchema,
  applier: applierSchema,
  device: deviceSchema,
  account: accountSchema,
  accessToken: accessTokenSchema,
  audioUpload: audioUploadSchema,
  healthCheck: healthCheckSchema,
  error: errorSchema,
};
