// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'Eli',
  imageBackground: true,
  openInNewTab: true,
  twelveHourFormat: true,

  // Greetings
  greetingMorning: 'Good morning,',
  greetingAfternoon: 'Good afternoon,',
  greetingEvening: 'Good evening,',
  greetingNight: 'Go to Sleep,',

  // Layout
  bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

  // Weather
  weatherKey: '5b82925104cf705bae58dc88b03f96ab', // Write here your API Key
  weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
  weatherUnit: 'F', // 'F', 'C'
  language: 'en', // More languages in https://openweathermap.org/current#multi

  trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: '37.775',
  defaultLongitude: '-122.419',

  // Autochange
  autoChangeTheme: true,

  // Autochabge by OS
  changeThemeByOS: true,

  // Autochange by hour options (24hrs format, string must be in: hh:mm)
  changeThemeByHour: false,
  hourDarkThemeActive: '08:30',
  hourDarkThemeInactive: '07:00',

  // ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
  // ├┴┐│ │ │  │ │ ││││└─┐
  // └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

  firstButtonsContainer: [
    {
      id: '1',
      name: 'GoMicro',
      icon: 'gitlab',
      link: 'https://gitlab.csde.caci.com/IBS-NS-Sustainment-and-Modernization/development/next-gen/GoMicro/',
    },
    {
      id: '2',
      name: 'GoMicro Commits',
      icon: 'git-commit',
      link: 'https://gitlab.csde.caci.com/IBS-NS-Sustainment-and-Modernization/development/next-gen/GoMicro/-/commits/main',
    },
    {
      id: '3',
      name: 'Todoist',
      icon: 'trello',
      link: 'https://todoist.com',
    },
    {
      id: '4',
      name: 'Calendar',
      icon: 'calendar',
      link: 'https://calendar.google.com/calendar/r',
    },
    {
      id: '5',
      name: 'O\'Reilly',
      icon: 'glasses',
      link: 'https://learning.oreilly.com/home/',
    },
    {
      id: '6',
      name: 'SonarQube',
      icon: 'scan',
      link: 'https://sonarqube.csde.caci.com/dashboard?id=ibs-ns_sustainment_and_modernization%3Agomicro',
    },
  ],

  secondButtonsContainer: [
    {
      id: '1',
      name: 'Music',
      icon: 'headphones',
      link: 'https://open.spotify.com',
    },
    {
      id: '2',
      name: 'twitter',
      icon: 'twitter',
      link: 'https://twitter.com/',
    },
    {
      id: '3',
      name: 'bot',
      icon: 'bot',
      link: 'https://discord.com/app',
    },
    {
      id: '4',
      name: 'Amazon',
      icon: 'shopping-bag',
      link: 'https://amazon.com/',
    },
    {
      id: '5',
      name: 'Hashnode',
      icon: 'pen-tool',
      link: 'https://hashnode.com/',
    },
    {
      id: '6',
      name: 'Figma',
      icon: 'figma',
      link: 'https://figma.com/',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  // First Links Container
  firstlistsContainer: [
    {
      icon: 'music',
      id: '1',
      links: [
        {
          name: 'Lofi',
          link: 'https://open.spotify.com/playlist/37i9dQZF1DWWQRwui0ExPn',
        },
        {
          name: 'Likes',
          link: 'https://open.spotify.com/collection/tracks',
        },
        {
          name: 'Discover Weekly',
          link: 'https://open.spotify.com/playlist/37i9dQZEVXcSNWCSMJ5ENR',
        },
        {
          name: 'Release Radar',
          link: 'https://open.spotify.com/playlist/37i9dQZEVXcSNWCSMJ5ENR',
        },
      ],
    },
    {
      icon: 'coffee',
      id: '2',
      links: [
        {
          name: 'Linkedin',
          link: 'https://www.linkedin.com',
        },
        {
          name: 'Dribbble',
          link: 'https://www.dribbble.com',
        },
        {
          name: 'Trello',
          link: 'https://www.trello.com',
        },
        {
          name: 'Slack',
          link: 'https://www.slack.com',
        },
      ],
    },
  ],

  // Second Links Container
  secondListsContainer: [
    {
      icon: 'binary',
      id: '1',
      links: [
        {
          name: 'Spotify',
          link: 'https://www.spotify.com',
        },
        {
          name: 'Reddit',
          link: 'https://www.reddit.com',
        },
        {
          name: 'Hashnode',
          link: 'https://www.hashnode.com',
        },
        {
          name: 'Pocket',
          link: 'https://www.pocket.com',
        },
      ],
    },
    {
      icon: 'gitlab',
      id: '2',
      links: [
        {
          name: 'UI',
          link: 'https://gitlab.csde.caci.com/IBS-NS/development/UI',
        },
        {
          name: 'Scripz',
          link: 'https://gitlab.csde.caci.com/IBS-NS/development/UI',
        },
        {
          name: 'Translator',
          link: 'https://gitlab.csde.caci.com/eli.harper/simpletranslator',
        },
        {
          name: 'Charts',
          link: 'https://gitlab.csde.caci.com/IBS-NS/development/Charts',
        },
      ],
    },
  ],
};
