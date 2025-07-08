// Main JavaScript functionality for STI College Lucena SSC website

// Utility functions
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function formatDateTime(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

function createNewsCard(news) {
    return `
        <article class="news-card">
            <div class="news-image">
                ${news.imageUrl ? 
                    `<img src="${news.imageUrl}" alt="${news.title}">` : 
                    '<span>No Image</span>'
                }
            </div>
            
            <div class="news-content">
                <span class="news-category">${news.category}</span>
                <h3 class="news-title">
                    <a href="news-detail.html?slug=${news.slug}">
                        ${news.title}
                    </a>
                </h3>
                
                ${news.excerpt ? 
                    `<p class="news-excerpt">${news.excerpt}</p>` : 
                    ''
                }
                
                <div class="news-meta">
                    <span>${formatDate(news.publishedAt)}</span>
                </div>
            </div>
        </article>
    `;
}

function createEventCard(event) {
    return `
        <article class="event-card">
            <div class="event-image">
                ${event.imageUrl ? 
                    `<img src="${event.imageUrl}" alt="${event.title}">` : 
                    '<span>No Image</span>'
                }
            </div>
            
            <div class="event-content">
                <span class="event-category">${event.category}</span>
                <h3 class="event-title">
                    <a href="event-detail.html?slug=${event.slug}">
                        ${event.title}
                    </a>
                </h3>
                
                ${event.description ? 
                    `<p class="event-description">${event.description}</p>` : 
                    ''
                }
                
                <div class="event-meta">
                    <span>📅 ${formatDateTime(event.date)}</span>
                    <span>📍 ${event.location}</span>
                </div>
            </div>
        </article>
    `;
}

function createOfficerCard(officer) {
    // Determine if it's an executive officer or representative
    const isExecutive = ['President', 'Vice-President', 'Secretary', 'Treasurer', 'Auditor', 'Public Relations Officer'].includes(officer.position);
    const memberClass = isExecutive ? 'executive' : 'representative';
    
    return `
        <div class="council-member ${memberClass}" data-officer-id="${officer.id}">
            <div class="council-member-image">
                ${officer.imageUrl ? 
                    `<img src="${officer.imageUrl}" alt="${officer.name}" loading="lazy">` : 
                    '<div style="display: flex; align-items: center; justify-content: center; height: 100%; color: white; font-size: 3rem;">👤</div>'
                }
            </div>
            
            <!-- Name and title overlay at bottom -->
            <div class="council-member-overlay">
                <h3 class="council-member-name">${officer.name}</h3>
                <p class="council-member-position">${officer.position}</p>
                <p class="council-member-course">${officer.course} - ${officer.year}</p>
            </div>
            
            <!-- Description overlay that slides in on hover -->
            <div class="council-member-description-overlay">
                <p class="council-member-description">${officer.description}</p>
                <a href="${officer.facebook}" class="council-member-email" target="_blank" rel="noopener">Facebook</a>
            </div>
        </div>
    `;
}

function createGalleryItem(item) {
    return `
        <div class="gallery-item">
            <img src="${item.imageUrl}" alt="${item.title}">
            <div class="gallery-overlay">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <span class="gallery-category">${item.category}</span>
            </div>
        </div>
    `;
}

// Mobile menu functionality
function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navbarMenu = document.querySelector('.navbar-menu');
    
    if (mobileMenuBtn && navbarMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            navbarMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.navbar') && navbarMenu.classList.contains('active')) {
                navbarMenu.classList.remove('active');
            }
        });
    }
}

// Load homepage content
function loadHomepageContent() {
    // Load latest news
    const newsGrid = document.getElementById('news-grid');
    if (newsGrid) {
        const news = window.stiDB.getAllNews().slice(0, 3); // Show only 3 latest news
        
        if (news.length > 0) {
            newsGrid.innerHTML = news.map(item => createNewsCard(item)).join('');
        } else {
            newsGrid.innerHTML = '<div class="text-center"><p class="loading">No news available at the moment.</p></div>';
        }
    }
    
    // Load upcoming events
    const eventsGrid = document.getElementById('events-grid');
    if (eventsGrid) {
        const events = window.stiDB.getUpcomingEvents().slice(0, 3); // Show only 3 upcoming events
        
        if (events.length > 0) {
            eventsGrid.innerHTML = events.map(event => createEventCard(event)).join('');
        } else {
            eventsGrid.innerHTML = '<div class="text-center"><p class="loading">No upcoming events at the moment.</p></div>';
        }
    }
}

// Load officers page
function loadOfficersPage() {
    const councilGrid = document.querySelector('.council-grid');
    if (councilGrid) {
        const officers = window.stiDB.getAllOfficers();
        
        if (officers.length > 0) {
            // Add loading animation
            councilGrid.innerHTML = '<div class="text-center"><p class="loading">Loading council members...</p></div>';
            
            // Simulate loading delay for better UX
            setTimeout(() => {
                councilGrid.innerHTML = officers.map(officer => createOfficerCard(officer)).join('');
                
                // Initialize council member effects
                initCouncilMemberEffects();
            }, 500);
        } else {
            councilGrid.innerHTML = '<div class="text-center"><p class="loading">No officers information available.</p></div>';
        }
    }
}

