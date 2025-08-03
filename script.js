// Sample Data
const matches = [
  { team1: "Bournemouth", team2: "West Ham", status: "Live" },
  { team1: "Porto", team2: "Atl. Madrid", status: "Live" },
  { team1: "Man Utd", team2: "Everton", status: "Starts 03:00 AM" },
];

const servers = [
  "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
  "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_2mb.mp4",
  "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_5mb.mp4"
];

const upcoming = [
  "Liverpool vs Athletic Club - 10:00 PM",
  "SummerSlam - 04:00 AM"
];

// Elements
const matchList = document.getElementById("matchList");
const playerContainer = document.getElementById("playerContainer");
const videoPlayer = document.getElementById("videoPlayer");
const serverButtons = document.getElementById("serverButtons");
const upcomingList = document.getElementById("upcomingList");

// Load Matches
matches.forEach((m) => {
  const div = document.createElement("div");
  div.className = "match-card";
  div.innerHTML = `<strong>${m.team1} vs ${m.team2}</strong><br><small>${m.status}</small>`;
  div.onclick = () => openPlayer();
  matchList.appendChild(div);
});

// Open Player
function openPlayer() {
  playerContainer.style.display = "block";
  videoPlayer.src = servers[0];
  loadServers();
  loadUpcoming();
}

// Close Player
function closePlayer() {
  playerContainer.style.display = "none";
  videoPlayer.pause();
}

// Load Servers
function loadServers() {
  serverButtons.innerHTML = "";
  servers.forEach((url, i) => {
    const btn = document.createElement("button");
    btn.textContent = `Server ${i + 1}`;
    btn.onclick = () => {
      videoPlayer.src = url;
      videoPlayer.play();
    };
    serverButtons.appendChild(btn);
  });
}

// Load Upcoming Matches
function loadUpcoming() {
  upcomingList.innerHTML = "";
  upcoming.forEach((m) => {
    const li = document.createElement("li");
    li.textContent = m;
    upcomingList.appendChild(li);
  });
}
