$('body').find('*').contents().filter(function() { return (this.nodeType === 3) }).each(function(i, elm) {
  if(this.textContent.match(/(cyber)|(Cyber\-)|(Cyber )/g)) {
    this.textContent = this.textContent
      .replace(/cyber/g, '<span class=\"rainbow\">wizard</span>')
      .replace(/Cyber /g, '<span class=\"rainbow\">Wizard </span>')
      .replace(/Cyber-/g, '<span class=\"rainbow\">Wizard-</span>');

    this.parentNode.replaceChild($('<span>'+this.textContent+'</span>')[0], this)
  }
});