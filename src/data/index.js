import { linkClasses } from "../styles";

const IntroductionData = {
  full_name: "Marvin Kang'ethe",
  description: "I'm a Software Engineer based in Nairobi, Kenya."
}

const PortfolioData = {
  project_types: {
    client: "Client Work",
    personal: "Personal Project",
  },

  work: [
    {
      type: "client",
      title: "RelishCareers",
      tools: [
        "rails", "react", "semantic-ui",
        "redux", "postgres", "sidekiq", "BitBucket"
      ],
      about: `
        RelishCareers is the online careers marketplace for
        hiring graduate-level job candidates, ranging from MBAs
        to Engineers or Data Scientists.
      `,
      links: [
        {
          name: "Website",
          url: "https://www.relishcareers.com",
        },
      ],
    },
    {
      type: "personal",
      title: "Matching Game",
      tools: [
        "rails", "tailwind", "stimulus-js"
      ],
      about: `
        A memory game for matching tiles that have the
        same color and animal as fast as possible.
      `,
      links: [
        {
          name: "Code on Github",
          url: "https://github.com/kang-marvin/matching-game",
        },
        {
          name: "Deployed to Fly.io",
          url: "https://matching-animal-color-game.fly.dev",
        },
      ],
    },
    {
      type: "personal",
      title: "Question Answer Platform",
      tools: [
        "rails", "tailwind", "react", "postgres"
      ],
      about: `
        A question-answer platform inspired by
        PluralSight assessment page. The project
        uses fake data
      `,
      links: [
        {
          name: "Code on Github",
          url: "https://github.com/kang-marvin/question-answer",
        },
        {
          name: "Deployed to Railway.app",
          url: "https://question-answer-production.up.railway.app",
        },
      ],
    },
    {
      type: "personal",
      title: "AmberScript Job Availability Bot",
      tools: [
        "ruby", "selenium-webdriver", "shell"
      ],
      about: `
        A bot that checks if jobs are available on
        AmberScript.com for transcribers
      `,
      links: [
        {
          name: "Code on Github",
          url: "https://github.com/kang-marvin/transcriber-job-availability-bot",
        },
      ],
    },
  ],
}

const ExperienceData = {
  experiences: [
    {
      date: "october 2016 - december 2020",
      companyName: "Andela",
      role: "Software Engineer",
      description: `
        Worked on internal products for several months
        and later worked for their clients RelishCareers
        and IndieGogo
      `
    },
    {
      date: "july 2017 - august 2020",
      companyName: "RelishCareers (via Andela) along ChiedoLabs",
      role: "Remote Software Developer",
      description: `
        Worked along ChiedoLabs to build and manage the RelishCareers web app.
      `
    },
    {
      date: "october 2020 - november 2020",
      companyName: "IndieGogo (via Andela)",
      role: "Remote Software Developer",
      description: `
        Worked on the user interface and bug fixes
      `
    },
    {
      date: "january 2021 - october 2022",
      companyName: "RelishCareers",
      role: "Senior Software Engineer",
      description: `
        Build and manage the RelishCareers v2 of the
        app from scratch due to scalability issues of
        v1, lack of test and other issues
      `
    },
    {
      date: "august 2021 - october 2022",
      companyName: "TransparentCareer (RelishCareers Acquired)",
      role: "Senior Software Engineer",
      description: `
        Manage the web app while incorporating it's features
        and data to RelishCareers v2 app
      `
    },
  ],
}

const HeaderData = {
  links: [
    {
      name: "Resume",
      link: "https://github.com/kang-marvin/resume/blob/master/Marvin%20Kang'ethe%20Resume.pdf",
      className: `outline ${linkClasses.a}`,
    },
  ]
}

const FooterData = {
  links: [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/kang-marvin"
    },
    {
      name: "Email",
      link: "mailto:marvinjameskang@gmail.com",
    },
    {
      name: "Twitter",
      link: "https://twitter.com/kang_marvin"
    },
    {
      name: "Github",
      link: "https://github.com/kang-marvin"
    },
    {
      name: "StackOverflow",
      link: "https://stackoverflow.com/users/7579494/marvin-kang?tab=profile"
    }
  ]
}

export {
  IntroductionData, PortfolioData,
  ExperienceData, HeaderData,
  FooterData
}