// Load events page
function loadEventsPage() {
    const eventsGrid = document.querySelector('.events-grid');
    if (eventsGrid) {
        const events = window.stiDB.getUpcomingEvents();
        
        if (events.length > 0) {
            eventsGrid.innerHTML = events.map(event => createEventCard(event)).join('');
        } else {
            eventsGrid.innerHTML = '<div class="text-center"><p class="loading">No upcoming events at the moment.</p></div>';
        }
    }
}

// Load news page
function loadNewsPage() {
    const newsGrid = document.querySelector('.news-grid');
    if (newsGrid) {
        const news = window.stiDB.getAllNews();
        
        if (news.length > 0) {
            newsGrid.innerHTML = news.map(item => createNewsCard(item)).join('');
        } else {
            newsGrid.innerHTML = '<div class="text-center"><p class="loading">No news available at the moment.</p></div>';
        }
    }
}

// Load gallery page
function loadGalleryPage() {
    const galleryGrid = document.querySelector('.gallery-grid');
    if (galleryGrid) {
        const galleryItems = window.stiDB.getGalleryItems();
        
        if (galleryItems.length > 0) {
            galleryGrid.innerHTML = galleryItems.map(item => createGalleryItem(item)).join('');
        } else {
            galleryGrid.innerHTML = '<div class="text-center"><p class="loading">No gallery items available.</p></div>';
        }
    }
}

// Load individual news detail
function loadNewsDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const slug = urlParams.get('slug');
    
    if (!slug) {
        window.location.href = 'news.html';
        return;
    }
    
    const news = window.stiDB.getNewsBySlug(slug);
    
    if (!news) {
        window.location.href = '404.html';
        return;
    }
    
    // Update page title
    document.title = `${news.title} - STI College Lucena SSC`;
    
    // Update news content
    const newsTitle = document.querySelector('.news-title-large');
    const newsCategory = document.querySelector('.news-category-badge');
    const newsMeta = document.querySelector('.news-meta-large');
    const newsContent = document.querySelector('.news-content-large');
    const newsImage = document.querySelector('.news-image-large');
    
    if (newsTitle) newsTitle.textContent = news.title;
    if (newsCategory) newsCategory.textContent = news.category;
    if (newsMeta) newsMeta.innerHTML = `<span>${formatDate(news.publishedAt)}</span>`;
    if (newsContent) {
        const paragraphs = news.content.split('\n\n');
        newsContent.innerHTML = paragraphs
            .filter(paragraph => paragraph.trim())
            .map(paragraph => `<p>${paragraph.trim()}</p>`)
            .join('');
    }
    if (newsImage && news.imageUrl) {
        newsImage.src = news.imageUrl;
        newsImage.alt = news.title;
        newsImage.style.display = 'block';
    } else if (newsImage) {
        newsImage.style.display = 'none';
    }
}

// Load individual event detail
function loadEventDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const slug = urlParams.get('slug');
    
    if (!slug) {
        window.location.href = 'events.html';
        return;
    }
    
    const event = window.stiDB.getEventBySlug(slug);
    
    if (!event) {
        window.location.href = '404.html';
        return;
    }
    
    // Update page title
    document.title = `${event.title} - STI College Lucena SSC`;
    
    // Update event content
    const eventTitle = document.querySelector('.event-title-large');
    const eventCategory = document.querySelector('.event-category-badge');
    const eventMeta = document.querySelector('.event-meta-large');
    const eventDescription = document.querySelector('.event-description-large');
    const eventImage = document.querySelector('.event-image-large');
    
    if (eventTitle) eventTitle.textContent = event.title;
    if (eventCategory) eventCategory.textContent = event.category;
    if (eventMeta) {
        eventMeta.innerHTML = `
            <span>📅 ${formatDateTime(event.date)}</span>
            <span>📍 ${event.location}</span>
        `;
    }
    if (eventDescription) eventDescription.textContent = event.description;
    if (eventImage && event.imageUrl) {
        eventImage.src = event.imageUrl;
        eventImage.alt = event.title;
        eventImage.style.display = 'block';
    } else if (eventImage) {
        eventImage.style.display = 'none';
    }
}

// Load contact page
function loadContactPage() {
    const contactInfo = window.stiDB.getContactInfo();
    
    // Update contact information
    const addressElement = document.querySelector('.contact-address');
    const emailElement = document.querySelector('.contact-email');
    const phoneElement = document.querySelector('.contact-phone');
    const hoursElement = document.querySelector('.contact-hours');
    const locationElement = document.querySelector('.contact-location');
    
    if (addressElement) addressElement.textContent = contactInfo.address;
    if (emailElement) emailElement.textContent = contactInfo.email;
    if (phoneElement) phoneElement.textContent = contactInfo.phone;
    if (hoursElement) hoursElement.textContent = contactInfo.officeHours;
    if (locationElement) locationElement.textContent = contactInfo.officeLocation;
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Add fade-in animation to cards
function initCardAnimations() {
    const cards = document.querySelectorAll('.news-card, .event-card, .council-member, .gallery-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, {
        threshold: 0.1
    });
    
    cards.forEach(card => {
        observer.observe(card);
    });
}

// Add council member hover effects
function initCouncilMemberEffects() {
    const councilMembers = document.querySelectorAll('.council-member');
    
    councilMembers.forEach(member => {
        // Add ripple effect on click
        member.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
        
        // Add tilt effect on mouse move
        member.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.02)`;
        });
        
        member.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
}

// Back to top button
function createBackToTopButton() {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.className = 'back-to-top';
    button.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--primary-color);
        color: white;
        border: none;
        font-size: 20px;
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.3s ease;
        z-index: 1000;
    `;
    
    document.body.appendChild(button);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            button.style.opacity = '1';
        } else {
            button.style.opacity = '0';
        }
    });
    
    // Scroll to top when clicked
    button.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize all functionality based on current page
