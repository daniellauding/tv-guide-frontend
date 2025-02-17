// Mock data with more channels and programs
const tvData = {
    channels: [
        {
            id: 'show',
            name: 'Show TV',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Show_TV_logo.png',
            programs: [
                { time: '06:00', title: 'Kalbimdeki Deniz', type: 'Dizi', duration: '120' },
                { time: '08:00', title: 'Show Ana Haber', type: 'Haber', duration: '60' },
                { time: '10:00', title: 'Sabahın Sultanı', type: 'Program', duration: '180' },
                { time: '13:00', title: 'Bir Zamanlar Çukurova', type: 'Dizi', duration: '120' },
                { time: '15:00', title: 'Didem Arslan', type: 'Program', duration: '120' },
                { time: '17:00', title: 'Akşam Haberleri', type: 'Haber', duration: '60' }
            ]
        },
        {
            id: 'atv',
            name: 'ATV',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Atv_logo.png',
            color: '#0066CC',
            programs: [
                { time: '07:00', title: 'Kahvaltı Haberleri', type: 'Haber', duration: '120', color: '#E4F1FF' },
                { time: '09:00', title: 'Müge Anlı', type: 'Program', duration: '180', color: '#D6EBFF' },
                { time: '12:00', title: 'Esra Erol', type: 'Program', duration: '180', color: '#C8E5FF' }
            ]
        },
        {
            id: 'fox',
            name: 'FOX TV',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/FOX_wordmark-red_2.svg/800px-FOX_wordmark-red_2.svg.png',
            color: '#FF6600',
            programs: [
                { time: '08:30', title: 'İsmail Küçükkaya ile Çalar Saat', type: 'Haber', duration: '180', color: '#FFE4D6' },
                { time: '11:30', title: 'Ekonomi Arşivi', type: 'Ekonomi', duration: '60', color: '#FFD6C8' },
                { time: '12:30', title: 'Selçuk Tepeli ile FOX Ana Haber', type: 'Haber', duration: '60', color: '#FFC8BA' }
            ]
        },
        {
            id: 'star',
            name: 'Star TV',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Star_TV_logo.svg/800px-Star_TV_logo.svg.png',
            color: '#3366CC',
            programs: [
                { time: '07:00', title: 'Mesut Yar ile Uyanış', type: 'Sabah', duration: '180', color: '#E4EBFF' },
                { time: '10:00', title: 'Aramızda Kalmasın', type: 'Program', duration: '120', color: '#D6E1FF' },
                { time: '12:00', title: 'Star Haber', type: 'Haber', duration: '60', color: '#C8D7FF' }
            ]
        },
        {
            id: 'tv8',
            name: 'TV8',
            logo: 'https://upload.wikimedia.org/wikipedia/tr/6/6e/Tv8_Yeni_Logo.png',
            color: '#CC0066',
            programs: [
                { time: '06:30', title: 'Oynat Bakalım', type: 'Eğlence', duration: '90', color: '#FFE4F1' },
                { time: '09:30', title: 'Masterchef Türkiye', type: 'Yarışma', duration: '180', color: '#FFD6E8' },
                { time: '12:30', title: 'Survivor Panorama', type: 'Reality', duration: '120', color: '#FFC8DF' }
            ]
        },
        {
            id: 'trt1',
            name: 'TRT 1',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/TRT_1_logo_%282021-%29.svg/512px-TRT_1_logo_%282021-%29.svg.png',
            programs: [
                { time: '05:30', title: 'Yeşil Deniz', type: 'Dizi', duration: '120' },
                { time: '07:30', title: 'İyilik Kulübü', type: 'Program', duration: '90' },
                { time: '09:00', title: 'Uzun Hikaye', type: 'Dizi', duration: '120' },
                { time: '12:00', title: 'Ana Haber', type: 'Haber', duration: '60' },
                { time: '13:00', title: 'Masallarla Biz', type: 'Çocuk', duration: '30' },
                { time: '19:00', title: 'Teşkilat', type: 'Dizi', duration: '150' }
            ]
        },
        {
            id: 'kanal7',
            name: 'Kanal 7',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Kanal_7_logo.svg/512px-Kanal_7_logo.svg.png',
            programs: [
                { time: '06:00', title: 'Seda ile Sabah', type: 'Program', duration: '180' },
                { time: '09:00', title: 'Dr. Feridun ile Sağlık', type: 'Program', duration: '60' },
                { time: '10:00', title: 'Mutfak Bahane', type: 'Yemek', duration: '60' },
                { time: '11:00', title: 'Magazin 7', type: 'Magazin', duration: '60' },
                { time: '12:00', title: 'Haber Saati', type: 'Haber', duration: '60' },
                { time: '18:00', title: 'Emanet', type: 'Dizi', duration: '120' }
            ]
        },
        {
            id: 'teve2',
            name: 'Teve2',
            logo: 'https://upload.wikimedia.org/wikipedia/tr/1/13/Teve2_logo.png',
            description: 'Eğlenceli programların adresi',
            programs: [
                { time: '06:00', title: 'Sabah Keyfi', type: 'Program', duration: '180', description: 'Güne keyifli bir başlangıç', presenter: 'Melike Şahin' },
                { time: '09:00', title: 'Önce Sağlık', type: 'Sağlık', duration: '120', description: 'Sağlık ve yaşam programı', presenter: 'Dr. Ayça Kaya' },
                { time: '11:00', title: 'Kelime Oyunu', type: 'Yarışma', duration: '60', description: 'Eğlenceli kelime yarışması', presenter: 'Ali İhsan Varol' }
            ]
        },
        {
            id: 'beyaz-tv',
            name: 'Beyaz TV',
            logo: 'https://upload.wikimedia.org/wikipedia/tr/8/88/Beyaz_TV_logo.png',
            description: 'Spor ve haber kanalı',
            programs: [
                { time: '07:00', title: 'Beyaz Futbol Sabah', type: 'Spor', duration: '120', description: 'Günün spor gündemi', presenter: 'Ertem Şener' },
                { time: '12:00', title: 'Ana Haber', type: 'Haber', duration: '60', description: 'Günün önemli gelişmeleri', presenter: 'Tahir Sarıkaya' },
                { time: '15:00', title: 'Uyan Türkiyem', type: 'Tartışma', duration: '180', description: 'Güncel konular', presenter: 'Latif Şimşek' }
            ]
        },
        {
            id: 'ntv',
            name: 'NTV',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/NTV_logo.png',
            description: 'Türkiye\'nin haber kanalı',
            programs: [
                { time: '06:30', title: 'Güne Başlarken', type: 'Haber', duration: '150', description: 'Sabah haberleri', presenter: 'Gülay Özdem' },
                { time: '10:00', title: 'Ekonomi Gündemi', type: 'Ekonomi', duration: '60', description: 'Ekonomi haberleri', presenter: 'Melda Yücel' },
                { time: '13:00', title: 'Öğle Bülteni', type: 'Haber', duration: '60', description: 'Günün gelişmeleri', presenter: 'Buğra Aktan' }
            ]
        }
    ]
};

