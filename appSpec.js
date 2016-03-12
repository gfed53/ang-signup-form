describe('optIn', function(){
	var scope,
		content,
		element,
		compiled,
		html;

	beforeEach(module("myApp"));
	beforeEach(module("temp.html"));
	beforeEach(inject(function($rootScope, $compile) {
		scope = $rootScope.$new();
		content = "content";
		html = "<opt-in> <div class="+content+"></div></opt-in>";
		compiled = $compile(html);
		element = compiled(scope);
		scope.$digest();
	}));
	it('should render element, displaying all 4 inputs within, and transclude div element properly', function(){
		expect(element.find('input').length).toBe(4);
		expect(element.find("div[class='" + content +"']")).toBeTruthy();
	});
});

