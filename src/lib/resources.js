var questions = require('../lib/questions.js');
/**
 * When editing your questions pay attention to your punctuation. Make sure you use question marks or periods.
 * Make sure the first answer is the correct one. Set at least ANSWER_COUNT answers, any extras will be shuffled in.
 */
module.exports = {
	en: {
		translation: {
			QUESTIONS: questions['questions'],
			GAME_NAME: 'Latter-day Trivia', // Be sure to change this for your skill.
			HELP_MESSAGE:
				'I will ask you %s questions. Respond with a phrase like, ' +
					'For example, say, is it Gordon B Hinckley? Or, the answer is 1985. ' +
					'To start a new game at any time, say, start game. ',
			REPEAT_QUESTION_MESSAGE: 'To repeat the last question, say, repeat. ',
			ASK_MESSAGE_START: 'Would you like to start playing?',
			HELP_REPROMPT: "To give an answer to a question, respond with a phrase like, 'Is it Joseph Smith?'. ",
			STOP_MESSAGE: 'Would you like to keep playing?',
			CANCEL_MESSAGE: "Ok, let's play again soon.",
			NO_MESSAGE: "Ok, we'll play another time. Goodbye!",
			TRIVIA_UNHANDLED: 'Try saying an answer phrase.',
			HELP_UNHANDLED: 'Say yes to continue, or no to end the game.',
			START_UNHANDLED: 'Say start to start a new game.',
			NEW_GAME_MESSAGE: 'Welcome to %s. ',
			WELCOME_MESSAGE: 'I will ask you %s questions, try to get as many right as you can. ',
			ANSWER_CORRECT_MESSAGE: 'correct. ',
			ANSWER_WRONG_MESSAGE: 'wrong. ',
			CORRECT_ANSWER_MESSAGE: 'The correct answer is: %s. ',
			ANSWER_IS_MESSAGE: 'That answer is ',
			TELL_QUESTION_MESSAGE: 'Question %s. %s ',
			GAME_OVER_MESSAGE: 'You got %s out of %s questions correct. Thank you for playing LDS Trivia!',
			SCORE_IS_MESSAGE: 'Your score is %s. '
		}
	},
	'en-US': {
		translation: {
			QUESTIONS: questions['questions'],
			SOURCES: questions['sources'],
			GAME_NAME: 'Latter-day Trivia' // Be sure to change this for your skill.
		}
	}
};
