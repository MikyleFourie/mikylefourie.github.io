const mainSec = document.getElementById("main_section");
const b1 = document.getElementById("btn1");
const b2 = document.getElementById("btn2");
let b1Toggle = true;
let b2Toggle = false;

b1.addEventListener("click", () => {
  if (!b1Toggle) {
    console.log("ran");
    b1Toggle = true;
    b2Toggle = false;
    b1.style.backgroundColor = "#e6226d";
    b2.style.backgroundColor = "bisque";

    b1.style.color = "white";
    b2.style.color = "black";

    b1ReplaceInner();
  }
});

b2.addEventListener("click", () => {
  if (!b2Toggle) {
    console.log(b1Toggle);
    console.log(b2Toggle);
    b2Toggle = true;
    b1Toggle = false;
    console.log(b1Toggle);
    console.log(b2Toggle);
    b1.style.backgroundColor = "bisque";
    b2.style.backgroundColor = "#e6226d";

    b1.style.color = "black";
    b2.style.color = "white";

    b2ReplaceInner();
  }
});

const b1ReplaceInner = () => {
  mainSec.innerHTML = `<h1>
    Essay: Analysis of Ethics, UI, UX, and Interaction of a South African
    Website
  </h1>
  <p>
    The electricity crisis is a prevalent issue affecting the population
    of South Africa. City Power's website would be an ideal place for
    citizens to visit to check their loadshedding schedules, report and
    log issues, access information on tariffs, find updates on outages,
    etc. While the website does provide the aforementioned information and
    more, it does not provide an exemplary user experience. This
    inadequate experience can make pertinent information inaccessible to
    different users. Colour blind users may struggle to use the site due
    certain colour choices lacking sufficient contrast; a lack of clear
    divisions of content and small static font sizes may create cognitive
    load difficulties; users who choose to use a screen reader would have
    a particularly unpleasant experience due to the poor semantic markup
    of the website; and the sites egregious lack of responsive design
    makes it difficult to use for the large portion of South Africans who
    access the internet through mobile devices. Navigating the City Power
    website would be relatively painless for colour blind people, save a
    few areas. City Power chose to employ a colour palette consisting of
    primarily white, black, a dark shade of yellow, and a dark shade of
    blue. Red is used to emphasise particularly important content. There
    is some inconsistency between the shades of blue used throughout the
    site, sometimes even leaning more towards green. The most important
    thing for UI designers to consider regarding the experience of colour
    blind users is contrast and clear icons (AudioEye, n/a). There are
    multiple types of colour blindness - full achromatopsia (absence of
    colour vision) being the rarest - but all colour blind people can
    discern between different tones and contrasts. The City Power website
    provides contrasting colour choices that divide content (such as the
    headers) that are clear even in greyscale. On the home screen there is
    a yellow block for Complaints and Queries with white text, this is one
    example of parts of the site where the contrast between the colours is
    insufficient in a detrimental way. The website's links are universally
    accompanied by text and often appropriate icons (such arrows), that
    make their purpose clear without the aid of colour. The red text
    sections such as the link to the SA Corona Virus website have no other
    indicator of importance other than their colour, which means users
    with certain types of colour blindness may not register the importance
    of these links. The website underdelivers in its presentation of
    information. While the home page is a highlight of the site as it
    divides various sections and components into blocks clearly delineated
    by colour, font size, and text styling, later pages lack similar
    characteristics and opt for basic paragraphs of text on plain white
    backgrounds with various inconsistently sized headings. This may prove
    taxing on the cognitive load of users, especially those who are
    visually impaired (Kachan, 2019), as users cannot become used to a
    consistent design language and have to readjust when each new page is
    presented. More consideration towards users' intention when visiting
    the site would go far in streamlining the experience. The “Popular
    Links” section on the home screen is a good start, but there is still
    plenty of room for improvement, such as moving the Suburb adaptable
    schedule from the bottom of the loadshedding screen to the top. The
    website also lacks features that would allow users to customize an
    experience more comfortable for themselves, such as alternate text
    sizes, text styles, and languages. At the top right of the screen
    there is a “Change Text Size” link. Disappointingly, it does not allow
    the user to manually adjust the size of the text to their leisure but
    rather instructs users to make use of their browsers inbuilt functions
    such as Zooming. While this does indeed alleviate the issue of small
    text, it creates a host of other issues such as components of the site
    cropping out of the window, and images being blown up to take up too
    much space and appear blurry. While it may take additional
    development, it would be beneficial to users to allow them to vary the
    text size and font style itself (for dyslexic people for example)
    without it compromising the surrounding presentation of the website.
    Additionally, alternative language options built into the website (not
    relying on the browsers translation systems) would be extremely
    beneficial in the South African context, where many users may not
    speak English. Some users may choose to use a screen-reader when using
    the City Power website because they are visually impaired.
    Screen-readers are complex systems that work in tandem with the
    underlying HTML of the website to narrate what would ordinarily be
    visually displayed. Screen readers can detect different individual and
    collections of semantic HTML elements. The City Power website is made
    up of predominantly 'div' containers, uniquely identified by their ID.
    While sighted users may not see an issue visually, other users may
    find that their screen-readers struggle to differentiate between
    sections of content in unique ways. Screen-readers typically traverse
    websites linearly (that is, left-to-right and top-to-bottom), but due
    to the repetitive use of 'divs' and 'spans', there is no way for the
    screen-reader to differentiate between consecutive paragraphs of text.
    Were the developers to use other containers, such as 'article' and
    'section', the screen-reader would be able to (optionally) announce
    when sections start and end (Lawson, 2019), which may provide
    appreciated context for the passage of text to the user. Such a
    feature may find it difficult to function sufficiently on the current
    iteration of the site as most of the 'divs' and tables either have no
    name or a name that would be difficult to understand verbally, like
    “welcome blank-wp”. Screen-readers also often provide search
    functionality to speed up finding specific content based purely on the
    semantic HTML labels (WebAIM, 2017) - such as finding all the links on
    a page, or entry fields on forms - however, such functionality would
    be rendered useless on the City Power website due to its haphazard
    design. The site also lacks any alt-text for included images, and
    descriptive labels for forms, making interactions with these parts of
    the websites difficult, or even impossible for screen-readers
    (Jonathan Lazar, 2007), meaning visually impaired users may miss vital
    information. South Africa is a developing country where the
    digital-divide is still decreasing in size. One-way South Africans are
    being technologically enabled is through access to mobile devices and
    mobile internet connectivity. In DataReportal's 2023 report of global
    internet usage, South Africa ranked to have the highest Cellular
    Mobile Connections compared to Total Population at 179% (Data
    Reportal, 2023). It was also found that 97.6% of South Africans access
    the Internet with Mobile Devices as opposed to 78.8% with Desktops.
    This is relevant to the context of web design in South Africa as
    developers should realise much if not most of the engagement with
    their site would come from mobile devices. For this reason, it is
    unacceptable that City Power's website does not responsively adapt to
    the accommodate the mobile experience. One strange occurrence with the
    site on mobile is that the width of the website does not match that of
    the screen, meaning users must drag left and right to see all the
    content. Because of the static size of elements, the website may be
    difficult to read on smaller screens, and users may find it difficult
    to tap onto small input fields for forms. It should be expected that
    information regarding electricity would be sought out by South
    Africans of all financial situations, especially with load-shedding
    being a nationwide occurrence. According to Statistics South Africa's
    General Household Survey of 2020, “[mobile internet access] is much
    more common in rural areas than any of the alternative methods” (Stats
    SA, 2020), meaning South African web developers should be conscious of
    how data-intensive their sites are as mobile data is more commonly
    used but still more expensive than fixed internet. The City Power
    website developers could reduce the data required to use their site,
    and thereby help users save money, by reducing the number of images or
    their resolution. The current iteration of the website has many
    unnecessary images, especially the home screen which also has an
    animation. There are multiple instances across the site where users
    are expected to download and open a PDF document to access the
    relevant information. Presenting the information included in these
    documents on the site itself would be a superior experience on desktop
    and mobile alike. Mobile users are generally averse to file handling
    on their mobile devices, and downloading a file may require more data
    than presenting the information as plain text. Due to the information
    provided by City Power, it is vitally important that its website is
    accessible to as many South Africans as possible. The design of the
    site however makes it inaccessible to users with colour blindless, and
    those who use screen readers. A lack of consideration to the context
    of users who would most likely visit their site leads to the website
    being inconvenient and costly for a large portion of South Africans.
  </p>

  <h1>References</h1>
  <ul class="References">
    <li>
      <p>
        AudioEye, n/a. A Comprehensive Guide on Accessible Web Design -
        How to Make ADA-Compliant Websites. [Online] Available at:
        https://www.audioeye.com/accessible-web-design/ [Accessed 27 April
        2023].
      </p>
    </li>
    <li>
      <p>
        Data Reportal, 2023. Digital 2023: South Africa, s.l.: Meltwater.
      </p>
    </li>
    <li>
      <p>
        Jonathan Lazar, A. A. J. K. C. M., 2007. What Frustrates Screen
        Reader Users on the Web: A Study of 100 Blind Users. International
        Journal of Human - Computer Interaction, 22(3), pp. 247-269.
      </p>
    </li>
    <li>
      <p>
        Kachan, D., 2019. CustomerThink. [Online] Available at:
        https://customerthink.com/cognitive-load-and-mobile-ux-design-how-to-make-a-user-less-overwhelmed/
        [Accessed 25 April 2023].
      </p>
    </li>
    <li>
      <p>
        Lawson, B., 2019. How A Screen Reader User Accesses The Web: A
        Smashing Video. [Online] Available at:
        https://www.smashingmagazine.com/2019/02/accessibility-webinar/
        [Accessed March 2023].
      </p>
    </li>
    <li>
      <p>
        Stats SA, 2020. General Household Survey, Pretoria: Statistics
        South Africa.
      </p>
    </li>
    <li>
      <p>
        WebAIM, 2017. Designing for Screen Reader Compatibility. [Online]
        Available at: https://webaim.org/techniques/screenreader/
        [Accessed 27 April 2023].
      </p>
    </li>
  </ul>`;
};

const b2ReplaceInner = () => {
  mainSec.innerHTML = `replace Essay 2 HTML here`;
};
