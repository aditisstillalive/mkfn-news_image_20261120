// The day's news, each item checked against reporting dated Friday 20 November 2026 (any time zone).
// Sources are named on each line; stories that turned out to be Thursday 19 November are listed in the footer.
window.NEWS = {
  mastTop: ['THE WORLD IN ONE PICTURE', '36 STORIES · 8 DESKS · ALL FROM THIS FRIDAY'],

  heroes: [
    { art: 'kyiv', color: '#c8102e', label: 'KYIV', num: '110+ missiles · 400+ drones',
      where: 'Ukraine · war', head: 'Russia hits three Kyiv bridges',
      detail: 'At least 8 killed in Ukraine; power cut in 10 regions.', src: 'Al Jazeera' },
    { art: 'markets', color: '#d1373f', label: 'AI SELL-OFF', num: 'Nvidia −14%',
      where: 'World markets', head: 'S&P 500 −3.7%, Nasdaq −5.3%',
      detail: 'Nikkei −5.1%, Kospi −5.2%; S&P −8.6% on the week.', src: 'AP, Reuters' },
    { art: 'cyclone', color: '#1f63c4', label: 'CYCLONE AKVAN', num: '372,000 evacuated',
      where: 'Odisha, India · weather', head: 'Cyclone Akvan hits India, no deaths',
      detail: 'Crossed the coast near Gopalpur at up to 90 km/h.', src: 'IMD, PTI' },
    { art: 'cop', color: '#1d8a55', label: 'COP31: NO DEAL', num: 'past deadline',
      where: 'Antalya, Türkiye · climate', head: 'COP31 runs into overtime',
      detail: 'Draft drops fossil fuels; Panama and EU object.', src: 'AFP, Reuters' },
  ],

  desks: [
    { name: 'Europe', color: '#2457a6', stories: [
      { place: 'Poland', head: 'Russian missile lands 60 km inside Poland', detail: 'No one hurt; Tusk: "not an accident".', src: 'CBS' },
      { place: 'Brussels', head: 'UK and EU seal "reset" deals', detail: 'Food, carbon and youth-visa pacts.', src: 'France 24' },
      { place: 'Kryvyi Rih', head: 'Russian strike kills boy, 7', detail: 'A paramedic also killed.', src: 'Kyiv Independent' },
      { place: 'Italy', head: 'General strike on wages, spending', detail: 'Rallies in 100+ cities; transport hit.', src: 'Reuters' },
    ] },
    { name: 'Middle East', color: '#b4531c', stories: [
      { place: 'Yemen', head: 'Saudi-led coalition bombs Hodeidah port', detail: 'Houthis call Saudi skies unsafe.', src: 'Reuters' },
      { place: 'Iraq', head: 'Army enters Kataib Hezbollah stronghold', detail: 'First in Jurf al-Sakhar in 12+ years.', src: 'France 24' },
      { place: 'Gaza', head: 'Israeli drone strikes kill seven', detail: 'In Bureij, Nuseirat, Deir el-Balah.', src: 'Al Jazeera' },
      { place: 'Iran', head: 'Trump: Tehran\'s terms "unacceptable"', detail: 'Strait of Hormuz stays blocked.', src: 'AP' },
    ] },
    { name: 'Africa', color: '#1d7a4b', stories: [
      { place: 'Uganda', head: 'Ebola curbs on DR Congo border', detail: 'Gatherings banned in 34 districts.', src: 'The Star' },
      { place: 'DR Congo', head: 'WHO: Ebola still a global emergency', detail: '11,613 cases and 5,678 deaths so far.', src: 'WHO' },
      { place: 'S. Africa', head: 'Ex-deputy president Mlambo-Ngcuka dies', detail: 'Ex-UN Women chief was 71.', src: 'Mail & Guardian' },
      { place: 'Nigeria', head: 'Funeral boat capsizes in Bayelsa', detail: 'At least 4 dead, 24 rescued.', src: 'Reuters' },
    ] },
    { name: 'South Asia', color: '#8a3a9e', stories: [
      { place: 'Bangladesh', head: 'New arson attacks before Hasina return', detail: '124 arrested in Dhaka in a day.', src: 'AFP' },
      { place: 'Delhi', head: 'Pakistani minister at Modi\'s SCO forum', detail: 'First such visit in over 3 years.', src: 'Dawn' },
      { place: 'Rajasthan', head: 'Congress leads BJP in rural polls', detail: 'Ahead on partial panchayat results.', src: 'Outlook' },
      { place: 'Pakistan', head: 'Roadside bomb kills 3 in Balochistan', detail: 'Blast in Chagai district.', src: 'Arab News' },
    ] },
    { name: 'East Asia', color: '#c0392b', stories: [
      { place: 'Myanmar', head: 'Junta calls ICJ genocide ruling "not fair"', detail: 'Cites the judges\' 9–6 split.', src: 'TRT' },
      { place: 'Shenzhen', head: 'Xi meets four Southeast Asian leaders', detail: 'Prabowo, Anwar, Wong and Anutin.', src: 'SCMP' },
      { place: 'Japan', head: 'Core inflation rises to 2.2%', detail: 'October figure, up from 2.1%.', src: 'Xinhua' },
      { place: 'China', head: 'Loan rates held for 18th month', detail: 'One-year 3.0%, five-year 3.5%.', src: 'People\'s Daily' },
    ] },
    { name: 'Oceania', color: '#0f7f86', stories: [
      { place: 'Australia', head: 'Xi hails "turnaround" in ties', detail: 'Fifth Xi–Albanese meeting.', src: 'ABC' },
      { place: 'Sydney', head: 'Man charged after terror raids', detail: 'Police allege vehicle-bomb research.', src: 'ABC' },
      { place: 'Wellington', head: 'Phillips 118 as NZ make 368 v India', detail: 'Rescued NZ from 70 for 5.', src: 'ICC' },
      { place: 'S. Australia', head: 'Storm cuts power to 24,000', detail: 'Blackout on the Eyre Peninsula.', src: 'ABC' },
    ] },
    { name: 'Americas', color: '#1b4d8c', stories: [
      { place: 'Washington', head: 'Trump\'s 90-minute post-China briefing', detail: 'Threatens tax on data centres abroad.', src: 'CNN' },
      { place: 'US courts', head: '2022 proxy-vote spending law struck', detail: '5th Circuit rules 9–8.', src: 'Reuters' },
      { place: 'Haiti', head: 'Three Salvadoran soldiers killed', detail: 'First deaths of the mission.', src: 'Bloomberg' },
      { place: 'US', head: 'FBI crime database breach reported', detail: 'FBI declines to comment.', src: 'NBC' },
    ] },
    { name: 'Markets · Sport', color: '#4b3f9e', stories: [
      { place: 'Nvidia', head: 'Shares −14% on reported SEC probe', detail: 'Probe unconfirmed; ~$500bn wiped off.', src: 'Reuters' },
      { place: 'Taiwan', head: 'Taiex −6.2%, worst week since 1991', detail: 'SoftBank −14.5% in Tokyo.', src: 'Reuters' },
      { place: 'Las Vegas', head: 'Verstappen inherits F1 pole', detail: 'Antonelli takes a 5-place penalty.', src: 'Formula 1' },
      { place: 'Turin', head: 'Medvedev completes ATP Finals semis', detail: 'Beats Tiafoe 6-3 6-4.', src: 'ESPN' },
    ] },
  ],

  foot: '<span><b>DATE CHECK</b> Left out as Thursday 19 Nov news: ICJ Myanmar ruling, Xi–Trump–Putin talks, APEC declaration, Somalia–UAE expulsion.</span><span>Original drawings</span>',
};
