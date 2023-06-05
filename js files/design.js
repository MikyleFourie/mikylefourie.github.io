const topBtn = document.getElementById("topBtn");
const b1 = document.getElementById("btn1");
const b2 = document.getElementById("btn2");
const b3 = document.getElementById("btn3");
let b1Toggle = true;
let b2Toggle = false;
let b3Toggle = false;
const mainSec = document.getElementById("main_section");

topBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

b1.addEventListener("click", () => {
  if (!b1Toggle) {
    console.log("ran");
    b1Toggle = true;
    b2Toggle = false;
    b3Toggle = false;
    b1.style.backgroundColor = "#e6226d";
    b2.style.backgroundColor = "#25b16e";
    b3.style.backgroundColor = "#25b16e";

    b1ReplaceInner();
  }
});

b2.addEventListener("click", () => {
  if (!b2Toggle) {
    console.log(b1Toggle);
    console.log(b2Toggle);
    b2Toggle = true;
    b1Toggle = false;
    b3Toggle = false;
    console.log(b1Toggle);
    console.log(b2Toggle);
    b1.style.backgroundColor = "#25b16e";
    b2.style.backgroundColor = "#e6226d";
    b3.style.backgroundColor = "#25b16e";
  }
});

b3.addEventListener("click", () => {
  if (!b3Toggle) {
    b3Toggle = true;
    b1Toggle = false;
    b2Toggle = false;
    b1.style.backgroundColor = "#25b16e";
    b2.style.backgroundColor = "#25b16e";
    b3.style.backgroundColor = "#e6226d";
    b3ReplaceInner();
  }
});

