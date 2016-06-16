(function() {
  var pr;

  pr = {
    t: {
      c: 0,
      ob: ['cust dev', 'problematic interview', 'prototyping', 'testing', 'first sale', 'interview', 'unit', 'optimization', 'hadi']
    },
    any: {
      c: 0,
      ob: ['global innovation', 'design research', 'Design Products Research', 'Innovation Design Engineering Research', '<bold>Research Degrees in the School of Design</bold>']
    },
    wow: {
      c: 0,
      ob: ['Some projects may be ‘real world’ projects giving the opportunity to locate work in a specific context', 'Design Through Making', '“Internet of Things”, exhibition design and installations', 'This Platform explores and plays with tomorrow’s present, making manifest the ideas and theories of others as well as adding our own, through experimentation, prototyping, possible products and object oriented narratives.', 'Networked design']
    }
  };

  $('#logo').on('mouseover', function() {
    return $(this).text('rolyan colledhe of art');
  });

  $('#logo').on('mouseout', function() {
    return $(this).text('RCA');
  });

  $('.block').on('click', function() {
    var prg;
    prg = $(this).attr('pr') ? pr[$(this).attr('pr')] : 0;
    if (prg && prg.ob[prg.c]) {
      $(this).append('<p class="s">' + prg.ob[prg.c] + '</p>');
      return prg.c += 1;
    }
  });

}).call(this);