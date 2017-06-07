'use strict';

module.exports = {
	questions: [
		{
			source: 'prophets',
			questionText: 'Who was the {_index} prophet?',
			answer: '/names'
		},
		{
			source: 'prophets',
			questionText: 'Which prophet was born in {/birthYear}?',
			answer: '/names'
		},
		{
			source: 'prophets',
			questionText: 'What year was {/names/0} sustained as prophet?',
			answer: '/sustainedYear'
		},
		{
			source: 'prophets',
			questionText: 'What year was {/names/0} born?',
			answer: '/birthYear'
		},
		{
			source: 'prophets',
			questionText: 'What year did {/names/0} die?',
			answer: '/deathYear'
		},
		{
			source: 'prophets',
			questionText: 'Which prophet said: {/quotes}',
			answer: '/names'
		},
		{
			source: 'generalAuthorities',
			questionText: 'Who is the {/calling}?',
			answer: '/names'
		}
	],
	sources: {
		generalAuthorities: [
			{
				names: ['Bishop Gerald Causse', 'Bishop Causse', 'Gerald Causse', 'Causse'],
				calling: 'Presiding Bishop'
			},
			{
				names: [
					'Bishop Dean M Davies',
					'Bishop Dean Davies',
					'Bishop Davies',
					'Dean M Davies',
					'Dean Davies',
					'Davies'
				],
				calling: 'First Counselor in the Presiding Bishopric'
			},
			{
				names: [
					'Bishop W Christopher Waddell',
					'Bishop Christopher Waddell',
					'Bishop Waddell',
					'W Christopher Waddell',
					'Christopher Waddell',
					'Waddell'
				],
				calling: 'Second Counselor in the Presiding Bishopric'
			},
			{
				names: [
					'Sister Jean B Bingham',
					'Sister Jean Bingham',
					'Sister Bingham',
					'Jean B Bingham',
					'Jean Bingham',
					'Bingham'
				],
				calling: 'Relief Society General President'
			},
			{
				names: ['Sister Sharon Eubank', 'Sister Eubank', 'Sharon Eubank', 'Eubank'],
				calling: 'First Counselor in the Relief Society General Presidency'
			},
			{
				names: [
					'Sister Reyna I Aburto',
					'Sister Reyna Aburto',
					'Sister Aburto',
					'Reyna I Aburto',
					'Reyna Aburto',
					'Aburto'
				],
				calling: 'Second Counselor in the Relief Society General Presidency'
			},
			{
				names: [
					'Sister Bonnie L Oscarson',
					'Sister Bonnie Oscarson',
					'Sister Oscarson',
					'Bonnie L Oscarson',
					'Bonnie Oscarson',
					'Oscarson'
				],
				calling: "Young Women's General President"
			},
			{
				names: [
					'Sister Carol F McConkie',
					'Sister Carol McConkie',
					'Sister McConkie',
					'Carol F McConkie',
					'Carol McConkie',
					'McConkie'
				],
				calling: "First Counselor in the Young Women's General Presidency"
			},
			{
				names: [
					'Sister Neill F Marriott',
					'Sister Neill Marriott',
					'Sister Marriott',
					'Neill F Marriott',
					'Neill Marriott',
					'Marriott'
				],
				calling: "Second Counselor in the Young Women's General Presidency"
			},
			{
				names: ['Sister Joy D Jones', 'Sister Joy Jones', 'Sister Jones', 'Joy D Jones', 'Joy Jones', 'Jones'],
				calling: 'Primary General President'
			},
			{
				names: [
					'Sister Bonnie H Cordon',
					'Sister Bonnie Cordon',
					'Sister Cordon',
					'Bonnie H Cordon',
					'Bonnie Cordon',
					'Cordon'
				],
				calling: 'First Counselor in the Primary General Presidency'
			},
			{
				names: [
					'Sister Cristina B Franco',
					'Sister Cristina Franco',
					'Sister Franco',
					'Cristina B Franco',
					'Cristina Franco',
					'Franco'
				],
				calling: 'Second Counselor in the Primary General Presidency'
			},
			{
				names: [
					'Brother Tad R Callister',
					'Brother Tad Callister',
					'Brother Callister',
					'Tad R Callister',
					'Tad Callister',
					'Callister'
				],
				calling: 'Sunday School General President'
			},
			{
				names: [
					'Brother Devin G Durrant',
					'Brother Devin Durrant',
					'Brother Durrant',
					'Devin G Durrant',
					'Devin Durrant',
					'Durrant'
				],
				calling: 'First Counselor in the Sunday School General Presidency'
			},
			{
				names: [
					'Brother Brian K Ashton',
					'Brother Brian Ashton',
					'Brother Ashton',
					'Brian K Ashton',
					'Brian Ashton',
					'Ashton'
				],
				calling: 'Second Counselor in the Sunday School General Presidency'
			},
			{
				names: [
					'Brother Stephen W Owen',
					'Brother Stephen Owen',
					'Brother Owen',
					'Stephen W Owen',
					'Stephen Owen',
					'Owen'
				],
				calling: "Young Men's General President"
			},
			{
				names: [
					'Brother Douglas D Holmes',
					'Brother Douglas Holmes',
					'Brother Holmes',
					'Douglas D Holmes',
					'Douglas Holmes',
					'Holmes'
				],
				calling: "First Counselor in the Young Men's General Presidency"
			},
			{
				names: [
					'Brother M Joseph Brough',
					'Brother Joseph Brough',
					'Brother Brough',
					'M Joseph Brough',
					'Joseph Brough',
					'Brough'
				],
				calling: "Second Counselor in the Young Men's General Presidency"
			}
		],
		prophets: [
			{
				names: [
					'Joseph Smith',
					'Smith',
					'Prophet Joseph',
					'Prophet Joseph Smith',
					'the Prophet Joseph',
					'the Prophet Joseph Smith'
				],
				birthYear: '1805',
				sustainedYear: '1830',
				deathYear: '1844',
				ageAtDeath: '39',
				quotes: [
					'I told the brethren that the Book of Mormon was the most correct of any book on earth, and the keystone of our religion.'
				]
			},
			{
				names: ['Brigham Young', 'Young', 'President Brigham Young', 'President Young'],
				birthYear: '1801',
				sustainedYear: '1847',
				deathYear: '1877',
				ageAtDeath: '76',
				quotes: [
					"Mormonism' has made me all I am; and the grace, the power, and the wisdom of God will make me all that I ever will be, either in time or in eternity."
				]
			},
			{
				names: ['John Taylor', 'Taylor', 'President John Taylor', 'President Taylor'],
				birthYear: '1808',
				sustainedYear: '1880',
				deathYear: '1887',
				quotes: ['I would rather trust in the living God than in any other power on earth.']
			},
			{
				names: ['Wilford Woodruff', 'Woodruff', 'President Wilford Woodruff', 'President Woodruff'],
				birthYear: '1807',
				sustainedYear: '1889',
				deathYear: '1898',
				quotes: ['The Church of God could not live twenty four hours without revelation.']
			},
			{
				names: ['Lorenzo Snow', 'Snow', 'President Snow', 'President Lorenzo Snow'],
				birthYear: '1814',
				sustainedYear: '1898',
				deathYear: '1901',
				quotes: ['As man now is, God once was; as God is now man may be.']
			},
			{
				names: ['Joseph F Smith', 'Smith', 'President Smith', 'President Joseph F Smith'],
				birthYear: '1838',
				sustainedYear: '1901',
				deathYear: '1918',
				quotes: [
					'Pure intelligence comprises not only knowledge, but also the power to properly apply that knowledge.'
				]
			},
			{
				names: [
					'Heber J Grant',
					'Heber Grant',
					'Grant',
					'President Heber J Grant',
					'President Heber Grant',
					'President Grant'
				],
				birthYear: '1856',
				sustainedYear: '1918',
				deathYear: '1945',
				quotes: [
					'No matter in what land we may dwell the Gospel of the Lord Jesus Christ makes us brothers and sisters, interested in each other, eager to understand and know each other.'
				]
			},
			{
				names: [
					'George Albert Smith',
					'George Smith',
					'Smith',
					'President George Albert Smith',
					'President George Smith',
					'President Smith'
				],
				birthYear: '1870',
				sustainedYear: '1945',
				deathYear: '1951',
				quotes: [
					'The pathway of righteousness is the highway of happiness. There is no other way to happiness.'
				]
			},
			{
				names: [
					'David O McKay',
					'David McKay',
					'McKay',
					'President David O McKay',
					'President David McKay',
					'President McKay'
				],
				birthYear: '1873',
				sustainedYear: '1951',
				deathYear: '1970',
				ageAtDeath: '96',
				quotes: ['No other success can compensate for failure in the home.']
			},
			{
				names: ['Joseph Fielding Smith', 'Smith', 'President Joseph Fielding Smith', 'President Smith'],
				birthYear: '1876',
				sustainedYear: '1970',
				deathYear: '1972',
				quotes: [
					'We believe it is by grace that we are saved after all that we can do, and that building upon the foundation of the atonement of Christ, all men must work out their salvation with fear and trembling before the Lord.'
				]
			},
			{
				names: [
					'Harold B Lee',
					'Harold Lee',
					'Lee',
					'President Harold B Lee',
					'President Harold Lee',
					'President Lee'
				],
				sustainedYear: '1972',
				deathYear: '1973',
				quotes: ['The heaviest burden that one has to bear in this life is the burden of sin.']
			},
			{
				names: [
					'Spencer W Kimball',
					'Spencer Kimball',
					'Kimball',
					'President Kimball',
					'President Spencer W Kimball',
					'President Spencer Kimball'
				],
				birthYear: '1895',
				sustainedYear: '1973',
				deathYear: '1985',
				quotes: ['We must lengthen our stride and must do it now.']
			},
			{
				names: [
					'Ezra Taft Benson',
					'Ezra Benson',
					'Benson',
					'President Benson',
					'President Ezra Taft Benson',
					'President Ezra Benson'
				],
				sustainedYear: '1985',
				deathYear: '1994',
				quotes: ['Pride is a sin that can readily be seen in others but is rarely admitted in ourselves.']
			},
			{
				names: [
					'Howard W Hunter',
					'Howard Hunter',
					'Hunter',
					'President Howard W Hunter',
					'President Howard Hunter',
					'President Hunter'
				],
				birthYear: '1907',
				sustainedYear: '1994',
				deathYear: '1995',
				quotes: [
					'It is the deepest desire of my heart to have every member of the Church worthy to enter the temple.'
				]
			},
			{
				names: [
					'Gordon B Hinckley',
					'Gordon Hinckley',
					'Hinckley',
					'President Gordon B Hinckley',
					'President Gordon Hinckley',
					'President Hinckley'
				],
				birthYear: '1910',
				sustainedYear: '1995',
				deathYear: '2008',
				quotes: [
					'The time has come for us to stand a little taller, to lift our eyes and stretch our minds to a greater comprehension and understanding of the grand millennial mission of this, The Church of Jesus Christ of Latter-day Saints.'
				]
			},
			{
				names: [
					'Thomas S Monson',
					'Thomas Monson',
					'Monson',
					'President Thomas S Monson',
					'President Thomas Monson',
					'President Monson'
				],
				birthYear: '1927',
				sustainedYear: '2008',
				quotes: ['Whatever our calling, regardless of our fears or anxieties, let us pray and then go and do.']
			}
		]
	}
};
