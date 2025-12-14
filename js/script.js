// Prayer Times (Same ID used across all pages)
async function getPrayerTimes() {
    try {
        const date = new Date();
        const timestamp = Math.floor(date.getTime() / 1000);
        const response = await fetch(`https://api.aladhan.com/v1/timings/${timestamp}?latitude=4.1755&longitude=73.5093&method=1`);
        const data = await response.json();
        const timings = data.data.timings;

        // Ensure these IDs exist in all HTML files
        if(document.getElementById('fajr-time')) document.getElementById('fajr-time').textContent = timings.Fajr;
        if(document.getElementById('sunrise-time')) document.getElementById('sunrise-time').textContent = timings.Sunrise;
        if(document.getElementById('dhuhr-time')) document.getElementById('dhuhr-time').textContent = timings.Dhuhr;
        if(document.getElementById('asr-time')) document.getElementById('asr-time').textContent = timings.Asr;
        if(document.getElementById('maghrib-time')) document.getElementById('maghrib-time').textContent = timings.Maghrib;
        if(document.getElementById('isha-time')) document.getElementById('isha-time').textContent = timings.Isha;

    } catch (error) {
        console.error("Error fetching times:", error);
    }
}
getPrayerTimes();
