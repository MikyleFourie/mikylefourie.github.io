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
<section id="textBox">
  <p>
    The electricity crisis is a prevalent issue affecting the population
    of South Africa. City Power’s website would be an ideal place for
    citizens to visit to check their loadshedding schedules, report and
    log issues, access information on tariffs, find updates on outages,
    etc. While the website does provide the aforementioned information
    and more, it does not provide an exemplary user experience. This
    inadequate experience can make pertinent information inaccessible to
    different users. Colour blind users may struggle to use the site due
    certain colour choices lacking sufficient contrast; a lack of clear
    divisions of content and small static font sizes may create
    cognitive load difficulties; users who choose to use a screen reader
    would have a particularly unpleasant experience due to the poor
    semantic markup of the website; and the sites egregious lack of
    responsive design makes it difficult to use for the large portion of
    South Africans who access the internet through mobile devices.
  </p>
  <p>
    Navigating the City Power website would be relatively painless for
    colour blind people, save a few areas. City Power chose to employ a
    colour palette consisting of primarily white, black, a dark shade of
    yellow, and a dark shade of blue. Red is used to emphasise
    particularly important content. There is some inconsistency between
    the shades of blue used throughout the site, sometimes even leaning
    more towards green. The most important thing for UI designers to
    consider regarding the experience of colour blind users is contrast
    and clear icons (AudioEye, n/a). There are multiple types of colour
    blindness - full achromatopsia (absence of colour vision) being the
    rarest - but all colour blind people can discern between different
    tones and contrasts. The City Power website provides contrasting
    colour choices that divide content (such as the headers) that are
    clear even in greyscale. On the home screen there is a yellow block
    for Complaints and Queries with white text, this is one example of
    parts of the site where the contrast between the colours is
    insufficient in a detrimental way. The website’s links are
    universally accompanied by text and often appropriate icons (such
    arrows), that make their purpose clear without the aid of colour.
    The red text sections such as the link to the SA Corona Virus
    website have no other indicator of importance other than their
    colour, which means users with certain types of colour blindness may
    not register the importance of these links.
  </p>
  <p>
    The website underdelivers in its presentation of information. While
    the home page is a highlight of the site as it divides various
    sections and components into blocks clearly delineated by colour,
    font size, and text styling, later pages lack similar
    characteristics and opt for basic paragraphs of text on plain white
    backgrounds with various inconsistently sized headings. This may
    prove taxing on the cognitive load of users, especially those who
    are visually impaired (Kachan, 2019), as users cannot become used to
    a consistent design language and have to readjust when each new page
    is presented. More consideration towards users’ intention when
    visiting the site would go far in streamlining the experience. The
    “Popular Links” section on the home screen is a good start, but
    there is still plenty of room for improvement, such as moving the
    Suburb adaptable schedule from the bottom of the loadshedding screen
    to the top. The website also lacks features that would allow users
    to customize an experience more comfortable for themselves, such as
    alternate text sizes, text styles, and languages. At the top right
    of the screen there is a “Change Text Size” link. Disappointingly,
    it does not allow the user to manually adjust the size of the text
    to their leisure but rather instructs users to make use of their
    browsers inbuilt functions such as Zooming. While this does indeed
    alleviate the issue of small text, it creates a host of other issues
    such as components of the site cropping out of the window, and
    images being blown up to take up too much space and appear blurry.
    While it may take additional development, it would be beneficial to
    users to allow them to vary the text size and font style itself (for
    dyslexic people for example) without it compromising the surrounding
    presentation of the website. Additionally, alternative language
    options built into the website (not relying on the browsers
    translation systems) would be extremely beneficial in the South
    African context, where many users may not speak English.
  </p>
  <p>
    Some users may choose to use a screen-reader when using the City
    Power website because they are visually impaired. Screen-readers are
    complex systems that work in tandem with the underlying HTML of the
    website to narrate what would ordinarily be visually displayed.
    Screen readers can detect different individual and collections of
    semantic HTML elements. The City Power website is made up of
    predominantly ‘div’ containers, uniquely identified by their ID.
    While sighted users may not see an issue visually, other users may
    find that their screen-readers struggle to differentiate between
    sections of content in unique ways. Screen-readers typically
    traverse websites linearly (that is, left-to-right and
    top-to-bottom), but due to the repetitive use of ‘divs’ and ‘spans’,
    there is no way for the screen-reader to differentiate between
    consecutive paragraphs of text. Were the developers to use other
    containers, such as ‘article’ and ‘section’, the screen-reader would
    be able to (optionally) announce when sections start and end
    (Lawson, 2019), which may provide appreciated context for the
    passage of text to the user. Such a feature may find it difficult to
    function sufficiently on the current iteration of the site as most
    of the ‘divs’ and tables either have no name or a name that would be
    difficult to understand verbally, like “welcome blank-wp”.
    Screen-readers also often provide search functionality to speed up
    finding specific content based purely on the semantic HTML labels
    (WebAIM, 2017) - such as finding all the links on a page, or entry
    fields on forms - however, such functionality would be rendered
    useless on the City Power website due to its haphazard design. The
    site also lacks any alt-text for included images, and descriptive
    labels for forms, making interactions with these parts of the
    websites difficult, or even impossible for screen-readers (Jonathan
    Lazar, 2007), meaning visually impaired users may miss vital
    information.
  </p>
  <p>
    South Africa is a developing country where the digital-divide is
    still decreasing in size. One-way South Africans are being
    technologically enabled is through access to mobile devices and
    mobile internet connectivity. In DataReportal’s 2023 report of
    global internet usage, South Africa ranked to have the highest
    Cellular Mobile Connections compared to Total Population at 179%
    (Data Reportal, 2023). It was also found that 97.6% of South
    Africans access the Internet with Mobile Devices as opposed to 78.8%
    with Desktops. This is relevant to the context of web design in
    South Africa as developers should realise much if not most of the
    engagement with their site would come from mobile devices. For this
    reason, it is unacceptable that City Power’s website does not
    responsively adapt to the accommodate the mobile experience. One
    strange occurrence with the site on mobile is that the width of the
    website does not match that of the screen, meaning users must drag
    left and right to see all the content. Because of the static size of
    elements, the website may be difficult to read on smaller screens,
    and users may find it difficult to tap onto small input fields for
    forms. It should be expected that information regarding electricity
    would be sought out by South Africans of all financial situations,
    especially with load-shedding being a nationwide occurrence.
    According to Statistics South Africa’s General Household Survey of
    2020, “[mobile internet access] is much more common in rural areas
    than any of the alternative methods” (Stats SA, 2020), meaning South
    African web developers should be conscious of how data-intensive
    their sites are as mobile data is more commonly used but still more
    expensive than fixed internet. The City Power website developers
    could reduce the data required to use their site, and thereby help
    users save money, by reducing the number of images or their
    resolution. The current iteration of the website has many
    unnecessary images, especially the home screen which also has an
    animation. There are multiple instances across the site where users
    are expected to download and open a PDF document to access the
    relevant information. Presenting the information included in these
    documents on the site itself would be a superior experience on
    desktop and mobile alike. Mobile users are generally averse to file
    handling on their mobile devices, and downloading a file may require
    more data than presenting the information as plain text.
  </p>
  <p>
    Due to the information provided by City Power, it is vitally
    important that its website is accessible to as many South Africans
    as possible. The design of the site however makes it inaccessible to
    users with colour blindless, and those who use screen readers. A
    lack of consideration to the context of users who would most likely
    visit their site leads to the website being inconvenient and costly
    for a large portion of South Africans.
  </p>
