
const currentHash = localStorage.getItem('msm_api_hash') || 'main';
let loaded = false; 

(function loadMSMAPI() {
    const PRIMARY_API = "https://msm-api.pages.dev/msm.js";
    const FALLBACK_API = `https://cdn.jsdelivr.net/gh/Gaboom63/MSM-API@${currentHash}/MSM/dist/msm.js`;
    const LOCAL_API = "../MSM-API/MSM/dist/msm.js"; 

    function loadScript(src) {
        return new Promise((resolve, reject) => {
            const script = document.createElement("script");
            script.src = src;
            script.defer = true;
            script.onload = () => resolve(src);
            script.onerror = () => reject(src);
            document.head.appendChild(script);
        });
    }
    
    loadScript(LOCAL_API)
        .catch(() => {
            // console.warn("Local API not found, trying Primary...");
            return loadScript(PRIMARY_API);
        })
        .catch(() => {
            // console.warn("Primary failed, loading CDN fallback...");
            return loadScript(FALLBACK_API);
        })
        .then(src => { 
            loaded = true; 
            console.log("✅ MSM API ready:", src);
            buildMonsterRegistry();
            updateRecentHistoryUI();
        })
        .catch(() => {
            // console.error("🚨 All MSM API sources failed");
        });

})();


// # UI Loading (From API)

async function loadMonsterImg() {

    if(loaded) {
        await MSM["Epic Spunge"].loadImage("drawImg");
    } else if (!loaded) {
        requestAnimationFrame(loadMonsterImg);
    }
}

loadMonsterImg();

// The loaded var is not in the normal API, it is here for loading Mr. Epic Spunge :D