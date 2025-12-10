// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-design",
          title: "design",
          description: "Design and HCI projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/design/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Updated Dec 10, 2025.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-i-successfully-proposed-my-doctoral-thesis-and-advanced-to-candidacy-tada",
          title: 'I successfully proposed my doctoral thesis, and advanced to candidacy :tada:',
          description: "",
          section: "News",},{id: "news-i-present-my-work-who-has-more-furniture-context-effects-on-the-quantification-of-mass-vs-count-superordinate-nouns-at-cogsci-2025-1pm-2-30pm-salon-3-language-3",
          title: 'I present my work, Who Has More Furniture? Context Effects on the Quantification...',
          description: "",
          section: "News",},{id: "news-i-present-my-poster-animal-but-not-dog-children-s-computation-of-implicatures-for-hierarchically-organized-categories-at-bucld-2025-3-30pm-5pm-poster-session-2",
          title: 'I present my poster, Animal but not dog: Children’s computation of implicatures for...',
          description: "",
          section: "News",},{id: "news-my-paper-what-speakers-don-t-know-children-incorporate-ignorance-statements-to-learn-words-cross-situationally-is-accepted-as-an-oral-presentation-at-cds-2026",
          title: 'My paper, What speakers don’t know: Children incorporate ignorance statements to learn words...',
          description: "",
          section: "News",},{id: "projects-ai-spy",
          title: 'AI Spy',
          description: "A car-based voice agent that play &quot;I Spy&quot; with preschoolers to introduce them to new words and concepts on daily car rides.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-moon-amp-sky",
          title: 'Moon &amp;amp; Sky',
          description: "​A narrative game that uses experiential learning and AR to engage children in local exploration and space science.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-the-history-of-you",
          title: 'The History Of You',
          description: "A website, interactive explainer and board game that explores intergenerational trauma.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-design-metadata",
          title: 'Design Metadata',
          description: "A tool for designers and innovators to improve their ideas through exploring and remixing existing ideas.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-aartvark",
          title: 'aartvark',
          description: "An art gallery enhancement for and in collaboration with low-visions users.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/knle.bsky.social", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6B%68%75%79%65%6E%6C%65@%75%63%73%64.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/khuyen-le", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0007-1051-838X", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=aUbbW_wAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
