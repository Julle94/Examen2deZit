angular.module('examen.services', [])

.factory('Answers', function(){
	return{
		Store: function(){
			var answers = [
				{
					id: 0,
					answer: 'It is decidedly so',
					count: 0
				},
				{
					id: 1,
					answer: 'It is certain',
					count: 0
				},
				{
					id: 2,
					answer: 'Without a doubt',
					count: 0
				},
				{
					id: 3,
					answer: 'Yes definitely',
					count: 0
				},
				{
					id: 4,
					answer: 'You may rely on it',
					count: 0
				},
				{
					id: 5,
					answer: 'As I see it, yes',
					count: 0
				},
				{
					id: 6,
					answer: 'Most likely',
					count: 0
				},
				{
					id: 7,
					answer: 'Outlook good',
					count: 0
				},
				{
					id: 8,
					answer: 'Yes',
					count: 0
				},
				{
					id: 9,
					answer: 'Signs point to yes',
					count: 0
				},
				{
					id: 10,
					answer: 'Reply hazy try again',
					count: 0
				},
				{
					id: 11,
					answer: 'Ask again later',
					count: 0
				},
				{
					id: 12,
					answer: 'Better not tell you now',
					count: 0
				},{
					id: 13,
					answer: 'Cannot predict now',
					count: 0
				},
				{
					id: 14,
					answer: 'Concentrate and ask again',
					count: 0
				},
				{
					id: 15,
					answer: 'Don\'t count on it',
					count: 0
				},{
					id: 16,
					answer: 'My reply is no',
					count: 0
				},
				{
					id: 17,
					answer: 'My sources say no',
					count: 0
				},
				{
					id: 18,
					answer: 'Outlook not so good',
					count: 0
				},
				{
					id: 19,
					answer: 'Very doubtful',
					count: 0
				}
				
			]
			save(answers);
			
		},
		all: function(){
			var answers = window.localStorage['answers'];
			return angular.fromJson(answers);
		},
		save: function(answers){
			window.localStorage['answers'] = angular.toJson(answers);
		},
		getIndex: function(){
			return parseInt(window.localStorage['answers.id']) || 0;
		},
		addCount: function(id){
			var answer = getIndex();
			answer.count = answer.count +1;
			save(answers);
		},
		firstUse(){
			var answers = window.localStorage['answers'];
			var ans = angular.fromJson(answers);
			var newA = [];
			for(i=0; i<=ans.length; i++){
				if(ans.count ==0)
					newA.push(ans[i]);
				
			}
			if (newA){
				var random = Math.floor(Math.random() * newA.length);
				Answers.addCount();
				return newA[random];
			}
			else {
				var random = Math.floor(Math.random() * ans.length);
				Answers.addCount();
				return ans[random];
			} ;
		}		
	}
})

.factory('Questions', function(){
	return{
		all: function(){
			var questionString = window.localStorage['questions'];
			if(questionString) {
				return angular.fromJson(questionString);
			}
			return [];
		},
		save: function(questions){
			window.localStorage['questions'] = angular.toJson(questions);
		},
		newQuestion: function(q){
			return {
				question: q,
				answers: []
			};
		}
	}
})