// Add this at the top of the file, after tvData declaration
const programDates = {
    '2024-02-17': { ...tvData },  // Current data
    '2024-02-18': {
        channels: tvData.channels.map(channel => ({
            ...channel,
            programs: channel.programs.map(program => ({
                ...program,
                title: program.title + ' (Yeni Bölüm)',  // Example modification
            }))
        }))
    },
    '2024-02-19': {
        channels: tvData.channels.map(channel => ({
            ...channel,
            programs: channel.programs.map(program => ({
                ...program,
                time: (parseInt(program.time.split(':')[0]) + 1).toString().padStart(2, '0') + ':' + program.time.split(':')[1],  // Shift times by 1 hour
            }))
        }))
    }
};

// Add enabled property to channel objects
tvData.channels = tvData.channels.map(channel => ({
    ...channel,
    enabled: true // All channels enabled by default
}));

// Modify renderChannelNav to use the same showChannelDetail function
function renderChannelNav() {
    const nav = document.querySelector('.channel-nav');
    nav.innerHTML = tvData.channels.map(channel => `
        <button 
            class="flex-shrink-0 p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg"
            onclick="showChannelDetail('${channel.id}')"
        >
            <div class="w-12 h-12 md:w-16 md:h-16 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                <img src="${channel.logo}" alt="${channel.name}" 
                     class="h-8 md:h-10 w-auto object-contain"
                     onerror="this.parentElement.innerHTML = '${channel.name[0]}'">
            </div>
        </button>
    `).join('');
}

