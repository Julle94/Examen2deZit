angular.module('examen.controllers', [])

.controller('ExamenController', function($scope, Questions, Answers) {
	var createQuestion = function(q) {
		var newQ = Questions.newQuestion(q);
		$scope.questions.push(newQ);
		Questions.save($scope.questions);
	}
	
	$scope.questions = Questions.all();
	
	function getAnswer() {
		var answers = Answers.all();
		var ok = Answers.firstUse();			
		return ok;
		
	}
	$scope.answer = getAnswer();
})