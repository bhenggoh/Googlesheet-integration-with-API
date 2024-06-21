window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  const apiUrl = 'https://script.google.com/macros/s/AKfycbx6ewxUMg_zkjtvfAElHL9CCDoNigc4jvYqGGV9I6ErIg-ygRSAhCoA_y4N-BdXMzRt/exec';
const data = {
  count: '25',
  type: 'swim',
};

/*
UseCors(x => x
                    .AllowAnyMethod()
                    .AllowAnyHeader()
                    .SetIsOriginAllowed(origin => true) // allow any origin
                    .AllowCredentials()); // allow credentials
*/

const requestOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
//	'Access-Control-Allow-Headers':
//		'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
//    'Access-Control-Allow-Methods': 'OPTIONS,POST',
//    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Origin': '*',
//    'X-Requested-With': '*',
  },
  body: JSON.stringify(data),
};


fetch(apiUrl, requestOptions)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    outputElement.textContent = JSON.stringify(data, null, 2);
  })
  .catch(error => {
    console.error

('Error:', error);
  });
}

};
