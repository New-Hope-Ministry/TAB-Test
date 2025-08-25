//const scope = '/';
const scope = '/TAB-Tester/';

async function closeSave() {
     const keys = await caches.keys();
     await Promise.all(keys.map(key => caches.delete(key)));
     document.getElementById('id-end').style.display = 'none';
     localStorage.setItem("savedLocal", true);
};

async function saveLocal() {
    if (navigator.onLine) {
        if ('serviceWorker' in navigator) {
            (async () => {
                try {
                    const registration = await navigator.serviceWorker.register('sw.js', { scope: scope });
                    console.log('Service Worker registered with scope:', registration.scope);
                } catch (error) {
                    console.log('Service Worker registration failed:', error);
                };
            })();
        };
        document.getElementById('id-end').style.display = 'none';
        localStorage.setItem("savedLocal", true);
    } else {
        alert('You must have an active internet connection to install The Ark Bible files locally.')
    };
};

async function unregisterServiceWorkers() {

    if ('serviceWorker' in navigator) {
        try {
            //const keys = await caches.keys();
            //await Promise.all(keys.map(key => caches.delete(key)));
            const registrations = await navigator.serviceWorker.getRegistrations();
            if (registrations.length > 0) {
                await Promise.all(
                    registrations.map(async (registration) => {
                        const unregistered = await registration.unregister();
                        console.log('Service worker unregistered:', unregistered);
                    })
                );
            };
        } catch (error) {
            console.error('Error during unregistering:', error);
        };
    };
};