// Modal - JS

function modal() {

  var modal = document.getElementsByClassName('modal')[0],
      trigger = document.getElementsByClassName('modal-trigger'),
      close = document.getElementsByClassName('modal__close'); // we loops this to catch the different closers

  closeModal = function() {
    modal.classList.remove('modal--show');
    modal.classList.add('modal--hide');
    // Remove hide class after animation is done
    afterAnimation = function() {
      modal.classList.remove('modal--hide');
    }
    // This listens for the CSS animations to finish and then hides the modal
    modal.addEventListener("webkitAnimationEnd", afterAnimation, false);
    modal.addEventListener("oAnimationEnd", afterAnimation, false);
    modal.addEventListener("msAnimationEnd", afterAnimation, false);
    modal.addEventListener("animationend", afterAnimation, false);
  }

  // Open the modal
  trigger[0].onclick = function() {
    modal.classList.add('modal--show');
    document.getElementsByClassName("modalhead")[0].innerHTML = "<h2> Moon Travel </h2>";
    document.getElementsByClassName("modaltxt")[0].innerHTML = "<p>How will I get to the moon, you ask? I have recently purchased a wok. After a good shave and a probiotic yogurt, I will crawl into said wok—as gently as one might lay twice-risen dough into a ring mold, say. Then, I will seal the lid. By this time, I will have spent several months bottling high-octane shart. I run each shart through my SodaStream once a week, so they stay fresh. Because I am an overachiever, I have accumulated enough fuel for 3 round trip missions to Mars, but I do not forget: our destination is the moon. With gigatons of my carbonated wet flatulence at the ready, all there’s left to do is pray. Dear She-Hulk who art in Heaven, hallowed be thy name. Thy Kingdom come, thy will be done, La Lune will soon be blanketed in my doody-caca.</p>";
  }

  trigger[1].onclick = function() {
    modal.classList.add('modal--show');
    document.getElementsByClassName("modalhead")[0].innerHTML = "<h2> Bombs Over Uterus </h2>";
    document.getElementsByClassName("modaltxt")[0].innerHTML = "<p>I am the recipient of a uterus. I have never seen it for myself, but I know it’s inside this body somewhere below the neck area. Each month, my uterus prepares itself for a baby without hearing word that there is, in fact, a baby en route. Lady Utero puts up fancy curtains, fluffs the pillows, waiting patiently for a sperm to poach one of these here eggs. I don’t speak Uteran, so I can’t tell her Doll, if you’d take a second to listen, you’d hear my ovum rattling around like some old maracas. Maybe you’ll catch the rustle of a passing tumbleweed. Believe you me, no one’s entering this saloon. She don’t listen doe. And when there is no baby, Lady Uterucifus goes RAH RAH RAH. Ugne, keeper of my baby box, burns everything to the ground.</p><p><i>ALL UV DEECE FAR NOTTING?!</i></p><p>She foams at the mouth.</p><p><i>NO BABY? YOU GIVE ME NO BABY, YOU? YOU.</i></p><p>She thrashes and crashes and interpretive dances.</p><p><i>NOW FOR WHOM WILL I PLAY KENNY ROGERS CD FROM STARBUCK?!</i></p><p>I didn’t know she had belongings.</p><p><i>YOU WAONT WAR? I GIVE YOU WAR SANDWICH.</i></p><p>Bombs over Baghdad, but Baghdad is thith whittle utewuth. Ugne pees (bleeds) and spits (bleeds) and spills her melted dulce de leche ice cream (blood) all over my Lawrence of La Brea area rug (solid blood).</p>";
  }

  trigger[2].onclick = function() {
    modal.classList.add('modal--show');
    document.getElementsByClassName("modalhead")[0].innerHTML = "<h2> My Smoothie Daughter </h2>";
    document.getElementsByClassName("modaltxt")[0].innerHTML = "<p>She’d never had a smoothie. Not once in her life. I made her try it and she hated it a lot. “I hate this a lot,” she told me. “What is this cold and filthy soup?!” she yelled. Then she poured it on my head. I don’t know what went wrong. I try to be a good father, but I guess too much doting becomes spoiling. Doting becomes spoiling, yes, then one morning you wake up and your chubby angel dumps an $11 smoothie all over your freshly-Rogained scalp. Your sweet little baby girl, whose eyes used to twinkle like mayonnaise. Rogaine costs money. It’s not cheap, that stuff. I wish children knew the cost of Rogaine—maybe then they wouldn’t pour smoothies on their father’s heads.</p>";
  }

  trigger[3].onclick = function() {
    modal.classList.add('modal--show');
    document.getElementsByClassName("modalhead")[0].innerHTML = "<h2> Note to Regal Union Square </h2>";
    document.getElementsByClassName("modaltxt")[0].innerHTML = "<p>Dear Regal Union Square—</p><p>Good afternoon. My name is Lucinda Jamison, and I just gotta let you’s know that I fa-reaking love your cinematéque, and also your movie theater. I have searched far and wide for a mostly velvet indoor place that would let me eat $13 croissants in the dark.Another reason I am so fond of this here establishment: your bathrooms. They’re very nice. I would not mind cleaning them. Large tiles = less grout. Good choice. My father, Patrice Leonardo Vincenzo Jamison Esq., is a floor buffer. Long Island Bathroom Scrubbers Union. Esquire, also, whatever that means. He always told me “Lucy-Goosey, sweethaht, my kosher pumpkin strudel, if a man ever takes you’s out to a place with tile, and you can’t see your reflection in the fluor, you take this buox cutta’ outta’ yo little hoochie skirt pocket and let him know what kinda lady you ahh.” Thank you. Please recycle this note.</p>";
  }

  trigger[4].onclick = function() {
    modal.classList.add('modal--show');
    document.getElementsByClassName("modalhead")[0].innerHTML = "<h2> Ratatouille </h2>";
    document.getElementsByClassName("modaltxt")[0].innerHTML = "<p>Life create human. Human create trash. Out of trash, come rat. Many rat. Baby rats all swaddled in stinky trash like twinkle twinkle star. Then baby rats grows up. Statistically one rat is chef a little bit. Then chef a lot so good. Rat become Rat Boyardee like American prince of tin can ravioluss, only not American. Is French now. Or French always I think. Movie don’t show rat take American Airlines to Baguette City or anything. Maybe rat born in France. It is possible. But rat speak like American difficult to work with Patton Oswalt so I confuse. Anyway we still proud of rat even if he’s not American citizen.I feed Boyardee ravioluss to my dog he likes so much. He taste rat chunks in Boyardee ravioluss. I think rat chunks is made of Remy rat family. The cousins that no believe Remy cooking amazing like God. How you like him now cousins. Now that you are dead and also in chunks. Ha ha.</p>";
  }

  //change modal content
  console.log(trigger.length);



  // Close the modal with any element with class 'modal__close'
  for (var i=0; i < close.length; i++) {
    close[i].onclick = function() {
      closeModal();
    }
  }

  // Click outside of the modal and close it
  window.onclick = function(e) {
    if (e.target == modal) {
      closeModal();
    }
  }

  // Use the escape key to close modal
  document.onkeyup = function(e) {
    e = e || window.event;
    if(modal.classList.contains('modal--show')) {
      if(e.keyCode == 27) {
        closeModal();
      }
    }
  }

}modal();
