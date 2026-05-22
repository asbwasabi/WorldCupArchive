// Sample data - Replace with your actual video data
const videoData = {
    2022: {
        groupstage: [
            {
                id: 1,
                title: "Argentina vs Saudi Arabia",
                description: "Group C - Match highlights",
                uploadLink: "https://mega.nz/example1"
            },
            {
                id: 2,
                title: "France vs Denmark",
                description: "Group D - Key moments",
                uploadLink: "https://mega.nz/example2"
            },
            {
                id: 3,
                title: "Germany vs Japan",
                description: "Group E - All goals",
                uploadLink: "https://mega.nz/example3"
            },
            {
                id: 4,
                title: "Brazil vs Serbia",
                description: "Group G - All goals",
                uploadLink: "https://mega.nz/example4"
            }
        ],
        earlyKnockouts: [
            {
                id: 5,
                title: "Netherlands vs USA",
                description: "Round of 16",
                uploadLink: "https://mega.nz/example5"
            },
            {
                id: 6,
                title: "France vs Poland",
                description: "Round of 16",
                uploadLink: "https://mega.nz/example6"
            },
            {
                id: 7,
                title: "England vs Senegal",
                description: "Quarter-finals",
                uploadLink: "https://mega.nz/example7"
            }
        ],
        lateKnockouts: [
            {
                id: 8,
                title: "Argentina vs France",
                description: "Final - All goals",
                uploadLink: "https://mega.nz/example8"
            },
            {
                id: 9,
                title: "Morocco vs France",
                description: "Semifinals",
                uploadLink: "https://mega.nz/example9"
            }
        ]
    },
    2026: {
        groupstage: [],
        earlyKnockouts: [],
        lateKnockouts: []
    }
};

// Create video tile HTML
function createVideoTile(video) {
    return `
        <a href="${video.uploadLink}" target="_blank" rel="noopener noreferrer" class="video-tile">
            <div class="thumbnail">
                <span class="play-icon">▶</span>
            </div>
            <div class="tile-content">
                <h4 class="video-title">${video.title}</h4>
                <p class="video-description">${video.description}</p>
                <span class="upload-link">MEGA</span>
            </div>
        </a>
    `;
}

// Update video count badges
function updateCounts(year) {
    document.getElementById('count-groupstage').textContent = videoData[year].groupstage.length;
    document.getElementById('count-earlyknockouts').textContent = videoData[year].earlyKnockouts.length;
    document.getElementById('count-lateknockouts').textContent = videoData[year].lateKnockouts.length;
}

// Render videos for a specific year
function renderVideos(year) {
    const titles = {
        2022: '2022 FIFA World Cup Qatar',
        2026: '2026 FIFA World Cup USA/Canada/Mexico'
    };

    // Update header
    document.getElementById('year-title').textContent = titles[year];
    document.getElementById('year-subtitle').textContent = `Goal Videos Collection`;

    // Group Stage
    const groupstage = document.getElementById(`groupstage-${year}`);
    if (videoData[year].groupstage.length > 0) {
        groupstage.innerHTML = videoData[year].groupstage
            .map(createVideoTile)
            .join('');
    } else {
        groupstage.innerHTML = '<div class="empty-state">No videos yet</div>';
    }

    // Early Knockouts
    const earlyKnockouts = document.getElementById(`early-knockouts-${year}`);
    if (videoData[year].earlyKnockouts.length > 0) {
        earlyKnockouts.innerHTML = videoData[year].earlyKnockouts
            .map(createVideoTile)
            .join('');
    } else {
        earlyKnockouts.innerHTML = '<div class="empty-state">No videos yet</div>';
    }

    // Late Knockouts
    const lateKnockouts = document.getElementById(`late-knockouts-${year}`);
    if (videoData[year].lateKnockouts.length > 0) {
        lateKnockouts.innerHTML = videoData[year].lateKnockouts
            .map(createVideoTile)
            .join('');
    } else {
        lateKnockouts.innerHTML = '<div class="empty-state">No videos yet</div>';
    }

    updateCounts(year);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    renderVideos(2022);

    // Add event listeners to nav items
    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const year = parseInt(btn.getAttribute('data-year'));
            renderVideos(year);
        });
    });
});

// Function to add a new video
function addVideo(year, stage, videoInfo) {
    if (!videoData[year]) {
        console.error('Year not found');
        return;
    }

    let stageKey;
    switch(stage.toLowerCase()) {
        case 'groupstage':
            stageKey = 'groupstage';
            break;
        case 'earlyknockouts':
            stageKey = 'earlyKnockouts';
            break;
        case 'lateknockouts':
            stageKey = 'lateKnockouts';
            break;
        default:
            console.error('Invalid stage');
            return;
    }

    const id = Math.max(...videoData[year][stageKey].map(v => v.id), 0) + 1;
    videoData[year][stageKey].push({
        id: id,
        title: videoInfo.title,
        description: videoInfo.description,
        uploadLink: videoInfo.uploadLink
    });

    renderVideos(year);
    console.log(`Video added: ${videoInfo.title}`);
}

// Example usage:
// addVideo(2022, 'groupstage', {
//     title: 'Spain vs Germany',
//     description: 'Group E - Highlights',
//     uploadLink: 'https://mega.nz/example-link'
// });
