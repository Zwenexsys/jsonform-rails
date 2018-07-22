var $tests = $('.tests');
var idx = 0; //or enter the index like before. ex.: 5
var limit = (idx == 0 ? tests.length - 1 : idx);

for (idx; idx <= limit; idx++) {
    let curJsonform = tests[idx].jsonform;
    
    if (!curJsonform.form) {
      curJsonform.form = ['*'];
    }
    curJsonform.form.push({
      type: 'actions',
      items: [
        {
          type: 'submit',
          value: 'Submit'
        }
      ]
    });
    curJsonform.onSubmit = function (errors, values) {
      console.log(errors, values);
    };
    
    let testWrapper = $(`<div class="test-wrapper test-wrapper--${idx}"></div>`).appendTo($tests);
    $(`<h1>Test ${idx}: "<span class="test-name">${tests[idx].name}</span>"</h1>`).appendTo(testWrapper);
    $(`<form id="testform-${idx}" class="form-vertical"></form>`)
        .appendTo(testWrapper)
        .jsonForm(curJsonform);
}
