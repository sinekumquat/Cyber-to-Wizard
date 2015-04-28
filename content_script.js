$('body').find('*').contents().filter(function() { return (this.nodeType === 3) }).each(function(i, elm) {
  if(this.textContent.match(/(cyber)|(Cyber\-)|(Cyber )|([sS]pyware)|([mM]alware)|(Trojan [hH]orse)|(hacking)|(Hacking)|(hacker)|(hackers)|(Hacker)|(Hackers)|/g)) {
    this.textContent = this.textContent
      .replace(/cyber/g, '<span class=\"rainbow\">wizard</span>')
      .replace(/Cyber /g, '<span class=\"rainbow\">Wizard </span>')
      .replace(/Cyber-/g, '<span class=\"rainbow\">Wizard-</span>')
      .replace(/spyware/g, '<span class=\"rainbow\">jinx</span>')
      .replace(/Spyware/g, '<span class=\"rainbow\">Jinx</span>')
      .replace(/malware/g, '<span class=\"rainbow\">hex</span>')
      .replace(/Malware/g, '<span class=\"rainbow\">Hex</span>')
      .replace(/virus/g, '<span class=\"rainbow\">curse</span>')
      .replace(/Virus/g, '<span class=\"rainbow\">Curse</span>')
      .replace(/Trojan [Hh]orse/g, '<span class=\"rainbow\">Magic Missile</span'),
      .replace(/hacking/g, '<span class=\"rainbow\">sorcery</span>')
      .replace(/Hacking/g, '<span class=\"rainbow\">Sorcery</span>')
      .replace(/hackers/g, '<span class=\"rainbow\">sorcerers</span>')
      .replace(/hacker/g, '<span class=\"rainbow\">sorcerer</span>')
      .replace(/Hackers/g, '<span class=\"rainbow\">Sorcerers</span>')
      .replace(/Hacker/g, '<span class=\"rainbow\">Sorcerer</span>');

    this.parentNode.replaceChild($('<span>'+this.textContent+'</span>')[0], this)
  }
});
