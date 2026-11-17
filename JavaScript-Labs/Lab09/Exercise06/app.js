window.addEventListener('load', () => {
  const divs = document.querySelectorAll('.movingDiv');
  divs.forEach((div) => div.addEventListener('mouseover', (event) => {
    const message = 'mouseover target id=' + event.target.id + ' · tag=' + event.target.tagName + ' · type=' + event.type;
    document.getElementById('event-output').textContent = message;
    console.log('Exercise 9.6 event:', event, 'target:', event.target);
  }));
});
