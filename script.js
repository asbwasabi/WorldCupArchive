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
            }
        ],
        earlyKnockouts: [
            {
                id: 4,
                title: "Netherlands vs USA",
                description: "Round of 16",
                uploadLink: "https://mega.nz/example4"
            },
            {
                id: 5,
                title: "France vs Poland",
                description: "Round of 16",
                uploadLink: "https://mega.nz/example5"
            }
        ],
        lateKnockouts: [
            {
                id: 6,
                title: "Argentina vs France",
                description: "Final - All goals",
                uploadLink: "https://mega.nz/example6"
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
                <span class="upload-link">View on MEGA</span>
            </div>
        </a>
    `;
}

// Render videos
function renderVideos() {
    // 2022 Group Stage
    const groupstage2022 = document.getElementById('groupstage-2022');
    if (videoData[2022].groupstage.length > 0) {
        groupstage2022.innerHTML = videoData[2022].groupstage
            .map(createVideoTile)
            .join('');
    } else {
        groupstage2022.innerHTML = '<div class="empty-state">No videos yet</div>';
    }

    // 2022 Early Knockouts
    const earlyKnockouts2022 = document.getElementById('early-knockouts-2022');
    if (videoData[2022].earlyKnockouts.length > 0) {
        earlyKnockouts2022.innerHTML = videoData[2022].earlyKnockouts
            .map(createVideoTile)
            .join('');
    } else {
        earlyKnockouts2022.innerHTML = '<div class="empty-state">No videos yet</div>';
    }

    // 2022 Late Knockouts
    const lateKnockouts2022 = document.getElementById('late-knockouts-2022');
    if (videoData[2022].lateKnockouts.length > 0) {
        lateKnockouts2022.innerHTML = videoData[2022].lateKnockouts
            .map(createVideoTile)
            .join('');
    } else {
        lateKnockouts2022.innerHTML = '<div class="empty-state">No videos yet</div>';
    }

    // 2026 Group Stage
    const groupstage2026 = document.getElementById('groupstage-2026');
    if (videoData[2026].groupstage.length > 0) {
        groupstage2026.innerHTML = videoData[2026].groupstage
            .map(createVideoTile)
            .join('');
    } else {
        groupstage2026.innerHTML = '<div class="empty-state">No videos yet</div>';
    }

    // 2026 Early Knockouts
    const earlyKnockouts2026 = document.getElementById('early-knockouts-2026');
    if (videoData[2026].earlyKnockouts.length > 0) {
        earlyKnockouts2026.innerHTML = videoData[2026].earlyKnockouts
            .map(createVideoTile)
            .join('');
    } else {
        earlyKnockouts2026.innerHTML = '<div class="empty-state">No videos yet</div>';
    }

    // 2026 Late Knockouts
    const lateKnockouts2026 = document.getElementById('late-knockouts-2026');
    if (videoData[2026].lateKnockouts.length > 0) {
        lateKnockouts2026.innerHTML = videoData[2026].lateKnockouts
            .map(createVideoTile)
            .join('');
    } else {
        lateKnockouts2026.innerHTML = '<div class="empty-state">No videos yet</div>';
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', renderVideos);

// Function to add a new video (you can call this from an admin panel)
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

    renderVideos();
    console.log(`Video added: ${videoInfo.title}`);
}

// Example usage:
// addVideo(2022, 'groupstage', {
//     title: 'Brazil vs Serbia',
//     description: 'Group G - All goals',
//     uploadLink: 'https://mega.nz/example-link'
// });
