# STI College Lucena Student Council Website

A complete, modern website for the STI College Lucena Student Council. This website showcases student council activities, officers, events, news, and campus life with a professional design and user-friendly interface.

## 🎯 Features

- **Complete Student Council Website** - Full-featured website with all necessary pages
- **Officer Profiles** - Dedicated section for student council officers
- **Event Management** - Upcoming events and event details
- **News & Updates** - Latest news and announcements
- **Photo Gallery** - Campus life and event photos
- **Contact Information** - Easy ways to reach the student council
- **Responsive Design** - Works perfectly on all devices
- **No Server Required** - Runs entirely in the browser

## 📁 File Structure

```
sti-lucena-ssc/
├── index.html              # Homepage
├── officers.html           # Student council officers
├── events.html             # Events listing
├── event-detail.html       # Individual event page
├── news.html               # News listing
├── news-detail.html        # Individual news page
├── gallery.html            # Photo gallery
├── about.html              # About the student council
├── contact.html            # Contact information
├── 404.html               # Error page
├── style.css              # All styles
├── main.js                # JavaScript functionality
├── database.js            # In-memory database
├── images/                # Image assets folder
│   ├── SSC-modified (1).png  # STI College Lucena SSC logo
│   ├── hero-campus.jpg    # Hero image
│   ├── officers/          # Officer photos
│   ├── events/            # Event photos
│   ├── news/              # News photos
│   └── gallery/           # Gallery photos
└── README.md              # This file
```

## 🚀 How to Use

1. **Download/Clone** all files to your computer
2. **Open `index.html`** in any modern web browser
3. **Navigate** using the menu to explore different sections
4. **Customize** content by editing the database file
5. **Add images** to the images folder for visual content

## 📊 Database Content

The website includes sample data for:

### Officers
- President, Vice President, Secretary, Treasurer, Auditor, PIO
- Sample officer profiles with photos and contact information

### Events
- Student Council Elections
- Campus Clean-up Drive
- Leadership Workshop
- Sports Festival

### News
- Election announcements
- Campus updates
- Achievement recognition

### Gallery
- Council meetings
- Campus activities
- Community service
- Sports events

## 🎨 Customization

### Adding New Officers

Edit the `officers` array in `database.js`:

```javascript
{
    id: 7,
    name: 'New Officer Name',
    position: 'New Position',
    course: 'Course Name',
    year: 'Year Level',
    imageUrl: 'images/officers/new-officer.jpg',
    email: 'officer@sticollegelucena.edu.ph',
    description: 'Brief description of the officer.'
}
```

### Adding New Events

Add to the `events` array in `database.js`:

```javascript
{
    id: 5,
    title: 'New Event Title',
    slug: 'new-event-slug',
    description: 'Event description',
    date: '2025-05-01T10:00:00Z',
    endDate: '2025-05-01T16:00:00Z',
    location: 'Event Location',
    imageUrl: 'images/events/new-event.jpg',
    isUpcoming: true,
    category: 'Event Category'
}
```

### Adding News Articles

Add to the `news` array in `database.js`:

```javascript
{
    id: 4,
    title: 'New Article Title',
    slug: 'new-article-slug',
    content: 'Full article content...',
    excerpt: 'Brief excerpt',
    imageUrl: 'images/news/new-article.jpg',
    publishedAt: '2025-01-01T10:00:00Z',
    isPublished: true,
    category: 'Article Category'
}
```

### Styling Changes

Modify `style.css` to change:
- Colors (primary, secondary, accent)
- Fonts and typography
- Layout and spacing
- Animations and effects

## 🖼️ Image Requirements

### Recommended Image Sizes:
- **Logo**: 200x80px (PNG with transparent background)
- **Hero Image**: 1200x600px (JPG)
- **Officer Photos**: 400x500px (JPG)
- **Event/News Images**: 800x500px (JPG)
- **Gallery Images**: 800x600px (JPG)

### Image Optimization:
- Use JPG for photos, PNG for logos
- Compress images for faster loading
- Keep file sizes under 500KB when possible

## 📱 Mobile Responsiveness

The website is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones
- All modern browsers

## 🔧 Technical Details

- **No Dependencies** - Pure HTML, CSS, and JavaScript
- **No Build Process** - Works immediately without compilation
- **SEO Friendly** - Proper meta tags and semantic HTML
- **Accessible** - Follows web accessibility guidelines
- **Fast Loading** - Optimized for performance

## 📞 Contact Information

To update contact details, edit the `contactInfo` object in `database.js`:

```javascript
contactInfo: {
    address: 'STI College Lucena, Lucena City, Philippines',
    email: 'ssc@sticollegelucena.edu.ph',
    phone: '(042) XXX-XXXX',
    facebook: 'https://www.facebook.com/STICollegeLucenaSSC',
    officeHours: 'Monday - Friday, 8:00 AM - 5:00 PM',
    officeLocation: 'Student Council Office, 2nd Floor, Main Building'
}
```

## 🌐 Social Media Integration

The website includes links to:
- Facebook page
- Instagram (placeholder)
- Twitter (placeholder)
- Email contact

Update these links in the footer sections of each HTML file.

## 📋 Pages Included

1. **Homepage** - Overview and quick links
2. **Officers** - Student council leadership
3. **Events** - Upcoming and past events
4. **News** - Latest announcements
5. **Gallery** - Photo collection
6. **About** - Student council information
7. **Contact** - Contact details and office hours
8. **404 Error** - Page not found

## 🎯 Getting Started Checklist

- [ ] Download all files
- [ ] Replace placeholder images with real photos
- [ ] Update officer information in database.js
- [ ] Add real events and news
- [ ] Update contact information
- [ ] Customize colors and branding
- [ ] Test on different devices
- [ ] Upload to web server (optional)

## 📄 License

This website template is created for STI College Lucena Student Council. All content and branding belong to their respective owners.

## 🆘 Support

For questions about customizing the website:
1. Check the code comments for guidance
2. Modify the database.js file for content changes
3. Edit style.css for visual changes
4. The code is well-documented and easy to understand

---

**Ready to launch your student council website!** 🚀 