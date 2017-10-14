var Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);


    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },

    'GetNewFactIntent': function () {
        var say = 'Hello Ryan! Lets begin studying for our exam!' + getFact();
        this.emit(':tell', say );
    },

    'AMAZON.HelpIntent': function () {
         this.emit(':ask', 'Learn everything you need to know about Amazon Web Services to pass your exam by listening to your very own study notes. You can start by saying, Ryan help me study.', 'try again');
     },

     'AMAZON.CancelIntent': function () {
         this.emit(':tell', 'Goodbye Cloud Gurus');
     },

     'AMAZON.StopIntent': function () {
         this.emit(':tell', 'Goodbye Cloud Gurus');
     }
};

//  helper functions  ===================================================================


function getFact() {
    var myFacts = [
    '<audio src=\"https://s3.amazonaws.com/acloudgury-pollyaudiofiles-rl/3d6b855c-5719-4e1b-b147-e85f18e027a3.mp3" />\'',
    '<audio src=\"https://s3.amazonaws.com/acloudgury-pollyaudiofiles-rl/ffe397ff-bf5f-41bc-a6c3-8e5ac8943ba2.mp3" />\'',
    '<audio src=\"https://s3.amazonaws.com/acloudgury-pollyaudiofiles-rl/a58ab7a7-7e42-403a-a270-0ff1bbc2d886.mp3" />\''
        ]

    var newFact = randomPhrase(myFacts);

    return newFact;
}

function randomPhrase(array) {
    // the argument is an array [] of words or phrases
    var i = 0;
    i = Math.floor(Math.random() * array.length);
    return(array[i]);
}