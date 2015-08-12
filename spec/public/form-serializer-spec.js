describe("Dom Test", function() {
  var form;
  var testContainer;

  beforeEach(function() {
    var testContainerDiv = document.createElement("div");
    testContainerDiv.id = "test-container";
    document.body.appendChild(testContainerDiv);

    testContainer = document.getElementById('test-container');

    testContainer.innerHTML = "<form>" +
      "1.填空题：<br />" +
      "<input type='text' name='Q-1-1' value='统一建模语言'/><br />" +
      "<input type='text' name='Q-1-2' value='继承性'/><br />" +
      "<input type='text' name='Q-1-2' value='封装性'/><br />" +
      "<input type='text' name='Q-1-2' value='多态性'/><br />" +
      "2.单选题：<br />" +
      "<input type='radio' name='Q-2-1' value='A' /><br />" +
      "<input type='radio' name='Q-2-1' value='B' /><br />" +
      "<input type='radio' name='Q-2-1' value='C' /><br />" +
      "<input type='radio' name='Q-2-1' value='D' checked='true' /><br />" +
      "3.多选题：<br />" +
      "<input type='checkbox' name='Q-3-1' value='A' checked='true' /><br />" +
      "<input type='checkbox' name='Q-3-1' value='B' checked='true' /><br />" +
      "<input type='checkbox' name='Q-3-1' value='C' /><br />" +
      "<input type='checkbox' name='Q-3-1' value='D' checked='true' /><br />" +
      "4.判断题：<br />" +
      "<input type='radio' name='Q-4-1' value='V' /><br />" +
      "<input type='radio' name='Q-4-1' value='X'  checked='true' /><br />" +
      "5.简答题：<br />" +
      "<textarea name='test-5-1' rows='4' cols='20' >你是不是不好</textarea>" +
      "</form>";
    form = document.getElementsByTagName('form')[0];
  });

  afterEach(function() {
    testContainer.innerHTML = "";
  });

  it("should return correct final score.", function() {
    var theFormAnalyser = new FormAnalyser();
    var result = theFormAnalyser.formSerializer(form);
    var finalScore = theFormAnalyser.getFinalScore();
    expect(finalScore).toBe(10);
  });
});
