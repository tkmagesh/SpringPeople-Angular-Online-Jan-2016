describe("Greeter", function(){
	beforeEach(module("myApp.greet"));

	describe("greetController", function(){
		it("Should initialize name with emptry string", inject(function($controller){
			var dummyScope = {};
			$controller("greetController", {$scope : dummyScope});

			expect(dummyScope.name).toBe('');
		}));
		it("Should initialize message with emptry string", inject(function($controller){
			var dummyScope = {};
			$controller("greetController", {$scope : dummyScope});

			expect(dummyScope.message).toBe('');
		}));
		it("Should populate message when greeted", inject(function($controller){
			var dummyScope = {};
			$controller("greetController", {$scope : dummyScope});
			dummyScope.name = 'Magesh';
			dummyScope.greet();
			expect(dummyScope.message).toBe('Hi Magesh, Have a nice day!');
		}));
	});
	describe("trimText Filter", function(){
		it("Should return the given string when length less than 20", inject(function($filter){
			var shortString = 'abc',
				expectedResult = 'abc'

			var trimTextFilter = $filter('trimText');
			var result = trimTextFilter(shortString);
			expect(result).toBe(expectedResult);
		}));
		it("Should return truncated string when length greater than 20", inject(function($filter){
			var longString = 'This is a reasably long string for testing',
				expectedResult = 'This is a reasably l...';

			var trimTextFilter = $filter('trimText');
			var result = trimTextFilter(longString);
			expect(result).toBe(expectedResult);
		}));
	});
})