</section>

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
  mainSec.innerHTML = `<h1>Essay: Algorithmic Culture and AI on the Internet</h1>
  <section id="textBox">
    <p>
      Artificial intelligence (AI) is the latest technological advancement
      that has brought many wonders and many risks to our society. As of
      2023 its use and accessibility has grown considerably. While the
      threat of AI becoming sentient and uncontrollable are certainly
      seeming less fantastical as the weeks progress, the prospect of AI’s
      use on the internet is a far more immediate and pertinent issue. Web
      2.0’s defining feature has been that it makes use of “user-generated
      content for end users” (Yasar, 2023). As AI developments progress
      exponentially, they threaten to take authorship on the internet out
      of the hands of people. The risks of unlegislated and unverified AI
      on the internet need to be considered. Soon we may face a technology
      being constantly used which spreads misinformation without direct
      context, does not conform to ethical behaviours, breaches user
      privacy, displaces labour forces, and enfeebles society.
    </p>
    <p>
      The CAIS (Centre for AI Safety) is a non-profit organisation of AI
      Experts and notable figures within the field of AI - and those
      adjacent - whose mission is to “reduce societal-scale risks from
      artificial intelligence” (Center for AI Safety, 2023). On May 30th
      2023 they issued <em class="Italics">The Statement on AI Risk</em>,
      which has been signed by over 350 AI Scientists and Notable figures
      in related fields such as philosophers, ethicists, legal scholars,
      economists, physicists, political scientists, pandemic scientists,
      nuclear scientists, and climate scientists. The single sentence
      statement reads:
    </p>
    <h2>
      Mitigating the risk of extinction from AI should be a global
      priority alongside other societal-scale risks such as pandemics and
      nuclear war (Center for AI Safety, 2023).
    </h2>
    <p>
      This may seem to be hyperbolic upon first examination due to AI’s
      more superficially obvious potential to be a greatly beneficial tool
      for humanity, however the CAIS believe AI to be an existential risk.
      Existential risk from artificial general intelligence (AGI) is the
      risk of human extinction or permanent civilizational decline as a
      result of creating intelligent machines that can independently learn
      and improve upon their own cognitive abilities,
      (www.aiforanyone.org, n.d.). The CAIS see AI development to be so
      rapid that society has neglected, and is ill-equipped to manage the
      risks, and thus the CAIS aim to reduce societal risks through
      research, advocacy, and field-building. On a high-level they
      describe the risk of AI models to be the generation of text, images,
      and videos that are becoming increasingly difficult to distinguish
      from human-created content. Such creations could be used to
      “perpetuate bias, power autonomous weapons, promote misinformation,
      and conduct cyberattacks”, especially due to their increasing
      autonomy. The main 8 categories of AI risk as defined by the CAIS
      are:
    </p>
    <ol type="1">
      <li>Weaponization</li>
      <li>Misinformation</li>
      <li>Proxy Gaming</li>
      <li>Enfeeblement</li>
      <li>Value Lock-In</li>
      <li>Emergent Goals</li>
      <li>Deception</li>
      <li>Power-Seeking Behaviour</li>
    </ol>
    <p>
      The above risks can be applied to many fields, but some may pose a
      more immediate threat to the Internet and its ethical use. Internet
      users are quickly becoming accustomed to AI tools to assist in
      creating content, such as ChatGPT which has gained over 100 million
      users since its launch in November of 2022 (Diaz, 2023).
    </p>
    <p>
      Google and Bing, the two largest search engines in the world, have
      released their own integrated AI chatbots. Technology is already
      used extensively to consciously (and often unconsciously) promote
      political views, ideals, and values; AI may exacerbate this issue
      further.
    </p>
    <p>
      There are two main factors to consider on the topic of
      <strong>Misinformation</strong>:
      <em class="Underline">The quality of the information</em>, and
      <em class="Underline"
        >the ability of a person to discern the validity of the
        information</em
      >. In a study by researchers from the University of Zurich (Giovanni
      Spitale, 2023), respondents were tasked with identifying if Tweets
      were written by humans or AI (ChatGPT-3), and whether the Tweets
      were accurate or misinformation. It was found that humans could not
      recognise if tweets were generated by humans or AI 48% of the time,
      meaning the AI is notably successful at replicating the writing
      style of real people and could successfully pose as one.
      Fortunately, the results show that the human respondents were able
      to identify disinformation tweets with a 92% success rate. This
      means that the AI tool used to generate the tweets could not produce
      convincing misinformation. The test conducted resulted in a
      situation where:
      <em class="Underline"
        >the ability of people to discern if information was valid</em
      >
      was <em>sufficient</em>, but the
      <em class="Underline">quality of the information</em> was
      <em>insufficient</em>. An issue arises when we consider that AI will
      eventually be able to produce sufficiently convincing
      misinformation, as data sets and computational power increases
      (Mahendra, 2023). There should be legislation in place to justly
      punish those who abuse AI tools to spread misinformation, but there
      should also be an onus on the developers of the AI tools to
      implement measures to prevent AI from producing misinformation in
      the first place. In the study, ChatGPT-3 “refused” to provide false
      information 20/102 times, which indicates that there is an
      underlying rule within its programming that is trying to prevent the
      bot from producing such misinformation. Ideally, the bot should
      never be able to produce misinformation, and the current 20% success
      rate is far from the ideal. With the current state of the bot based
      on the research, a scenario that follows could occur where a
      political party could use it to produce large amounts of
      misinformation (which the bot could not prevent 80% of the time) and
      tweet it out to the public rapidly. The average person would not be
      able to distinguish if the tweets were synthetic. Should this
      information be convincing enough, the party would be able to easily
      exploit social media algorithms to paint themselves in a more
      favourable light. This presents a massive threat to modern western
      democracy as political parties could use AI to create and
      effectively spread false narratives that may swing elections.
    </p>
    <p>
      Another major area of threat AI poses is that of
      <strong>Value Lock-in</strong>. Some groups of people may abuse the
      power and capabilities to further exploit others in pre-existing
      structures, locking off access to AI tools. This also becomes an
      issue as AI becomes integrated into our society and users become
      reliant on it. AI is an inherently powerful tool that stands to
      benefit all people due to its ease-of-use, however it remains
      expensive to produce due to the efficacy of the AI being directly
      proportional to the computing power behind it, which is expectedly
      expensive. This means that the digital divide is pertinent as
      individuals and groups who have pre-established access to the
      technology of AI, and knowledge surrounding how to use it, shall
      continue to benefit while those without similar opportunities are
      disadvantaged. Due to the power of AI, the digital divide stands to
      evolve into a vast socio-economic divide. It is important that AI
      developers consider making their tools ethically accessible,
      allowing equal access to the opportunities AI can provide. In this
      way, AI can be a tool that helps all people, including impoverished
      and disadvantaged groups, to learn and produce more effectively,
      enabling them to reach a higher standard of living. Controlling
      access to such powerful tools is also a notable risk. Due to
      expenses and level of expertise, it is reasonable to predict that
      the most powerful AI tools will be created by large companies and
      governments. AI is already used for facial recognition, location
      tracking, and behavioural profiling (Bryson, 2019); these tools may
      grow to a level of efficacy where society could become dependent on
      them. The companies or governments creating the tools may reinforce
      their control over the AI regardless of how it could be harmful to
      others.
    </p>
    <p>
      AI also poses a massive risk to our <strong>privacy</strong>. AI
      powered by machine learning require large data sets to effectively
      train its algorithms. We live in an era where much of our private
      information is accessible on the internet due to weak cyber security
      (Pasquale, 2015) and negligence. AI that is specifically built to
      examine and interact with humans often exploit this fact and learn
      from such data. Companies and governments could manipulate their AI
      tools to access users’ data for malicious purposes. This culminates
      into a situation where the controlling party can enforce their
      status by adjusting the AI tools that society have become reliant on
      and exploit users’ privacy. To avoid this, it is important that AI
      tools be developed with the ethical responsibility of protecting
      users’ data. Legislation should also be in place preventing powerful
      parties from limiting access with stringent controls to AI tools and
      using them to further exploit others.
    </p>
    <p>
      A final great risk of AI would be the potential to
      <strong>displace human labour</strong> and
      <strong>Enfeeble society</strong>. While AIs are developing rapidly,
      they are best at replicating and improving upon tasks that are
      simple, repetitive, and tedious (Thomas, 2023). While this does mean
      highly technical empathetic jobs will remain the responsibility of
      humans for the far foreseeable future, it also implies that
      low-skill jobs are at risk. This raises great concern for developing
      countries like South Africa, who’s combination of high population
      and large percentage of people without access to quality education
      results in many citizens seeking low-skill employment (Hamann,
      2018). Art generating AI like Midjourney and Dall-E have also become
      popular alternatives to real artists, making an already competitive
      market worse. As AI becomes more common place and affordable the
      demand for human workers - along with their income - may decrease
      substantially. This could further widen digital and economic
      divides, as business owners profit more by replacing humans who lack
      knowledge and access to education on the very AI tools that are
      disenfranchising them and could potentially help elevate them. Even
      in fields where AI may not fully replace humans, it may become
      harmful by replacing parts of how we interact with various systems
      or environments. AI has the potential to streamline and optimize
      many systems we interact with by ‘intelligently’ adapting to our
      needs and supplementing our work processes. Developers of such AI
      will likely have the goal of enhancing User Experience in mind but
      may neglect how their systems could negatively impact human
      creativity, critical thinking, and social interaction. Should
      individuals become dependent on these AI supplements, said
      individuals could become lazy, enfeebled, and unable to complete
      their tasks alone. This is the same reason why calculators are not
      allowed in many Mathematics exams (Ajanif, 2022). A common use of
      ChatGPT and Bing Chat are to improve email writing within teams, but
      what if both parties in an email exchange are using AI to supplement
      their writing? Should this become common place, it may hinder
      people’s ability to effectively communicate without AI assistance.
      Many Software Developers have also been quick to start using AI to
      help write code and problem solve. The issue arises when the AI tool
      writes inefficient or non-functional code, and the developer cannot
      identify these qualities. An over reliance on these tools may
      deteriorate coders’ ability to critically think and problem solve
      effectively (Akin, 2023). AI developers must consider how to
      ethically release their tools on the internet as to prevent the loss
      of human skills, while still enabling humans to learn and improve.
    </p>
    <p>
      The rate of AI development over the past year has been staggering
      and evokes images of a promising future. It may change the way we
      live fundamentally; however, developers must remain cautious of the
      risks. As professionals in the CAIS have predicted, AI presents many
      ethical threats to society. We may be at the dawn of a new era where
      misinformation on the internet is easier to produce, and harder to
      identify than ever. There is a risk that powerful parties leverage
      their control over AI tools to push their agendas and even invade
      users’ privacy. The convenience of AI presents a threat to our
      creativity, human interaction, and problem-solving skills as we may
      grow reliant on their assistance. The snowball of AI has already
      started rolling and is picking up speed. While there is no stopping
      it, developers and users of AI on the internet and beyond must
      remain responsible, and aware of the ethical risks.
    </p>
  </section>

  <h1>References</h1>
  <ul class="References">
    <li>
      <p>
        Ajanif, Y., 2022. 13 reasons why calculators are not allowed for
        calculus?. [Online] Available at:
        https://stemisfuture.com/index.php/2022/02/27/13-reasons-why-calculators-are-not-allowed-in-calculus/
        [Accessed 14 6 2023].
      </p>
    </li>
    <li>
      <p>
        Akin, O., 2023. AI-Augmented Software Engineering: Are We Losing
        Our Critical Thinking Skills?. [Online] Available at:
        https://blog.container-solutions.com/ai-augmented-software-engineering-are-we-losing-our-critical-thinking-skills
        [Accessed 15 6 2023].
      </p>
    </li>
    <li>
      <p>
        Center for AI Safety, 2023. Statement on AI Risk. [Online]
        Available at: https://www.safe.ai/ [Accessed 15 6 2023].
      </p>
    </li>
    <li>
      <p>
        Diaz, M., 2023. ChatGPT vs Bing Chat vs Google Bard: Which is the
        best AI chatbot?. [Online] Available at:
        https://www.zdnet.com/article/chatgpt-vs-bing-chat-vs-google-bard-which-is-the-best-ai-chatbot/
        [Accessed 16 6 2023].
      </p>
    </li>
    <li>
      <p>
        Giovanni Spitale, N. B.-A. F. G., 2023. AI model GPT-3
        (dis)informs us better than, Zurich: arXiv.
      </p>
    </li>
    <li>
      <p>
        Hamann, R., 2018. Developing countries need to wake up to the
        risks of new technologies, Cape Town: The Conversation.
      </p>
    </li>
    <li>
      <p>
        Mahendra, S., 2023. Are Humans Smarter Than AI?. [Online]
        Available at:
        https://www.aiplusinfo.com/blog/are-humans-smarter-than-ai/
        [Accessed 16 6 2023].
      </p>
    </li>
    <li>
      <p>
        Thomas, M., 2023. Robots and AI Taking Over Jobs: What to Know
        About the Future of Jobs. [Online] Available at:
        https://builtin.com/artificial-intelligence/ai-replacing-jobs-creating-jobs
        [Accessed 16 6 2023].
      </p>
    </li>
    <li>
      <p>
        www.aiforanyone.org, n.d. existential risk from artificial general
        intelligence. [Online] Available at:
        https://www.aiforanyone.org/glossary/existential-risk-from-artificial-general-intelligence
        [Accessed 18 June 2023].
      </p>
    </li>
    <li>
      <p>
        Yasar, K., 2023. What is Web 3.0 (Web3)? Definition, guide and
        history. [Online] Available at:
        https://www.techtarget.com/whatis/definition/Web-20-or-Web-2
        [Accessed 16 6 2023].
      </p>
    </li>
    <li>
      <p>
        Bryson, JJ 2019, The Past Decade and Future of AI’s Impact on
        Society. in Towards a New Enlightenment? A Transcendent Decade.
        vol. 11, Turner, Madrid.
        https://www.bbvaopenmind.com/wp-content/uploads/2019/02/BBVA-OpenMind-Joanna-J-Bryson-The-Past-Decade-and-Future-of-AI-Impact-on-Society.pdf
      </p>
    </li>
    <li>
      <p>
        Pasquale, F. 2015. The Black Box Society: The Secret Algorithms
        that Control Money and Information. Cambridge, MA: Harvard
        University Press.
      </p>
    </li>
  </ul>`;
};
