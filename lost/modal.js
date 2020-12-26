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

  trigger[7].onclick = function() {
    modal.classList.add('modal--show');
    document.getElementsByClassName("modalhead")[0].innerHTML = "<h2> Moon Travel </h2>";
    document.getElementsByClassName("modaltxt")[0].innerHTML = "<p>How will I get to the moon, you ask? I have recently purchased a wok. After a good shave and a probiotic yogurt, I will crawl into said wok—as gently as one might lay twice-risen dough into a ring mold, say. Then, I will seal the lid. By this time, I will have spent several months bottling high-octane shart. I run each shart through my SodaStream once a week, so they stay fresh. Because I am an overachiever, I have accumulated enough fuel for 3 round trip missions to Mars, but I do not forget: our destination is the moon. With gigatons of my carbonated wet flatulence at the ready, all there’s left to do is pray. Dear She-Hulk who art in Heaven, hallowed be thy name. Thy Kingdom come, thy will be done, La Lune will soon be blanketed in my doody-caca.</p>";
  }

  trigger[1].onclick = function() {
    modal.classList.add('modal--show');
    document.getElementsByClassName("modalhead")[0].innerHTML = "<h2> Bombs Over Uterus </h2>";
    document.getElementsByClassName("modaltxt")[0].innerHTML = "<p>I am the recipient of a uterus. I have never seen it for myself, but I know it’s inside this body somewhere below the neck area. Each month, my uterus prepares itself for a baby without hearing word that there is, in fact, a baby en route. Lady Utero puts up fancy curtains, fluffs the pillows, waiting patiently for a sperm to poach one of these here eggs. I don’t speak Uteran, so I can’t tell her Doll, if you’d take a second to listen, you’d hear my ovum rattling around like some old maracas. Maybe you’ll catch the rustle of a passing tumbleweed. Believe you me, no one’s entering this saloon. She don’t listen doe. And when there is no baby, Lady Uterucifus goes RAH RAH RAH. Ugne, keeper of my baby box, burns everything to the ground.</p><p><i>ALL UV DEECE FAR NOTTING?!</i></p><p>She foams at the mouth.</p><p><i>NO BABY? YOU GIVE ME NO BABY, YOU? YOU.</i></p><p>She thrashes and crashes and interpretive dances.</p><p><i>NOW FOR WHOM WILL I PLAY KENNY ROGERS CD FROM STARBUCK?!</i></p><p>I didn’t know she had belongings.</p><p><i>YOU WAONT WAR? I GIVE YOU WAR SANDWICH.</i></p><p>Bombs over Baghdad, but Baghdad is thith whittle utewuth. Ugne pees (bleeds) and spits (bleeds) and spills her melted dulce de leche ice cream (blood) all over my Lawrence of La Brea area rug (solid blood).</p>";
  }

  trigger[8].onclick = function() {
    modal.classList.add('modal--show');
    document.getElementsByClassName("modalhead")[0].innerHTML = "<h2> Bombs Over Uterus </h2>";
    document.getElementsByClassName("modaltxt")[0].innerHTML = "<p>I am the recipient of a uterus. I have never seen it for myself, but I know it’s inside this body somewhere below the neck area. Each month, my uterus prepares itself for a baby without hearing word that there is, in fact, a baby en route. Lady Utero puts up fancy curtains, fluffs the pillows, waiting patiently for a sperm to poach one of these here eggs. I don’t speak Uteran, so I can’t tell her Doll, if you’d take a second to listen, you’d hear my ovum rattling around like some old maracas. Maybe you’ll catch the rustle of a passing tumbleweed. Believe you me, no one’s entering this saloon. She don’t listen doe. And when there is no baby, Lady Uterucifus goes RAH RAH RAH. Ugne, keeper of my baby box, burns everything to the ground.</p><p><i>ALL UV DEECE FAR NOTTING?!</i></p><p>She foams at the mouth.</p><p><i>NO BABY? YOU GIVE ME NO BABY, YOU? YOU.</i></p><p>She thrashes and crashes and interpretive dances.</p><p><i>NOW FOR WHOM WILL I PLAY KENNY ROGERS CD FROM STARBUCK?!</i></p><p>I didn’t know she had belongings.</p><p><i>YOU WAONT WAR? I GIVE YOU WAR SANDWICH.</i></p><p>Bombs over Baghdad, but Baghdad is thith whittle utewuth. Ugne pees (bleeds) and spits (bleeds) and spills her melted dulce de leche ice cream (blood) all over my Lawrence of La Brea area rug (solid blood).</p>";
  }

  trigger[2].onclick = function() {
    modal.classList.add('modal--show');
    document.getElementsByClassName("modalhead")[0].innerHTML = "<h2> My Smoothie Daughter </h2>";
    document.getElementsByClassName("modaltxt")[0].innerHTML = "<p>She’d never had a smoothie. Not once in her life. I made her try it and she hated it a lot. “I hate this a lot,” she told me. “What is this cold and filthy soup?!” she yelled. Then she poured it on my head. I don’t know what went wrong. I try to be a good father, but I guess too much doting becomes spoiling. Doting becomes spoiling, yes, then one morning you wake up and your chubby angel dumps an $11 smoothie all over your freshly-Rogained scalp. Your sweet little baby girl, whose eyes used to twinkle like mayonnaise. Rogaine costs money. It’s not cheap, that stuff. I wish children knew the cost of Rogaine—maybe then they wouldn’t pour smoothies on their father’s heads.</p>";
  }

  trigger[9].onclick = function() {
    modal.classList.add('modal--show');
    document.getElementsByClassName("modalhead")[0].innerHTML = "<h2> My Smoothie Daughter </h2>";
    document.getElementsByClassName("modaltxt")[0].innerHTML = "<p>She’d never had a smoothie. Not once in her life. I made her try it and she hated it a lot. “I hate this a lot,” she told me. “What is this cold and filthy soup?!” she yelled. Then she poured it on my head. I don’t know what went wrong. I try to be a good father, but I guess too much doting becomes spoiling. Doting becomes spoiling, yes, then one morning you wake up and your chubby angel dumps an $11 smoothie all over your freshly-Rogained scalp. Your sweet little baby girl, whose eyes used to twinkle like mayonnaise. Rogaine costs money. It’s not cheap, that stuff. I wish children knew the cost of Rogaine—maybe then they wouldn’t pour smoothies on their father’s heads.</p>";
  }

  trigger[3].onclick = function() {
    modal.classList.add('modal--show');
    document.getElementsByClassName("modalhead")[0].innerHTML = "<h2> Note to Regal Union Square </h2>";
    document.getElementsByClassName("modaltxt")[0].innerHTML = "<p>Dear Regal Union Square—</p><p>Good afternoon. My name is Lucinda Jamison, and I just gotta let you’s know that I fa-reaking love your cinematéque, and also your movie theater. I have searched far and wide for a mostly velvet indoor place that would let me eat $13 croissants in the dark.Another reason I am so fond of this here establishment: your bathrooms. They’re very nice. I would not mind cleaning them. Large tiles = less grout. Good choice. My father, Patrice Leonardo Vincenzo Jamison Esq., is a floor buffer. Long Island Bathroom Scrubbers Union. Esquire, also, whatever that means. He always told me “Lucy-Goosey, sweethaht, my kosher pumpkin strudel, if a man ever takes you’s out to a place with tile, and you can’t see your reflection in the fluor, you take this buox cutta’ outta’ yo little hoochie skirt pocket and let him know what kinda lady you ahh.” Thank you. Please recycle this note.</p>";
  }

  trigger[10].onclick = function() {
    modal.classList.add('modal--show');
    document.getElementsByClassName("modalhead")[0].innerHTML = "<h2> Note to Regal Union Square </h2>";
    document.getElementsByClassName("modaltxt")[0].innerHTML = "<p>Dear Regal Union Square—</p><p>Good afternoon. My name is Lucinda Jamison, and I just gotta let you’s know that I fa-reaking love your cinematéque, and also your movie theater. I have searched far and wide for a mostly velvet indoor place that would let me eat $13 croissants in the dark.Another reason I am so fond of this here establishment: your bathrooms. They’re very nice. I would not mind cleaning them. Large tiles = less grout. Good choice. My father, Patrice Leonardo Vincenzo Jamison Esq., is a floor buffer. Long Island Bathroom Scrubbers Union. Esquire, also, whatever that means. He always told me “Lucy-Goosey, sweethaht, my kosher pumpkin strudel, if a man ever takes you’s out to a place with tile, and you can’t see your reflection in the fluor, you take this buox cutta’ outta’ yo little hoochie skirt pocket and let him know what kinda lady you ahh.” Thank you. Please recycle this note.</p>";
  }

  trigger[4].onclick = function() {
    modal.classList.add('modal--show');
    document.getElementsByClassName("modalhead")[0].innerHTML = "<h2> Ratatouille </h2>";
    document.getElementsByClassName("modaltxt")[0].innerHTML = "<p>Life create human. Human create trash. Out of trash, come rat. Many rat. Baby rats all swaddled in stinky trash like twinkle twinkle star. Then baby rats grows up. Statistically one rat is chef a little bit. Then chef a lot so good. Rat become Rat Boyardee like American prince of tin can ravioluss, only not American. Is French now. Or French always I think. Movie don’t show rat take American Airlines to Baguette City or anything. Maybe rat born in France. It is possible. But rat speak like American difficult to work with Patton Oswalt so I confuse. Anyway we still proud of rat even if he’s not American citizen.I feed Boyardee ravioluss to my dog he likes so much. He taste rat chunks in Boyardee ravioluss. I think rat chunks is made of Remy rat family. The cousins that no believe Remy cooking amazing like God. How you like him now cousins. Now that you are dead and also in chunks. Ha ha.</p>";
  }

  trigger[11].onclick = function() {
    modal.classList.add('modal--show');
    document.getElementsByClassName("modalhead")[0].innerHTML = "<h2> Ratatouille </h2>";
    document.getElementsByClassName("modaltxt")[0].innerHTML = "<p>Life create human. Human create trash. Out of trash, come rat. Many rat. Baby rats all swaddled in stinky trash like twinkle twinkle star. Then baby rats grows up. Statistically one rat is chef a little bit. Then chef a lot so good. Rat become Rat Boyardee like American prince of tin can ravioluss, only not American. Is French now. Or French always I think. Movie don’t show rat take American Airlines to Baguette City or anything. Maybe rat born in France. It is possible. But rat speak like American difficult to work with Patton Oswalt so I confuse. Anyway we still proud of rat even if he’s not American citizen.I feed Boyardee ravioluss to my dog he likes so much. He taste rat chunks in Boyardee ravioluss. I think rat chunks is made of Remy rat family. The cousins that no believe Remy cooking amazing like God. How you like him now cousins. Now that you are dead and also in chunks. Ha ha.</p>";
  }

  trigger[5].onclick = function() {
      modal.classList.add('modal--show');
      document.getElementsByClassName("modalhead")[0].innerHTML = "<h2> Teeth vs Toothbrush </h2>";
      document.getElementsByClassName("modaltxt")[0].innerHTML = "<p><i>I. Toothbrush</i></p><p>Like any individual with decent oral hygiene, I change my toothbrush once every three months. Little did I know, however, that when I toss one out, it does not poof-gone like the commercials say. Instead, it winds up somewhere called a “Staten Island,” where it rots among the other herpes-ridden toothbrushes of the world and of Staten Island, which I have been told is not really part of the world.</p><p>I find this deeply disturbing—the toothbrush disposal part, not the bit about political geography. My heart goes out to the citizens of Staten Island—everyone knows that a coastal economy needs its fishing industry to survive, but it is also a fact that no one eats toothbrushes.</p><p>Just picture it: a leathered Staten Island seafarer rowing to shore after a long day on the briny expanse. The fisherman ties up his dinghy and trudges home, his chum bucket cling-clanging with 46 Oral B’s and a barnacle-encrusted tampon. He is distraught—nay, sad. Mud for dinner again tonight.</p><p>And just think of the turtles! What would happen if a 350-pound Loggerhead mistook “the toothbrush that 9 out of 10 dentists recommend” for a skinny row of corn? Corn, lest we forget, is a staple of their wild diet. If turtles start swallowing toothbrushes, they’ll have necks like giraffes, and you know, that’s not kosher. A turtle-giraffe? It doesn’t even sound cool, like a zeedonk (also known as: a zebronkey, a zonkey, a zebadonk, or a deebra—not you Debra. Sit, sit, sit, hey, siiiit. Debra. Debra, sit. Good girl.). It’s going off the rails! The global toothbrush crisis, I mean.</p><p><i>II. Toothpaste</i><p>It’s Thursday. I have run out of my favorite charcoal toothpaste—the one that isn’t a paste but really more of a powder? Anyway, I knew exactly where to go to purchase a refill: an Instagram ad from my favorite doula, Snoop Dogg.</p><p>I was in the online checkout, ready to put my $6 tooth dust on layaway, when I learned that this dehydrated black tar heroin is also infused with mica. Yes, mica—the mineral mined by little brown babies in caves all over rural India. So many caves, at least four caves.</p><p>TBH, still bought it. In this economy, I think elementary-school kids can afford to make some extra money on the side. I mean, they’re not really elementary-school kids; they don’t go to school. They work in mines—I think I’ve mentioned this. So I guess it’s not so much a side gig as a front gig. Well, Lean In, as they say. Lean into the mines.</p>";
    }

  trigger[12].onclick = function() {
      modal.classList.add('modal--show');
      document.getElementsByClassName("modalhead")[0].innerHTML = "<h2> Teeth vs Toothbrush </h2>";
      document.getElementsByClassName("modaltxt")[0].innerHTML = "<p><i>I. Toothbrush</i></p><p>Like any individual with decent oral hygiene, I change my toothbrush once every three months. Little did I know, however, that when I toss one out, it does not poof-gone like the commercials say. Instead, it winds up somewhere called a “Staten Island,” where it rots among the other herpes-ridden toothbrushes of the world and of Staten Island, which I have been told is not really part of the world.</p><p>I find this deeply disturbing—the toothbrush disposal part, not the bit about political geography. My heart goes out to the citizens of Staten Island—everyone knows that a coastal economy needs its fishing industry to survive, but it is also a fact that no one eats toothbrushes.</p><p>Just picture it: a leathered Staten Island seafarer rowing to shore after a long day on the briny expanse. The fisherman ties up his dinghy and trudges home, his chum bucket cling-clanging with 46 Oral B’s and a barnacle-encrusted tampon. He is distraught—nay, sad. Mud for dinner again tonight.</p><p>And just think of the turtles! What would happen if a 350-pound Loggerhead mistook “the toothbrush that 9 out of 10 dentists recommend” for a skinny row of corn? Corn, lest we forget, is a staple of their wild diet. If turtles start swallowing toothbrushes, they’ll have necks like giraffes, and you know, that’s not kosher. A turtle-giraffe? It doesn’t even sound cool, like a zeedonk (also known as: a zebronkey, a zonkey, a zebadonk, or a deebra—not you Debra. Sit, sit, sit, hey, siiiit. Debra. Debra, sit. Good girl.). It’s going off the rails! The global toothbrush crisis, I mean.</p><p><i>II. Toothpaste</i><p>It’s Thursday. I have run out of my favorite charcoal toothpaste—the one that isn’t a paste but really more of a powder? Anyway, I knew exactly where to go to purchase a refill: an Instagram ad from my favorite doula, Snoop Dogg.</p><p>I was in the online checkout, ready to put my $6 tooth dust on layaway, when I learned that this dehydrated black tar heroin is also infused with mica. Yes, mica—the mineral mined by little brown babies in caves all over rural India. So many caves, at least four caves.</p><p>TBH, still bought it. In this economy, I think elementary-school kids can afford to make some extra money on the side. I mean, they’re not really elementary-school kids; they don’t go to school. They work in mines—I think I’ve mentioned this. So I guess it’s not so much a side gig as a front gig. Well, Lean In, as they say. Lean into the mines.</p>";
    }

    trigger[6].onclick = function() {
        modal.classList.add('modal--show');
        document.getElementsByClassName("modalhead")[0].innerHTML = "<h2> FAQ </h2>";
        document.getElementsByClassName("modaltxt")[0].innerHTML = "<p><b>Why do Pop Rocks feel like <i>that</i>?</b><br>- Urine crytals<br>- Kidney stones<br>- They found the mouth g-spot<br>- They’re in immense pain<br>- It feels good, doesn't it?<br>- Lots of little bugs inside your mouth<br><br><b>Why is my internet so slow?</b><br>- My brother keeps streaming porn<br>- My porn keeps streaming Brothers<br>- My streaming keeps brother porn<br>- It’s raining which depresses the internet<br>- The 101 was backed up all the way to Malibu, I'm sorry I'm late<br>- The modem dwarves are off the rails today<br>- I know she could do better and she's just not trying hard enough<br>- Someone put it on the grill<br>- Someone was torrenting the entire run of Top Chef<br><br><b>Why is the Statue of Liberty Green?</b><br>- She got slimed at the Nickelodeon Kids Choice Awards<br>- Mold<br>- It is actually one large woman-shaped lime<br>- She is so sick of your hair-brain schemes, Monty!<br>- I have a dream that my children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.<br>- She lives in the ocean, she's probably just nauseous<br>- She doesn't believe in color matching her foundation<br>- red+white+blue=green<br>- Cash Rules Everything Around Me<br><br><b>How does the internet work?</b><br><i>Shhh... *soft kiss* no one needs to know</i><br><br><b>What was B.N. wearing when she was last seen?</b><br>- A pilot's outfit, but we all know girls can't pilot planes due to the, you know, high presence of DMT (the spirit molecule) in their bloodstream.<br>- A cowboy hat full of amphetamines<br>- David Byrne style suit<br>- A 'John McCain Memorial' Gucci belt<br>- Full body socks<br>- Burberry gimp suit</p>";
      }

    trigger[13].onclick = function() {
        modal.classList.add('modal--show');
        document.getElementsByClassName("modalhead")[0].innerHTML = "<h2> FAQ </h2>";
        document.getElementsByClassName("modaltxt")[0].innerHTML = "<p><b>Why do Pop Rocks feel like <i>that</i>?</b><br>- Urine crytals<br>- Kidney stones<br>- They found the mouth g-spot<br>- They’re in immense pain<br>- It feels good, doesn't it?<br>- Lots of little bugs inside your mouth<br><br><b>Why is my internet so slow?</b><br>- My brother keeps streaming porn<br>- My porn keeps streaming Brothers<br>- My streaming keeps brother porn<br>- It’s raining which depresses the internet<br>- The 101 was backed up all the way to Malibu, I'm sorry I'm late<br>- The modem dwarves are off the rails today<br>- I know she could do better and she's just not trying hard enough<br>- Someone put it on the grill<br>- Someone was torrenting the entire run of Top Chef<br><br><b>Why is the Statue of Liberty Green?</b><br>- She got slimed at the Nickelodeon Kids Choice Awards<br>- Mold<br>- It is actually one large woman-shaped lime<br>- She is so sick of your hair-brain schemes, Monty!<br>- I have a dream that my children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.<br>- She lives in the ocean, she's probably just nauseous<br>- She doesn't believe in color matching her foundation<br>- red+white+blue=green<br>- Cash Rules Everything Around Me<br><br><b>How does the internet work?</b><br><i>Shhh... *soft kiss* no one needs to know</i><br><br><b>What was B.N. wearing when she was last seen?</b><br>- A pilot's outfit, but we all know girls can't pilot planes due to the, you know, high presence of DMT (the spirit molecule) in their bloodstream.<br>- A cowboy hat full of amphetamines<br>- David Byrne style suit<br>- A 'John McCain Memorial' Gucci belt<br>- Full body socks<br>- Burberry gimp suit</p>";
      }




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