function initPage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Common initializations
    initMobileMenu();
    initSmoothScrolling();
    createBackToTopButton();
    
    // Page-specific initializations
    switch (currentPage) {
        case 'index.html':
        case '':
            loadHomepageContent();
            break;
        case 'officers.html':
            loadOfficersPage();
            break;
        case 'events.html':
            loadEventsPage();
            break;
        case 'news.html':
            loadNewsPage();
            break;
        case 'news-detail.html':
            loadNewsDetail();
            break;
        case 'event-detail.html':
            loadEventDetail();
            break;
        case 'gallery.html':
            loadGalleryPage();
            break;
        case 'contact.html':
            loadContactPage();
            break;
    }
    
    // Initialize animations after content is loaded
    setTimeout(() => {
        initCardAnimations();
        initCouncilMemberEffects();
    }, 100);
    
    // Initialize advanced page functionality
    initializeAdvancedPageFunctionality();
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initPage);

// ===== ADVANCED PAGE FUNCTIONALITY =====

// Initialize advanced page functionality
function initializeAdvancedPageFunctionality() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    switch(currentPage) {
        case 'events.html':
            initializeEventsPage();
            break;
        case 'news.html':
            initializeNewsPage();
            break;
        case 'gallery.html':
            initializeGalleryPage();
            break;
        case 'officers.html':
            initializeOfficersPage();
            break;
    }
}

// ===== EVENTS PAGE FUNCTIONALITY =====

