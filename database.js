class STIDatabase {
    constructor() {
        this.news = [
            {
                id: 1,
                title: 'STI College Lucena Student Council Elections 2025',
                slug: 'student-council-elections-2025',
                content: `STI College Lucena is excited to announce the upcoming 2025 Student Council Elections. This is your opportunity to make your voice heard and choose the leaders who will represent your interests for the upcoming academic year.

Election Details:
- Date: March 15-17, 2025
- Location: STI College Lucena Campus
- Eligibility: All enrolled STI students
- Positions: President, Vice President, Secretary, Treasurer, Auditor, PIO, and Representatives

The Student Council plays a vital role in representing student interests, organizing campus activities, and fostering a positive learning environment. Candidates will be presenting their platforms and vision for the student body during the campaign period.

Make sure to attend the candidates' forum to learn more about each candidate's goals and plans for improving student life at STI College Lucena. Your vote matters! Participate in the democratic process and help shape the future of our student community.`,
                excerpt: 'Get ready to vote for your next student council leaders. Elections will be held on March 15-17, 2025.',
                imageUrl: 'images/news/elections-2025.jpg',
                publishedAt: '2025-01-15T10:00:00Z',
                isPublished: true,
                category: 'Elections'
            },
            {
                id: 2,
                title: 'STI College Lucena Launches New Computer Lab',
                slug: 'new-computer-lab-launch',
                content: `STI College Lucena is proud to announce the opening of our new state-of-the-art computer laboratory. This modern facility is equipped with the latest technology to support our Information Technology and Computer Science programs.

The new computer lab features:
- 30 high-performance computers with latest specifications
- Professional software for programming, design, and multimedia
- High-speed internet connection
- Air-conditioned environment
- Flexible seating arrangement for collaborative work

This facility will enhance the learning experience of our students, particularly those enrolled in:
- Bachelor of Science in Information Technology
- Bachelor of Science in Computer Science
- Associate in Computer Technology

The computer lab will be available for use during regular class hours and for special projects. Students can also access the facility during designated open hours for additional practice and research.`,
                excerpt: 'A new state-of-the-art computer laboratory is now available for STI College Lucena students.',
                imageUrl: 'images/news/computer-lab.jpg',
                publishedAt: '2025-01-10T14:30:00Z',
                isPublished: true,
                category: 'Campus Updates'
            },
            {
                id: 3,
                title: 'STI College Lucena Students Win Regional IT Competition',
                slug: 'regional-it-competition-winners',
                content: `Congratulations to our outstanding STI College Lucena students who emerged victorious in the Regional IT Competition 2024! Our team demonstrated exceptional skills in programming, web development, and problem-solving.

The winning team consisted of:
- Team Leader: John Santos (BS Information Technology)
- Web Developer: Maria Garcia (BS Computer Science)
- Programmer: Carlos Reyes (BS Information Technology)
- UI/UX Designer: Ana Torres (BS Information Technology)

The competition, held at the STI Regional Conference, featured challenges in:
- Web Application Development
- Database Design and Management
- Mobile App Development
- Cybersecurity Fundamentals

This victory showcases the quality of education and training provided by STI College Lucena. Our students' success reflects our commitment to excellence in Information Technology education and our dedication to preparing students for successful careers in the digital age.`,
                excerpt: 'STI College Lucena students demonstrate excellence by winning the Regional IT Competition 2024.',
                imageUrl: 'images/news/it-competition.jpg',
                publishedAt: '2024-12-20T16:00:00Z',
                isPublished: true,
                category: 'Achievements'
            }
        ];

        this.events = [
            {
                id: 1,
                title: 'STI College Lucena Student Council Elections',
                slug: 'student-council-elections',
                description: 'Annual student council elections where students vote for their representatives to lead the student body.',
                date: '2025-03-15T08:00:00Z',
                endDate: '2025-03-17T17:00:00Z',
                location: 'STI College Lucena Campus, Lucena City',
                imageUrl: 'images/events/elections.jpg',
                isUpcoming: false,
                category: 'Elections'
            },
            {
                id: 2,
                title: 'STI College Lucena Campus Clean-up Drive',
                slug: 'campus-cleanup-drive',
                description: 'Join the Student Council in keeping our STI College Lucena campus clean and beautiful. All students are welcome to participate.',
                date: '2025-02-28T09:00:00Z',
                endDate: '2025-02-28T12:00:00Z',
                location: 'STI College Lucena Campus Grounds',
                imageUrl: 'images/events/cleanup.jpg',
                isUpcoming: false,
                category: 'Community Service'
            },
            {
                id: 3,
                title: 'STI College Lucena Leadership Workshop',
                slug: 'leadership-workshop',
                description: 'Develop your leadership skills through interactive workshops and team-building activities designed for STI students.',
                date: '2025-02-15T13:00:00Z',
                endDate: '2025-02-15T17:00:00Z',
                location: 'STI College Lucena Conference Room',
                imageUrl: 'images/events/leadership-workshop.jpg',
                isUpcoming: false,
                category: 'Workshops'
            },
            {
                id: 4,
                title: 'STI College Lucena Sports Festival 2025',
                slug: 'sports-festival-2025',
                description: 'Annual sports competition featuring basketball, volleyball, badminton, and other sports for STI College Lucena students.',
                date: '2025-04-10T08:00:00Z',
                endDate: '2025-04-12T18:00:00Z',
                location: 'STI College Lucena Gymnasium',
                imageUrl: 'images/events/sports-festival.jpg',
                isUpcoming: false,
                category: 'Sports'
            },
            {
                id: 5,
                title: 'STI College Lucena Student Life Fair',
                slug: 'student-life-fair',
                description: 'A celebration of student life with booths, performances, and activities showcasing campus organizations and talents.',
                date: '2025-01-25T10:00:00Z',
                endDate: '2025-01-25T16:00:00Z',
                location: 'STI College Lucena Activity Center',
                imageUrl: 'images/events/student-life-fair.jpg',
                isUpcoming: false,
                category: 'Social'
            },
            {
                id: 6,
                title: 'First Day High',
                slug: 'first-day-high',
                description: 'Kick off the new academic year with fun activities, campus tours, and a warm welcome for all students! Happening on July 28, 2025.',
                date: '2025-07-28T08:00:00Z',
                endDate: '2025-07-28T17:00:00Z',
                location: 'STI College Lucena Campus',
                imageUrl: 'images/events/first-day-high.jpg',
                isUpcoming: true,
                category: 'Academic'
            }
        ];

        this.officers = [
            {
                id: 1,
                name: 'Lei Shane Ezra M. San Juan',
                position: 'President',
                course: 'BS Culinary Management',
                year: '4th Year',
                imageUrl: '../img/team/Lei.jpg',
                facebook: 'https://www.facebook.com/leishaneezra',
                description: 'Dedicated leader committed to improving student life and fostering a positive campus environment at STI College Lucena.'
            },
            {
                id: 2,
                name: 'Gabriel D. Asi',
                position: 'Vice-President',
                course: 'BS Tourism Management',
                year: '3rd Year',
                imageUrl: '../img/team/Gab.jpg',
                facebook: 'https://www.facebook.com/gaburielazi',
                description: 'Passionate about student advocacy and creating opportunities for student growth and development at STI College Lucena.'
            },
            {
                id: 3,
                name: 'Diane Pauline A. Saludes',
                position: 'Secretary',
                course: 'BS Tourism Management',
                year: '4th Year',
                imageUrl: '../img/team/Diane.jpg',
                facebook: 'https://www.facebook.com/diane.pauline.saludes',
                description: 'Organized and efficient in managing council records and communications for STI College Lucena Student Council.'
            },
            {
                id: 4,
                name: 'Mary Grace O. Yabis',
                position: 'Treasurer',
                course: 'BS Culinary Management',
                year: '3rd Year',
                imageUrl: '../img/team/Mary.jpg',
                facebook: 'https://www.facebook.com/marygrace.oca.7',
                description: 'Responsible financial management ensuring transparency in all STI College Lucena Student Council transactions.'
            },
            {
                id: 5,
                name: 'Andrei Gabriel M. Villate',
                position: 'Auditor',
                course: 'BS Accountancy',
                year: '3rd Year',
                imageUrl: '../img/team/Andrei.jpg',
                facebook: 'https://www.facebook.com/andrei.villate.3',
                description: 'Ensuring accountability and proper financial oversight of STI College Lucena Student Council activities.'
            },
            {
                id: 6,
                name: 'Karl Wyne Natividad',
                position: 'Public Relations Officer',
                course: 'BS Tourism Management',
                year: '3rd Year',
                imageUrl: '../img/team/Karl.jpg',
                facebook: 'https://www.facebook.com/karlwayne.natividad',
                description: 'Keeping STI College Lucena students informed about council activities and campus events.'
            },
            {
                id: 7,
                name: 'Daisiree S. Coronacion',
                position: 'BSBA Representative',
                course: 'BS Business Administration',
                year: '2nd Year',
                imageUrl: '../img/team/Daisiree.png',
                facebook: 'https://www.facebook.com/daisireesollestre.coronacion',
                description: 'Representing the Business Administration students and advocating for their needs and concerns.'
            },
            {
                id: 8,
                name: 'Sean Michael M. Dela Roca',
                position: 'BSCS Representative',
                course: 'BS Computer Science',
                year: '3rd Year',
                imageUrl: '../img/team/Sean.jpg',
                facebook: 'https://www.facebook.com/seanberry28',
                description: 'Representing the Computer Science students and ensuring their voices are heard in council decisions.'
            },
            {
                id: 9,
                name: 'Daniella Sophia E. Ricafrente',
                position: 'BSTM Representative',
                course: 'BS Tourism Management',
                year: '3rd Year',
                imageUrl: '../img/team/Daniella.jpg',
                facebook: 'https://www.facebook.com/yanie.park.102',
                description: 'Representing the Tourism Management students and promoting tourism-related activities and events.'
            },
            {
                id: 10,
                name: 'Samuel Christian Salico',
                position: 'BSCM Representative',
                course: 'BS Culinary Management',
                year: '3rd Year',
                imageUrl: '../img/team/Sam.png',
                facebook: 'https://www.facebook.com/yanie.park.102',
                description: 'Representing the Culinary Management students and organizing food-related events and activities.'
            },
            {
                id: 11,
                name: 'Ron Ron G. Dela Cruz',
                position: 'BSCPE Representative',
                course: 'BS Computer Engineering',
                year: '3rd Year',
                imageUrl: '../img/team/Ronron.jpg',
                facebook: 'https://www.facebook.com/katindig.delacruz.3',
                description: 'Representing the Computer Engineering students and advocating for their technical and academic needs.'
            },
            {
                id: 12,
                name: 'Dwight Kyle A. Ortega',
                position: 'BMMA Representative',
                course: 'BS Multimedia Arts',
                year: '4th Year',
                imageUrl: '../img/team/Dwight.jpg',
                facebook: 'https://www.facebook.com/kaikai0225',
                description: 'Representing the Multimedia Arts students and promoting creative and artistic activities on campus.'
            },
            {
                id: 13,
                name: 'Hanz Uriel D. Rodil',
                position: 'BSIT Representative',
                course: 'BS Information Technology',
                year: '4th Year',
                imageUrl: '../img/team/Hanz (1).png',
                facebook: 'https://www.facebook.com/hanseuuuuu',
                description: 'Representing the Information Technology students and supporting tech-related initiatives and events.'
            }
        ];

        this.gallery = [
            {
                id: 1,
                title: 'SSC Elections 2024',
                description: 'Students casting their votes during the annual Student Council elections',
                category: 'Council Activities',
                date: '2024-12-10',
                imageUrl: '../img/team/SSC-modified (1).png',
                tags: ['elections', 'voting', 'democracy']
            },
            {
                id: 2,
                title: 'Community Service Day',
                description: 'Students participating in tree planting activities during Community Service Day',
                category: 'Community Service',
                date: '2024-11-25',
                imageUrl: '../img/team/SSC-modified (1).png',
                tags: ['community', 'service', 'environment']
            },
            {
                id: 3,
                title: 'Leadership Workshop',
                description: 'Students engaging in interactive leadership development activities',
                category: 'Council Activities',
                date: '2024-11-15',
                imageUrl: '../img/team/SSC-modified (1).png',
                tags: ['leadership', 'workshop', 'development']
            },
            {
                id: 4,
                title: 'Campus Life',
                description: 'Students enjoying their break time in the campus grounds',
                category: 'Student Life',
                date: '2024-11-10',
                imageUrl: '../img/team/SSC-modified (1).png',
                tags: ['campus', 'student life', 'social']
            },
            {
                id: 5,
                title: 'Sports Tournament',
                description: 'Exciting basketball match during the intramural sports tournament',
                category: 'Sports',
                date: '2024-10-30',
                imageUrl: '../img/team/SSC-modified (1).png',
                tags: ['sports', 'basketball', 'tournament']
            },
            {
                id: 6,
                title: 'Academic Awards Ceremony',
                description: 'Students receiving recognition for their academic achievements',
                category: 'Achievements',
                date: '2024-10-20',
                imageUrl: '../img/team/SSC-modified (1).png',
                tags: ['awards', 'academic', 'recognition']
            },
            {
                id: 7,
                title: 'Student Organization Meeting',
                description: 'Student council officers during a planning session',
                category: 'Council Activities',
                date: '2024-10-15',
                imageUrl: '../img/team/SSC-modified (1).png',
                tags: ['meeting', 'planning', 'leadership']
            },
            {
                id: 8,
                title: 'Campus Cleanup Drive',
                description: 'Students working together to maintain a clean campus environment',
                category: 'Community Service',
                date: '2024-10-05',
                imageUrl: '../img/team/SSC-modified (1).png',
                tags: ['cleanup', 'environment', 'community']
            },
            {
                id: 9,
                title: 'Student Life Fair',
                description: 'Various student organizations showcasing their activities',
                category: 'Student Life',
                date: '2024-09-25',
                imageUrl: '../img/team/SSC-modified (1).png',
                tags: ['fair', 'organizations', 'student life']
            },
            {
                id: 10,
                title: 'Volleyball Championship',
                description: 'Intense volleyball match during the sports tournament',
                category: 'Sports',
                date: '2024-09-20',
                imageUrl: '../img/team/SSC-modified (1).png',
                tags: ['volleyball', 'sports', 'competition']
            },
            {
                id: 11,
                title: 'Leadership Training',
                description: 'Students participating in team building activities',
                category: 'Council Activities',
                date: '2024-09-15',
                imageUrl: '../img/team/SSC-modified (1).png',
                tags: ['training', 'team building', 'leadership']
            },
            {
                id: 12,
                title: 'Campus Events',
                description: 'Students enjoying various campus events and activities',
                category: 'Student Life',
                date: '2024-09-10',
                imageUrl: '../img/team/SSC-modified (1).png',
                tags: ['events', 'campus', 'activities']
            }
        ];

        this.contactInfo = {
            address: 'STI College Lucena, Lucena City, Quezon Province, Philippines',
            email: 'lucena@sti.edu',
            phone: '(042) 373-XXXX',
            facebook: 'https://www.facebook.com/STICollegeLucenaSSC',
            officeHours: 'Monday - Friday, 8:00 AM - 5:00 PM',
            officeLocation: 'Student Council Office, STI College Lucena Campus',
            website: 'https://www.sti.edu'
        };

        this.campusInfo = {
            name: 'STI College Lucena',
            location: 'Lucena City, Quezon Province',
            established: '1983',
            programs: [
                'Bachelor of Science in Information Technology',
                'Bachelor of Science in Computer Science',
                'Bachelor of Science in Business Administration',
                'Bachelor of Science in Accountancy',
                'Bachelor of Science in Tourism Management',
                'Bachelor of Science in Culinary Management',
                'Bachelor of Science in Computer Engineering',
                'Bachelor of Science in Multimedia Arts',
                'Associate in Computer Technology',
                'Associate in Computer Programming'
            ],
            facilities: [
                'Modern Computer Laboratories',
                'Library and Learning Resource Center',
                'Student Lounge and Study Areas',
                'Sports and Recreation Facilities',
                'Conference Rooms',
                'Student Council Office'
            ]
        };
    }

    // Get all published news
    getAllNews() {
        return this.news
            .filter(item => item.isPublished)
            .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
    }

    // Get news by slug
    getNewsBySlug(slug) {
        return this.news.find(item => item.slug === slug && item.isPublished);
    }

    // Get upcoming events
    getUpcomingEvents() {
        return this.events
            .filter(event => event.isUpcoming)
            .sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    // Get event by slug
    getEventBySlug(slug) {
        return this.events.find(event => event.slug === slug);
    }

    // Get all officers
    getAllOfficers() {
        return this.officers;
    }

    // Get officer by position
    getOfficerByPosition(position) {
        return this.officers.find(officer => officer.position.toLowerCase() === position.toLowerCase());
    }

    // Get gallery items
    getGalleryItems() {
        return this.gallery.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    // Get gallery items by category
    getGalleryByCategory(category) {
        return this.gallery.filter(item => item.category === category);
    }

    // Get contact information
    getContactInfo() {
        return this.contactInfo;
    }

    // Get campus information
    getCampusInfo() {
        return this.campusInfo;
    }
}

// Create global database instance
window.stiDB = new STIDatabase(); 