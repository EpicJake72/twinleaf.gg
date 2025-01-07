
export const config = {
  backend: {
    address: 'http://server.example.com',
    port: 8080,
    registrationEnabled: true,  // Completly disables/enables registration
    allowCors: true,
    tokenExpire: 86400,
    defaultPageSize: 50,
    avatarsDir: '',
    avatarsUrl: '/avatars/{name}',
    avatarFileSize: 256 * 1024,
    avatarMinSize: 64,
    avatarMaxSize: 512,
    replayFileSize: 512 * 1024,
    rateLimitCount: 25, // Ban IP after that many wrong password errors
    rateLimitTime: 300 // How long the user should be banned
  },
  core: {
    debug: false,

    // How often should we execute the background tasks
    schedulerInterval: 30 * 60 * 1000, // Reduced to 30 minutes


    // Wait till next hour before running tasks
    schedulerStartNextHour: false, // Removed wait time

    // Decrease players' ranking every day
    // If you wish to disable this feature set IntervalCount to 0
    rankingDecraseRate: 0.975, // 1 - 0.025 for 2.5% decrease
    rankingDecraseTime: 7 * 24 * 60 * 60 * 1000, // Reduced to 7 days
    rankingDecreaseIntervalCount: 2, // Check every other scheduler tick

    // Deletes matches older than `keepMatchTike` from the database, to keep it small.
    // If you wish to disable this feature set IntervalCount to 0
    keepMatchTime: 14 * 24 * 60 * 60 * 1000, // Reduced to 14 days
    keepMatchIntervalCount: 1,

    // Deletes users that doesn't log in in the `keepUserTime` and their ranking is 0
    // If you wish to disable this feature set IntervalCount to 0
    keepUserTime: 14 * 24 * 60 * 60 * 1000, // Increased to 14 days
    keepUserIntervalCount: 1
  },
  bots: {
    // Default password for bot user
    defaultPassword: 'password',

    // Delay between every action that bot is making
    actionDelay: 1500, // Reduced from 2500ms

    // Simulate matches every X ticks of the scheduler
    // If set to 0, the bot matches are disabled
    botGamesIntervalCount: 0,
  },
  sets: {
    scansDir: '',
    scansUrl: '{cardImage}'
  },
  email: {
    transporter: {
      sendmail: true,
      newline: 'unix',
      path: '/usr/sbin/sendmail'
    },
    sender: 'no-reply@example.com',
    appName: 'example',
    publicAddress: 'http://example.com' // Address inside the e-mail messages
  }
};