function initializeEventsPage() {
    const eventsGrid = document.getElementById('events-grid');
    const eventsLoading = document.getElementById('events-loading');
    const eventsEmpty = document.getElementById('events-empty');
    const eventsCount = document.getElementById('events-count');
    const eventSearch = document.getElementById('event-search');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const categoryFilter = document.getElementById('category-filter');
    const eventModal = document.getElementById('event-modal');
    const modalClose = document.querySelector('.modal-close');
    
    if (!eventsGrid) return;
    
    let currentEvents = [];
    let filteredEvents = [];
    
    // Load events
    function loadEvents() {
        if (eventsLoading) eventsLoading.style.display = 'block';
        eventsGrid.innerHTML = '';

        // Simulate loading delay
        setTimeout(() => {
            // Use events from the database instead of hardcoded data
            currentEvents = window.stiDB.events.map(event => ({
                id: event.id,
                title: event.title,
                description: event.description,
                category: event.category,
                date: event.date ? event.date.split('T')[0] : '',
                time: event.date ? new Date(event.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '',
                location: event.location,
                image: event.imageUrl,
                status: event.isUpcoming ? 'upcoming' : 'past',
                attendees: event.attendees || 0,
                maxAttendees: event.maxAttendees || 0,
                organizer: event.organizer || 'STI College Lucena SSC',
                contact: event.contact || 'lucena@sti.edu',
                tags: event.tags || []
            }));

            filteredEvents = [...currentEvents];
            renderEvents();
            if (eventsLoading) eventsLoading.style.display = 'none';
        }, 1000);
    }
    
    // Render events
    function renderEvents() {
        if (filteredEvents.length === 0) {
            if (eventsEmpty) eventsEmpty.style.display = 'block';
            eventsGrid.style.display = 'none';
        } else {
            if (eventsEmpty) eventsEmpty.style.display = 'none';
            eventsGrid.style.display = 'grid';
            
            eventsGrid.innerHTML = filteredEvents.map(event => `
                <div class="event-card" data-event-id="${event.id}">
                    <div class="event-image">
                        <img src="${event.image}" alt="${event.title}">
                        <div class="event-status ${event.status}">${event.status}</div>
                    </div>
                    <div class="event-content">
                        <div class="event-category">${event.category}</div>
                        <h3 class="event-title">${event.title}</h3>
                        <div class="event-meta">
                            <span class="event-date">📅 ${formatDate(event.date)}</span>
                            <span class="event-time">🕒 ${event.time}</span>
                            <span class="event-location">📍 ${event.location}</span>
                        </div>
                        <p class="event-description">${event.description.substring(0, 120)}...</p>
                        <div class="event-footer">
                            <span class="event-attendees">👥 ${event.attendees}/${event.maxAttendees}</span>
                            <button class="btn btn-primary event-details-btn">View Details</button>
                        </div>
                    </div>
                </div>
            `).join('');
            
            // Add event listeners to event cards
            document.querySelectorAll('.event-details-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const eventId = this.closest('.event-card').dataset.eventId;
                    const event = filteredEvents.find(e => e.id == eventId);
                    openEventModal(event);
                });
            });
        }
        
        if (eventsCount) eventsCount.textContent = `${filteredEvents.length} events found`;
    }
    
    // Filter events
    function filterEvents() {
        const searchTerm = eventSearch ? eventSearch.value.toLowerCase() : '';
        const activeFilter = document.querySelector('.filter-btn.active') ? document.querySelector('.filter-btn.active').dataset.filter : 'all';
        const selectedCategory = categoryFilter ? categoryFilter.value : '';
        
        filteredEvents = currentEvents.filter(event => {
            const matchesSearch = event.title.toLowerCase().includes(searchTerm) ||
                                event.description.toLowerCase().includes(searchTerm) ||
                                event.tags.some(tag => tag.toLowerCase().includes(searchTerm));
            
            const matchesStatus = activeFilter === 'all' || event.status === activeFilter;
            const matchesCategory = !selectedCategory || event.category === selectedCategory;
            
            return matchesSearch && matchesStatus && matchesCategory;
        });
        
        renderEvents();
    }
    
    // Event listeners
    if (eventSearch) eventSearch.addEventListener('input', filterEvents);
    if (categoryFilter) categoryFilter.addEventListener('change', filterEvents);
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            filterEvents();
        });
    });
    
    // Modal functionality
    function openEventModal(event) {
        if (!eventModal) return;
        
        const modalEventImage = document.getElementById('modal-event-image');
        const modalEventCategory = document.getElementById('modal-event-category');
        const modalEventTitle = document.getElementById('modal-event-title');
        const modalEventMeta = document.getElementById('modal-event-meta');
        const modalEventDescription = document.getElementById('modal-event-description');
        
        if (modalEventImage) modalEventImage.src = event.image;
        if (modalEventCategory) modalEventCategory.textContent = event.category;
        if (modalEventTitle) modalEventTitle.textContent = event.title;
        if (modalEventMeta) modalEventMeta.innerHTML = `
            <span>📅 ${formatDate(event.date)}</span>
            <span>🕒 ${event.time}</span>
            <span>📍 ${event.location}</span>
            <span>👥 ${event.attendees}/${event.maxAttendees} attendees</span>
        `;
        if (modalEventDescription) modalEventDescription.textContent = event.description;
        
        eventModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    
    if (modalClose) {
        modalClose.addEventListener('click', function() {
            eventModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }
    
    if (eventModal) {
        window.addEventListener('click', function(event) {
            if (event.target === eventModal) {
                eventModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }
    
    // Initialize
    loadEvents();
}

// ===== NEWS PAGE FUNCTIONALITY =====

function initializeNewsPage() {
    const newsGrid = document.getElementById('news-grid');
    const featuredNews = document.getElementById('featured-news');
    const newsLoading = document.getElementById('news-loading');
    const newsEmpty = document.getElementById('news-empty');
    const newsCount = document.getElementById('news-count');
    const newsSearch = document.getElementById('news-search');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const newsSort = document.getElementById('news-sort');
    const newsModal = document.getElementById('news-modal');
    const modalClose = document.querySelector('.modal-close');
    
    if (!newsGrid) return;
    
    let currentNews = [];
    let filteredNews = [];
    
    // Load news
    function loadNews() {
        if (newsLoading) newsLoading.style.display = 'block';
        newsGrid.innerHTML = '';
        if (featuredNews) featuredNews.innerHTML = '';
        
        setTimeout(() => {
            currentNews = [
                {
                    id: 1,
                    title: "STI College Lucena SSC Wins Regional Leadership Award",
                    excerpt: "The Student Council of STI College Lucena has been recognized for outstanding leadership and community service initiatives at the regional level.",
                    content: "The Student Council of STI College Lucena has been awarded the Regional Leadership Excellence Award for their outstanding contributions to student welfare and community development. The award recognizes the council's innovative programs, including the Community Service Day initiative, Leadership Workshop Series, and various student engagement activities. This achievement highlights the dedication and commitment of our student leaders in fostering a positive campus environment and serving the community.",
                    category: "Achievements",
                    author: "STI College Lucena SSC",
                    publishDate: "2025-01-15",
                    image: "../img/team/SSC-modified (1).png",
                    views: 1250,
                    featured: true,
                    tags: ["award", "leadership", "recognition"]
                },
                {
                    id: 2,
                    title: "New Student Council Officers Elected for 2025-2026",
                    excerpt: "The results of the annual Student Council elections have been announced, with new officers ready to serve the student body.",
                    content: "The annual Student Council elections have concluded successfully with a high voter turnout of 85%. The newly elected officers have been sworn in and are ready to take on their responsibilities for the academic year 2025-2026. The election process was conducted transparently with proper oversight from the school administration. The new council members have already begun planning various initiatives and programs for the upcoming year.",
                    category: "Announcements",
                    author: "STI College Lucena SSC",
                    publishDate: "2025-01-10",
                    image: "../img/team/SSC-modified (1).png",
                    views: 980,
                    featured: false,
                    tags: ["elections", "officers", "announcement"]
                },
                {
                    id: 3,
                    title: "Community Service Day Successfully Completed",
                    excerpt: "Over 100 students participated in the annual Community Service Day, making a positive impact in various communities across Lucena City.",
                    content: "The annual Community Service Day was a tremendous success with over 100 students participating in various activities across Lucena City. Activities included tree planting in public parks, feeding programs for underprivileged children, educational workshops, and cleanup drives. The event not only benefited the community but also fostered a sense of social responsibility among students. The success of this event has inspired plans for more regular community service activities throughout the year.",
                    category: "Event Updates",
                    author: "STI College Lucena SSC",
                    publishDate: "2025-01-05",
                    image: "../img/team/SSC-modified (1).png",
                    views: 750,
                    featured: false,
                    tags: ["community service", "volunteer", "success"]
                },
                {
                    id: 4,
                    title: "Leadership Workshop Series Registration Now Open",
                    excerpt: "Registration for the upcoming Leadership Workshop Series is now open. Limited slots available for this comprehensive leadership development program.",
                    content: "The Student Council is pleased to announce that registration for the Leadership Workshop Series is now open. This comprehensive program is designed to develop essential leadership skills among students. The series will cover topics such as public speaking, team management, project planning, and effective communication. Limited slots are available, so interested students are encouraged to register early. The workshops will be conducted by experienced facilitators and industry professionals.",
                    category: "Announcements",
                    author: "STI College Lucena SSC",
                    publishDate: "2025-01-20",
                    image: "../img/team/SSC-modified (1).png",
                    views: 650,
                    featured: false,
                    tags: ["workshop", "leadership", "registration"]
                },
                {
                    id: 5,
                    title: "Intramural Sports Tournament Results",
                    excerpt: "The annual intramural sports tournament concluded with exciting competitions and outstanding performances from participating teams.",
                    content: "The annual intramural sports tournament has concluded successfully with exciting competitions in basketball, volleyball, and badminton. The event saw outstanding performances from all participating teams and fostered healthy competition among students. The tournament not only promoted physical fitness but also strengthened camaraderie among students from different programs. Congratulations to all winners and participants for their excellent sportsmanship and dedication.",
                    category: "Event Updates",
                    author: "STI College Lucena SSC",
                    publishDate: "2024-12-20",
                    image: "../img/team/SSC-modified (1).png",
                    views: 890,
                    featured: false,
                    tags: ["sports", "tournament", "results"]
                },
                {
                    id: 6,
                    title: "Student Life Fair Scheduled for March 2025",
                    excerpt: "The annual Student Life Fair will showcase various student organizations and provide opportunities for students to get involved in campus activities.",
                    content: "The annual Student Life Fair is scheduled to take place on March 10, 2025, at the STI College Lucena Campus Grounds. This event will showcase various student organizations, clubs, and activities available on campus. Students will have the opportunity to learn about different ways to get involved in campus life, meet fellow students with similar interests, and discover new opportunities for personal and professional development. The fair will feature booths, demonstrations, and interactive activities.",
                    category: "Announcements",
                    author: "STI College Lucena SSC",
                    publishDate: "2025-01-25",
                    image: "../img/team/SSC-modified (1).png",
                    views: 520,
                    featured: false,
                    tags: ["student life", "fair", "organizations"]
                }
            ];
            
            filteredNews = [...currentNews];
            renderNews();
            if (newsLoading) newsLoading.style.display = 'none';
        }, 1000);
    }
    
    // Render news
    function renderNews() {
        // Render featured news
        if (featuredNews) {
            const featured = currentNews.filter(news => news.featured);
            if (featured.length > 0) {
                featuredNews.innerHTML = featured.map(news => `
                    <div class="featured-news-item" data-news-id="${news.id}">
                        <div class="featured-news-image">
                            <img src="${news.image}" alt="${news.title}">
                        </div>
                        <div class="featured-news-content">
                            <div class="featured-news-category">${news.category}</div>
                            <h3 class="featured-news-title">${news.title}</h3>
                            <p class="featured-news-excerpt">${news.excerpt}</p>
                            <div class="featured-news-meta">
                                <span>📅 ${formatDate(news.publishDate)}</span>
                                <span>👁️ ${news.views} views</span>
                                <span>✍️ ${news.author}</span>
                            </div>
                        </div>
                    </div>
                `).join('');
                
                // Add event listeners to featured news
                document.querySelectorAll('.featured-news-item').forEach(item => {
                    item.addEventListener('click', function() {
                        const newsId = this.dataset.newsId;
                        const news = currentNews.find(n => n.id == newsId);
                        openNewsModal(news);
                    });
                });
            }
        }
        
        // Render regular news
        if (filteredNews.length === 0) {
            if (newsEmpty) newsEmpty.style.display = 'block';
            newsGrid.style.display = 'none';
        } else {
            if (newsEmpty) newsEmpty.style.display = 'none';
            newsGrid.style.display = 'grid';
            
            newsGrid.innerHTML = filteredNews.map(news => `
                <div class="news-card" data-news-id="${news.id}">
                    <div class="news-image">
                        <img src="${news.image}" alt="${news.title}">
                        <div class="news-category">${news.category}</div>
                    </div>
                    <div class="news-content">
                        <h3 class="news-title">${news.title}</h3>
                        <p class="news-excerpt">${news.excerpt}</p>
                        <div class="news-meta">
                            <span>📅 ${formatDate(news.publishDate)}</span>
                            <span>👁️ ${news.views} views</span>
                            <span>✍️ ${news.author}</span>
                        </div>
                        <button class="btn btn-primary news-read-btn">Read More</button>
                    </div>
                </div>
            `).join('');
            
            // Add event listeners to news cards
            document.querySelectorAll('.news-read-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const newsId = this.closest('.news-card').dataset.newsId;
                    const news = filteredNews.find(n => n.id == newsId);
                    openNewsModal(news);
                });
            });
        }
        
        if (newsCount) newsCount.textContent = `${filteredNews.length} articles found`;
    }
    
    // Filter news
    function filterNews() {
        const searchTerm = newsSearch ? newsSearch.value.toLowerCase() : '';
        const activeFilter = document.querySelector('.filter-btn.active') ? document.querySelector('.filter-btn.active').dataset.filter : 'all';
        const sortBy = newsSort ? newsSort.value : 'latest';
        
        filteredNews = currentNews.filter(news => {
            const matchesSearch = news.title.toLowerCase().includes(searchTerm) ||
                                news.excerpt.toLowerCase().includes(searchTerm) ||
                                news.tags.some(tag => tag.toLowerCase().includes(searchTerm));
            
            const matchesCategory = activeFilter === 'all' || news.category.toLowerCase().includes(activeFilter);
            
            return matchesSearch && matchesCategory;
        });
        
        // Sort news
        switch(sortBy) {
            case 'latest':
                filteredNews.sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));
                break;
            case 'oldest':
                filteredNews.sort((a, b) => new Date(a.publishDate) - new Date(b.publishDate));
                break;
            case 'popular':
                filteredNews.sort((a, b) => b.views - a.views);
                break;
        }
        
        renderNews();
    }
    
    // Event listeners
    if (newsSearch) newsSearch.addEventListener('input', filterNews);
    if (newsSort) newsSort.addEventListener('change', filterNews);
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            filterNews();
        });
    });
    
    // Modal functionality
    function openNewsModal(news) {
        if (!newsModal) return;
        
        const modalNewsImage = document.getElementById('modal-news-image');
        const modalNewsCategory = document.getElementById('modal-news-category');
        const modalNewsTitle = document.getElementById('modal-news-title');
        const modalNewsMeta = document.getElementById('modal-news-meta');
        const modalNewsContent = document.getElementById('modal-news-content');
        
        if (modalNewsImage) modalNewsImage.src = news.image;
        if (modalNewsCategory) modalNewsCategory.textContent = news.category;
        if (modalNewsTitle) modalNewsTitle.textContent = news.title;
        if (modalNewsMeta) modalNewsMeta.innerHTML = `
            <span>📅 ${formatDate(news.publishDate)}</span>
            <span>👁️ ${news.views} views</span>
            <span>✍️ ${news.author}</span>
        `;
        if (modalNewsContent) modalNewsContent.innerHTML = news.content;
        
        newsModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    
    if (modalClose) {
        modalClose.addEventListener('click', function() {
            newsModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }
    
    if (newsModal) {
        window.addEventListener('click', function(event) {
            if (event.target === newsModal) {
                newsModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }
    
    // Initialize
    loadNews();
}

// ===== GALLERY PAGE FUNCTIONALITY =====

function initializeGalleryPage() {
    const galleryGrid = document.getElementById('gallery-grid');
    const galleryLoading = document.getElementById('gallery-loading');
    const galleryEmpty = document.getElementById('gallery-empty');
    const galleryCount = document.getElementById('gallery-count');
    const gallerySearch = document.getElementById('gallery-search');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const viewBtns = document.querySelectorAll('.view-btn');
    const lightboxModal = document.getElementById('lightbox-modal');
    const lightboxClose = document.querySelector('.lightbox-close');
    const lightboxPrev = document.getElementById('lightbox-prev');
    const lightboxNext = document.getElementById('lightbox-next');
    
    if (!galleryGrid) return;
    
    let currentGallery = [];
    let filteredGallery = [];
    let currentView = 'grid';
    let currentImageIndex = 0;
    
    // Load gallery
    function loadGallery() {
        if (galleryLoading) galleryLoading.style.display = 'block';
        galleryGrid.innerHTML = '';
        
        setTimeout(() => {
            currentGallery = [
                {
                    id: 1,
                    title: 'SSC Elections 2024',
                    description: 'Students casting their votes during the annual Student Council elections',
                    category: 'Council Activities',
                    date: '2024-12-10',
                    image: '../img/team/SSC-modified (1).png',
                    tags: ['elections', 'voting', 'democracy']
                },
                {
                    id: 2,
                    title: 'Community Service Day',
                    description: 'Students participating in tree planting activities during Community Service Day',
                    category: 'Community Service',
                    date: '2024-11-25',
                    image: '../img/team/SSC-modified (1).png',
                    tags: ['community', 'service', 'environment']
                },
                {
                    id: 3,
                    title: 'Leadership Workshop',
                    description: 'Students engaging in interactive leadership development activities',
                    category: 'Council Activities',
                    date: '2024-11-15',
                    image: '../img/team/SSC-modified (1).png',
                    tags: ['leadership', 'workshop', 'development']
                },
                {
                    id: 4,
                    title: 'Campus Life',
                    description: 'Students enjoying their break time in the campus grounds',
                    category: 'Student Life',
                    date: '2024-11-10',
                    image: '../img/team/SSC-modified (1).png',
                    tags: ['campus', 'student life', 'social']
                },
                {
                    id: 5,
                    title: 'Sports Tournament',
                    description: 'Exciting basketball match during the intramural sports tournament',
                    category: 'Sports',
                    date: '2024-10-30',
                    image: '../img/team/SSC-modified (1).png',
                    tags: ['sports', 'basketball', 'tournament']
                },
                {
                    id: 6,
                    title: 'Academic Awards Ceremony',
                    description: 'Students receiving recognition for their academic achievements',
                    category: 'Achievements',
                    date: '2024-10-20',
                    image: '../img/team/SSC-modified (1).png',
                    tags: ['awards', 'academic', 'recognition']
                },
                {
                    id: 7,
                    title: 'Student Organization Meeting',
                    description: 'Student council officers during a planning session',
                    category: 'Council Activities',
                    date: '2024-10-15',
                    image: '../img/team/SSC-modified (1).png',
                    tags: ['meeting', 'planning', 'leadership']
                },
                {
                    id: 8,
                    title: 'Campus Cleanup Drive',
                    description: 'Students working together to maintain a clean campus environment',
                    category: 'Community Service',
                    date: '2024-10-05',
                    image: '../img/team/SSC-modified (1).png',
                    tags: ['cleanup', 'environment', 'community']
                },
                {
                    id: 9,
                    title: 'Student Life Fair',
                    description: 'Various student organizations showcasing their activities',
                    category: 'Student Life',
                    date: '2024-09-25',
                    image: '../img/team/SSC-modified (1).png',
                    tags: ['fair', 'organizations', 'student life']
                },
                {
                    id: 10,
                    title: 'Volleyball Championship',
                    description: 'Intense volleyball match during the sports tournament',
                    category: 'Sports',
                    date: '2024-09-20',
                    image: '../img/team/SSC-modified (1).png',
                    tags: ['volleyball', 'sports', 'competition']
                },
                {
                    id: 11,
                    title: 'Leadership Training',
                    description: 'Students participating in team building activities',
                    category: 'Council Activities',
                    date: '2024-09-15',
                    image: '../img/team/SSC-modified (1).png',
                    tags: ['training', 'team building', 'leadership']
                },
                {
                    id: 12,
                    title: 'Campus Events',
                    description: 'Students enjoying various campus events and activities',
                    category: 'Student Life',
                    date: '2024-09-10',
                    image: '../img/team/SSC-modified (1).png',
                    tags: ['events', 'campus', 'activities']
                }
            ];
            
            filteredGallery = [...currentGallery];
            renderGallery();
            if (galleryLoading) galleryLoading.style.display = 'none';
        }, 1000);
    }
    
    // Render gallery
    function renderGallery() {
        if (filteredGallery.length === 0) {
            if (galleryEmpty) galleryEmpty.style.display = 'block';
            galleryGrid.style.display = 'none';
        } else {
            if (galleryEmpty) galleryEmpty.style.display = 'none';
            galleryGrid.style.display = 'grid';
            
            // Apply view class
            galleryGrid.className = `gallery-grid ${currentView}-view`;
            
            galleryGrid.innerHTML = filteredGallery.map(item => `
                <div class="gallery-item" data-gallery-id="${item.id}">
                    <div class="gallery-image">
                        <img src="${item.image}" alt="${item.title}">
                        <div class="gallery-overlay">
                            <div class="gallery-info">
                                <h4 class="gallery-title">${item.title}</h4>
                                <p class="gallery-category">${item.category}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('');
            
            // Add event listeners to gallery items
            document.querySelectorAll('.gallery-item').forEach(item => {
                item.addEventListener('click', function() {
                    const galleryId = this.dataset.galleryId;
                    const galleryItem = filteredGallery.find(g => g.id == galleryId);
                    currentImageIndex = filteredGallery.findIndex(g => g.id == galleryId);
                    openLightbox(galleryItem);
                });
            });
        }
        
        if (galleryCount) galleryCount.textContent = `${filteredGallery.length} photos found`;
    }
    
    // Filter gallery
    function filterGallery() {
        const searchTerm = gallerySearch ? gallerySearch.value.toLowerCase() : '';
        const activeFilter = document.querySelector('.filter-btn.active') ? document.querySelector('.filter-btn.active').dataset.filter : 'all';
        
        filteredGallery = currentGallery.filter(item => {
            const matchesSearch = item.title.toLowerCase().includes(searchTerm) ||
                                item.description.toLowerCase().includes(searchTerm) ||
                                item.tags.some(tag => tag.toLowerCase().includes(searchTerm));
            
            const matchesCategory = activeFilter === 'all' || item.category === activeFilter;
            
            return matchesSearch && matchesCategory;
        });
        
        renderGallery();
    }
    
    // Event listeners
    if (gallerySearch) gallerySearch.addEventListener('input', filterGallery);
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            filterGallery();
        });
    });
    
    viewBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            viewBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentView = this.dataset.view;
            renderGallery();
        });
    });
    
    // Lightbox functionality
    function openLightbox(item) {
        if (!lightboxModal) return;
        
        const lightboxImage = document.getElementById('lightbox-image');
        const lightboxTitle = document.getElementById('lightbox-title');
        const lightboxDescription = document.getElementById('lightbox-description');
        const lightboxCategory = document.getElementById('lightbox-category');
        const lightboxDate = document.getElementById('lightbox-date');
        
        if (lightboxImage) lightboxImage.src = item.image;
        if (lightboxTitle) lightboxTitle.textContent = item.title;
        if (lightboxDescription) lightboxDescription.textContent = item.description;
        if (lightboxCategory) lightboxCategory.textContent = item.category;
        if (lightboxDate) lightboxDate.textContent = formatDate(item.date);
        
        // Create thumbnails
        const thumbnailsContainer = document.getElementById('lightbox-thumbnails');
        if (thumbnailsContainer) {
            thumbnailsContainer.innerHTML = filteredGallery.map((galleryItem, index) => `
                <div class="lightbox-thumbnail ${index === currentImageIndex ? 'active' : ''}" data-index="${index}">
                    <img src="${galleryItem.image}" alt="${galleryItem.title}">
                </div>
            `).join('');
            
            // Add thumbnail event listeners
            document.querySelectorAll('.lightbox-thumbnail').forEach(thumb => {
                thumb.addEventListener('click', function() {
                    const index = parseInt(this.dataset.index);
                    currentImageIndex = index;
                    const item = filteredGallery[index];
                    updateLightbox(item, index);
                });
            });
        }
        
        lightboxModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    
    function updateLightbox(item, index) {
        const lightboxImage = document.getElementById('lightbox-image');
        const lightboxTitle = document.getElementById('lightbox-title');
        const lightboxDescription = document.getElementById('lightbox-description');
        const lightboxCategory = document.getElementById('lightbox-category');
        const lightboxDate = document.getElementById('lightbox-date');
        
        if (lightboxImage) lightboxImage.src = item.image;
        if (lightboxTitle) lightboxTitle.textContent = item.title;
        if (lightboxDescription) lightboxDescription.textContent = item.description;
        if (lightboxCategory) lightboxCategory.textContent = item.category;
        if (lightboxDate) lightboxDate.textContent = formatDate(item.date);
        
        // Update active thumbnail
        document.querySelectorAll('.lightbox-thumbnail').forEach((thumb, i) => {
            thumb.classList.toggle('active', i === index);
        });
    }
    
    // Lightbox navigation
    if (lightboxPrev) {
        lightboxPrev.addEventListener('click', function() {
            currentImageIndex = (currentImageIndex - 1 + filteredGallery.length) % filteredGallery.length;
            const item = filteredGallery[currentImageIndex];
            updateLightbox(item, currentImageIndex);
        });
    }
    
    if (lightboxNext) {
        lightboxNext.addEventListener('click', function() {
            currentImageIndex = (currentImageIndex + 1) % filteredGallery.length;
            const item = filteredGallery[currentImageIndex];
            updateLightbox(item, currentImageIndex);
        });
    }
    
    // Close lightbox
    if (lightboxClose) {
        lightboxClose.addEventListener('click', function() {
            lightboxModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }
    
    if (lightboxModal) {
        window.addEventListener('click', function(event) {
            if (event.target === lightboxModal) {
                lightboxModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', function(event) {
        if (lightboxModal && lightboxModal.style.display === 'block') {
            switch(event.key) {
                case 'ArrowLeft':
                    if (lightboxPrev) lightboxPrev.click();
                    break;
                case 'ArrowRight':
                    if (lightboxNext) lightboxNext.click();
                    break;
                case 'Escape':
                    if (lightboxClose) lightboxClose.click();
                    break;
            }
        }
    });
    
    // Initialize
    loadGallery();
}

// ===== OFFICERS PAGE FUNCTIONALITY =====

function initializeOfficersPage() {
    // Add tilt effect to officer cards
    const officerCards = document.querySelectorAll('.council-member');
    
    officerCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });
}

// Global functions for resetting filters
function resetFilters() {
    const eventSearch = document.getElementById('event-search');
    const categoryFilter = document.getElementById('category-filter');
    
    if (eventSearch) eventSearch.value = '';
    if (categoryFilter) categoryFilter.value = '';
    
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    const allFilter = document.querySelector('.filter-btn[data-filter="all"]');
    if (allFilter) allFilter.classList.add('active');
    
    if (typeof initializeEventsPage === 'function') {
        initializeEventsPage();
    }
}

function resetNewsFilters() {
    const newsSearch = document.getElementById('news-search');
    const newsSort = document.getElementById('news-sort');
    
    if (newsSearch) newsSearch.value = '';
    if (newsSort) newsSort.value = 'latest';
    
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    const allFilter = document.querySelector('.filter-btn[data-filter="all"]');
    if (allFilter) allFilter.classList.add('active');
    
    if (typeof initializeNewsPage === 'function') {
        initializeNewsPage();
    }
}

function resetGalleryFilters() {
    const gallerySearch = document.getElementById('gallery-search');
    
    if (gallerySearch) gallerySearch.value = '';
    
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    const allFilter = document.querySelector('.filter-btn[data-filter="all"]');
    if (allFilter) allFilter.classList.add('active');
    
    document.querySelectorAll('.view-btn').forEach(btn => btn.classList.remove('active'));
    const gridView = document.querySelector('.view-btn[data-view="grid"]');
    if (gridView) gridView.classList.add('active');
    
    if (typeof initializeGalleryPage === 'function') {
        initializeGalleryPage();
    }
} 

function highlightActiveNavTab() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.navbar-menu li a');
    // Map subpages to their parent nav
    const sectionMap = {
        'news-detail.html': 'news.html',
        'event-detail.html': 'events.html',
        // Add more mappings as needed
    };
    let highlightPage = currentPage;
    if (sectionMap[currentPage]) {
        highlightPage = sectionMap[currentPage];
    }
    navLinks.forEach(link => {
        link.classList.remove('active');
        link.parentElement.classList.remove('active');
        const href = link.getAttribute('href');
        if (
            (highlightPage === '' && (href === 'index.html' || href === './' || href === '/')) ||
            (href === highlightPage)
        ) {
            link.classList.add('active');
            link.parentElement.classList.add('active');
        }
    });
}

// Call highlightActiveNavTab on DOMContentLoaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', highlightActiveNavTab);
} else {
    highlightActiveNavTab();
} 

// Contact form floating success handler
const contactForm = document.querySelector('.contact-form');
const floatingSuccess = document.querySelector('.floating-success');
if (contactForm && floatingSuccess) {
    contactForm.addEventListener('submit', function(e) {
        setTimeout(function() { // Wait for Formspree redirect/response
            floatingSuccess.classList.add('active');
            contactForm.style.display = 'none';
            setTimeout(function() {
                floatingSuccess.classList.remove('active');
                contactForm.style.display = '';
            }, 4000);
        }, 100);
    });
} 
