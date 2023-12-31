const economyJs = require('../../models/economic')

module.exports = {
  name: 'work',
  alias:["Work"],
  usage:`${prefa}work`,
  category:"Economy",
   react: "💼",
   start: async(client, m, { text, prefix, isBotAdmin,isAdmin,mentionByTag}) => {
      const works = [
        { name: 'Programmer', min: 10000, max: 200000 },
        { name: 'Designer', min: 8000, max: 15000 },
        { name: 'Writer', min: 7000, max: 12000 },
        { name: 'Photographer', min: 9000, max: 18000 },
        { name: 'Teacher', min: 6000, max: 10000 },
        { name: 'Hacker', min: 50000, max: 1000000}
    ]
    const work = getRandomWork(works)
    const earnings = Math.floor(Math.random() * (work.max - work.min + 1)) + work.min;
    await economyJs.updateOne({ userId: m.sender }, { $inc: { wallet: earnings } });
   m.reply(`👨‍💼 You worked as a ${work.name} and earned *${earnings}*`)

    function getRandomWork(works) {
        const randomIndex = Math.floor(Math.random() * works.length);
        const work = works[randomIndex];
        let payout;
      
        switch (work.name) {
          case 'Programmer':
            payout = { min: 10000, max: 200000 };
            break;
          case 'Designer':
            payout = { min: 8000, max: 15000 };
            break;
          case 'Writer':
            payout = { min: 7000, max: 12000 };
            break;
          case 'Photographer':
            payout = { min: 9000, max: 18000 };
            break;
          case 'Teacher':
            payout = { min: 6000, max: 10000 };
            break;
            case 'Hacker':
            payout = { min: 50000, max: 1000000};
            break;
          default:
            payout = { min: 0, max: 0 };
        }
      
        return { ...work, ...payout };
    }
}
}
