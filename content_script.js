$('body').find('*').contents().filter(function() { return (this.nodeType === 3) }).each(function(i, elm) {
  if(this.textContent.match(/(cyber)|(Cyber\-)|(Cyber )|(hacking)|(Hacking)|(hacker)|(hackers)|(Hacker)|(Hackers)|/g)) {
    this.textContent = this.textContent
      .replace(/cyber/g, '<span class=\"rainbow\">wizard</span>')
      .replace(/Cyber /g, '<span class=\"rainbow\">Wizard </span>')
      .replace(/Cyber-/g, '<span class=\"rainbow\">Wizard-</span>')
      .replace(/hacking/g, '<span class=\"rainbow\">sorcery</span>')
      .replace(/Hacking/g, '<span class=\"rainbow\">Sorcery</span>')
      .replace(/hackers/g, '<span class=\"rainbow\">sorcerers</span>')
      .replace(/hacker/g, '<span class=\"rainbow\">sorcerer</span>')
      .replace(/Hackers/g, '<span class=\"rainbow\">Sorcerers</span>')
      .replace(/Hacker/g, '<span class=\"rainbow\">Sorcerer</span>');

    this.parentNode.replaceChild($('<span>'+this.textContent+'</span>')[0], this)
  }
});
