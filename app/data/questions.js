// app/data/questions.js
const questionBanks = {
  easy: [
    {
      id: 1,
      question: "What is the capital of England?",
      options: ["Birmingham", "Manchester", "London", "Liverpool"],
      correctAnswer: "London",
      category: "Geography"
    },
    {
      id: 2,
      question: "Which river runs through London?",
      options: ["Severn", "Thames", "Mersey", "Tyne"],
      correctAnswer: "Thames",
      category: "Geography"
    },
    {
      id: 3,
      question: "Who is the current British monarch (as of 2024)?",
      options: ["Queen Elizabeth II", "King Charles III", "Prince William", "King George VII"],
      correctAnswer: "King Charles III",
      category: "Politics"
    },
    {
      id: 4,
      question: "What are the colors of the UK flag?",
      options: ["Green, white, and red", "Red, white, and blue", "Red, yellow, and blue", "Blue, white, and green"],
      correctAnswer: "Red, white, and blue",
      category: "Culture"
    },
    {
      id: 5,
      question: "Which country is NOT part of the United Kingdom?",
      options: ["Scotland", "Wales", "Republic of Ireland", "Northern Ireland"],
      correctAnswer: "Republic of Ireland",
      category: "Geography"
    },
    {
      id: 6,
      question: "What is the UK's currency?",
      options: ["Euro", "Dollar", "Pound Sterling", "Franc"],
      correctAnswer: "Pound Sterling",
      category: "Economics"
    },
    {
      id: 7,
      question: "Which iconic clock tower is in London?",
      options: ["Big Ben", "The Shard", "Blackpool Tower", "Spinnaker Tower"],
      correctAnswer: "Big Ben",
      category: "Landmarks"
    },
    {
      id: 8,
      question: "What is the national flower of England?",
      options: ["Daffodil", "Rose", "Thistle", "Shamrock"],
      correctAnswer: "Rose",
      category: "Culture"
    },
    {
      id: 9,
      question: "Which London tube line is coloured red on the map?",
      options: ["Central", "Piccadilly", "Circle", "District"],
      correctAnswer: "Central",
      category: "Transport"
    },
    {
      id: 10,
      question: "What is the name of the UK's parliament building?",
      options: ["Buckingham Palace", "The Palace of Westminster", "10 Downing Street", "The Tower of London"],
      correctAnswer: "The Palace of Westminster",
      category: "Politics"
    },
    {
      id: 11,
      question: "Which sport originated in England?",
      options: ["Football", "Cricket", "Rugby", "All of the above"],
      correctAnswer: "All of the above",
      category: "Sports"
    },
    {
      id: 12,
      question: "What is the highest mountain in the UK?",
      options: ["Snowdon", "Scafell Pike", "Ben Nevis", "Helvellyn"],
      correctAnswer: "Ben Nevis",
      category: "Geography"
    },
    {
      id: 13,
      question: "Which city is known for its annual Edinburgh Festival?",
      options: ["Glasgow", "Edinburgh", "Manchester", "Bristol"],
      correctAnswer: "Edinburgh",
      category: "Culture"
    },
    {
      id: 14,
      question: "What is the traditional English breakfast called?",
      options: ["Continental", "Full English", "British Fry-up", "London Breakfast"],
      correctAnswer: "Full English",
      category: "Food"
    },
    {
      id: 15,
      question: "Which university is the oldest in the English-speaking world?",
      options: ["University of Cambridge", "University of Oxford", "University of St Andrews", "University of London"],
      correctAnswer: "University of Oxford",
      category: "Education"
    },
    {
      id: 16,
      question: "What is Stonehenge made of?",
      options: ["Granite", "Limestone", "Sandstone", "All of the above"],
      correctAnswer: "All of the above",
      category: "History"
    },
    {
      id: 17,
      question: "Which sea surrounds the British Isles to the east?",
      options: ["Irish Sea", "Celtic Sea", "English Channel", "North Sea"],
      correctAnswer: "North Sea",
      category: "Geography"
    },
    {
      id: 18,
      question: "Who wrote 'Harry Potter'?",
      options: ["J.R.R. Tolkien", "J.K. Rowling", "C.S. Lewis", "Roald Dahl"],
      correctAnswer: "J.K. Rowling",
      category: "Literature"
    },
    {
      id: 19,
      question: "What is the UK's national animal?",
      options: ["Lion", "Unicorn", "Bulldog", "Red Fox"],
      correctAnswer: "Lion",
      category: "Culture"
    },
    {
      id: 20,
      question: "Which English king had six wives?",
      options: ["Henry VII", "Henry VIII", "Edward VI", "James I"],
      correctAnswer: "Henry VIII",
      category: "History"
    },
    {
      id: 21,
      question: "What is the name of London's financial district?",
      options: ["The Square Mile", "Canary Wharf", "The City", "All of the above"],
      correctAnswer: "All of the above",
      category: "Economics"
    },
    {
      id: 22,
      question: "Which British band was known as 'The Fab Four'?",
      options: ["The Rolling Stones", "The Who", "The Beatles", "Queen"],
      correctAnswer: "The Beatles",
      category: "Music"
    },
    {
      id: 23,
      question: "What is the national dish of England?",
      options: ["Fish and chips", "Roast beef", "Chicken tikka masala", "All are considered"],
      correctAnswer: "All are considered",
      category: "Food"
    },
    {
      id: 24,
      question: "Which castle is the official residence of the monarch in Scotland?",
      options: ["Edinburgh Castle", "Balmoral Castle", "Holyrood Palace", "Stirling Castle"],
      correctAnswer: "Holyrood Palace",
      category: "Monarchy"
    },
    {
      id: 25,
      question: "What year did World War II end?",
      options: ["1944", "1945", "1946", "1947"],
      correctAnswer: "1945",
      category: "History"
    },
    {
      id: 26,
      question: "Which scientist developed the theory of evolution?",
      options: ["Isaac Newton", "Charles Darwin", "Stephen Hawking", "Michael Faraday"],
      correctAnswer: "Charles Darwin",
      category: "Science"
    },
    {
      id: 27,
      question: "What is the name of the UK's intelligence agency?",
      options: ["FBI", "CIA", "MI6", "KGB"],
      correctAnswer: "MI6",
      category: "Politics"
    },
    {
      id: 28,
      question: "Which British car brand is known for its luxury vehicles?",
      options: ["Ford", "Vauxhall", "Rolls-Royce", "Toyota"],
      correctAnswer: "Rolls-Royce",
      category: "Transport"
    },
    {
      id: 29,
      question: "What is the traditional Scottish garment called?",
      options: ["Kilt", "Sporran", "Tam o' Shanter", "Tartan"],
      correctAnswer: "Kilt",
      category: "Culture"
    },
    {
      id: 30,
      question: "Which English football club plays at Old Trafford?",
      options: ["Manchester City", "Liverpool", "Manchester United", "Arsenal"],
      correctAnswer: "Manchester United",
      category: "Sports"
    },
    {
      id: 31,
      question: "What is the UK's largest lake by surface area?",
      options: ["Loch Ness", "Loch Lomond", "Windermere", "Lough Neagh"],
      correctAnswer: "Lough Neagh",
      category: "Geography"
    },
    {
      id: 32,
      question: "Who was the first female British Prime Minister?",
      options: ["Theresa May", "Margaret Thatcher", "Queen Elizabeth I", "Harriet Harman"],
      correctAnswer: "Margaret Thatcher",
      category: "Politics"
    },
    {
      id: 33,
      question: "Which British inventor created the World Wide Web?",
      options: ["Alan Turing", "Tim Berners-Lee", "Bill Gates", "Steve Jobs"],
      correctAnswer: "Tim Berners-Lee",
      category: "Technology"
    },
    {
      id: 34,
      question: "What is the name of the British national anthem?",
      options: ["Rule Britannia", "Land of Hope and Glory", "Jerusalem", "God Save the King"],
      correctAnswer: "God Save the King",
      category: "Culture"
    },
    {
      id: 35,
      question: "Which London bridge can be raised to allow ships to pass?",
      options: ["London Bridge", "Tower Bridge", "Millennium Bridge", "Waterloo Bridge"],
      correctAnswer: "Tower Bridge",
      category: "Landmarks"
    },
    {
      id: 36,
      question: "What is the traditional Welsh musical instrument?",
      options: ["Bagpipes", "Harp", "Fiddle", "Accordion"],
      correctAnswer: "Harp",
      category: "Culture"
    },
    {
      id: 37,
      question: "Which British university hosts the annual boat race against Oxford?",
      options: ["Cambridge", "Imperial College", "LSE", "Durham"],
      correctAnswer: "Cambridge",
      category: "Sports"
    },
    {
      id: 38,
      question: "What is the northernmost country of the United Kingdom?",
      options: ["Scotland", "England", "Wales", "Northern Ireland"],
      correctAnswer: "Scotland",
      category: "Geography"
    },
    {
      id: 39,
      question: "Which British author created James Bond?",
      options: ["John le Carré", "Ian Fleming", "Arthur Conan Doyle", "Agatha Christie"],
      correctAnswer: "Ian Fleming",
      category: "Literature"
    },
    {
      id: 40,
      question: "What is the name of the UK's central bank?",
      options: ["Royal Bank of Scotland", "Bank of England", "HSBC", "Lloyds Bank"],
      correctAnswer: "Bank of England",
      category: "Economics"
    },
    {
      id: 41,
      question: "Which British city is known as 'Steel City'?",
      options: ["Manchester", "Sheffield", "Birmingham", "Leeds"],
      correctAnswer: "Sheffield",
      category: "Industry"
    },
    {
      id: 42,
      question: "What is the official language of Wales?",
      options: ["English only", "Welsh and English", "Gaelic", "Cornish"],
      correctAnswer: "Welsh and English",
      category: "Culture"
    },
    {
      id: 43,
      question: "Which British scientist discovered penicillin?",
      options: ["Alexander Fleming", "Marie Curie", "Louis Pasteur", "Joseph Lister"],
      correctAnswer: "Alexander Fleming",
      category: "Science"
    },
    {
      id: 44,
      question: "What is the traditional Scottish New Year celebration called?",
      options: ["Burns Night", "Hogmanay", "St Andrew's Day", "Highland Games"],
      correctAnswer: "Hogmanay",
      category: "Culture"
    },
    {
      id: 45,
      question: "Which London museum is famous for its Egyptian mummies?",
      options: ["Natural History Museum", "British Museum", "Science Museum", "Victoria and Albert Museum"],
      correctAnswer: "British Museum",
      category: "Education"
    },
    {
      id: 46,
      question: "What is the minimum voting age in UK general elections?",
      options: ["16", "17", "18", "21"],
      correctAnswer: "18",
      category: "Politics"
    },
    {
      id: 47,
      question: "Which British island is located in the English Channel?",
      options: ["Isle of Man", "Isle of Wight", "Jersey", "Both B and C"],
      correctAnswer: "Both B and C",
      category: "Geography"
    },
    {
      id: 48,
      question: "Who painted 'The Hay Wain'?",
      options: ["J.M.W. Turner", "John Constable", "William Hogarth", "Thomas Gainsborough"],
      correctAnswer: "John Constable",
      category: "Art"
    },
    {
      id: 49,
      question: "What is the UK's highest military award?",
      options: ["Distinguished Service Order", "Victoria Cross", "George Cross", "Military Cross"],
      correctAnswer: "Victoria Cross",
      category: "Military"
    },
    {
      id: 50,
      question: "Which British city is home to the Beatles Story museum?",
      options: ["Manchester", "London", "Liverpool", "Birmingham"],
      correctAnswer: "Liverpool",
      category: "Music"
    },
    {
      id: 51,
      question: "What is the name of the Scottish Parliament building?",
      options: ["Holyrood", "St Andrew's House", "Scottish Parliament Building", "Both A and C"],
      correctAnswer: "Both A and C",
      category: "Politics"
    },
    {
      id: 52,
      question: "Which British engineer built the first successful steam locomotive?",
      options: ["James Watt", "George Stephenson", "Isambard Kingdom Brunel", "Thomas Newcomen"],
      correctAnswer: "George Stephenson",
      category: "Technology"
    },
    {
      id: 53,
      question: "What is the traditional Cornish pastry called?",
      options: ["Scone", "Pastie", "Cornish Pasty", "Pasty"],
      correctAnswer: "Cornish Pasty",
      category: "Food"
    },
    {
      id: 54,
      question: "Which UK city is known for its Clifton Suspension Bridge?",
      options: ["London", "Bristol", "Newcastle", "Glasgow"],
      correctAnswer: "Bristol",
      category: "Landmarks"
    },
    {
      id: 55,
      question: "What year did women get the vote in the UK?",
      options: ["1918", "1928", "1945", "1967"],
      correctAnswer: "1918",
      category: "History"
    },
    {
      id: 56,
      question: "Which British monarch reigned the longest?",
      options: ["Queen Victoria", "King George III", "Queen Elizabeth II", "Henry VIII"],
      correctAnswer: "Queen Elizabeth II",
      category: "Monarchy"
    },
    {
      id: 57,
      question: "What is the UK's main stock exchange called?",
      options: ["FTSE", "London Stock Exchange", "The City Exchange", "British Stock Market"],
      correctAnswer: "London Stock Exchange",
      category: "Economics"
    },
    {
      id: 58,
      question: "Which British writer created Sherlock Holmes?",
      options: ["Agatha Christie", "Arthur Conan Doyle", "P.D. James", "Ruth Rendell"],
      correctAnswer: "Arthur Conan Doyle",
      category: "Literature"
    },
    {
      id: 59,
      question: "What is the name of the Welsh national anthem?",
      options: ["Men of Harlech", "Land of My Fathers", "Cwm Rhondda", "All Through the Night"],
      correctAnswer: "Land of My Fathers",
      category: "Culture"
    },
    {
      id: 60,
      question: "Which British city is known for its Georgian architecture?",
      options: ["Bath", "York", "Edinburgh", "All of the above"],
      correctAnswer: "All of the above",
      category: "Architecture"
    },
    {
      id: 61,
      question: "What is the UK's national tree?",
      options: ["Oak", "Ash", "Yew", "Birch"],
      correctAnswer: "Oak",
      category: "Nature"
    },
    {
      id: 62,
      question: "Which British scientist formulated the laws of motion?",
      options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Robert Hooke"],
      correctAnswer: "Isaac Newton",
      category: "Science"
    },
    {
      id: 63,
      question: "What is the name of the UK's upper house of Parliament?",
      options: ["House of Commons", "House of Lords", "Senate", "House of Peers"],
      correctAnswer: "House of Lords",
      category: "Politics"
    },
    {
      id: 64,
      question: "Which UK city is home to the Royal Shakespeare Company?",
      options: ["London", "Manchester", "Stratford-upon-Avon", "Bristol"],
      correctAnswer: "Stratford-upon-Avon",
      category: "Theatre"
    },
    {
      id: 65,
      question: "What is the traditional Irish dance called?",
      options: ["Highland Dancing", "Morris Dancing", "Irish Stepdance", "Ceilidh"],
      correctAnswer: "Irish Stepdance",
      category: "Culture"
    },
    {
      id: 66,
      question: "Which British king signed the Magna Carta?",
      options: ["King John", "Richard the Lionheart", "Henry II", "Edward I"],
      correctAnswer: "King John",
      category: "History"
    },
    {
      id: 67,
      question: "What is the UK's largest airport?",
      options: ["Manchester Airport", "Gatwick Airport", "Heathrow Airport", "Stansted Airport"],
      correctAnswer: "Heathrow Airport",
      category: "Transport"
    },
    {
      id: 68,
      question: "Which British band recorded 'Bohemian Rhapsody'?",
      options: ["The Beatles", "The Rolling Stones", "Queen", "Led Zeppelin"],
      correctAnswer: "Queen",
      category: "Music"
    },
    {
      id: 69,
      question: "What is the name of the Scottish national poet?",
      options: ["William Wordsworth", "Robert Burns", "Walter Scott", "Robert Louis Stevenson"],
      correctAnswer: "Robert Burns",
      category: "Literature"
    },
    {
      id: 70,
      question: "Which English county is known as the 'Garden of England'?",
      options: ["Cornwall", "Kent", "Devon", "Somerset"],
      correctAnswer: "Kent",
      category: "Geography"
    },
    {
      id: 71,
      question: "What is the UK's national bird?",
      options: ["Robin", "Blackbird", "European Robin", "None officially"],
      correctAnswer: "European Robin",
      category: "Nature"
    },
    {
      id: 72,
      question: "Which British actor played James Bond in 'Goldfinger'?",
      options: ["Sean Connery", "Roger Moore", "Daniel Craig", "Pierce Brosnan"],
      correctAnswer: "Sean Connery",
      category: "Film"
    },
    {
      id: 73,
      question: "What is the name of London's mayor's official residence?",
      options: ["Mansion House", "10 Downing Street", "City Hall", "County Hall"],
      correctAnswer: "Mansion House",
      category: "Politics"
    },
    {
      id: 74,
      question: "Which UK university city is known for its dreaming spires?",
      options: ["Cambridge", "Oxford", "Durham", "St Andrews"],
      correctAnswer: "Oxford",
      category: "Education"
    },
    {
      id: 75,
      question: "What is the traditional Scottish soup made with barley and vegetables?",
      options: ["Cullen Skink", "Scotch Broth", "Cock-a-leekie", "Haggis Soup"],
      correctAnswer: "Scotch Broth",
      category: "Food"
    },
    {
      id: 76,
      question: "Which British explorer reached the South Pole?",
      options: ["James Cook", "Robert Falcon Scott", "Ernest Shackleton", "David Livingstone"],
      correctAnswer: "Robert Falcon Scott",
      category: "Exploration"
    },
    {
      id: 77,
      question: "What is the UK's national theatre called?",
      options: ["Royal National Theatre", "Shakespeare's Globe", "The Old Vic", "Royal Court Theatre"],
      correctAnswer: "Royal National Theatre",
      category: "Theatre"
    },
    {
      id: 78,
      question: "Which British city is known for its canals and Bull Ring shopping centre?",
      options: ["Birmingham", "Manchester", "Leeds", "Nottingham"],
      correctAnswer: "Birmingham",
      category: "Cities"
    },
    {
      id: 79,
      question: "What is the name of the Welsh assembly?",
      options: ["Welsh Parliament", "Senedd", "Welsh Assembly", "Both A and B"],
      correctAnswer: "Both A and B",
      category: "Politics"
    },
    {
      id: 80,
      question: "Which British holiday celebrates the failed Gunpowder Plot?",
      options: ["Bonfire Night", "Guy Fawkes Night", "Fireworks Night", "All of the above"],
      correctAnswer: "All of the above",
      category: "Culture"
    },
    {
      id: 81,
      question: "What is the UK's most populous city after London?",
      options: ["Manchester", "Birmingham", "Glasgow", "Liverpool"],
      correctAnswer: "Birmingham",
      category: "Geography"
    },
    {
      id: 82,
      question: "Which British composer wrote 'The Planets' suite?",
      options: ["Edward Elgar", "Gustav Holst", "Ralph Vaughan Williams", "Benjamin Britten"],
      correctAnswer: "Gustav Holst",
      category: "Music"
    },
    {
      id: 83,
      question: "What is the name of the UK's national health service?",
      options: ["British Health Service", "National Health Service", "UK Health Service", "Health Service UK"],
      correctAnswer: "National Health Service",
      category: "Healthcare"
    },
    {
      id: 84,
      question: "Which British island is famous for its cream teas?",
      options: ["Isle of Wight", "Isle of Man", "Isle of Skye", "Channel Islands"],
      correctAnswer: "Isle of Wight",
      category: "Food"
    },
    {
      id: 85,
      question: "What year did the UK join the European Union (then EEC)?",
      options: ["1957", "1963", "1973", "1992"],
      correctAnswer: "1973",
      category: "Politics"
    },
    {
      id: 86,
      question: "Which British artist is known for his spot paintings?",
      options: ["David Hockney", "Damien Hirst", "Tracey Emin", "Banksy"],
      correctAnswer: "Damien Hirst",
      category: "Art"
    },
    {
      id: 87,
      question: "What is the traditional English folk dance called?",
      options: ["Morris Dancing", "Highland Dancing", "Irish Jig", "Scottish Reel"],
      correctAnswer: "Morris Dancing",
      category: "Culture"
    },
    {
      id: 88,
      question: "Which British university is known for its May Ball celebrations?",
      options: ["Oxford", "Cambridge", "Durham", "All of the above"],
      correctAnswer: "All of the above",
      category: "Education"
    },
    {
      id: 89,
      question: "What is the UK's highest waterfall?",
      options: ["Pistyll Rhaeadr", "High Force", "Eas a' Chual Aluinn", "Gaping Gill"],
      correctAnswer: "Eas a' Chual Aluinn",
      category: "Geography"
    },
    {
      id: 90,
      question: "Which British king abdicated the throne to marry Wallis Simpson?",
      options: ["Edward VII", "Edward VIII", "George VI", "George V"],
      correctAnswer: "Edward VIII",
      category: "Monarchy"
    },
    {
      id: 91,
      question: "What is the name of London's famous department store?",
      options: ["Selfridges", "Harrods", "Fortnum & Mason", "All of the above"],
      correctAnswer: "All of the above",
      category: "Shopping"
    },
    {
      id: 92,
      question: "Which British scientist discovered the electron?",
      options: ["Ernest Rutherford", "J.J. Thomson", "James Chadwick", "Michael Faraday"],
      correctAnswer: "J.J. Thomson",
      category: "Science"
    },
    {
      id: 93,
      question: "What is the traditional Scottish musical instrument?",
      options: ["Bagpipes", "Fiddle", "Accordion", "Tin Whistle"],
      correctAnswer: "Bagpipes",
      category: "Music"
    },
    {
      id: 94,
      question: "Which British city is home to the Tyne Bridge?",
      options: ["Liverpool", "Newcastle upon Tyne", "Glasgow", "Bristol"],
      correctAnswer: "Newcastle upon Tyne",
      category: "Landmarks"
    },
    {
      id: 95,
      question: "What year did the London Underground open?",
      options: ["1856", "1863", "1890", "1901"],
      correctAnswer: "1863",
      category: "Transport"
    },
    {
      id: 96,
      question: "Which British writer created 'The Lord of the Rings'?",
      options: ["C.S. Lewis", "J.R.R. Tolkien", "J.K. Rowling", "Terry Pratchett"],
      correctAnswer: "J.R.R. Tolkien",
      category: "Literature"
    },
    {
      id: 97,
      question: "What is the UK's national drink?",
      options: ["Beer", "Whisky", "Tea", "Gin"],
      correctAnswer: "Tea",
      category: "Food"
    },
    {
      id: 98,
      question: "Which British athlete won four gold medals at the 2012 Olympics?",
      options: ["Jessica Ennis-Hill", "Mo Farah", "Chris Hoy", "Bradley Wiggins"],
      correctAnswer: "Mo Farah",
      category: "Sports"
    },
    {
      id: 99,
      question: "What is the name of the UK's weather service?",
      options: ["UK Weather", "British Meteorological Office", "Met Office", "Weather UK"],
      correctAnswer: "Met Office",
      category: "Science"
    },
    {
      id: 100,
      question: "Which British festival celebrates literature?",
      options: ["Glastonbury", "Hay Festival", "Edinburgh Festival", "Cheltenham Festival"],
      correctAnswer: "Hay Festival",
      category: "Culture"
    }
  ],
  medium: [
    {
      id: 1,
      question: "Which Prime Minister introduced the 'poll tax' that led to widespread protests?",
      options: ["Margaret Thatcher", "John Major", "Tony Blair", "Gordon Brown"],
      correctAnswer: "Margaret Thatcher",
      category: "Politics"
    },
    {
      id: 2,
      question: "What was the name of the government report that led to the creation of the NHS?",
      options: ["Beveridge Report", "Butler Report", "Wolfenden Report", "Plowden Report"],
      correctAnswer: "Beveridge Report",
      category: "Healthcare"
    },
    {
      id: 3,
      question: "Which British company developed the ARM processor architecture?",
      options: ["ARM Holdings", "Acorn Computers", "BBC Micro", "Sinclair Research"],
      correctAnswer: "Acorn Computers",
      category: "Technology"
    },
    {
      id: 4,
      question: "What year was the Bank of England nationalised?",
      options: ["1914", "1931", "1946", "1979"],
      correctAnswer: "1946",
      category: "Economics"
    },
    {
      id: 5,
      question: "Which British engineer designed the London Underground map?",
      options: ["Harry Beck", "Charles Holden", "Frank Pick", "Norman Foster"],
      correctAnswer: "Harry Beck",
      category: "Design"
    },
    {
      id: 6,
      question: "What is the name of the UK's supreme court?",
      options: ["Supreme Court of the United Kingdom", "House of Lords Judicial Committee", "Royal Courts of Justice", "High Court of Justice"],
      correctAnswer: "Supreme Court of the United Kingdom",
      category: "Law"
    },
    {
      id: 7,
      question: "Which British scientist developed the first practical telephone?",
      options: ["Alexander Graham Bell", "Thomas Edison", "Guglielmo Marconi", "John Logie Baird"],
      correctAnswer: "Alexander Graham Bell",
      category: "Science"
    },
    {
      id: 8,
      question: "What was the name of the 19th century British police force established by Robert Peel?",
      options: ["Scotland Yard", "Metropolitan Police", "Bobbies", "All of the above"],
      correctAnswer: "All of the above",
      category: "History"
    },
    {
      id: 9,
      question: "Which UK university was the first to admit women on equal terms with men?",
      options: ["University of London", "University of Bristol", "University of Cambridge", "University of Oxford"],
      correctAnswer: "University of London",
      category: "Education"
    },
    {
      id: 10,
      question: "What is the 'third runway' controversy associated with?",
      options: ["Gatwick Airport", "Heathrow Airport", "Manchester Airport", "Birmingham Airport"],
      correctAnswer: "Heathrow Airport",
      category: "Environment"
    },
    {
      id: 11,
      question: "Which British Prime Minister negotiated the Good Friday Agreement?",
      options: ["John Major", "Tony Blair", "Gordon Brown", "David Cameron"],
      correctAnswer: "Tony Blair",
      category: "Politics"
    },
    {
      id: 12,
      question: "What was the name of the British computer that broke German Enigma codes?",
      options: ["Colossus", "Bombe", "Manchester Baby", "EDSAC"],
      correctAnswer: "Bombe",
      category: "Technology"
    },
    {
      id: 13,
      question: "Which British artist led the Pre-Raphaelite Brotherhood?",
      options: ["John Everett Millais", "Dante Gabriel Rossetti", "William Holman Hunt", "Edward Burne-Jones"],
      correctAnswer: "Dante Gabriel Rossetti",
      category: "Art"
    },
    {
      id: 14,
      question: "What year did decimalisation occur in the UK?",
      options: ["1965", "1971", "1975", "1980"],
      correctAnswer: "1971",
      category: "History"
    },
    {
      id: 15,
      question: "Which British physicist discovered the neutron?",
      options: ["Ernest Rutherford", "J.J. Thomson", "James Chadwick", "Niels Bohr"],
      correctAnswer: "James Chadwick",
      category: "Science"
    },
    {
      id: 16,
      question: "What is the 'West Lothian Question' in UK politics?",
      options: ["Scottish MPs voting on English matters", "Welsh representation in Parliament", "Northern Irish border issues", "London's devolution"],
      correctAnswer: "Scottish MPs voting on English matters",
      category: "Politics"
    },
    {
      id: 17,
      question: "Which British engineer built the SS Great Britain?",
      options: ["George Stephenson", "Isambard Kingdom Brunel", "Robert Stephenson", "Thomas Telford"],
      correctAnswer: "Isambard Kingdom Brunel",
      category: "Engineering"
    },
    {
      id: 18,
      question: "What was the 'Rushdie Affair' of 1989 about?",
      options: ["A political scandal", "A controversial novel", "A diplomatic incident", "A literary prize"],
      correctAnswer: "A controversial novel",
      category: "Literature"
    },
    {
      id: 19,
      question: "Which British economist wrote 'The General Theory of Employment, Interest and Money'?",
      options: ["Adam Smith", "John Maynard Keynes", "Milton Friedman", "David Ricardo"],
      correctAnswer: "John Maynard Keynes",
      category: "Economics"
    },
    {
      id: 20,
      question: "What is the name of the UK's data protection authority?",
      options: ["Information Commissioner's Office", "Data Protection Agency", "Privacy Commission", "Cyber Security Centre"],
      correctAnswer: "Information Commissioner's Office",
      category: "Law"
    },
    {
      id: 21,
      question: "Which British playwright wrote 'The Birthday Party'?",
      options: ["Harold Pinter", "Tom Stoppard", "Alan Ayckbourn", "Noël Coward"],
      correctAnswer: "Harold Pinter",
      category: "Theatre"
    },
    {
      id: 22,
      question: "What was the 'Cod Wars' conflict between the UK and which country?",
      options: ["France", "Spain", "Iceland", "Norway"],
      correctAnswer: "Iceland",
      category: "History"
    },
    {
      id: 23,
      question: "Which British mathematician developed Boolean algebra?",
      options: ["George Boole", "Alan Turing", "Charles Babbage", "Augustus De Morgan"],
      correctAnswer: "George Boole",
      category: "Mathematics"
    },
    {
      id: 24,
      question: "What is the 'Barnett Formula' used for?",
      options: ["MPs' expenses", "University funding", "Devolved government funding", "NHS budgeting"],
      correctAnswer: "Devolved government funding",
      category: "Politics"
    },
    {
      id: 25,
      question: "Which British artist created 'The Physical Impossibility of Death in the Mind of Someone Living'?",
      options: ["Damien Hirst", "Tracey Emin", "Chris Ofili", "Rachel Whiteread"],
      correctAnswer: "Damien Hirst",
      category: "Art"
    },
    {
      id: 26,
      question: "What year was the BBC founded?",
      options: ["1910", "1922", "1936", "1945"],
      correctAnswer: "1922",
      category: "Media"
    },
    {
      id: 27,
      question: "Which British scientist discovered the structure of DNA?",
      options: ["Francis Crick", "James Watson", "Rosalind Franklin", "All were involved"],
      correctAnswer: "All were involved",
      category: "Science"
    },
    {
      id: 28,
      question: "What is the 'Salisbury Convention' in UK politics?",
      options: ["The House of Lords not blocking manifesto commitments", "MPs' code of conduct", "Royal assent procedures", "Cabinet meetings protocol"],
      correctAnswer: "The House of Lords not blocking manifesto commitments",
      category: "Politics"
    },
    {
      id: 29,
      question: "Which British engineer invented the hovercraft?",
      options: ["Christopher Cockerell", "Frank Whittle", "Barnes Wallis", "John Logie Baird"],
      correctAnswer: "Christopher Cockerell",
      category: "Inventions"
    },
    {
      id: 30,
      question: "What was the 'Profumo Affair'?",
      options: ["A political sex scandal", "A financial crisis", "A military cover-up", "A royal marriage"],
      correctAnswer: "A political sex scandal",
      category: "History"
    },
    {
      id: 31,
      question: "Which British composer wrote 'The Young Person's Guide to the Orchestra'?",
      options: ["Benjamin Britten", "Ralph Vaughan Williams", "Edward Elgar", "William Walton"],
      correctAnswer: "Benjamin Britten",
      category: "Music"
    },
    {
      id: 32,
      question: "What is 'PFI' in UK public finance?",
      options: ["Private Finance Initiative", "Public Financial Investment", "Parliamentary Funding Instrument", "Primary Fiscal Institution"],
      correctAnswer: "Private Finance Initiative",
      category: "Economics"
    },
    {
      id: 33,
      question: "Which British philosopher wrote 'A Treatise of Human Nature'?",
      options: ["John Locke", "David Hume", "Thomas Hobbes", "Bertrand Russell"],
      correctAnswer: "David Hume",
      category: "Philosophy"
    },
    {
      id: 34,
      question: "What year did Britain return Hong Kong to China?",
      options: ["1995", "1997", "1999", "2001"],
      correctAnswer: "1997",
      category: "Politics"
    },
    {
      id: 35,
      question: "Which British artist was known for his 'matchstick men' paintings?",
      options: ["L.S. Lowry", "Francis Bacon", "David Hockney", "Walter Sickert"],
      correctAnswer: "L.S. Lowry",
      category: "Art"
    },
    {
      id: 36,
      question: "What is the 'Carltona Principle' in UK administrative law?",
      options: ["Civil servants can act for ministers", "Judicial review procedures", "Parliamentary privilege", "Royal prerogative"],
      correctAnswer: "Civil servants can act for ministers",
      category: "Law"
    },
    {
      id: 37,
      question: "Which British scientist developed the first effective smallpox vaccine?",
      options: ["Edward Jenner", "Louis Pasteur", "Joseph Lister", "Alexander Fleming"],
      correctAnswer: "Edward Jenner",
      category: "Medicine"
    },
    {
      id: 38,
      question: "What was the 'Winter of Discontent'?",
      options: ["1978-79 strike wave", "1962-63 cold winter", "1947 fuel crisis", "2009 recession"],
      correctAnswer: "1978-79 strike wave",
      category: "History"
    },
    {
      id: 39,
      question: "Which British architect designed the 'Gherkin'?",
      options: ["Norman Foster", "Richard Rogers", "Zaha Hadid", "Renzo Piano"],
      correctAnswer: "Norman Foster",
      category: "Architecture"
    },
    {
      id: 40,
      question: "What is the 'Sewel Convention' regarding devolution?",
      options: ["Westminster won't legislate on devolved matters without consent", "Scottish Parliament procedures", "Welsh language rights", "Northern Irish power-sharing"],
      correctAnswer: "Westminster won't legislate on devolved matters without consent",
      category: "Politics"
    },
    {
      id: 41,
      question: "Which British mathematician developed the Turing Test for AI?",
      options: ["Alan Turing", "John von Neumann", "Claude Shannon", "Norbert Wiener"],
      correctAnswer: "Alan Turing",
      category: "Computer Science"
    },
    {
      id: 42,
      question: "What was 'Black Wednesday' in 1992?",
      options: ["Stock market crash", "ERM currency crisis", "Miners' strike", "General election"],
      correctAnswer: "ERM currency crisis",
      category: "Economics"
    },
    {
      id: 43,
      question: "Which British writer wrote 'Nineteen Eighty-Four'?",
      options: ["George Orwell", "Aldous Huxley", "H.G. Wells", "Evelyn Waugh"],
      correctAnswer: "George Orwell",
      category: "Literature"
    },
    {
      id: 44,
      question: "What is the 'Royal Prerogative' in UK constitution?",
      options: ["Powers exercised by the monarch/government", "Parliament's authority", "Judicial independence", "Civil service regulations"],
      correctAnswer: "Powers exercised by the monarch/government",
      category: "Law"
    },
    {
      id: 45,
      question: "Which British engineer invented the jet engine?",
      options: ["Frank Whittle", "Barnes Wallis", "Geoffrey de Havilland", "Sydney Camm"],
      correctAnswer: "Frank Whittle",
      category: "Engineering"
    },
    {
      id: 46,
      question: "What was the 'Glorious Revolution' of 1688?",
      options: ["Overthrow of James II", "English Civil War", "Industrial Revolution", "Protestant Reformation"],
      correctAnswer: "Overthrow of James II",
      category: "History"
    },
    {
      id: 47,
      question: "Which British scientist discovered the ozone hole?",
      options: ["Joseph Farman", "James Lovelock", "Stephen Hawking", "Brian Cox"],
      correctAnswer: "Joseph Farman",
      category: "Science"
    },
    {
      id: 48,
      question: "What is 'Common Law' in the UK legal system?",
      options: ["Law developed by judges", "European Union law", "Parliamentary statutes", "Ancient Roman law"],
      correctAnswer: "Law developed by judges",
      category: "Law"
    },
    {
      id: 49,
      question: "Which British composer wrote 'Pomp and Circumstance' marches?",
      options: ["Edward Elgar", "Gustav Holst", "Ralph Vaughan Williams", "Arthur Sullivan"],
      correctAnswer: "Edward Elgar",
      category: "Music"
    },
    {
      id: 50,
      question: "What was the 'Triple Alliance' in British labour history?",
      options: ["Miners, railwaymen and transport workers", "Trade unions and Labour Party", "UK-France-Russia alliance", "Industrialists' cartel"],
      correctAnswer: "Miners, railwaymen and transport workers",
      category: "History"
    },
    {
      id: 51,
      question: "Which British scientist developed the first programmable computer?",
      options: ["Charles Babbage", "Alan Turing", "Tommy Flowers", "Konrad Zuse"],
      correctAnswer: "Charles Babbage",
      category: "Technology"
    },
    {
      id: 52,
      question: "What is 'Quango' in UK politics?",
      options: ["Quasi-autonomous non-governmental organization", "Quality assurance NGO", "Quick action government office", "Quantitative analysis group"],
      correctAnswer: "Quasi-autonomous non-governmental organization",
      category: "Politics"
    },
    {
      id: 53,
      question: "Which British painter was known for his seascapes?",
      options: ["J.M.W. Turner", "John Constable", "Thomas Gainsborough", "William Hogarth"],
      correctAnswer: "J.M.W. Turner",
      category: "Art"
    },
    {
      id: 54,
      question: "What year did the UK abolish the death penalty?",
      options: ["1957", "1965", "1969", "1973"],
      correctAnswer: "1965",
      category: "Law"
    },
    {
      id: 55,
      question: "Which British economist developed the concept of 'comparative advantage'?",
      options: ["David Ricardo", "Adam Smith", "John Stuart Mill", "Thomas Malthus"],
      correctAnswer: "David Ricardo",
      category: "Economics"
    },
    {
      id: 56,
      question: "What was the 'People's Budget' of 1909?",
      options: ["Lloyd George's welfare budget", "Post-war austerity budget", "Thatcher's first budget", "New Labour's first budget"],
      correctAnswer: "Lloyd George's welfare budget",
      category: "History"
    },
    {
      id: 57,
      question: "Which British scientist discovered electromagnetic induction?",
      options: ["Michael Faraday", "James Clerk Maxwell", "William Thomson", "Humphry Davy"],
      correctAnswer: "Michael Faraday",
      category: "Science"
    },
    {
      id: 58,
      question: "What is 'Collective Responsibility' in UK government?",
      options: ["Cabinet must support government decisions", "MPs voting as a bloc", "Trade union negotiations", "Public accountability"],
      correctAnswer: "Cabinet must support government decisions",
      category: "Politics"
    },
    {
      id: 59,
      question: "Which British architect designed St Paul's Cathedral?",
      options: ["Christopher Wren", "Inigo Jones", "John Nash", "Nicholas Hawksmoor"],
      correctAnswer: "Christopher Wren",
      category: "Architecture"
    },
    {
      id: 60,
      question: "What was the 'Corn Laws' controversy?",
      options: ["Grain import tariffs", "Agricultural subsidies", "Land ownership laws", "Food rationing"],
      correctAnswer: "Grain import tariffs",
      category: "History"
    },
    {
      id: 61,
      question: "Which British mathematician developed game theory?",
      options: ["John Nash", "John von Neumann", "Alan Turing", "Paul Erdős"],
      correctAnswer: "John von Neumann",
      category: "Mathematics"
    },
    {
      id: 62,
      question: "What is 'Parliamentary Privilege'?",
      options: ["Legal immunity for MPs in Parliament", "Special voting rights", "Extra salary benefits", "Security protections"],
      correctAnswer: "Legal immunity for MPs in Parliament",
      category: "Politics"
    },
    {
      id: 63,
      question: "Which British writer wrote 'The Waste Land'?",
      options: ["T.S. Eliot", "W.H. Auden", "Philip Larkin", "Ted Hughes"],
      correctAnswer: "T.S. Eliot",
      category: "Literature"
    },
    {
      id: 64,
      question: "What year was the Great Reform Act passed?",
      options: ["1815", "1832", "1867", "1884"],
      correctAnswer: "1832",
      category: "History"
    },
    {
      id: 65,
      question: "Which British scientist developed the theory of plate tectonics?",
      options: ["Alfred Wegener", "Arthur Holmes", "Harold Jeffreys", "All contributed"],
      correctAnswer: "All contributed",
      category: "Science"
    },
    {
      id: 66,
      question: "What is the 'Doctrine of Precedent' in UK law?",
      options: ["Courts must follow previous decisions", "Parliamentary sovereignty", "Royal assent procedure", "Constitutional conventions"],
      correctAnswer: "Courts must follow previous decisions",
      category: "Law"
    },
    {
      id: 67,
      question: "Which British composer wrote 'The Dream of Gerontius'?",
      options: ["Edward Elgar", "Benjamin Britten", "Ralph Vaughan Williams", "Hubert Parry"],
      correctAnswer: "Edward Elgar",
      category: "Music"
    },
    {
      id: 68,
      question: "What was the 'Peterloo Massacre'?",
      options: ["1819 protest suppression", "Chartist rally", "Suffragette demonstration", "General Strike violence"],
      correctAnswer: "1819 protest suppression",
      category: "History"
    },
    {
      id: 69,
      question: "Which British engineer built the Forth Bridge?",
      options: ["John Fowler", "Benjamin Baker", "Both A and B", "Isambard Kingdom Brunel"],
      correctAnswer: "Both A and B",
      category: "Engineering"
    },
    {
      id: 70,
      question: "What is the 'Official Secrets Act'?",
      options: ["Government secrecy law", "Parliamentary procedure", "Royal protocol", "Diplomatic immunity"],
      correctAnswer: "Government secrecy law",
      category: "Law"
    },
    {
      id: 71,
      question: "Which British scientist discovered the neutron star?",
      options: ["Jocelyn Bell Burnell", "Stephen Hawking", "Martin Rees", "Roger Penrose"],
      correctAnswer: "Jocelyn Bell Burnell",
      category: "Science"
    },
    {
      id: 72,
      question: "What was the 'Tolpuddle Martyrs' case?",
      options: ["Trade unionists transported", "Religious persecution", "Political prisoners", "Military deserters"],
      correctAnswer: "Trade unionists transported",
      category: "History"
    },
    {
      id: 73,
      question: "Which British artist was part of the Young British Artists movement?",
      options: ["Tracey Emin", "Damien Hirst", "Sarah Lucas", "All of the above"],
      correctAnswer: "All of the above",
      category: "Art"
    },
    {
      id: 74,
      question: "What year was the European Convention on Human Rights incorporated into UK law?",
      options: ["1950", "1966", "1998", "2000"],
      correctAnswer: "1998",
      category: "Law"
    },
    {
      id: 75,
      question: "Which British economist wrote 'The Wealth of Nations'?",
      options: ["Adam Smith", "David Ricardo", "John Maynard Keynes", "Thomas Malthus"],
      correctAnswer: "Adam Smith",
      category: "Economics"
    },
    {
      id: 76,
      question: "What was the 'Cato Street Conspiracy'?",
      options: ["1820 plot to assassinate cabinet", "Gunpowder Plot", "Jacobite rebellion", "Suffragette campaign"],
      correctAnswer: "1820 plot to assassinate cabinet",
      category: "History"
    },
    {
      id: 77,
      question: "Which British scientist developed the first plastic?",
      options: ["Alexander Parkes", "John Wesley Hyatt", "Leo Baekeland", "All contributed"],
      correctAnswer: "Alexander Parkes",
      category: "Science"
    },
    {
      id: 78,
      question: "What is the 'Ministerial Code'?",
      options: ["Rules for government ministers", "Civil service regulations", "MPs' conduct rules", "Royal household protocol"],
      correctAnswer: "Rules for government ministers",
      category: "Politics"
    },
    {
      id: 79,
      question: "Which British architect designed the British Library?",
      options: ["Colin St John Wilson", "Norman Foster", "Richard Rogers", "James Stirling"],
      correctAnswer: "Colin St John Wilson",
      category: "Architecture"
    },
    {
      id: 80,
      question: "What was the 'Rebecca Riots' in Wales?",
      options: ["1840s tollgate protests", "Industrial strikes", "Land reform protests", "Language rights movement"],
      correctAnswer: "1840s tollgate protests",
      category: "History"
    },
    {
      id: 81,
      question: "Which British mathematician developed the laws of thermodynamics?",
      options: ["William Thomson (Lord Kelvin)", "James Joule", "Both A and B", "Sadi Carnot"],
      correctAnswer: "Both A and B",
      category: "Science"
    },
    {
      id: 82,
      question: "What is 'Devolution Max' in Scottish politics?",
      options: ["Maximum devolution short of independence", "Full independence", "Federal system", "Status quo"],
      correctAnswer: "Maximum devolution short of independence",
      category: "Politics"
    },
    {
      id: 83,
      question: "Which British writer wrote 'Middlemarch'?",
      options: ["George Eliot", "Charles Dickens", "Jane Austen", "Thomas Hardy"],
      correctAnswer: "George Eliot",
      category: "Literature"
    },
    {
      id: 84,
      question: "What year was the Parliament Act limiting House of Lords powers passed?",
      options: ["1909", "1911", "1949", "1999"],
      correctAnswer: "1911",
      category: "Politics"
    },
    {
      id: 85,
      question: "Which British scientist discovered the circulation of blood?",
      options: ["William Harvey", "John Hunter", "Richard Lower", "Joseph Priestley"],
      correctAnswer: "William Harvey",
      category: "Medicine"
    },
    {
      id: 86,
      question: "What is 'MSP' in Scottish politics?",
      options: ["Member of Scottish Parliament", "Minister of Scottish Parliament", "Member of Scottish Party", "Minister for Scottish Policy"],
      correctAnswer: "Member of Scottish Parliament",
      category: "Politics"
    },
    {
      id: 87,
      question: "Which British engineer invented the spinning jenny?",
      options: ["James Hargreaves", "Richard Arkwright", "Samuel Crompton", "John Kay"],
      correctAnswer: "James Hargreaves",
      category: "Inventions"
    },
    {
      id: 88,
      question: "What was the 'Diggers' movement?",
      options: ["17th century agrarian communists", "Industrial revolution workers", "WWI trench diggers", "Archaeological society"],
      correctAnswer: "17th century agrarian communists",
      category: "History"
    },
    {
      id: 89,
      question: "Which British composer wrote 'The Lark Ascending'?",
      options: ["Ralph Vaughan Williams", "Edward Elgar", "Gustav Holst", "Benjamin Britten"],
      correctAnswer: "Ralph Vaughan Williams",
      category: "Music"
    },
    {
      id: 90,
      question: "What is the 'Westminster System' of government?",
      options: ["Parliamentary democracy model", "Federal system", "Presidential system", "Direct democracy"],
      correctAnswer: "Parliamentary democracy model",
      category: "Politics"
    },
    {
      id: 91,
      question: "Which British scientist developed the reflecting telescope?",
      options: ["Isaac Newton", "William Herschel", "James Gregory", "All contributed"],
      correctAnswer: "Isaac Newton",
      category: "Science"
    },
    {
      id: 92,
      question: "What was the 'Chartist Movement'?",
      options: ["19th century working-class suffrage movement", "Trade union movement", "Political party", "Religious revival"],
      correctAnswer: "19th century working-class suffrage movement",
      category: "History"
    },
    {
      id: 93,
      question: "Which British artist was a war artist in WWI?",
      options: ["Paul Nash", "Stanley Spencer", "Christopher Nevinson", "All of the above"],
      correctAnswer: "All of the above",
      category: "Art"
    },
    {
      id: 94,
      question: "What year did the UK abolish slavery?",
      options: ["1807", "1833", "1865", "1888"],
      correctAnswer: "1833",
      category: "History"
    },
    {
      id: 95,
      question: "Which British economist developed population theory?",
      options: ["Thomas Malthus", "David Ricardo", "Adam Smith", "John Stuart Mill"],
      correctAnswer: "Thomas Malthus",
      category: "Economics"
    },
    {
      id: 96,
      question: "What was the 'Blanketeers' protest?",
      options: ["1817 march of weavers", "Chartist demonstration", "Suffragette rally", "Anti-war protest"],
      correctAnswer: "1817 march of weavers",
      category: "History"
    },
    {
      id: 97,
      question: "Which British scientist discovered vitamin C?",
      options: ["Albert Szent-Györgyi", "Frederick Hopkins", "Casimir Funk", "Charles Glen King"],
      correctAnswer: "Albert Szent-Györgyi",
      category: "Science"
    },
    {
      id: 98,
      question: "What is 'Prorogation' in UK Parliament?",
      options: ["Ending a parliamentary session", "Dissolving Parliament", "Adjournment", "Recess"],
      correctAnswer: "Ending a parliamentary session",
      category: "Politics"
    },
    {
      id: 99,
      question: "Which British architect designed the Royal Pavilion in Brighton?",
      options: ["John Nash", "Henry Holland", "William Porden", "Humphry Repton"],
      correctAnswer: "John Nash",
      category: "Architecture"
    },
    {
      id: 100,
      question: "What was the 'Swing Riots' of 1830?",
      options: ["Agricultural labourers' protests", "Industrial workers' strikes", "Political reform rallies", "Anti-tax protests"],
      correctAnswer: "Agricultural labourers' protests",
      category: "History"
    }
  ],
  hard: [
    {
      id: 1,
      question: "Which British Prime Minister signed the Anglo-Irish Treaty of 1921?",
      options: ["David Lloyd George", "Winston Churchill", "Stanley Baldwin", "Ramsay MacDonald"],
      correctAnswer: "David Lloyd George",
      category: "Politics"
    },
    {
      id: 2,
      question: "What was the name of the failed British military operation to capture Antwerp in 1944?",
      options: ["Operation Market Garden", "Operation Overlord", "Operation Chariot", "Operation Infatuate"],
      correctAnswer: "Operation Infatuate",
      category: "Military History"
    },
    {
      id: 3,
      question: "Which British computer scientist developed the concept of the 'microkernel'?",
      options: ["Alan Turing", "Maurice Wilkes", "Roger Needham", "David Wheeler"],
      correctAnswer: "Roger Needham",
      category: "Computer Science"
    },
    {
      id: 4,
      question: "What is the name of the 1970s British economic phenomenon characterized by high inflation and high unemployment?",
      options: ["Stagflation", "Slumpflation", "Hyperinflation", "Deflationary Spiral"],
      correctAnswer: "Stagflation",
      category: "Economics"
    },
    {
      id: 5,
      question: "Which British constitutional principle established parliamentary sovereignty?",
      options: ["Bill of Rights 1689", "Act of Settlement 1701", "Magna Carta 1215", "Parliament Acts 1911 & 1949"],
      correctAnswer: "Bill of Rights 1689",
      category: "Law"
    },
    {
      id: 6,
      question: "What was the name of the British research laboratory where the first stored-program computer was built?",
      options: ["Bletchley Park", "National Physical Laboratory", "University of Manchester", "Royal Radar Establishment"],
      correctAnswer: "University of Manchester",
      category: "Technology"
    },
    {
      id: 7,
      question: "Which British philosopher developed the concept of 'speech acts'?",
      options: ["A.J. Ayer", "Bertrand Russell", "J.L. Austin", "Ludwig Wittgenstein"],
      correctAnswer: "J.L. Austin",
      category: "Philosophy"
    },
    {
      id: 8,
      question: "What was the 'Zinoviev Letter' that influenced the 1924 UK general election?",
      options: ["A forged document about Soviet interference", "A genuine Soviet diplomatic communication", "A Labour Party manifesto", "A Conservative Party fundraising letter"],
      correctAnswer: "A forged document about Soviet interference",
      category: "Political History"
    },
    {
      id: 9,
      question: "Which British mathematician developed catastrophe theory?",
      options: ["Alan Turing", "G.H. Hardy", "Christopher Zeeman", "Michael Atiyah"],
      correctAnswer: "Christopher Zeeman",
      category: "Mathematics"
    },
    {
      id: 10,
      question: "What is the 'Barnett Formula' used for in UK politics?",
      options: ["Calculating MPs' salaries", "Determining public spending in Scotland, Wales and NI", "Setting interest rates", "Regulating utility prices"],
      correctAnswer: "Determining public spending in Scotland, Wales and NI",
      category: "Politics"
    },
    {
      id: 11,
      question: "Which British Prime Minister implemented the 'Three-Day Week' in 1974?",
      options: ["Edward Heath", "Harold Wilson", "James Callaghan", "Margaret Thatcher"],
      correctAnswer: "Edward Heath",
      category: "Political History"
    },
    {
      id: 12,
      question: "What was the 'Crichel Down affair' of 1954?",
      options: ["A land ownership scandal", "A spy case", "A corruption investigation", "A military cover-up"],
      correctAnswer: "A land ownership scandal",
      category: "Political History"
    },
    {
      id: 13,
      question: "Which British logician developed the 'theory of descriptions'?",
      options: ["Bertrand Russell", "G.E. Moore", "A.J. Ayer", "Ludwig Wittgenstein"],
      correctAnswer: "Bertrand Russell",
      category: "Philosophy"
    },
    {
      id: 14,
      question: "What is the 'Doctrine of Binding Precedent' (stare decisis) in English law?",
      options: ["Lower courts must follow higher courts' decisions", "Parliament can override courts", "Judges can ignore previous rulings", "European law takes precedence"],
      correctAnswer: "Lower courts must follow higher courts' decisions",
      category: "Law"
    },
    {
      id: 15,
      question: "Which British physicist developed the 'steady state theory' of the universe?",
      options: ["Fred Hoyle", "Stephen Hawking", "Paul Dirac", "Arthur Eddington"],
      correctAnswer: "Fred Hoyle",
      category: "Science"
    },
    {
      id: 16,
      question: "What was the 'Marconi scandal' of 1912-13?",
      options: ["Insider trading by government ministers", "Wireless telegraphy corruption", "Stock market manipulation", "All of the above"],
      correctAnswer: "All of the above",
      category: "Political History"
    },
    {
      id: 17,
      question: "Which British economist developed the 'impossibility theorem' in social choice theory?",
      options: ["Amartya Sen", "Kenneth Arrow", "John Hicks", "James Meade"],
      correctAnswer: "Kenneth Arrow",
      category: "Economics"
    },
    {
      id: 18,
      question: "What was 'Operation Mincemeat' in WWII?",
      options: ["A deception operation using a dead body", "A naval intelligence operation", "A commando raid", "A propaganda campaign"],
      correctAnswer: "A deception operation using a dead body",
      category: "Military History"
    },
    {
      id: 19,
      question: "Which British mathematician solved Fermat's Last Theorem?",
      options: ["Andrew Wiles", "G.H. Hardy", "John Conway", "Michael Atiyah"],
      correctAnswer: "Andrew Wiles",
      category: "Mathematics"
    },
    {
      id: 20,
      question: "What is the 'Carltona Principle' in UK administrative law?",
      options: ["Civil servants can exercise ministers' powers", "Judicial review standards", "Parliamentary procedure", "Royal prerogative"],
      correctAnswer: "Civil servants can exercise ministers' powers",
      category: "Law"
    },
    {
      id: 21,
      question: "Which British Prime Minister signed the Munich Agreement with Hitler?",
      options: ["Neville Chamberlain", "Winston Churchill", "Stanley Baldwin", "Clement Attlee"],
      correctAnswer: "Neville Chamberlain",
      category: "Political History"
    },
    {
      id: 22,
      question: "What was the 'Bank Charter Act' of 1844?",
      options: ["Established Bank of England monopoly on banknotes", "Created decimal currency", "Abolished gold standard", "Nationalised banks"],
      correctAnswer: "Established Bank of England monopoly on banknotes",
      category: "Economic History"
    },
    {
      id: 23,
      question: "Which British philosopher wrote 'Principia Ethica'?",
      options: ["G.E. Moore", "Bertrand Russell", "A.J. Ayer", "John Stuart Mill"],
      correctAnswer: "G.E. Moore",
      category: "Philosophy"
    },
    {
      id: 24,
      question: "What was 'Project Cybersyn' in 1970s UK?",
      options: ["A computerised economic planning system", "Early internet project", "Military communications network", "Government database"],
      correctAnswer: "A computerised economic planning system",
      category: "Technology"
    },
    {
      id: 25,
      question: "Which British scientist discovered the neutron?",
      options: ["James Chadwick", "Ernest Rutherford", "J.J. Thomson", "John Cockcroft"],
      correctAnswer: "James Chadwick",
      category: "Science"
    },
    {
      id: 26,
      question: "What was the 'Dogger Bank incident' of 1904?",
      options: ["Russian fleet fired on British trawlers", "Naval battle with Germany", "Submarine accident", "Fishing rights dispute"],
      correctAnswer: "Russian fleet fired on British trawlers",
      category: "Military History"
    },
    {
      id: 27,
      question: "Which British economist developed the 'circular flow of income' model?",
      options: ["John Maynard Keynes", "Richard Stone", "James Meade", "Nicholas Kaldor"],
      correctAnswer: "Richard Stone",
      category: "Economics"
    },
    {
      id: 28,
      question: "What is the 'Anson's Law of the Constitution' principle?",
      options: ["Conventions are as important as written rules", "Parliament is sovereign", "Rule of law supremacy", "Separation of powers"],
      correctAnswer: "Conventions are as important as written rules",
      category: "Law"
    },
    {
      id: 29,
      question: "Which British mathematician developed the 'Conway's Game of Life'?",
      options: ["John Horton Conway", "Alan Turing", "Michael Atiyah", "Roger Penrose"],
      correctAnswer: "John Horton Conway",
      category: "Mathematics"
    },
    {
      id: 30,
      question: "What was the 'Kilbrandon Commission'?",
      options: ["Royal Commission on the Constitution", "Education reform commission", "Police inquiry", "Health service review"],
      correctAnswer: "Royal Commission on the Constitution",
      category: "Political History"
    },
    {
      id: 31,
      question: "Which British philosopher developed 'ordinary language philosophy'?",
      options: ["J.L. Austin", "Ludwig Wittgenstein", "Gilbert Ryle", "All of the above"],
      correctAnswer: "All of the above",
      category: "Philosophy"
    },
    {
      id: 32,
      question: "What was 'Operation Grapple'?",
      options: ["British nuclear weapons tests", "WWII deception plan", "Cold War intelligence operation", "Post-war reconstruction"],
      correctAnswer: "British nuclear weapons tests",
      category: "Military History"
    },
    {
      id: 33,
      question: "Which British economist developed the 'Cambridge capital controversy'?",
      options: ["Joan Robinson", "Nicholas Kaldor", "Piero Sraffa", "All contributed"],
      correctAnswer: "All contributed",
      category: "Economics"
    },
    {
      id: 34,
      question: "What is the 'Rule in Rylands v Fletcher' in tort law?",
      options: ["Strict liability for dangerous things", "Negligence standard", "Nuisance principle", "Contract law doctrine"],
      correctAnswer: "Strict liability for dangerous things",
      category: "Law"
    },
    {
      id: 35,
      question: "Which British scientist discovered pulsars?",
      options: ["Jocelyn Bell Burnell", "Antony Hewish", "Both A and B", "Martin Ryle"],
      correctAnswer: "Both A and B",
      category: "Science"
    },
    {
      id: 36,
      question: "What was the 'Don Pacifico affair' of 1850?",
      options: ["Diplomatic incident with Greece", "Colonial dispute", "Trade agreement controversy", "Military intervention"],
      correctAnswer: "Diplomatic incident with Greece",
      category: "Political History"
    },
    {
      id: 37,
      question: "Which British mathematician developed 'non-standard analysis'?",
      options: ["Abraham Robinson", "G.H. Hardy", "J.E. Littlewood", "Michael Atiyah"],
      correctAnswer: "Abraham Robinson",
      category: "Mathematics"
    },
    {
      id: 38,
      question: "What was the 'Council of the North'?",
      options: ["Tudor administrative body for northern England", "Medieval parliament", "Regional government experiment", "Royal court"],
      correctAnswer: "Tudor administrative body for northern England",
      category: "Historical Institutions"
    },
    {
      id: 39,
      question: "Which British philosopher wrote 'Language, Truth and Logic'?",
      options: ["A.J. Ayer", "Bertrand Russell", "Karl Popper", "Gilbert Ryle"],
      correctAnswer: "A.J. Ayer",
      category: "Philosophy"
    },
    {
      id: 40,
      question: "What was 'Operation Chastise' in WWII?",
      options: ["Dambusters raid", "Bombing of Dresden", "Normandy landings", "Battle of Britain"],
      correctAnswer: "Dambusters raid",
      category: "Military History"
    },
    {
      id: 41,
      question: "Which British economist developed the 'impossibility of socialism' thesis?",
      options: ["Friedrich Hayek", "Ludwig von Mises", "Both A and B", "John Maynard Keynes"],
      correctAnswer: "Both A and B",
      category: "Economics"
    },
    {
      id: 42,
      question: "What is the 'Rule in Hadley v Baxendale' in contract law?",
      options: ["Damages for breach of contract", "Formation of contracts", "Implied terms", "Frustration of contract"],
      correctAnswer: "Damages for breach of contract",
      category: "Law"
    },
    {
      id: 43,
      question: "Which British scientist developed the 'Hawking radiation' theory?",
      options: ["Stephen Hawking", "Roger Penrose", "Jacob Bekenstein", "All contributed"],
      correctAnswer: "Stephen Hawking",
      category: "Science"
    },
    {
      id: 44,
      question: "What was the 'Parnell Commission' of 1888-89?",
      options: ["Investigation into Irish nationalist allegations", "Royal commission on education", "Trade union inquiry", "Banking reform commission"],
      correctAnswer: "Investigation into Irish nationalist allegations",
      category: "Political History"
    },
    {
      id: 45,
      question: "Which British mathematician developed 'Ramsey theory'?",
      options: ["Frank Ramsey", "G.H. Hardy", "John Littlewood", "Paul Erdős"],
      correctAnswer: "Frank Ramsey",
      category: "Mathematics"
    },
    {
      id: 46,
      question: "What was the 'Court of Star Chamber'?",
      options: ["English court of equity", "Medieval royal council", "Tudor prerogative court", "All of the above"],
      correctAnswer: "All of the above",
      category: "Historical Institutions"
    },
    {
      id: 47,
      question: "Which British philosopher developed the 'verification principle'?",
      options: ["Logical positivists", "A.J. Ayer", "Both A and B", "Karl Popper"],
      correctAnswer: "Both A and B",
      category: "Philosophy"
    },
    {
      id: 48,
      question: "What was 'Operation Anthropoid' in WWII?",
      options: ["Assassination of Reinhard Heydrich", "Rescue of British POWs", "Espionage in occupied Europe", "Propaganda operation"],
      correctAnswer: "Assassination of Reinhard Heydrich",
      category: "Military History"
    },
    {
      id: 49,
      question: "Which British economist developed 'welfare economics'?",
      options: ["Arthur Pigou", "John Hicks", "Nicholas Kaldor", "All contributed"],
      correctAnswer: "All contributed",
      category: "Economics"
    },
    {
      id: 50,
      question: "What is the 'Rule in Salomon v Salomon' in company law?",
      options: ["Corporate personality separate from owners", "Directors' duties", "Shareholder rights", "Insolvency procedures"],
      correctAnswer: "Corporate personality separate from owners",
      category: "Law"
    },
    {
      id: 51,
      question: "Which British scientist discovered the 'Maxwell's equations'?",
      options: ["James Clerk Maxwell", "Michael Faraday", "William Thomson", "Oliver Heaviside"],
      correctAnswer: "James Clerk Maxwell",
      category: "Science"
    },
    {
      id: 52,
      question: "What was the 'Rothermere press campaign' of the 1930s?",
      options: ["Pro-appeasement newspaper campaign", "Anti-communist propaganda", "Pro-fascist advocacy", "All of the above"],
      correctAnswer: "All of the above",
      category: "Media History"
    },
    {
      id: 53,
      question: "Which British mathematician developed 'Boolean algebra'?",
      options: ["George Boole", "Augustus De Morgan", "John Venn", "Charles Babbage"],
      correctAnswer: "George Boole",
      category: "Mathematics"
    },
    {
      id: 54,
      question: "What was the 'Council of Wales and the Marches'?",
      options: ["Tudor administrative body for Wales", "Medieval parliament", "Regional government", "Royal council"],
      correctAnswer: "Tudor administrative body for Wales",
      category: "Historical Institutions"
    },
    {
      id: 55,
      question: "Which British philosopher wrote 'The Open Society and Its Enemies'?",
      options: ["Karl Popper", "Isaiah Berlin", "Michael Oakeshott", "John Gray"],
      correctAnswer: "Karl Popper",
      category: "Philosophy"
    },
    {
      id: 56,
      question: "What was 'Operation Jedburgh' in WWII?",
      options: ["Special forces operations in occupied Europe", "Code-breaking operation", "Naval intelligence", "Aerial bombing campaign"],
      correctAnswer: "Special forces operations in occupied Europe",
      category: "Military History"
    },
    {
      id: 57,
      question: "Which British economist developed 'Post-Keynesian economics'?",
      options: ["Joan Robinson", "Nicholas Kaldor", "Michal Kalecki", "All of the above"],
      correctAnswer: "All of the above",
      category: "Economics"
    },
    {
      id: 58,
      question: "What is the 'Rule in Donoghue v Stevenson' in tort law?",
      options: ["Established modern negligence law", "Product liability", "Duty of care principle", "All of the above"],
      correctAnswer: "All of the above",
      category: "Law"
    },
    {
      id: 59,
      question: "Which British scientist discovered the 'Cavendish experiment' for measuring G?",
      options: ["Henry Cavendish", "Isaac Newton", "Michael Faraday", "James Clerk Maxwell"],
      correctAnswer: "Henry Cavendish",
      category: "Science"
    },
    {
      id: 60,
      question: "What was the 'Cato Street Conspiracy' of 1820?",
      options: ["Plot to assassinate the cabinet", "Radical protest movement", "Trade union conspiracy", "Republican plot"],
      correctAnswer: "Plot to assassinate the cabinet",
      category: "Political History"
    },
    {
      id: 61,
      question: "Which British mathematician developed 'group theory'?",
      options: ["Arthur Cayley", "William Rowan Hamilton", "Augustus De Morgan", "George Boole"],
      correctAnswer: "Arthur Cayley",
      category: "Mathematics"
    },
    {
      id: 62,
      question: "What was the 'Court of High Commission'?",
      options: ["Ecclesiastical court enforcing religious conformity", "Civil court", "Criminal court", "Trade court"],
      correctAnswer: "Ecclesiastical court enforcing religious conformity",
      category: "Historical Institutions"
    },
    {
      id: 63,
      question: "Which British philosopher wrote 'The Concept of Mind'?",
      options: ["Gilbert Ryle", "A.J. Ayer", "Ludwig Wittgenstein", "J.L. Austin"],
      correctAnswer: "Gilbert Ryle",
      category: "Philosophy"
    },
    {
      id: 64,
      question: "What was 'Operation Manna' in WWII?",
      options: ["Food drops to starving Dutch civilians", "POW rescue operation", "Supplies to resistance", "Evacuation of children"],
      correctAnswer: "Food drops to starving Dutch civilians",
      category: "Military History"
    },
    {
      id: 65,
      question: "Which British economist developed 'monetarism'?",
      options: ["Milton Friedman", "Friedrich Hayek", "Both A and B", "John Maynard Keynes"],
      correctAnswer: "Milton Friedman",
      category: "Economics"
    },
    {
      id: 66,
      question: "What is the 'Rule in Rylands v Fletcher' based on?",
      options: ["Strict liability for escape of dangerous things", "Negligence", "Nuisance", "Trespass"],
      correctAnswer: "Strict liability for escape of dangerous things",
      category: "Law"
    },
    {
      id: 67,
      question: "Which British scientist discovered 'Faraday's law of induction'?",
      options: ["Michael Faraday", "James Clerk Maxwell", "Joseph Henry", "André-Marie Ampère"],
      correctAnswer: "Michael Faraday",
      category: "Science"
    },
    {
      id: 68,
      question: "What was the 'Spa Fields riots' of 1816?",
      options: ["Radical protest meeting turned violent", "Anti-Corn Law riots", "Chartist demonstration", "Suffragette protest"],
      correctAnswer: "Radical protest meeting turned violent",
      category: "Political History"
    },
    {
      id: 69,
      question: "Which British mathematician developed 'quaternions'?",
      options: ["William Rowan Hamilton", "Arthur Cayley", "George Boole", "Augustus De Morgan"],
      correctAnswer: "William Rowan Hamilton",
      category: "Mathematics"
    },
    {
      id: 70,
      question: "What was the 'Court of Requests'?",
      options: ["Poor man's court for small claims", "Royal court", "Criminal court", "Trade court"],
      correctAnswer: "Poor man's court for small claims",
      category: "Historical Institutions"
    },
    {
      id: 71,
      question: "Which British philosopher wrote 'The Sovereignty of Good'?",
      options: ["Iris Murdoch", "Elizabeth Anscombe", "Mary Midgley", "Philippa Foot"],
      correctAnswer: "Iris Murdoch",
      category: "Philosophy"
    },
    {
      id: 72,
      question: "What was 'Operation Crossbow' in WWII?",
      options: ["Allied campaign against V-weapons", "Bombing of German cities", "Intelligence operation", "POW rescue"],
      correctAnswer: "Allied campaign against V-weapons",
      category: "Military History"
    },
    {
      id: 73,
      question: "Which British economist developed 'Austrian business cycle theory'?",
      options: ["Friedrich Hayek", "Ludwig von Mises", "Both A and B", "Joseph Schumpeter"],
      correctAnswer: "Both A and B",
      category: "Economics"
    },
    {
      id: 74,
      question: "What is the 'Rule in Hedley Byrne v Heller' in tort law?",
      options: ["Negligent misstatement liability", "Economic loss recovery", "Professional negligence", "All of the above"],
      correctAnswer: "All of the above",
      category: "Law"
    },
    {
      id: 75,
      question: "Which British scientist discovered 'Thomson scattering'?",
      options: ["J.J. Thomson", "Ernest Rutherford", "James Clerk Maxwell", "John Dalton"],
      correctAnswer: "J.J. Thomson",
      category: "Science"
    },
    {
      id: 76,
      question: "What was the 'Pentrich Revolution' of 1817?",
      options: ["Failed Derbyshire rising", "Chartist protest", "Luddite rebellion", "Agricultural riot"],
      correctAnswer: "Failed Derbyshire rising",
      category: "Political History"
    },
    {
      id: 77,
      question: "Which British mathematician developed 'Cayley-Hamilton theorem'?",
      options: ["Arthur Cayley", "William Rowan Hamilton", "Both A and B", "James Sylvester"],
      correctAnswer: "Both A and B",
      category: "Mathematics"
    },
    {
      id: 78,
      question: "What was the 'Court of Exchequer Chamber'?",
      options: ["Appellate court in English legal system", "Tax court", "Royal revenue court", "Trade court"],
      correctAnswer: "Appellate court in English legal system",
      category: "Historical Institutions"
    },
    {
      id: 79,
      question: "Which British philosopher wrote 'After Virtue'?",
      options: ["Alasdair MacIntyre", "Bernard Williams", "Charles Taylor", "John Rawls"],
      correctAnswer: "Alasdair MacIntyre",
      category: "Philosophy"
    },
    {
      id: 80,
      question: "What was 'Operation Chariot' in WWII?",
      options: ["St Nazaire Raid", "Dieppe Raid", "Normandy landings", "Dunkirk evacuation"],
      correctAnswer: "St Nazaire Raid",
      category: "Military History"
    },
    {
      id: 81,
      question: "Which British economist developed 'Marxian economics' in UK context?",
      options: ["Maurice Dobb", "Joan Robinson", "Michal Kalecki", "All of the above"],
      correctAnswer: "All of the above",
      category: "Economics"
    },
    {
      id: 82,
      question: "What is the 'Rule in Caparo v Dickman' in tort law?",
      options: ["Three-stage test for duty of care", "Negligence standard", "Economic loss", "Professional duty"],
      correctAnswer: "Three-stage test for duty of care",
      category: "Law"
    },
    {
      id: 83,
      question: "Which British scientist discovered 'Rutherford scattering'?",
      options: ["Ernest Rutherford", "Hans Geiger", "Ernest Marsden", "All contributed"],
      correctAnswer: "All contributed",
      category: "Science"
    },
    {
      id: 84,
      question: "What was the 'Spa Fields meetings' of 1816-17?",
      options: ["Radical political gatherings", "Religious revival meetings", "Trade union meetings", "Scientific conferences"],
      correctAnswer: "Radical political gatherings",
      category: "Political History"
    },
    {
      id: 85,
      question: "Which British mathematician developed 'Sylvester's law of inertia'?",
      options: ["James Joseph Sylvester", "Arthur Cayley", "William Rowan Hamilton", "George Boole"],
      correctAnswer: "James Joseph Sylvester",
      category: "Mathematics"
    },
    {
      id: 86,
      question: "What was the 'Court of Chancery'?",
      options: ["Court of equity in English legal system", "Criminal court", "Trade court", "Royal court"],
      correctAnswer: "Court of equity in English legal system",
      category: "Historical Institutions"
    },
    {
      id: 87,
      question: "Which British philosopher wrote 'The Principles of Mathematics'?",
      options: ["Bertrand Russell", "Alfred North Whitehead", "Gottlob Frege", "All contributed"],
      correctAnswer: "Bertrand Russell",
      category: "Philosophy"
    },
    {
      id: 88,
      question: "What was 'Operation Grouse' in WWII?",
      options: ["Norwegian heavy water sabotage operation", "French resistance support", "Balkans campaign", "North African operation"],
      correctAnswer: "Norwegian heavy water sabotage operation",
      category: "Military History"
    },
    {
      id: 89,
      question: "Which British economist developed 'cliometrics'?",
      options: ["Robert Fogel", "Douglass North", "Both won Nobel but were American", "British didn't develop this"],
      correctAnswer: "British didn't develop this",
      category: "Economics"
    },
    {
      id: 90,
      question: "What is the 'Rule in Anns v Merton' in tort law?",
      options: ["Two-stage test for duty of care (overturned)", "Negligence standard", "Local authority liability", "All of the above"],
      correctAnswer: "All of the above",
      category: "Law"
    },
    {
      id: 91,
      question: "Which British scientist discovered 'Dalton's law'?",
      options: ["John Dalton", "Robert Boyle", "Joseph Priestley", "Henry Cavendish"],
      correctAnswer: "John Dalton",
      category: "Science"
    },
    {
      id: 92,
      question: "What was the 'Blanketeers' march of 1817?",
      options: ["Weavers' protest march from Manchester", "Chartist demonstration", "Anti-Poor Law protest", "Suffragette march"],
      correctAnswer: "Weavers' protest march from Manchester",
      category: "Political History"
    },
    {
      id: 93,
      question: "Which British mathematician developed 'Hamiltonian mechanics'?",
      options: ["William Rowan Hamilton", "Joseph-Louis Lagrange", "Isaac Newton", "Leonhard Euler"],
      correctAnswer: "William Rowan Hamilton",
      category: "Mathematics"
    },
    {
      id: 94,
      question: "What was the 'Court of King's Bench'?",
      options: ["Superior court of common law", "Criminal court", "Appellate court", "All of the above"],
      correctAnswer: "All of the above",
      category: "Historical Institutions"
    },
    {
      id: 95,
      question: "Which British philosopher wrote 'Naming and Necessity'?",
      options: ["Saul Kripke", "Hilary Putnam", "David Lewis", "All were American"],
      correctAnswer: "Saul Kripke",
      category: "Philosophy"
    },
    {
      id: 96,
      question: "What was 'Operation Freshman' in WWII?",
      options: ["Failed British-Norwegian heavy water raid", "Successful sabotage operation", "Intelligence gathering", "POW rescue"],
      correctAnswer: "Failed British-Norwegian heavy water raid",
      category: "Military History"
    },
    {
      id: 97,
      question: "Which British economist developed 'behavioral economics'?",
      options: ["Daniel Kahneman", "Richard Thaler", "Both were not British", "Amos Tversky"],
      correctAnswer: "Both were not British",
      category: "Economics"
    },
    {
      id: 98,
      question: "What is the 'Rule in Murphy v Brentwood' in tort law?",
      options: ["Restricted recovery for pure economic loss", "Negligence in construction", "Local authority liability", "All of the above"],
      correctAnswer: "All of the above",
      category: "Law"
    },
    {
      id: 99,
      question: "Which British scientist discovered 'Boyle's law'?",
      options: ["Robert Boyle", "Robert Hooke", "Both collaborated", "Edme Mariotte"],
      correctAnswer: "Robert Boyle",
      category: "Science"
    },
    {
      id: 100,
      question: "What was the 'Luddite movement' of 1811-16?",
      options: ["Textile workers destroying machinery", "Radical political movement", "Trade union organization", "Religious revival"],
      correctAnswer: "Textile workers destroying machinery",
      category: "Social History"
    }
  ]
};

export default questionBanks;