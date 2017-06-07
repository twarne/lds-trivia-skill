var jsonpointer = require('jsonpointer'),
	_ = require('lodash'),
	ordinal = require('ordinal');

var constants = require('../lib/constants.js');

function populateGameQuestions(translatedQuestions) {
	var gameQuestions = [];
	var indexList = [];
	var index = translatedQuestions.length;

	if (constants.GAME_LENGTH > index) {
		throw new Error('Invalid Game Length.');
	}

	for (var i = 0; i < translatedQuestions.length; i++) {
		indexList.push(i);
	}

	// Pick constants.GAME_LENGTH random questions from the list to ask the user, make sure there are no repeats.
	for (var j = 0; j < constants.GAME_LENGTH; j++) {
		var rand = Math.floor(Math.random() * index);
		index -= 1;

		var temp = indexList[index];
		indexList[index] = indexList[rand];
		indexList[rand] = temp;
		gameQuestions.push(indexList[index]);
	}

	return gameQuestions;
}

function populateQuestionSources(translatedQuestions, gameQuestions, translatedSources) {
	var questionSources = [];
	var i = 0;
	var missed = 0;
	while (questionSources.length < gameQuestions.length) {
		var question = translatedQuestions[gameQuestions[i]];
		console.log('Finding source for: %j', question);
		var questionSourceType = question.source;
		var rand = Math.floor(Math.random() * translatedSources[questionSourceType].length);
		var source = translatedSources[questionSourceType][rand];
		if (jsonpointer.get(source, question.answer)) {
			questionSources.push(rand);
			i++;
			missed = 0;
		} else {
			missed++;
			if (missed == translatedSources[questionSourceType].length) {
				console.log('Failed to find a %s source with %s', questionSourceType, question.answer);
				return null;
			}
		}
	}
	return questionSources;
}

function isAnswerCorrect(
	translatedQuestions,
	gameQuestions,
	sources,
	questionSources,
	currentQuestionIndex,
	answerValue
) {
	if (answerValue === null) {
		console.log('No answer value found.');
		return false;
	}
	console.log('Provided answer: ' + answerValue);
	var correctAnswer = getCorrectAnswer(
		translatedQuestions,
		gameQuestions,
		sources,
		questionSources,
		currentQuestionIndex
	);
	console.log('Correct answer: ' + correctAnswer);
	if (_.isArray(correctAnswer)) {
		for (var i = 0; i < correctAnswer.length; i++) {
			console.log('Comparing ' + answerValue + ' to ' + correctAnswer[i]);
			if (_.lowerCase(answerValue) == _.lowerCase(correctAnswer[i])) {
				return true;
			}
		}
		return false;
	} else {
		console.log('Comparing ' + answerValue + ' to ' + correctAnswer);
		return _.lowerCase(answerValue) == _.lowerCase(correctAnswer);
	}
}

function getCorrectAnswerText(translatedQuestions, gameQuestions, sources, questionSources, currentQuestionIndex) {
	var answer = getCorrectAnswer(translatedQuestions, gameQuestions, sources, questionSources, currentQuestionIndex);
	if (_.isArray(answer)) {
		return answer[0];
	} else {
		return answer;
	}
}

function getCorrectAnswer(translatedQuestions, gameQuestions, sources, questionSources, currentQuestionIndex) {
	var question = translatedQuestions[gameQuestions[currentQuestionIndex]];
	var source = sources[question.source][questionSources[currentQuestionIndex]];
	var answer = jsonpointer.get(source, question.answer);
	return answer;
}

function getQuestionText(translatedQuestions, gameQuestions, sources, questionSources, currentQuestionIndex) {
	var question = translatedQuestions[gameQuestions[currentQuestionIndex]];
	var source = sources[question.source][questionSources[currentQuestionIndex]];
	var baseText = question.questionText;
	console.log('Resolving source value for question: ' + baseText);
	var sourceKeyRegex = /\{([\w_\/]+)\}/;
	var sourceKey = _.toString(sourceKeyRegex.exec(baseText)[1]);
	console.log('Found source key ' + sourceKey + ' (' + typeof sourceKey + ')');
	var sourceValueText;
	if (sourceKey == '_index') {
		sourceValueText = ordinal(questionSources[currentQuestionIndex] + 1);
	} else {
		console.log('Resolving key against source: ');
		console.log(source);
		var sourceValue = jsonpointer.get(source, sourceKey);

		if (_.isArray(sourceValue)) {
			var rand = Math.floor(Math.random() * sourceValue.length);
			sourceValueText = sourceValue[rand];
		} else {
			sourceValueText = sourceValue;
		}
	}
	var questionText = baseText.replace(sourceKeyRegex, sourceValueText);
	return questionText;
}

function getAnswerSlotValue(intent) {
	var answerSlotFilled = intent && intent.slots && intent.slots.Answer && intent.slots.Answer.value;
	if (answerSlotFilled) {
		return intent.slots.Answer.value;
	} else {
		return null;
	}
}

module.exports = {
	getCorrectAnswer: getCorrectAnswer,
	getCorrectAnswerText: getCorrectAnswerText,
	isAnswerCorrect: isAnswerCorrect,
	getQuestionText: getQuestionText,
	getAnswerSlotValue: getAnswerSlotValue,
	populateQuestionSources: populateQuestionSources,
	populateGameQuestions: populateGameQuestions
};
