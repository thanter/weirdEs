/*
As stated previously, js is single threaded and synchronous.
That means it executes one line at a time and only one.

While the JS engine runs in the browser, there are other 'engines'
running as well. For example, rendering engine or HTTP requests etc.
These are the browser's job, it's not javascript. Javascript just 
has 'hooks' to these engines.

For example,
the browser holds an Event Queue. This is a queue where each event
generated in the browser is put on. eg click, load, etc

How does javascript handles/understands these events?
When the global execution context has finished EVERYTHING, this means
it has nothing else to do, then JS looks at the Events queue and decides
how to handle each event. Based on if there exists a dedicated hanler for this event.

SUM
JS first finishes all execution
the looks at the event queue.

*/
function waitThreeSeconds() {
	var ms = 3000 + new Date().getTime();
	while (new Date() < ms){
	}
	console.log('finished waiting');

}

function clickHandler() {
	console.log('CLICKED');
}

document.addEventListener('click', clickHandler);

waitThreeSeconds();
console.log("PROGRAM DONE");