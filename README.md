## ⚽ World Cup Archive - Goal Videos Website

A modern, responsive website for archiving and sharing World Cup goal videos organized by year, stage, and tournament phase.

### Features

- **Organized by Year**: Separate sections for different World Cup tournaments
- **Stage Organization**: 
  - Group Stage
  - Early Knockouts (Round of 16, Quarterfinals)
  - Late Knockouts (Semifinals, Final)
- **Video Tiles**: 1:1 square tiles with:
  - Thumbnail image placeholder
  - Video title
  - Brief description
  - Direct link to upload center (MEGA, Google Drive, etc.)
- **Responsive Design**: Mobile-friendly layout that adapts to all screen sizes
- **Modern UI**: Clean, professional design with smooth animations

### Project Structure

```
WorldCupArchive/
├── index.html      # Main HTML structure
├── styles.css      # CSS styling and responsive design
├── script.js       # JavaScript for video rendering and management
└── README.md       # This file
```

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/asbwasabi/WorldCupArchive.git
   cd WorldCupArchive
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - No build process or dependencies required

### How to Add Videos

#### Method 1: Edit `script.js` directly

Modify the `videoData` object in `script.js`:

```javascript
const videoData = {
    2022: {
        groupstage: [
            {
                id: 1,
                title: "Argentina vs Saudi Arabia",
                description: "Group C - Match highlights",
                uploadLink: "https://mega.nz/your-link-here"
            },
            // Add more videos...
        ],
        earlyKnockouts: [
            // Videos here
        ],
        lateKnockouts: [
            // Videos here
        ]
    },
    2026: {
        groupstage: [],
        earlyKnockouts: [],
        lateKnockouts: []
    }
};
```

#### Method 2: Use the `addVideo()` function

In your browser console or from another script:

```javascript
addVideo(2022, 'groupstage', {
    title: 'Brazil vs Serbia',
    description: 'Group G - All goals',
    uploadLink: 'https://mega.nz/example-link'
});
```

Parameters:
- `year` (number): World Cup year (e.g., 2022, 2026)
- `stage` (string): One of `'groupstage'`, `'earlyknockouts'`, or `'lateknockouts'`
- `videoInfo` (object): Contains `title`, `description`, and `uploadLink`

### Customization

#### Change Upload Service Links
Replace `https://mega.nz` with your preferred upload service:
- Google Drive: `https://drive.google.com/...`
- Dropbox: `https://www.dropbox.com/...`
- Mediafire: `https://www.mediafire.com/...`

#### Change Colors
Edit the CSS color variables in `styles.css`:
- Primary color: `#667eea`
- Secondary color: `#764ba2`

#### Add Thumbnail Images
Currently uses gradient placeholders. To add actual thumbnails:

```javascript
{
    id: 1,
    title: "Match Title",
    description: "Description",
    uploadLink: "https://mega.nz/link",
    thumbnail: "https://your-domain.com/thumbnail.jpg"  // Add this
}
```

Then update `createVideoTile()` to use the thumbnail:
```javascript
<img src="${video.thumbnail || ''}" alt="${video.title}">
```

### Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Future Enhancements

- [ ] Admin panel for easier video management
- [ ] Database backend for persistent storage
- [ ] Video upload functionality
- [ ] Search and filter options
- [ ] Comments/ratings system
- [ ] Year/tournament management
- [ ] Statistics and analytics

### License

This project is open source and available under the MIT License.

### Questions?

Feel free to open an issue or contact the repository owner.