// Modify renderPrograms to use the same showChannelDetail function
function renderPrograms(selectedChannelId = null) {
    const content = document.querySelector('.content');
    const channels = selectedChannelId 
        ? tvData.channels.filter(c => c.id === selectedChannelId)
        : tvData.channels.filter(c => c.enabled); // Only show enabled channels

    content.innerHTML = `
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
            ${channels.map(channel => `
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
                    <div class="p-3 md:p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700">
                        <div class="flex items-center space-x-3">
                            <div class="w-10 h-10 md:w-12 md:h-12 bg-gray-200 dark:bg-gray-600 rounded-lg flex items-center justify-center cursor-pointer"
                                 onclick="showChannelDetail('${channel.id}')">
                                <img src="${channel.logo}" alt="${channel.name}" 
                                     class="h-6 md:h-8 w-auto object-contain"
                                     onerror="this.parentElement.innerHTML = '${channel.name[0]}'">
                            </div>
                            <div>
                                <h2 class="font-medium text-gray-900 dark:text-white text-sm md:text-base">${channel.name}</h2>
                                ${channel.description ? `
                                    <p class="text-xs md:text-sm text-gray-500 dark:text-gray-400">${channel.description}</p>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                    <div class="divide-y divide-gray-100 dark:divide-gray-700">
                        ${channel.programs.map(program => {
                            const progress = calculateProgramProgress(program.time, program.duration);
                            const isLiveProgram = isLive(program.time, program.duration);
                            
                            return `
                                <div class="p-3 md:p-4 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer"
                                     onclick="showProgramModal('${channel.id}', '${program.time}')">
                                    <div class="flex justify-between items-start">
                                        <div>
                                            <div class="text-xs md:text-sm text-gray-500 dark:text-gray-400">${program.time}</div>
                                            <div class="font-medium text-gray-900 dark:text-white text-sm md:text-base">${program.title}</div>
                                        </div>
                                        ${isLiveProgram ? `
                                            <div class="live-indicator">
                                                <span class="live-dot"></span>
                                                <span>CANLI</span>
                                            </div>
                                        ` : ''}
                                    </div>
                                    <div class="mt-1 flex items-center text-xs md:text-sm text-gray-500 dark:text-gray-400">
                                        <span class="bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded text-xs">
                                            ${program.type}
                                        </span>
                                        <span class="ml-2">${program.duration} dk</span>
                                    </div>
                                    ${isLiveProgram ? `
                                        <div class="mt-2 progress-bar">
                                            <div class="progress-fill" style="width: ${progress}%"></div>
                                        </div>
                                    ` : ''}
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// Add program modal
function showProgramModal(channelId, programTime) {
    const channel = tvData.channels.find(c => c.id === channelId);
    const program = channel.programs.find(p => p.time === programTime);
    const progress = calculateProgramProgress(program.time, program.duration);
    const isLiveProgram = isLive(program.time, program.duration);

    const modalContainer = document.createElement('div');
    modalContainer.id = 'programModal';
    modalContainer.className = 'modal-enter';
    modalContainer.innerHTML = `
        <div class="modal-container" onclick="closeModal()">
            <div class="modal-content" onclick="event.stopPropagation()">
                <div class="modal-header">
                    <div class="flex items-center space-x-3">
                        <img src="${channel.logo}" alt="${channel.name}" class="h-8 w-auto">
                        <div>
                            <h3 class="modal-title">${program.title}</h3>
                            <div class="flex items-center space-x-2">
                                <p class="text-gray-500">${channel.name} • ${program.time}</p>
                                ${isLiveProgram ? `
                                    <div class="live-indicator">
                                        <span class="live-dot"></span>
                                        <span>CANLI</span>
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                    <button onclick="closeModal()" class="modal-close">✕</button>
                </div>
                ${isLiveProgram ? `
                    <div class="px-6 py-2">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${progress}%"></div>
                        </div>
                    </div>
                ` : ''}
                <div class="modal-body">
                    <div>
                        <div class="modal-label">Program Türü</div>
                        <div class="modal-value">${program.type}</div>
                    </div>
                    <div>
                        <div class="modal-label">Süre</div>
                        <div class="modal-value">${program.duration} dakika</div>
                    </div>
                    ${program.description ? `
                        <div>
                            <div class="modal-label">Açıklama</div>
                            <div class="modal-value">${program.description}</div>
                        </div>
                    ` : ''}
                    ${program.presenter ? `
                        <div>
                            <div class="modal-label">Sunucu</div>
                            <div class="modal-value">${program.presenter}</div>
                        </div>
                    ` : ''}
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modalContainer);
    document.body.style.overflow = 'hidden';
    
    // Close modal when clicking outside
    modalContainer.addEventListener('click', (e) => {
        if (e.target === modalContainer) {
            closeModal();
        }
    });

    // Close modal with ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

function closeModal() {
    const modal = document.getElementById('programModal');
    if (modal) {
        // Restore body scroll
        document.body.style.overflow = '';
        modal.remove();
    }
}

// Theme toggle
function setupThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;

    // Set initial state
    themeToggle.setAttribute('aria-checked', html.classList.contains('dark'));

    themeToggle.addEventListener('click', () => {
        const isDark = html.classList.toggle('dark');
        themeToggle.setAttribute('aria-checked', isDark);
    });
}

// Add these new functions
function setupDateSelector() {
    const dateSelector = document.getElementById('dateSelector');
    dateSelector.addEventListener('change', (e) => {
        const selectedDate = e.target.value;
        const programData = programDates[selectedDate] || tvData;
        renderPrograms(null, programData);
    });
}

function setupChannelSelector() {
    const channelSelector = document.getElementById('channelSelector');
    // Populate channel options
    channelSelector.innerHTML = `
        <option value="">Tüm Kanallar</option>
        ${tvData.channels.map(channel => `
            <option value="${channel.id}">${channel.name}</option>
        `).join('')}
    `;
    
    channelSelector.addEventListener('change', (e) => {
        const selectedChannelId = e.target.value;
        if (selectedChannelId) {
            renderPrograms(selectedChannelId);
        } else {
            renderPrograms();
        }
    });
}

// Unified channel detail view function
function showChannelDetail(channelId) {
    const channel = tvData.channels.find(c => c.id === channelId);
    const content = document.querySelector('.content');
    
    content.innerHTML = `
        <button 
            onclick="renderPrograms()"
            class="mb-6 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
        >
            ← Tüm Kanallara Dön
        </button>
        
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div class="p-8 border-b border-gray-200 dark:border-gray-700">
                <div class="flex items-center space-x-6">
                    <div class="w-24 h-24 bg-gray-200 dark:bg-gray-600 rounded-lg flex items-center justify-center">
                        <img src="${channel.logo}" alt="${channel.name}" 
                             class="h-16 w-auto object-contain">
                    </div>
                    <div>
                        <h1 class="text-2xl font-bold text-gray-900 dark:text-white">${channel.name}</h1>
                        ${channel.description ? `
                            <p class="mt-2 text-gray-600 dark:text-gray-300">${channel.description}</p>
                        ` : ''}
                    </div>
                </div>
            </div>
            
            <div class="p-6">
                <h2 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Günün Programları</h2>
                <div class="space-y-4">
                    ${channel.programs.map(program => {
                        const progress = calculateProgramProgress(program.time, program.duration);
                        const isLiveProgram = isLive(program.time, program.duration);
                        
                        return `
                            <div class="flex items-start space-x-4 p-4 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg cursor-pointer"
                                 onclick="showProgramModal('${channel.id}', '${program.time}')">
                                <div class="w-20 text-gray-500 dark:text-gray-400">${program.time}</div>
                                <div class="flex-1">
                                    <div class="flex justify-between items-start">
                                        <div class="font-medium text-gray-900 dark:text-white">${program.title}</div>
                                        ${isLiveProgram ? `
                                            <div class="live-indicator">
                                                <span class="live-dot"></span>
                                                <span>CANLI</span>
                                            </div>
                                        ` : ''}
                                    </div>
                                    <div class="mt-1 flex items-center text-sm text-gray-500 dark:text-gray-400">
                                        <span class="bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded text-xs">
                                            ${program.type}
                                        </span>
                                        <span class="ml-2">${program.duration} dk</span>
                                    </div>
                                    ${program.description ? `
                                        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">${program.description}</p>
                                    ` : ''}
                                    ${isLiveProgram ? `
                                        <div class="mt-2 progress-bar">
                                            <div class="progress-fill" style="width: ${progress}%"></div>
                                        </div>
                                    ` : ''}
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        </div>
    `;
}

// Add this new function
function resetView() {
    // Reset selectors
    document.getElementById('dateSelector').value = '2024-02-17';
    document.getElementById('channelSelector').value = '';
    document.getElementById('programSearch').value = '';
    
    // Reset view
    renderPrograms();
}

// Add this after the tvData declaration
function setupSearch() {
    const searchInput = document.getElementById('programSearch');
    let searchTimeout;

    searchInput.addEventListener('input', (e) => {
        // Clear previous timeout
        clearTimeout(searchTimeout);

        // Set new timeout to prevent too many renders
        searchTimeout = setTimeout(() => {
            const searchTerm = e.target.value.toLowerCase().trim();
            
            if (searchTerm === '') {
                renderPrograms(); // Reset to normal view if search is empty
                return;
            }

            // Search through all channels and programs
            const searchResults = tvData.channels.map(channel => {
                // Check if channel name or description matches
                const channelMatches = 
                    channel.name.toLowerCase().includes(searchTerm) ||
                    (channel.description || '').toLowerCase().includes(searchTerm);

                // Filter programs that match
                const matchingPrograms = channel.programs.filter(program => 
                    program.title.toLowerCase().includes(searchTerm) ||
                    program.type.toLowerCase().includes(searchTerm) ||
                    (program.description || '').toLowerCase().includes(searchTerm) ||
                    (program.presenter || '').toLowerCase().includes(searchTerm)
                );

                // Return channel with filtered programs if either channel matches or has matching programs
                if (channelMatches || matchingPrograms.length > 0) {
                    return {
                        ...channel,
                        programs: matchingPrograms,
                        isChannelMatch: channelMatches
                    };
                }
                return null;
            }).filter(Boolean); // Remove null results

            // Render search results
            renderSearchResults(searchResults, searchTerm);
        }, 300); // Debounce for 300ms
    });
}

function renderSearchResults(results, searchTerm) {
    const content = document.querySelector('.content');
    
    if (results.length === 0) {
        content.innerHTML = `
            <div class="text-center py-12">
                <div class="text-gray-400 text-6xl mb-4">🔍</div>
                <h3 class="text-xl font-medium text-gray-600 dark:text-gray-300">
                    "${searchTerm}" için sonuç bulunamadı
                </h3>
                <p class="text-gray-500 dark:text-gray-400 mt-2">
                    Farklı bir arama terimi deneyebilirsiniz
                </p>
            </div>
        `;
        return;
    }

    content.innerHTML = `
        <div class="mb-4 text-gray-600 dark:text-gray-300">
            "${searchTerm}" için ${results.reduce((acc, channel) => acc + channel.programs.length, 0)} program bulundu
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            ${results.map(channel => `
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
                    <div class="p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700
                              ${channel.isChannelMatch ? 'bg-yellow-50 dark:bg-yellow-900/20' : ''}">
                        <div class="flex items-center space-x-4">
                            <div class="w-12 h-12 bg-gray-200 dark:bg-gray-600 rounded-lg flex items-center justify-center cursor-pointer"
                                 onclick="showChannelDetail('${channel.id}')">
                                <img src="${channel.logo}" alt="${channel.name}" 
                                     class="h-8 w-auto object-contain">
                            </div>
                            <div>
                                <h2 class="font-medium text-gray-900 dark:text-white">${channel.name}</h2>
                                ${channel.description ? `
                                    <p class="text-sm text-gray-500 dark:text-gray-400">${channel.description}</p>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                    <div class="divide-y divide-gray-100 dark:divide-gray-700">
                        ${channel.programs.map(program => `
                            <div class="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer"
                                 onclick="showProgramModal('${channel.id}', '${program.time}')">
                                <div class="text-sm text-gray-500 dark:text-gray-400">${program.time}</div>
                                <div class="font-medium text-gray-900 dark:text-white">${program.title}</div>
                                <div class="mt-1 flex items-center text-sm text-gray-500 dark:text-gray-400">
                                    <span class="bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded text-xs">
                                        ${program.type}
                                    </span>
                                    <span class="ml-2">${program.duration} dk</span>
                                </div>
                                ${program.description ? `
                                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">${program.description}</p>
                                ` : ''}
                            </div>
                        `).join('')}
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// Add this helper function
function calculateProgramProgress(timeString, durationMinutes) {
    const now = new Date();
    const [hours, minutes] = timeString.split(':').map(Number);
    const startTime = new Date();
    startTime.setHours(hours, minutes, 0);
    
    const endTime = new Date(startTime.getTime() + durationMinutes * 60000);
    
    // If program hasn't started yet
    if (now < startTime) return 0;
    // If program has finished
    if (now > endTime) return 100;
    
    // Calculate progress
    const totalDuration = endTime - startTime;
    const elapsed = now - startTime;
    return Math.round((elapsed / totalDuration) * 100);
}

// Add this helper function
function isLive(timeString, durationMinutes) {
    const progress = calculateProgramProgress(timeString, durationMinutes);
    return progress > 0 && progress < 100;
}

// Update the initialization
document.addEventListener('DOMContentLoaded', () => {
    setupDateSelector();
    setupChannelSelector();
    setupSearch();
    renderChannelNav();
    renderPrograms();
    setupThemeToggle();
});

function showChannelPreferences() {
    const modalContainer = document.createElement('div');
    modalContainer.id = 'preferencesModal';
    modalContainer.className = 'modal-enter';
    modalContainer.innerHTML = `
        <div class="modal-container" onclick="closePreferencesModal()">
            <div class="modal-content" onclick="event.stopPropagation()">
                <div class="modal-header">
                    <div>
                        <h3 class="modal-title">Kanal Tercihleri</h3>
                        <p class="text-sm text-gray-500">Görmek istediğiniz kanalları seçin ve sıralayın</p>
                    </div>
                    <button onclick="closePreferencesModal()" class="modal-close">✕</button>
                </div>
                <div class="modal-body">
                    <div class="space-y-2" id="channelPreferencesList">
                        ${tvData.channels.map((channel, index) => `
                            <div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                <div class="flex items-center space-x-3">
                                    <div class="cursor-move text-gray-400">⋮⋮</div>
                                    <button 
                                        type="button"
                                        role="switch"
                                        aria-checked="${channel.enabled}"
                                        onclick="toggleChannel('${channel.id}', !${channel.enabled})"
                                        class="channel-switch"
                                    >
                                        <span class="channel-switch-handle"></span>
                                    </button>
                                    <img src="${channel.logo}" alt="${channel.name}" class="h-6 w-auto">
                                    <label class="text-sm font-medium">
                                        ${channel.name}
                                    </label>
                                </div>
                                <span class="text-sm text-gray-500">${index + 1}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                <div class="mt-6 flex justify-end space-x-3 border-t pt-4">
                    <button onclick="resetChannelPreferences()" 
                            class="px-4 py-2 text-gray-600 hover:text-gray-800">
                        Sıfırla
                    </button>
                    <button onclick="saveChannelPreferences()" 
                            class="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600">
                        Kaydet
                    </button>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modalContainer);
    document.body.style.overflow = 'hidden';

    // Render programs in background to show live updates
    renderPrograms();
}

// Update the toggle function to show live changes
function toggleChannel(channelId, enabled) {
    const channel = tvData.channels.find(c => c.id === channelId);
    if (channel) {
        channel.enabled = enabled;
        
        // Update the toggle switch state
        const toggleButton = document.querySelector(`button[onclick*="toggleChannel('${channelId}"]`);
        if (toggleButton) {
            toggleButton.setAttribute('aria-checked', enabled);
        }

        // Re-render programs to show live updates
        renderPrograms();
    }
}

// Update reset function to use new toggle switches
function resetChannelPreferences() {
    tvData.channels.forEach(channel => {
        channel.enabled = true;
    });
    
    // Update all toggle switches
    document.querySelectorAll('.channel-switch').forEach(toggle => {
        toggle.setAttribute('aria-checked', 'true');
    });

    // Re-render programs
    renderPrograms();
}

function saveChannelPreferences() {
    closePreferencesModal();
    renderPrograms(); // Re-render with updated preferences
}

function closePreferencesModal() {
    const modal = document.getElementById('preferencesModal');
    if (modal) {
        document.body.style.overflow = '';
        modal.remove();
    }
}

// Add About page
function showAboutPage(event) {
    event.preventDefault();
    const content = document.querySelector('.content');
    
    content.innerHTML = `
        <div class="max-w-3xl mx-auto">
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
                <div class="p-8">
                    <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                        TV Rehberi Hakkında
                    </h1>
                    <div class="prose dark:prose-invert">
                        <p class="text-gray-600 dark:text-gray-300">
                            TV Rehberi, Türkiye'nin önde gelen televizyon kanallarının program akışlarını 
                            tek bir yerden takip etmenizi sağlayan bir platformdur.
                        </p>
                        
                        <h2 class="text-xl font-semibold mt-8 mb-4">Özellikler</h2>
                        <ul class="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                            <li>Canlı program takibi</li>
                            <li>Program arama</li>
                            <li>Kanal filtreleme</li>
                            <li>Kişiselleştirilebilir kanal listesi</li>
                            <li>Karanlık mod desteği</li>
                        </ul>

                        <h2 class="text-xl font-semibold mt-8 mb-4">İletişim</h2>
                        <p class="text-gray-600 dark:text-gray-300">
                            Öneri ve görüşleriniz için: 
                            <a href="mailto:info@tvrehberi.com" class="text-primary-500 hover:text-primary-600">
                                info@tvrehberi.com
                            </a>
                        </p>

                        <div class="mt-8 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                            <p class="text-sm text-gray-500 dark:text-gray-400">
                                Sürüm 1.0.0 - © 2024 TV Rehberi. Tüm hakları saklıdır.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
} 