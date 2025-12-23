// app/data/questions.js
const questionsByCategory = {
  general: [
    {
      id: 'g1',
      question: 'What is the capital of France?',
      options: ['London', 'Berlin', 'Paris', 'Madrid'],
      correctAnswer: 'Paris',
      explanation: 'Paris is the capital and most populous city of France, known as the "City of Light".'
    },
    {
      id: 'g2',
      question: 'Which planet is known as the Red Planet?',
      options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
      correctAnswer: 'Mars',
      explanation: 'Mars appears red due to iron oxide (rust) on its surface.'
    },
    {
      id: 'g3',
      question: 'Who painted the Mona Lisa?',
      options: ['Vincent van Gogh', 'Pablo Picasso', 'Leonardo da Vinci', 'Michelangelo'],
      correctAnswer: 'Leonardo da Vinci',
      explanation: 'Leonardo da Vinci painted the Mona Lisa between 1503 and 1506.'
    },
    {
      id: 'g4',
      question: 'What is the largest ocean on Earth?',
      options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
      correctAnswer: 'Pacific Ocean',
      explanation: 'The Pacific Ocean covers about 46% of Earth\'s water surface.'
    },
    {
      id: 'g5',
      question: 'Which country is known as the Land of the Rising Sun?',
      options: ['China', 'Thailand', 'Japan', 'South Korea'],
      correctAnswer: 'Japan',
      explanation: 'Japan\'s name means "sun-origin", hence it is called the Land of the Rising Sun.'
    },
    {
      id: 'g6',
      question: 'What is the currency of the United Kingdom?',
      options: ['Euro', 'Dollar', 'Pound Sterling', 'Franc'],
      correctAnswer: 'Pound Sterling',
      explanation: 'The British pound sterling is the world\'s oldest currency still in use.'
    },
    {
      id: 'g7',
      question: 'Which element has the chemical symbol "Au"?',
      options: ['Silver', 'Gold', 'Aluminum', 'Argon'],
      correctAnswer: 'Gold',
      explanation: 'Au comes from the Latin word for gold, "aurum".'
    },
    {
      id: 'g8',
      question: 'Who wrote "Romeo and Juliet"?',
      options: ['Charles Dickens', 'William Shakespeare', 'Jane Austen', 'Mark Twain'],
      correctAnswer: 'William Shakespeare',
      explanation: 'William Shakespeare wrote this tragic love story in the 1590s.'
    },
    {
      id: 'g9',
      question: 'What is the hardest natural substance on Earth?',
      options: ['Gold', 'Iron', 'Diamond', 'Platinum'],
      correctAnswer: 'Diamond',
      explanation: 'Diamond scores 10 on the Mohs scale of mineral hardness.'
    },
    {
      id: 'g10',
      question: 'How many continents are there?',
      options: ['5', '6', '7', '8'],
      correctAnswer: '7',
      explanation: 'The seven continents are: Asia, Africa, North America, South America, Antarctica, Europe, and Australia.'
    },
    {
      id: 'g11',
      question: 'Which planet is closest to the Sun?',
      options: ['Venus', 'Earth', 'Mars', 'Mercury'],
      correctAnswer: 'Mercury',
      explanation: 'Mercury orbits the Sun every 88 Earth days.'
    },
    {
      id: 'g12',
      question: 'What is the largest mammal in the world?',
      options: ['African Elephant', 'Blue Whale', 'Giraffe', 'Polar Bear'],
      correctAnswer: 'Blue Whale',
      explanation: 'Blue whales can grow up to 100 feet long and weigh 200 tons.'
    },
    {
      id: 'g13',
      question: 'In which year did World War II end?',
      options: ['1943', '1944', '1945', '1946'],
      correctAnswer: '1945',
      explanation: 'World War II ended in 1945 with the surrender of Germany and Japan.'
    },
    {
      id: 'g14',
      question: 'What is the capital of Australia?',
      options: ['Sydney', 'Melbourne', 'Canberra', 'Perth'],
      correctAnswer: 'Canberra',
      explanation: 'Canberra was purpose-built as Australia\'s capital city.'
    },
    {
      id: 'g15',
      question: 'Which gas do plants absorb from the atmosphere?',
      options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'],
      correctAnswer: 'Carbon Dioxide',
      explanation: 'Plants use carbon dioxide for photosynthesis.'
    },
    {
      id: 'g16',
      question: 'What is the largest desert in the world?',
      options: ['Sahara Desert', 'Arabian Desert', 'Gobi Desert', 'Antarctic Desert'],
      correctAnswer: 'Antarctic Desert',
      explanation: 'Antarctica is the world\'s largest desert by area.'
    },
    {
      id: 'g17',
      question: 'Who discovered penicillin?',
      options: ['Marie Curie', 'Alexander Fleming', 'Louis Pasteur', 'Isaac Newton'],
      correctAnswer: 'Alexander Fleming',
      explanation: 'Alexander Fleming discovered penicillin in 1928.'
    },
    {
      id: 'g18',
      question: 'What is the tallest mountain in the world?',
      options: ['K2', 'Mount Everest', 'Kangchenjunga', 'Makalu'],
      correctAnswer: 'Mount Everest',
      explanation: 'Mount Everest is 8,848 meters (29,029 feet) tall.'
    },
    {
      id: 'g19',
      question: 'Which country gifted the Statue of Liberty to the USA?',
      options: ['United Kingdom', 'France', 'Spain', 'Germany'],
      correctAnswer: 'France',
      explanation: 'France gifted the Statue of Liberty to celebrate American independence.'
    },
    {
      id: 'g20',
      question: 'What is the main ingredient in guacamole?',
      options: ['Tomato', 'Avocado', 'Pepper', 'Onion'],
      correctAnswer: 'Avocado',
      explanation: 'Guacamole is primarily made from mashed avocados.'
    },
    {
      id: 'g21',
      question: 'How many players are on a soccer team?',
      options: ['9', '10', '11', '12'],
      correctAnswer: '11',
      explanation: 'A standard soccer team has 11 players on the field.'
    },
    {
      id: 'g22',
      question: 'What is the smallest country in the world?',
      options: ['Monaco', 'San Marino', 'Vatican City', 'Liechtenstein'],
      correctAnswer: 'Vatican City',
      explanation: 'Vatican City covers just 0.17 square miles.'
    },
    {
      id: 'g23',
      question: 'Which ocean is the Bermuda Triangle in?',
      options: ['Pacific Ocean', 'Indian Ocean', 'Atlantic Ocean', 'Arctic Ocean'],
      correctAnswer: 'Atlantic Ocean',
      explanation: 'The Bermuda Triangle is in the western part of the North Atlantic Ocean.'
    },
    {
      id: 'g24',
      question: 'What is the chemical symbol for iron?',
      options: ['Ir', 'Fe', 'In', 'Au'],
      correctAnswer: 'Fe',
      explanation: 'Fe comes from the Latin word for iron, "ferrum".'
    },
    {
      id: 'g25',
      question: 'Which planet has the most moons?',
      options: ['Jupiter', 'Saturn', 'Uranus', 'Neptune'],
      correctAnswer: 'Saturn',
      explanation: 'Saturn has 146 confirmed moons (as of 2024).'
    }
  ],
  science: [
    {
      id: 's1',
      question: 'What is the chemical symbol for water?',
      options: ['H2O', 'CO2', 'NaCl', 'O2'],
      correctAnswer: 'H2O',
      explanation: 'Water is composed of two hydrogen atoms and one oxygen atom.'
    },
    {
      id: 's2',
      question: 'Which force pulls objects toward the center of the Earth?',
      options: ['Magnetism', 'Gravity', 'Friction', 'Inertia'],
      correctAnswer: 'Gravity',
      explanation: 'Gravity is the force that attracts objects with mass toward each other.'
    },
    {
      id: 's3',
      question: 'What is the speed of light in a vacuum?',
      options: ['299,792 km/s', '150,000 km/s', '450,000 km/s', '1,000,000 km/s'],
      correctAnswer: '299,792 km/s',
      explanation: 'Light travels at approximately 299,792 kilometers per second in a vacuum.'
    },
    {
      id: 's4',
      question: 'Which gas makes up most of Earth\'s atmosphere?',
      options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Argon'],
      correctAnswer: 'Nitrogen',
      explanation: 'Nitrogen makes up about 78% of Earth\'s atmosphere.'
    },
    {
      id: 's5',
      question: 'What is the atomic number of carbon?',
      options: ['6', '12', '14', '8'],
      correctAnswer: '6',
      explanation: 'Carbon has 6 protons, giving it an atomic number of 6.'
    },
    {
      id: 's6',
      question: 'Which planet is known for its prominent ring system?',
      options: ['Jupiter', 'Saturn', 'Uranus', 'Neptune'],
      correctAnswer: 'Saturn',
      explanation: 'Saturn\'s rings are made mostly of ice particles and rock.'
    },
    {
      id: 's7',
      question: 'What is the process by which plants make food?',
      options: ['Respiration', 'Photosynthesis', 'Transpiration', 'Fermentation'],
      correctAnswer: 'Photosynthesis',
      explanation: 'Plants convert sunlight, water, and carbon dioxide into glucose.'
    },
    {
      id: 's8',
      question: 'Which scientist developed the theory of relativity?',
      options: ['Isaac Newton', 'Albert Einstein', 'Stephen Hawking', 'Niels Bohr'],
      correctAnswer: 'Albert Einstein',
      explanation: 'Einstein published his theory of relativity in 1905 and 1915.'
    },
    {
      id: 's9',
      question: 'What is the hardest mineral on the Mohs scale?',
      options: ['Corundum', 'Topaz', 'Diamond', 'Quartz'],
      correctAnswer: 'Diamond',
      explanation: 'Diamond scores 10, the highest on the Mohs hardness scale.'
    },
    {
      id: 's10',
      question: 'Which blood type is the universal donor?',
      options: ['A', 'B', 'AB', 'O'],
      correctAnswer: 'O',
      explanation: 'Type O-negative blood can be given to patients of any blood type.'
    },
    {
      id: 's11',
      question: 'What is the study of fossils called?',
      options: ['Archaeology', 'Paleontology', 'Geology', 'Anthropology'],
      correctAnswer: 'Paleontology',
      explanation: 'Paleontology is the scientific study of ancient life through fossils.'
    },
    {
      id: 's12',
      question: 'Which element is essential for human bone health?',
      options: ['Iron', 'Calcium', 'Sodium', 'Potassium'],
      correctAnswer: 'Calcium',
      explanation: 'Calcium is crucial for building and maintaining strong bones.'
    },
    {
      id: 's13',
      question: 'What is the main function of red blood cells?',
      options: ['Fight infection', 'Clot blood', 'Carry oxygen', 'Digest food'],
      correctAnswer: 'Carry oxygen',
      explanation: 'Red blood cells contain hemoglobin which carries oxygen throughout the body.'
    },
    {
      id: 's14',
      question: 'Which planet is the hottest in our solar system?',
      options: ['Mercury', 'Venus', 'Mars', 'Jupiter'],
      correctAnswer: 'Venus',
      explanation: 'Venus has a thick atmosphere that traps heat, making it hotter than Mercury.'
    },
    {
      id: 's15',
      question: 'What is the chemical formula for table salt?',
      options: ['NaCl', 'KCl', 'CaCl2', 'MgCl2'],
      correctAnswer: 'NaCl',
      explanation: 'Table salt is sodium chloride, composed of sodium and chlorine.'
    },
    {
      id: 's16',
      question: 'How many bones are in the adult human body?',
      options: ['206', '250', '300', '150'],
      correctAnswer: '206',
      explanation: 'Adults have 206 bones, while babies have about 300.'
    },
    {
      id: 's17',
      question: 'What is the most abundant element in the universe?',
      options: ['Helium', 'Oxygen', 'Hydrogen', 'Carbon'],
      correctAnswer: 'Hydrogen',
      explanation: 'Hydrogen makes up about 75% of all normal matter in the universe.'
    },
    {
      id: 's18',
      question: 'Which organ produces insulin?',
      options: ['Liver', 'Pancreas', 'Kidney', 'Stomach'],
      correctAnswer: 'Pancreas',
      explanation: 'The pancreas produces insulin to regulate blood sugar levels.'
    },
    {
      id: 's19',
      question: 'What is the unit of electrical resistance?',
      options: ['Volt', 'Ampere', 'Ohm', 'Watt'],
      correctAnswer: 'Ohm',
      explanation: 'Electrical resistance is measured in ohms (Ω).'
    },
    {
      id: 's20',
      question: 'Which vitamin is produced when skin is exposed to sunlight?',
      options: ['Vitamin A', 'Vitamin C', 'Vitamin D', 'Vitamin K'],
      correctAnswer: 'Vitamin D',
      explanation: 'The body synthesizes vitamin D when skin is exposed to UVB rays.'
    },
    {
      id: 's21',
      question: 'What is the pH value of pure water?',
      options: ['5', '6', '7', '8'],
      correctAnswer: '7',
      explanation: 'Pure water has a neutral pH of 7.'
    },
    {
      id: 's22',
      question: 'Which gas do plants release during photosynthesis?',
      options: ['Carbon Dioxide', 'Oxygen', 'Nitrogen', 'Hydrogen'],
      correctAnswer: 'Oxygen',
      explanation: 'Plants release oxygen as a byproduct of photosynthesis.'
    },
    {
      id: 's23',
      question: 'What is the largest organ in the human body?',
      options: ['Liver', 'Brain', 'Skin', 'Lungs'],
      correctAnswer: 'Skin',
      explanation: 'The skin is the body\'s largest organ by surface area.'
    },
    {
      id: 's24',
      question: 'Which scientist discovered the law of gravity?',
      options: ['Galileo Galilei', 'Isaac Newton', 'Albert Einstein', 'Nikola Tesla'],
      correctAnswer: 'Isaac Newton',
      explanation: 'Isaac Newton formulated the law of universal gravitation in 1687.'
    },
    {
      id: 's25',
      question: 'What is the boiling point of water at sea level?',
      options: ['90°C', '100°C', '110°C', '120°C'],
      correctAnswer: '100°C',
      explanation: 'Water boils at 100°C (212°F) at standard atmospheric pressure.'
    }
  ],
  history: [
    {
      id: 'h1',
      question: 'Who was the first president of the United States?',
      options: ['Thomas Jefferson', 'John Adams', 'George Washington', 'Abraham Lincoln'],
      correctAnswer: 'George Washington',
      explanation: 'George Washington served as the first U.S. president from 1789 to 1797.'
    },
    {
      id: 'h2',
      question: 'In which year did World War I begin?',
      options: ['1912', '1914', '1916', '1918'],
      correctAnswer: '1914',
      explanation: 'World War I began on July 28, 1914, after the assassination of Archduke Franz Ferdinand.'
    },
    {
      id: 'h3',
      question: 'Which ancient civilization built the pyramids?',
      options: ['Romans', 'Greeks', 'Egyptians', 'Mayans'],
      correctAnswer: 'Egyptians',
      explanation: 'The ancient Egyptians built pyramids as tombs for pharaohs.'
    },
    {
      id: 'h4',
      question: 'Who wrote the Declaration of Independence?',
      options: ['Benjamin Franklin', 'Thomas Jefferson', 'John Adams', 'James Madison'],
      correctAnswer: 'Thomas Jefferson',
      explanation: 'Thomas Jefferson was the principal author of the Declaration of Independence.'
    },
    {
      id: 'h5',
      question: 'What year did the Berlin Wall fall?',
      options: ['1987', '1988', '1989', '1990'],
      correctAnswer: '1989',
      explanation: 'The Berlin Wall fell on November 9, 1989.'
    },
    {
      id: 'h6',
      question: 'Which empire was ruled by Genghis Khan?',
      options: ['Ottoman Empire', 'Mongol Empire', 'Roman Empire', 'Persian Empire'],
      correctAnswer: 'Mongol Empire',
      explanation: 'Genghis Khan founded and led the Mongol Empire in the 13th century.'
    },
    {
      id: 'h7',
      question: 'Who discovered America in 1492?',
      options: ['Vasco da Gama', 'Christopher Columbus', 'Ferdinand Magellan', 'Amerigo Vespucci'],
      correctAnswer: 'Christopher Columbus',
      explanation: 'Christopher Columbus made four voyages across the Atlantic Ocean.'
    },
    {
      id: 'h8',
      question: 'Which war was fought between North and South Korea?',
      options: ['Vietnam War', 'Korean War', 'Cold War', 'World War II'],
      correctAnswer: 'Korean War',
      explanation: 'The Korean War lasted from 1950 to 1953.'
    },
    {
      id: 'h9',
      question: 'Who was the first woman to win a Nobel Prize?',
      options: ['Marie Curie', 'Rosalind Franklin', 'Dorothy Hodgkin', 'Mother Teresa'],
      correctAnswer: 'Marie Curie',
      explanation: 'Marie Curie won the Nobel Prize in Physics in 1903.'
    },
    {
      id: 'h10',
      question: 'Which ancient city was destroyed by Mount Vesuvius?',
      options: ['Athens', 'Pompeii', 'Rome', 'Carthage'],
      correctAnswer: 'Pompeii',
      explanation: 'Pompeii was buried under volcanic ash in 79 AD.'
    },
    {
      id: 'h11',
      question: 'What year did the Titanic sink?',
      options: ['1905', '1912', '1918', '1923'],
      correctAnswer: '1912',
      explanation: 'The Titanic sank on April 15, 1912, after hitting an iceberg.'
    },
    {
      id: 'h12',
      question: 'Who was the British Prime Minister during World War II?',
      options: ['Neville Chamberlain', 'Winston Churchill', 'Clement Attlee', 'Harold Macmillan'],
      correctAnswer: 'Winston Churchill',
      explanation: 'Winston Churchill led Britain through most of World War II.'
    },
    {
      id: 'h13',
      question: 'Which revolution began in 1917 in Russia?',
      options: ['French Revolution', 'Industrial Revolution', 'Russian Revolution', 'American Revolution'],
      correctAnswer: 'Russian Revolution',
      explanation: 'The Russian Revolution led to the creation of the Soviet Union.'
    },
    {
      id: 'h14',
      question: 'Who invented the telephone?',
      options: ['Thomas Edison', 'Alexander Graham Bell', 'Nikola Tesla', 'Guglielmo Marconi'],
      correctAnswer: 'Alexander Graham Bell',
      explanation: 'Alexander Graham Bell patented the first practical telephone in 1876.'
    },
    {
      id: 'h15',
      question: 'What ancient civilization developed democracy?',
      options: ['Roman', 'Greek', 'Egyptian', 'Persian'],
      correctAnswer: 'Greek',
      explanation: 'Ancient Athens developed the first known democracy around 508 BC.'
    },
    {
      id: 'h16',
      question: 'Who was the first emperor of Rome?',
      options: ['Julius Caesar', 'Augustus', 'Nero', 'Caligula'],
      correctAnswer: 'Augustus',
      explanation: 'Augustus became the first Roman emperor in 27 BC.'
    },
    {
      id: 'h17',
      question: 'Which treaty ended World War I?',
      options: ['Treaty of Versailles', 'Treaty of Paris', 'Treaty of Vienna', 'Treaty of Rome'],
      correctAnswer: 'Treaty of Versailles',
      explanation: 'The Treaty of Versailles was signed on June 28, 1919.'
    },
    {
      id: 'h18',
      question: 'Who painted the Sistine Chapel ceiling?',
      options: ['Leonardo da Vinci', 'Raphael', 'Michelangelo', 'Donatello'],
      correctAnswer: 'Michelangelo',
      explanation: 'Michelangelo painted the ceiling between 1508 and 1512.'
    },
    {
      id: 'h19',
      question: 'What year did the American Civil War end?',
      options: ['1863', '1864', '1865', '1866'],
      correctAnswer: '1865',
      explanation: 'The American Civil War ended on April 9, 1865.'
    },
    {
      id: 'h20',
      question: 'Which explorer reached the South Pole first?',
      options: ['Robert Falcon Scott', 'Roald Amundsen', 'Ernest Shackleton', 'James Cook'],
      correctAnswer: 'Roald Amundsen',
      explanation: 'Roald Amundsen reached the South Pole on December 14, 1911.'
    },
    {
      id: 'h21',
      question: 'Who was the first female Prime Minister of the UK?',
      options: ['Theresa May', 'Margaret Thatcher', 'Queen Elizabeth I', 'Indira Gandhi'],
      correctAnswer: 'Margaret Thatcher',
      explanation: 'Margaret Thatcher served as Prime Minister from 1979 to 1990.'
    },
    {
      id: 'h22',
      question: 'Which ancient wonder was located in Babylon?',
      options: ['Great Pyramid', 'Hanging Gardens', 'Colossus of Rhodes', 'Lighthouse of Alexandria'],
      correctAnswer: 'Hanging Gardens',
      explanation: 'The Hanging Gardens of Babylon were one of the Seven Wonders.'
    },
    {
      id: 'h23',
      question: 'What year did man first walk on the moon?',
      options: ['1967', '1968', '1969', '1970'],
      correctAnswer: '1969',
      explanation: 'Neil Armstrong walked on the moon on July 20, 1969.'
    },
    {
      id: 'h24',
      question: 'Who founded the Mongol Empire?',
      options: ['Kublai Khan', 'Genghis Khan', 'Attila the Hun', 'Tamerlane'],
      correctAnswer: 'Genghis Khan',
      explanation: 'Genghis Khan united the Mongol tribes and founded the empire.'
    },
    {
      id: 'h25',
      question: 'Which civilization built Machu Picchu?',
      options: ['Aztec', 'Maya', 'Inca', 'Olmec'],
      correctAnswer: 'Inca',
      explanation: 'The Incas built Machu Picchu in the 15th century.'
    }
  ],
  geography: [
    {
      id: 'geo1',
      question: 'Which is the longest river in the world?',
      options: ['Amazon River', 'Nile River', 'Yangtze River', 'Mississippi River'],
      correctAnswer: 'Nile River',
      explanation: 'The Nile River is approximately 6,650 km (4,130 miles) long.'
    },
    {
      id: 'geo2',
      question: 'What is the smallest continent by land area?',
      options: ['Europe', 'Australia', 'Antarctica', 'South America'],
      correctAnswer: 'Australia',
      explanation: 'Australia is both a country and a continent.'
    },
    {
      id: 'geo3',
      question: 'Which country has the most natural lakes?',
      options: ['United States', 'Russia', 'Canada', 'Finland'],
      correctAnswer: 'Canada',
      explanation: 'Canada has over 2 million lakes, more than any other country.'
    },
    {
      id: 'geo4',
      question: 'What is the capital of Japan?',
      options: ['Seoul', 'Beijing', 'Tokyo', 'Bangkok'],
      correctAnswer: 'Tokyo',
      explanation: 'Tokyo is the most populous metropolitan area in the world.'
    },
    {
      id: 'geo5',
      question: 'Which desert is the largest in Africa?',
      options: ['Kalahari Desert', 'Sahara Desert', 'Namib Desert', 'Arabian Desert'],
      correctAnswer: 'Sahara Desert',
      explanation: 'The Sahara is the world\'s largest hot desert.'
    },
    {
      id: 'geo6',
      question: 'What is the highest mountain in Africa?',
      options: ['Mount Kenya', 'Mount Kilimanjaro', 'Mount Stanley', 'Mount Elgon'],
      correctAnswer: 'Mount Kilimanjaro',
      explanation: 'Mount Kilimanjaro is 5,895 meters (19,341 feet) tall.'
    },
    {
      id: 'geo7',
      question: 'Which country is known as the Land of the Midnight Sun?',
      options: ['Sweden', 'Finland', 'Norway', 'Iceland'],
      correctAnswer: 'Norway',
      explanation: 'Norway experiences 24-hour daylight during summer months.'
    },
    {
      id: 'geo8',
      question: 'What is the capital of Brazil?',
      options: ['Rio de Janeiro', 'São Paulo', 'Brasília', 'Salvador'],
      correctAnswer: 'Brasília',
      explanation: 'Brasília was purpose-built as Brazil\'s capital in 1960.'
    },
    {
      id: 'geo9',
      question: 'Which U.S. state is known as the Sunshine State?',
      options: ['California', 'Florida', 'Texas', 'Arizona'],
      correctAnswer: 'Florida',
      explanation: 'Florida has an average of 230 sunny days per year.'
    },
    {
      id: 'geo10',
      question: 'What is the largest island in the world?',
      options: ['Borneo', 'Madagascar', 'Greenland', 'New Guinea'],
      correctAnswer: 'Greenland',
      explanation: 'Greenland is the world\'s largest non-continental island.'
    },
    {
      id: 'geo11',
      question: 'Which country has the most islands?',
      options: ['Indonesia', 'Philippines', 'Sweden', 'Canada'],
      correctAnswer: 'Sweden',
      explanation: 'Sweden has over 267,000 islands, though most are uninhabited.'
    },
    {
      id: 'geo12',
      question: 'What is the capital of Egypt?',
      options: ['Alexandria', 'Cairo', 'Giza', 'Luxor'],
      correctAnswer: 'Cairo',
      explanation: 'Cairo is the largest city in Africa and the Middle East.'
    },
    {
      id: 'geo13',
      question: 'Which river flows through Paris?',
      options: ['Seine', 'Rhine', 'Loire', 'Thames'],
      correctAnswer: 'Seine',
      explanation: 'The Seine River flows through Paris for about 13 km.'
    },
    {
      id: 'geo14',
      question: 'What is the largest country by area?',
      options: ['China', 'United States', 'Canada', 'Russia'],
      correctAnswer: 'Russia',
      explanation: 'Russia covers approximately 17.1 million square kilometers.'
    },
    {
      id: 'geo15',
      question: 'Which African country was never colonized?',
      options: ['Ethiopia', 'Liberia', 'Both A and B', 'None of the above'],
      correctAnswer: 'Both A and B',
      explanation: 'Ethiopia and Liberia were never colonized by European powers.'
    },
    {
      id: 'geo16',
      question: 'What is the capital of Canada?',
      options: ['Toronto', 'Vancouver', 'Ottawa', 'Montreal'],
      correctAnswer: 'Ottawa',
      explanation: 'Ottawa was chosen as Canada\'s capital in 1857.'
    },
    {
      id: 'geo17',
      question: 'Which mountain range separates Europe from Asia?',
      options: ['Alps', 'Ural Mountains', 'Caucasus Mountains', 'Himalayas'],
      correctAnswer: 'Ural Mountains',
      explanation: 'The Ural Mountains form the traditional boundary between Europe and Asia.'
    },
    {
      id: 'geo18',
      question: 'What is the largest lake in Africa?',
      options: ['Lake Victoria', 'Lake Tanganyika', 'Lake Malawi', 'Lake Chad'],
      correctAnswer: 'Lake Victoria',
      explanation: 'Lake Victoria is Africa\'s largest lake by area.'
    },
    {
      id: 'geo19',
      question: 'Which country is both in Europe and Asia?',
      options: ['Turkey', 'Russia', 'Both A and B', 'Kazakhstan'],
      correctAnswer: 'Both A and B',
      explanation: 'Turkey and Russia have territory in both Europe and Asia.'
    },
    {
      id: 'geo20',
      question: 'What is the capital of South Africa?',
      options: ['Cape Town', 'Pretoria', 'Johannesburg', 'All three'],
      correctAnswer: 'All three',
      explanation: 'South Africa has three capitals: Pretoria (executive), Cape Town (legislative), and Bloemfontein (judicial).'
    },
    {
      id: 'geo21',
      question: 'Which sea is the saltiest?',
      options: ['Red Sea', 'Dead Sea', 'Mediterranean Sea', 'Caspian Sea'],
      correctAnswer: 'Dead Sea',
      explanation: 'The Dead Sea is about 9.6 times saltier than the ocean.'
    },
    {
      id: 'geo22',
      question: 'What is the longest mountain range in the world?',
      options: ['Andes', 'Himalayas', 'Rockies', 'Alps'],
      correctAnswer: 'Andes',
      explanation: 'The Andes stretch about 7,000 km along South America.'
    },
    {
      id: 'geo23',
      question: 'Which country has the most volcanoes?',
      options: ['Japan', 'Indonesia', 'United States', 'Philippines'],
      correctAnswer: 'United States',
      explanation: 'The U.S. has about 173 potentially active volcanoes.'
    },
    {
      id: 'geo24',
      question: 'What is the capital of New Zealand?',
      options: ['Auckland', 'Wellington', 'Christchurch', 'Queenstown'],
      correctAnswer: 'Wellington',
      explanation: 'Wellington is the southernmost capital city in the world.'
    },
    {
      id: 'geo25',
      question: 'Which river flows through London?',
      options: ['Thames', 'Severn', 'Mersey', 'Tyne'],
      correctAnswer: 'Thames',
      explanation: 'The River Thames flows through central London.'
    }
  ],
  entertainment: [
    {
      id: 'e1',
      question: 'Who played Iron Man in the Marvel Cinematic Universe?',
      options: ['Chris Evans', 'Robert Downey Jr.', 'Chris Hemsworth', 'Mark Ruffalo'],
      correctAnswer: 'Robert Downey Jr.',
      explanation: 'Robert Downey Jr. portrayed Tony Stark/Iron Man in multiple Marvel films.'
    },
    {
      id: 'e2',
      question: 'Which film won the first Academy Award for Best Picture?',
      options: ['Wings', 'Sunrise', 'The Jazz Singer', 'All Quiet on the Western Front'],
      correctAnswer: 'Wings',
      explanation: 'Wings won the first Best Picture Oscar in 1929.'
    },
    {
      id: 'e3',
      question: 'Who is known as the King of Pop?',
      options: ['Elvis Presley', 'Michael Jackson', 'Prince', 'Madonna'],
      correctAnswer: 'Michael Jackson',
      explanation: 'Michael Jackson earned this title due to his massive influence on pop music.'
    },
    {
      id: 'e4',
      question: 'Which TV show features the characters Ross, Rachel, and Chandler?',
      options: ['How I Met Your Mother', 'Seinfeld', 'Friends', 'The Big Bang Theory'],
      correctAnswer: 'Friends',
      explanation: 'Friends aired from 1994 to 2004 and became a cultural phenomenon.'
    },
    {
      id: 'e5',
      question: 'Who directed the movie "Titanic"?',
      options: ['Steven Spielberg', 'James Cameron', 'Christopher Nolan', 'Peter Jackson'],
      correctAnswer: 'James Cameron',
      explanation: 'James Cameron directed and wrote Titanic, released in 1997.'
    },
    {
      id: 'e6',
      question: 'Which band recorded the album "Abbey Road"?',
      options: ['The Rolling Stones', 'The Beatles', 'Queen', 'Led Zeppelin'],
      correctAnswer: 'The Beatles',
      explanation: 'Abbey Road was the Beatles\' eleventh studio album.'
    },
    {
      id: 'e7',
      question: 'Who played Harry Potter in the film series?',
      options: ['Daniel Radcliffe', 'Rupert Grint', 'Emma Watson', 'Tom Felton'],
      correctAnswer: 'Daniel Radcliffe',
      explanation: 'Daniel Radcliffe portrayed Harry Potter in all eight films.'
    },
    {
      id: 'e8',
      question: 'Which animated film features the song "Let It Go"?',
      options: ['Moana', 'Frozen', 'Tangled', 'The Little Mermaid'],
      correctAnswer: 'Frozen',
      explanation: '"Let It Go" is performed by Idina Menzel as Elsa in Frozen.'
    },
    {
      id: 'e9',
      question: 'Who is the creator of the "Star Wars" franchise?',
      options: ['Steven Spielberg', 'George Lucas', 'J.J. Abrams', 'James Cameron'],
      correctAnswer: 'George Lucas',
      explanation: 'George Lucas wrote and directed the original Star Wars film.'
    },
    {
      id: 'e10',
      question: 'Which singer is known as the "Material Girl"?',
      options: ['Madonna', 'Britney Spears', 'Lady Gaga', 'Cher'],
      correctAnswer: 'Madonna',
      explanation: 'Madonna earned this nickname from her 1985 song "Material Girl".'
    },
    {
      id: 'e11',
      question: 'What year was the first iPhone released?',
      options: ['2005', '2006', '2007', '2008'],
      correctAnswer: '2007',
      explanation: 'Steve Jobs unveiled the first iPhone on January 9, 2007.'
    },
    {
      id: 'e12',
      question: 'Who played Jack Dawson in "Titanic"?',
      options: ['Brad Pitt', 'Leonardo DiCaprio', 'Matt Damon', 'Johnny Depp'],
      correctAnswer: 'Leonardo DiCaprio',
      explanation: 'Leonardo DiCaprio played Jack opposite Kate Winslet\'s Rose.'
    },
    {
      id: 'e13',
      question: 'Which video game features the character Mario?',
      options: ['Sonic the Hedgehog', 'Super Mario Bros.', 'The Legend of Zelda', 'Donkey Kong'],
      correctAnswer: 'Super Mario Bros.',
      explanation: 'Mario first appeared in the 1981 arcade game Donkey Kong.'
    },
    {
      id: 'e14',
      question: 'Who wrote the "Harry Potter" book series?',
      options: ['J.R.R. Tolkien', 'J.K. Rowling', 'C.S. Lewis', 'Stephen King'],
      correctAnswer: 'J.K. Rowling',
      explanation: 'J.K. Rowling wrote the seven-book Harry Potter series.'
    },
    {
      id: 'e15',
      question: 'Which actor played James Bond in "GoldenEye"?',
      options: ['Sean Connery', 'Roger Moore', 'Pierce Brosnan', 'Daniel Craig'],
      correctAnswer: 'Pierce Brosnan',
      explanation: 'Pierce Brosnan first played Bond in GoldenEye (1995).'
    },
    {
      id: 'e16',
      question: 'What is the highest-grossing film of all time?',
      options: ['Avatar', 'Avengers: Endgame', 'Titanic', 'Star Wars: The Force Awakens'],
      correctAnswer: 'Avatar',
      explanation: 'Avatar grossed over $2.9 billion worldwide.'
    },
    {
      id: 'e17',
      question: 'Which TV show is set in the fictional town of Hawkins?',
      options: ['Stranger Things', 'Riverdale', 'Twin Peaks', 'Gravity Falls'],
      correctAnswer: 'Stranger Things',
      explanation: 'Stranger Things is set in the fictional town of Hawkins, Indiana.'
    },
    {
      id: 'e18',
      question: 'Who sang the hit song "Rolling in the Deep"?',
      options: ['Taylor Swift', 'Adele', 'Beyoncé', 'Rihanna'],
      correctAnswer: 'Adele',
      explanation: 'Adele released "Rolling in the Deep" in 2010.'
    },
    {
      id: 'e19',
      question: 'Which superhero is known as the "Dark Knight"?',
      options: ['Superman', 'Batman', 'Spider-Man', 'Wolverine'],
      correctAnswer: 'Batman',
      explanation: 'Batman is often referred to as the Dark Knight.'
    },
    {
      id: 'e20',
      question: 'What year did YouTube launch?',
      options: ['2004', '2005', '2006', '2007'],
      correctAnswer: '2005',
      explanation: 'YouTube was founded in February 2005.'
    },
    {
      id: 'e21',
      question: 'Who directed "The Shawshank Redemption"?',
      options: ['Frank Darabont', 'Steven Spielberg', 'Martin Scorsese', 'Quentin Tarantino'],
      correctAnswer: 'Frank Darabont',
      explanation: 'Frank Darabont adapted and directed the film from Stephen King\'s story.'
    },
    {
      id: 'e22',
      question: 'Which band had a hit with "Bohemian Rhapsody"?',
      options: ['The Beatles', 'Queen', 'Led Zeppelin', 'The Who'],
      correctAnswer: 'Queen',
      explanation: 'Queen released "Bohemian Rhapsody" in 1975.'
    },
    {
      id: 'e23',
      question: 'What is the name of the fictional continent in "Game of Thrones"?',
      options: ['Middle-earth', 'Westeros', 'Narnia', 'Pandora'],
      correctAnswer: 'Westeros',
      explanation: 'Most of Game of Thrones is set in Westeros.'
    },
    {
      id: 'e24',
      question: 'Who played the Joker in "The Dark Knight"?',
      options: ['Jack Nicholson', 'Heath Ledger', 'Joaquin Phoenix', 'Jared Leto'],
      correctAnswer: 'Heath Ledger',
      explanation: 'Heath Ledger won a posthumous Oscar for his portrayal.'
    },
    {
      id: 'e25',
      question: 'Which streaming service created "Stranger Things"?',
      options: ['Netflix', 'Amazon Prime', 'Hulu', 'Disney+'],
      correctAnswer: 'Netflix',
      explanation: 'Stranger Things is a Netflix original series.'
    }
  ],
  sports: [
    {
      id: 'sp1',
      question: 'How many players are on a basketball team?',
      options: ['5', '6', '7', '8'],
      correctAnswer: '5',
      explanation: 'A standard basketball team has 5 players on the court.'
    },
    {
      id: 'sp2',
      question: 'Which country has won the most FIFA World Cups?',
      options: ['Germany', 'Italy', 'Brazil', 'Argentina'],
      correctAnswer: 'Brazil',
      explanation: 'Brazil has won the FIFA World Cup 5 times (1958, 1962, 1970, 1994, 2002).'
    },
    {
      id: 'sp3',
      question: 'In tennis, what is a score of zero called?',
      options: ['Nil', 'Zero', 'Love', 'Blank'],
      correctAnswer: 'Love',
      explanation: 'The term "love" for zero comes from the French word "l\'oeuf" (egg).'
    },
    {
      id: 'sp4',
      question: 'How many rings are in the Olympic symbol?',
      options: ['4', '5', '6', '7'],
      correctAnswer: '5',
      explanation: 'The five rings represent the five inhabited continents.'
    },
    {
      id: 'sp5',
      question: 'Which sport uses the terms "strike" and "spare"?',
      options: ['Baseball', 'Bowling', 'Cricket', 'Tennis'],
      correctAnswer: 'Bowling',
      explanation: 'In bowling, a strike is knocking all pins down in one roll, a spare in two.'
    },
    {
      id: 'sp6',
      question: 'Who holds the record for most Grand Slam tennis titles?',
      options: ['Roger Federer', 'Rafael Nadal', 'Novak Djokovic', 'Margaret Court'],
      correctAnswer: 'Novak Djokovic',
      explanation: 'As of 2024, Novak Djokovic holds the record with 24 Grand Slam titles.'
    },
    {
      id: 'sp7',
      question: 'What is the diameter of a basketball hoop in inches?',
      options: ['16', '18', '20', '24'],
      correctAnswer: '18',
      explanation: 'A regulation basketball hoop has an 18-inch diameter.'
    },
    {
      id: 'sp8',
      question: 'Which country hosted the 2016 Summer Olympics?',
      options: ['China', 'Brazil', 'United Kingdom', 'Russia'],
      correctAnswer: 'Brazil',
      explanation: 'Rio de Janeiro, Brazil hosted the 2016 Summer Olympics.'
    },
    {
      id: 'sp9',
      question: 'In golf, what is a hole-in-one called?',
      options: ['Eagle', 'Birdie', 'Ace', 'Albatross'],
      correctAnswer: 'Ace',
      explanation: 'A hole-in-one is commonly referred to as an "ace".'
    },
    {
      id: 'sp10',
      question: 'How many periods are in an ice hockey game?',
      options: ['2', '3', '4', '5'],
      correctAnswer: '3',
      explanation: 'A standard NHL game has three 20-minute periods.'
    },
    {
      id: 'sp11',
      question: 'Which boxer was known as "The Greatest"?',
      options: ['Mike Tyson', 'Muhammad Ali', 'Floyd Mayweather', 'Sugar Ray Leonard'],
      correctAnswer: 'Muhammad Ali',
      explanation: 'Muhammad Ali famously declared himself "The Greatest".'
    },
    {
      id: 'sp12',
      question: 'How many players are on a baseball team in the field?',
      options: ['8', '9', '10', '11'],
      correctAnswer: '9',
      explanation: 'A baseball team has 9 players in defensive positions.'
    },
    {
      id: 'sp13',
      question: 'What color is the center circle in archery?',
      options: ['Gold', 'Red', 'Blue', 'Black'],
      correctAnswer: 'Gold',
      explanation: 'The center circle (bullseye) is gold and worth 10 points.'
    },
    {
      id: 'sp14',
      question: 'Which sport is associated with Wimbledon?',
      options: ['Tennis', 'Golf', 'Cricket', 'Croquet'],
      correctAnswer: 'Tennis',
      explanation: 'Wimbledon is the oldest tennis tournament in the world.'
    },
    {
      id: 'sp15',
      question: 'How many miles is a marathon?',
      options: ['24.2', '25.2', '26.2', '27.2'],
      correctAnswer: '26.2',
      explanation: 'A marathon is 26.2 miles (42.195 kilometers) long.'
    },
    {
      id: 'sp16',
      question: 'Which country invented baseball?',
      options: ['United States', 'United Kingdom', 'Canada', 'Cuba'],
      correctAnswer: 'United States',
      explanation: 'Baseball evolved from older bat-and-ball games in the U.S.'
    },
    {
      id: 'sp17',
      question: 'In soccer, what is the offside rule?',
      options: [
        'Player behind last defender when ball is played',
        'Player in opponent\'s half',
        'Player touching ball with hands',
        'Player obstructing goalkeeper'
      ],
      correctAnswer: 'Player behind last defender when ball is played',
      explanation: 'A player is offside if they are nearer to the opponent\'s goal line than both the ball and the second-last opponent.'
    },
    {
      id: 'sp18',
      question: 'What is the highest score possible in a single frame of bowling?',
      options: ['100', '200', '300', '400'],
      correctAnswer: '300',
      explanation: 'A perfect game in bowling is 300 points (12 strikes in a row).'
    },
    {
      id: 'sp19',
      question: 'Which sport uses a shuttlecock?',
      options: ['Tennis', 'Badminton', 'Squash', 'Table Tennis'],
      correctAnswer: 'Badminton',
      explanation: 'Badminton uses a shuttlecock (also called a birdie).'
    },
    {
      id: 'sp20',
      question: 'How many players are on a rugby union team?',
      options: ['11', '13', '15', '17'],
      correctAnswer: '15',
      explanation: 'A rugby union team has 15 players on the field.'
    },
    {
      id: 'sp21',
      question: 'Which country won the first Cricket World Cup in 1975?',
      options: ['Australia', 'West Indies', 'England', 'India'],
      correctAnswer: 'West Indies',
      explanation: 'The West Indies defeated Australia in the 1975 final.'
    },
    {
      id: 'sp22',
      question: 'What is the length of an Olympic swimming pool?',
      options: ['25m', '50m', '75m', '100m'],
      correctAnswer: '50m',
      explanation: 'Olympic swimming pools are 50 meters long.'
    },
    {
      id: 'sp23',
      question: 'In American football, how many points is a touchdown worth?',
      options: ['3', '6', '7', '8'],
      correctAnswer: '6',
      explanation: 'A touchdown is worth 6 points, with an extra point or conversion opportunity.'
    },
    {
      id: 'sp24',
      question: 'Which athlete has won the most Olympic gold medals?',
      options: ['Usain Bolt', 'Michael Phelps', 'Carl Lewis', 'Larisa Latynina'],
      correctAnswer: 'Michael Phelps',
      explanation: 'Michael Phelps has won 23 Olympic gold medals.'
    },
    {
      id: 'sp25',
      question: 'What is the national sport of Canada?',
      options: ['Ice Hockey', 'Lacrosse', 'Curling', 'Both A and B'],
      correctAnswer: 'Both A and B',
      explanation: 'Ice hockey is the winter national sport, lacrosse is the summer national sport.'
    }
  ]
};

export const categories = [
  {
    id: 'general',
    name: 'General Knowledge',
    icon: 'earth',
    color: '#6366f1',
    description: 'Test your knowledge on various topics from around the world',
    totalQuestions: 25
  },
  {
    id: 'science',
    name: 'Science',
    icon: 'flask',
    color: '#10b981',
    description: 'Explore the wonders of science and technology',
    totalQuestions: 25
  },
  {
    id: 'history',
    name: 'History',
    icon: 'castle',
    color: '#f59e0b',
    description: 'Journey through time with historical facts and events',
    totalQuestions: 25
  },
  {
    id: 'geography',
    name: 'Geography',
    icon: 'map',
    color: '#3b82f6',
    description: 'Discover countries, capitals, and geographical features',
    totalQuestions: 25
  },
  {
    id: 'entertainment',
    name: 'Entertainment',
    icon: 'film',
    color: '#ec4899',
    description: 'Movies, music, TV shows, and pop culture',
    totalQuestions: 25
  },
  {
    id: 'sports',
    name: 'Sports',
    icon: 'trophy',
    color: '#ef4444',
    description: 'Test your knowledge of sports rules, records, and athletes',
    totalQuestions: 25
  }
];

export default questionsByCategory;