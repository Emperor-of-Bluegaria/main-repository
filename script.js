'use strict'; 

// Alert on entry
/*
let termsConfirmationMsg = `WARNING! Unauthorized use of this repository is a federal level offence and is subject to punishment by death! If you understand this term, type "yes". If you do not agree to this term, click cancel.`
let termsConfirmation = prompt(termsConfirmationMsg);

if (termsConfirmation === 'yes' || termsConfirmation === 'Yes' || termsConfirmation === 'YES') 
{
    alert('You have confirmed that you understand the term of use.')
}else {
    window.location.href = 'https://bluegarian-advanced-technologies.github.io/Connection-Terminated/';
}
*/

document.getElementById("DOM").addEventListener("contextmenu", function(e) 
{
    e.preventDefault();
},false);


//Change entryImg height to full screen height

let windowHeight = window.innerHeight;
document.getElementById('entryImg').style.height = windowHeight + 'px';

// Password system of Advanced Technologies

let passwordTimeout = 0;

document.getElementById('askPass').addEventListener('click', function()
{
    var passwordInputed = document.getElementById('passwordInput').value;
    if (passwordInputed === 'glorytothebluegarianempire')
        {
            observerGlobal.disconnect();
      //      document.getElementById('DOM').removeEventListener("contextmenu", );
            
            alert('Correct password, now initiating second factor authentication...');

            document.getElementById('passwordInput').value = '';

            document.getElementById('secondFactorAuth').style.display = 'block';
            document.getElementById('secondFactorAuth').scrollIntoView();

            setTimeout(function(){
                observerGlobal.disconnect();
                document.getElementById('meme').style.cursor = 'pointer';

                document.getElementById('meme').addEventListener('click', function()
                {
                    document.getElementById('secondFactorAuth').style.display = 'none';
                    document.getElementById('login').style.display = 'none';
                    document.getElementById('entryImg').style.display = 'none';
                    document.getElementById('files').style.display = 'block';

                    // Context menu

                    window.addEventListener("contextmenu",function(event)
                    {
                        event.preventDefault();
                        var contextElement = document.getElementById("context-menu");
                        contextElement.style.top = event.offsetY + "px";
                        contextElement.style.left = event.offsetX + "px";
                        contextElement.classList.add("active");
                    });
                    window.addEventListener("click",function(){
                        document.getElementById("context-menu").classList.remove("active");
                    });
                })
            }, 1500);
        } else if (passwordInputed === '')
            {
            alert('No password given');
        } else 
            {
                observerGlobal.disconnect();

                alert('INCORRECT PASSWORD!');
                console.log('The password was incorrect');
                passwordTimeout++;

                function playIncorrectSound()
                {
                    let incSoundSrc = document.getElementById('incorrectPassword');
                    incSoundSrc.play();
                }playIncorrectSound();

                document.getElementById('login').style.backgroundColor = 'red';
                setTimeout(function()
                {
                    document.getElementById('login').style.backgroundColor = 'transparent';
                }, 550);

                setTimeout(function()
                {
                    observerGlobal.observe(targetNodeGlobal, configGlobal);
                }, 600)
            };

            if (passwordTimeout > 1)
            {
                document.getElementById('if2Fails').innerHTML = '(Last attempt at password)';
            }

            if (passwordTimeout > 2) 
            {
                alert('YOU HAVE FAILED ALL 3 ATTEMPS AT THE PASSWORD! MTF TEAMS ARE ENROUTE TO YOUR LOCATION NOW! PREPARE TO BE TERMINATED YOU DISGRACE!');
                document.querySelector('body').style = 'background-color: red;';
                document.getElementById('login').style.display = 'none';
                document.getElementById('entryImg').style.display = 'none';
                document.querySelector('footer').style.display = 'none';
            };
});

// Observe DOM and prevent changes to attributes and tags using mutation observer

let observerGlobal;
let targetNodeGlobal;
let configGlobal;

function overWriteDOM() 
{
    document.write('<h1 style="color:red;text-align:center;font-weight:bold;font-size:70px;display:block;background-color:yellow;">INVALID OPERATION! YOU ARE NOT ALLOWED TO MODIFY THE DOM!</h1>');
}

setTimeout(function()
{
const targetNode = document.getElementById('DOM');
const config = { attributes: true, childList: true, subtree: true };

const callback = function(mutationsList, observer)
    {
    for(const mutation of mutationsList) {
        if (mutation.type === 'childList') 
        {
            overWriteDOM();
        }   else if (mutation.type === 'attributes')
            {
                overWriteDOM();
            }   else if (mutation.type === 'subtree')
                {
                    overWriteDOM();
                };
    };
};

const observer = new MutationObserver(callback);
observer.observe(targetNode, config);

observerGlobal = observer;
targetNodeGlobal = targetNode;
configGlobal = config;
}, 100);

// -------------- Main files folders JS ------------------------------------------------------
//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------

document.getElementById('backTopBtn').addEventListener('click', function()
{
    window.scrollTo(0,0)
});