const b1ReplaceInner = () => {
  mainSec.innerHTML = `<h1>Wireframes</h1>
    <h2>Initial wireframe</h2>
    <article class="BigPic">
      <img src="/images/initialWireframe.png" class="Wireframe" />
      <p>
        Above we can the initial wireframe I made when first trying to
        conceptualize my website. Honestly, at the time I was very confused
        on what we were being tasked to make. I also lacked the knowledge to
        make anything in HTML/CSS which made coming up with ideas difficult.
        <br />
        Looking at it now, with hindsight in my toolkit, its funny to see
        how similar each of the three pages are (also funny that there are
        only three). Looking at it now, I can almost - in my mind - draw
        various boxes for sections, divs and p's. In that way, I wasn't
        totally on the wrong track, although I certainly had put no thought
        into a better user experience or the 'flow' through the site.
      </p>
    </article>

    <h2>Second wireframe</h2>
    <p>
      A key evolution for my second wireframe was the idea that the site
      should proabably have a 'thin' and 'wide' version for desktop and
      mobile use respectively. Lets look at each page:
    </p>
    <article class="BigPic">
      <h3>New Homepage:</h3>
      <article class="SmallPic">
        <img src="/images/newHome.png" class="SmallWireframe" />
        <p>
          Here we can see me flesh out the concept of the Navigation Bar. It
          was at this point that I clarified for myself that the NavBar
          needs to 'stick' to the top of the screen.
          <br /><br />
          I also realised at this point, that if the screen were to be of
          varying widths, I would't want there to be huge empty space
          between the Left items (Logo and name) and Right Items(Page
          Links), and so I was inspired to look into flex containers. I also
          realised that if the screen got too thin, the items on the NavBar
          would either shrink or layer ontop of one another; both options I
          wasn't fond of. Using inspiration from other sites, I devised that
          the menu should collapse and be represented by a burger button on
          the right. When the button is clicked, a vertical representation
          of the navigation links should eject from the right side of the
          screen. (I tried getting it to eject from other directions as
          well, but coming from the left or bottom didnt feel intuitive, and
          the top was causing issues as it interacted with the NavBar).
          <br /><br />
          I've found that the Side ejected version of the NavBar sometimes
          pushes other objects down. This is something I aim to fix in the
          future.
        </p>
      </article>
    </article>

    <article class="BigPic">
      <h3>New Developers Logs:</h3>
      <article class="SmallPic">
        <p>
          In this section we can see the plan I had for the Devlogs that I
          was unable to achieve with my limited understanding of JavaScript
          currently.
          <br /><br />
          To explain what I intend to do though: I don't want the users to
          have to scroll through all of the Devlogs, nor do I want them to
          click to separate pages to read each one as I recognise this isn't
          a pleasant user experience. Instead, I want the Devlogs to appear
          in the centre of the screen in a block that can scroll down
          through the text itself. I want there to be a Previous and Next
          button at the top of the block to allow users to intuitevely
          progress between the Devlogs (and because the Devlogs are
          chronological, I believe this will be intuitive). I will consider
          putting a horizontal list (or grid) of buttons below the box that
          allows users to skip to any entry in the devlogs for flexability.
          Being able to create blocks of text that can independently scroll
          and change text is my most anticipated goal for the project.
        </p>
        <img src="/images/newDevlog.png" class="SmallWireframe" />
      </article>
    </article>

    <article class="BigPic">
      <h3>New Design Section:</h3>
      <article class="SmallPic">
        <img src="/images/newDesign.png" class="SmallWireframe" />
        <p>
          Here we see I had a similar intention for the Design section as
          the devlogs. Namely to have comparison pictures of the old and new
          wireframes that stay on screen as you scroll through the text
          entry describing them. The page in its current form was the best I
          could achieve at present.
        </p>
      </article>
    </article>

    <article class="BigPic">
      <h3>New Style Guide:</h3>
      <article class="SmallPic">
        <p>
          The Style Guide is to appear in the Design Section, underneath the
          wireframes. I planned for it to be appear as a numbered Key on the
          left side with descriptions on the right
        </p>
        <img src="/images/newStyleGuide.png" class="SmallWireframe" />
      </article>
    </article>

    <article class="BigPic">
      <h3>IxD Analysis</h3>
      <article class="SmallPic">
        <img src="/images/newIxD.png" class="Wireframe" />
        <p>
          This section is another that I could not implement due to its need
          to use JavaScript. I planned for a list of 'bubbles' (buttons) on
          the left, that when clicked change the text on the right to match.
        </p>
      </article>
    </article>

    <article class="BigPic">
      <h3>Profile and Portfolio</h3>
      <article class="SmallPic">
        <p>
          This section is presently being displayed as I envisioned, albeit
          without some functionality. With each item in the portfolio being
          displayed as small thumbnails. Eventually, I'd like it if the user
          can click on each Thumbnail and be shown and expanded description
          of the game, be that on another page, or a new container on the
          same page (which would likely need some JavaScript).
        </p>
        <img src="/images/newPort.png" class="Wireframe" />
      </article>
    </article>`;
};

const b3ReplaceInner = () => {
  mainSec.innerHTML = `<h1>Style Guide</h1>
    <h2>Goal Statement</h2>
    <p>
      I want my website to feel like a mixed between grounded and solid, as
      well as calm and light.
    </p>
    <h2>Colour Palette</h2>
    <div class="SquarePic">
      <img src="/images/colourPalette.png" id="clr_pal" />
      <p>
        The colours to the left were chosen to contribute to the goal
        statement. The green and beige are earth tones, which contribute to
        feelings of groundedness (along with the background). The grey and
        maroon were chosen as they are complementary but also contrast in a
        convenient way to make certain things stand out.
      </p>
    </div>
    <h2>Font Choice</h2>
    <div class="BigPic">
      <img src="/images/fontChoice.png" id="font_ch" />
      <p>
        Font is usually something you don't notice unless it's a
        particularly terrible choice. Choosing the font for my site
        basically involved me looking through a large list of fonts and
        picking a few I liked. Dosis ended up being my favourite. It's
        balance of straight edges and soft curves felt perfect for my sites
        balance of Stability and Calm.
      </p>
    </div>`;
};
