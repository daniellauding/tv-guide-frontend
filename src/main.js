// Mock data with more channels and programs
const tvData = {
    channels: [
        {
            id: 'show',
            name: 'Show TV',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Show_TV_logo.png',
            enabled: true,
            programs: [
                { time: '00:00', title: 'Gece Haberleri', type: 'Haber', duration: '30', state: 'past' },
                { time: '00:30', title: 'Gece Sineması', type: 'Film', duration: '120', state: 'past' },
                { time: '02:30', title: 'Dizi Tekrarı', type: 'Dizi', duration: '90', state: 'past' },
                { time: '04:00', title: 'Sabah Sporu', type: 'Spor', duration: '60', state: 'past' },
                { time: '05:00', title: 'Günaydın Show', type: 'Program', duration: '60', state: 'past' },
                { time: '06:00', title: 'Kalbimdeki Deniz', type: 'Dizi', duration: '120', state: 'past' },
                { time: '08:00', title: 'Show Ana Haber', type: 'Haber', duration: '60', state: 'past' },
                { time: '09:00', title: 'Sabah Magazin', type: 'Magazin', duration: '60', state: 'past' },
                { time: '10:00', title: 'Sabahın Sultanı', type: 'Program', duration: '180', state: 'current' },
                { time: '13:00', title: 'Bir Zamanlar Çukurova', type: 'Dizi', duration: '120', state: 'next' },
                { time: '15:00', title: 'Didem Arslan', type: 'Program', duration: '120', state: 'next' },
                { time: '17:00', title: 'Akşam Haberleri', type: 'Haber', duration: '60', state: 'next' },
                { time: '18:00', title: 'Ana Haber', type: 'Haber', duration: '60', state: 'next' },
                { time: '19:00', title: 'Prime Dizi', type: 'Dizi', duration: '120', state: 'next' },
                { time: '21:00', title: 'Show Prime', type: 'Program', duration: '120', state: 'next' },
                { time: '23:00', title: 'Gece Kuşağı', type: 'Program', duration: '60', state: 'next' }
            ]
        },
        {
            id: 'atv',
            name: 'ATV',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Atv_logo.png',
            color: '#0066CC',
            enabled: true,
            programs: [
                { time: '00:00', title: 'Gece Bülteni', type: 'Haber', duration: '30', state: 'past' },
                { time: '00:30', title: 'Dizi Tekrarı', type: 'Dizi', duration: '120', state: 'past' },
                { time: '02:30', title: 'Film', type: 'Film', duration: '120', state: 'past' },
                { time: '04:30', title: 'Sabah Haberleri', type: 'Haber', duration: '90', state: 'past' },
                { time: '06:00', title: 'Kahvaltı Haberleri', type: 'Haber', duration: '120', state: 'past' },
                { time: '08:00', title: 'Müge Anlı', type: 'Program', duration: '180', state: 'past' },
                { time: '10:00', title: 'Esra Erol', type: 'Program', duration: '180', state: 'current' },
                { time: '13:00', title: 'ATV Gün Ortası', type: 'Haber', duration: '60', state: 'next' },
                { time: '14:00', title: 'Kardeşlerim', type: 'Dizi', duration: '120', state: 'next' },
                { time: '16:00', title: 'Yaprak Dökümü', type: 'Dizi', duration: '120', state: 'next' },
                { time: '18:00', title: 'ATV Ana Haber', type: 'Haber', duration: '60', state: 'next' },
                { time: '19:00', title: 'Kim Milyoner Olmak İster?', type: 'Yarışma', duration: '120', state: 'next' },
                { time: '21:00', title: 'Kuruluş Osman', type: 'Dizi', duration: '150', state: 'next' },
                { time: '23:30', title: 'Son Durak', type: 'Haber', duration: '30', state: 'next' }
            ]
        },
        {
            id: 'fox',
            name: 'FOX TV',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Show_TV_logo.png',
            color: '#FF6600',
            programs: [
                { time: '00:00', title: 'Gece Haberleri', type: 'Haber', duration: '30', state: 'past' },
                { time: '00:30', title: 'Dizi Tekrarı', type: 'Dizi', duration: '120', state: 'past' },
                { time: '02:30', title: 'Film', type: 'Film', duration: '120', state: 'past' },
                { time: '04:30', title: 'Sabah Haberleri', type: 'Haber', duration: '90', state: 'past' },
                { time: '06:00', title: 'İsmail Küçükkaya ile Çalar Saat', type: 'Haber', duration: '180', state: 'past' },
                { time: '09:00', title: 'Çağla ile Yeni Bir Gün', type: 'Program', duration: '180', state: 'past' },
                { time: '12:00', title: 'Fox Ana Haber', type: 'Haber', duration: '60', state: 'past' },
                { time: '13:00', title: 'Evlilik Hakkında Her Şey', type: 'Dizi', duration: '120', state: 'next' },
                { time: '15:00', title: 'Fulya ile Umudun Olsun', type: 'Program', duration: '120', state: 'next' },
                { time: '17:00', title: 'Fox Akşam Haberleri', type: 'Haber', duration: '60', state: 'next' },
                { time: '18:00', title: 'Ana Haber', type: 'Haber', duration: '60', state: 'next' },
                { time: '19:00', title: 'Prime Dizi', type: 'Dizi', duration: '120', state: 'next' },
                { time: '21:00', title: 'Show Prime', type: 'Program', duration: '120', state: 'next' },
                { time: '23:00', title: 'Gece Kuşağı', type: 'Program', duration: '60', state: 'next' }
            ]
        },
        {
            id: 'star',
            name: 'Star TV',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Show_TV_logo.png',
            color: '#3366CC',
            programs: [
                { time: '00:00', title: 'Gece Bülteni', type: 'Haber', duration: '30', state: 'past' },
                { time: '00:30', title: 'Sinema', type: 'Film', duration: '120', state: 'past' },
                { time: '02:30', title: 'Dizi Tekrarı', type: 'Dizi', duration: '90', state: 'past' },
                { time: '04:00', title: 'Sabah Yıldızı', type: 'Program', duration: '120', state: 'past' },
                { time: '06:00', title: 'Star Sabah', type: 'Haber', duration: '120', state: 'past' },
                { time: '08:00', title: 'Mesut Yar ile Uyanış', type: 'Program', duration: '180', state: 'past' },
                { time: '10:00', title: 'Aramızda Kalmasın', type: 'Program', duration: '180', state: 'current' },
                { time: '13:00', title: 'Star Öğle Haberleri', type: 'Haber', duration: '60', state: 'next' },
                { time: '14:00', title: 'Yerli Dizi', type: 'Dizi', duration: '120', state: 'next' },
                { time: '16:00', title: 'Zuhal Topal', type: 'Program', duration: '120', state: 'next' },
                { time: '18:00', title: 'Star Ana Haber', type: 'Haber', duration: '60', state: 'next' },
                { time: '19:00', title: 'Yerli Film', type: 'Film', duration: '120', state: 'next' },
                { time: '21:00', title: 'Ana Dizi', type: 'Dizi', duration: '150', state: 'next' },
                { time: '23:30', title: 'Gece Haberleri', type: 'Haber', duration: '30', state: 'next' }
            ]
        },
        {
            id: 'tv8',
            name: 'TV8',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Show_TV_logo.png',
            color: '#CC0066',
            programs: [
                { time: '00:00', title: 'Survivor All Star', type: 'Program', duration: '150', state: 'past' },
                { time: '02:30', title: 'Magazin 8', type: 'Magazin', duration: '90', state: 'past' },
                { time: '04:00', title: 'Günün Yemeği', type: 'Yemek', duration: '60', state: 'past' },
                { time: '05:00', title: 'Oynat Bakalım', type: 'Eğlence', duration: '90', state: 'past' },
                { time: '06:30', title: '8de Sağlık', type: 'Program', duration: '150', state: 'past' },
                { time: '09:00', title: 'Müge ve Gülşen', type: 'Program', duration: '180', state: 'past' },
                { time: '10:00', title: 'Masterchef Türkiye', type: 'Yarışma', duration: '180', state: 'current' },
                { time: '13:00', title: 'Survivor Panorama', type: 'Reality', duration: '120', state: 'next' },
                { time: '15:00', title: 'Çarkıfelek', type: 'Yarışma', duration: '90', state: 'next' },
                { time: '16:30', title: 'Para Bende', type: 'Yarışma', duration: '90', state: 'next' },
                { time: '18:00', title: 'TV8 Ana Haber', type: 'Haber', duration: '60', state: 'next' },
                { time: '19:00', title: 'O Ses Türkiye', type: 'Yarışma', duration: '180', state: 'next' },
                { time: '22:00', title: 'Survivor All Star', type: 'Reality', duration: '120', state: 'next' }
            ]
        },
        {
            id: 'trt1',
            name: 'TRT 1',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Show_TV_logo.png',
            programs: [
                { time: '00:00', title: 'Gece Haberleri', type: 'Haber', duration: '30', state: 'past' },
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
            logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Show_TV_logo.png',
            programs: [
                { time: '00:00', title: 'Gece Haberleri', type: 'Haber', duration: '30', state: 'past' },
                { time: '00:30', title: 'Dizi Tekrarı', type: 'Dizi', duration: '90', state: 'past' },
                { time: '02:00', title: 'Sağlık Zamanı', type: 'Program', duration: '60', state: 'past' },
                { time: '03:00', title: 'Belgesel', type: 'Belgesel', duration: '60', state: 'past' },
                { time: '04:00', title: 'Dr. Feridun Kunak', type: 'Program', duration: '120', state: 'past' },
                { time: '06:00', title: 'Sabah Kahvesi', type: 'Program', duration: '180', state: 'past' },
                { time: '09:00', title: 'Mutfak Bahane', type: 'Program', duration: '60', state: 'past' },
                { time: '10:00', title: 'Elif', type: 'Dizi', duration: '180', state: 'current' },
                { time: '13:00', title: 'Kanal 7 Haber', type: 'Haber', duration: '60', state: 'next' },
                { time: '14:00', title: 'Yemin', type: 'Dizi', duration: '120', state: 'next' },
                { time: '16:00', title: 'Emanet', type: 'Dizi', duration: '120', state: 'next' },
                { time: '18:00', title: 'Ana Haber', type: 'Haber', duration: '60', state: 'next' },
                { time: '19:00', title: 'Baş Tacım', type: 'Dizi', duration: '120', state: 'next' },
                { time: '21:00', title: 'İkimizin Sırrı', type: 'Dizi', duration: '120', state: 'next' },
                { time: '23:00', title: 'Dizi', type: 'Dizi', duration: '60', state: 'next' }
            ]
        },
        {
            id: 'teve2',
            name: 'Teve2',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Show_TV_logo.png',
            programs: [
                { time: '00:00', title: 'Gece Haberleri', type: 'Haber', duration: '30', state: 'past' },
                { time: '00:30', title: 'Sinema', type: 'Film', duration: '120', state: 'past' },
                { time: '02:30', title: 'Dizi Tekrarı', type: 'Dizi', duration: '90', state: 'past' },
                { time: '04:00', title: 'Magazin', type: 'Magazin', duration: '60', state: 'past' },
                { time: '05:00', title: 'Müzik', type: 'Müzik', duration: '60', state: 'past' },
                { time: '06:00', title: 'Sabah Keyfi', type: 'Program', duration: '180', state: 'past' },
                { time: '09:00', title: '2. Sayfa', type: 'Magazin', duration: '60', state: 'past' },
                { time: '10:00', title: 'Müge ve Gülşen', type: 'Program', duration: '180', state: 'current' },
                { time: '13:00', title: 'Öğlen Haberleri', type: 'Haber', duration: '60', state: 'next' },
                { time: '14:00', title: 'Yerli Dizi', type: 'Dizi', duration: '120', state: 'next' },
                { time: '16:00', title: 'Magazin', type: 'Magazin', duration: '120', state: 'next' },
                { time: '18:00', title: 'Ana Haber', type: 'Haber', duration: '60', state: 'next' },
                { time: '19:00', title: 'Dizi', type: 'Dizi', duration: '120', state: 'next' },
                { time: '21:00', title: 'Sinema', type: 'Film', duration: '120', state: 'next' },
                { time: '23:00', title: 'Gece Kuşağı', type: 'Program', duration: '60', state: 'next' }
            ]
        },
        {
            id: 'beyaztv',
            name: 'Beyaz TV',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Show_TV_logo.png',
            programs: [
                { time: '00:00', title: 'Gece Haberleri', type: 'Haber', duration: '30', state: 'past' },
                { time: '00:30', title: 'Sinema', type: 'Film', duration: '120', state: 'past' },
                { time: '02:30', title: 'Dizi Tekrarı', type: 'Dizi', duration: '90', state: 'past' },
                { time: '04:00', title: 'Belgesel', type: 'Belgesel', duration: '60', state: 'past' },
                { time: '05:00', title: 'Sabah Namazı', type: 'Din', duration: '30', state: 'past' },
                { time: '05:30', title: 'Nur Viral', type: 'Program', duration: '150', state: 'past' },
                { time: '08:00', title: 'Sabah Haberleri', type: 'Haber', duration: '120', state: 'past' },
                { time: '10:00', title: 'Uyan Türkiyem', type: 'Program', duration: '180', state: 'current' },
                { time: '13:00', title: 'Öğle Haberleri', type: 'Haber', duration: '60', state: 'next' },
                { time: '14:00', title: 'Söylemezsem Olmaz', type: 'Program', duration: '180', state: 'next' },
                { time: '17:00', title: 'Beyaz Ana Haber', type: 'Haber', duration: '60', state: 'next' },
                { time: '18:00', title: 'Dinamit', type: 'Program', duration: '120', state: 'next' },
                { time: '20:00', title: 'Ana Haber', type: 'Haber', duration: '60', state: 'next' },
                { time: '21:00', title: 'Yerli Film', type: 'Film', duration: '120', state: 'next' },
                { time: '23:00', title: 'Gece Kuşağı', type: 'Program', duration: '60', state: 'next' }
            ]
        },
        {
            id: 'ntv',
            name: 'NTV',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Show_TV_logo.png',
            programs: [
                { time: '00:00', title: 'Gece Bülteni', type: 'Haber', duration: '30', state: 'past' },
                { time: '00:30', title: 'Spor Servisi', type: 'Spor', duration: '30', state: 'past' },
                { time: '01:00', title: 'Belgesel', type: 'Belgesel', duration: '60', state: 'past' },
                { time: '02:00', title: 'Para Piyasaları', type: 'Ekonomi', duration: '60', state: 'past' },
                { time: '03:00', title: 'Dünya Gündemi', type: 'Haber', duration: '60', state: 'past' },
                { time: '04:00', title: 'Sabah Raporu', type: 'Haber', duration: '180', state: 'past' },
                { time: '07:00', title: 'Güne Başlarken', type: 'Haber', duration: '180', state: 'past' },
                { time: '10:00', title: 'Gün Ortası', type: 'Haber', duration: '180', state: 'current' },
                { time: '13:00', title: 'Öğle Bülteni', type: 'Haber', duration: '60', state: 'next' },
                { time: '14:00', title: 'Ekonomi Servisi', type: 'Ekonomi', duration: '120', state: 'next' },
                { time: '16:00', title: 'Finans Servisi', type: 'Ekonomi', duration: '60', state: 'next' },
                { time: '17:00', title: 'Akşam Haberleri', type: 'Haber', duration: '60', state: 'next' },
                { time: '18:00', title: 'Ana Haber', type: 'Haber', duration: '90', state: 'next' },
                { time: '19:30', title: 'Spor Servisi', type: 'Spor', duration: '30', state: 'next' },
                { time: '20:00', title: 'Para Dünyası', type: 'Ekonomi', duration: '60', state: 'next' },
                { time: '21:00', title: 'Belgesel', type: 'Belgesel', duration: '120', state: 'next' },
                { time: '23:00', title: 'Son Bülten', type: 'Haber', duration: '60', state: 'next' }
            ]
        }
    ]
};

// Add this helper function to generate realistic dates
function generateDateRange(daysBack = 2, daysForward = 3) {
    const dates = [];
    const today = new Date();
    
    for (let i = -daysBack; i <= daysForward; i++) {
        const date = new Date(today);
        date.setDate(date.getDate() + i);
        dates.push(date);
    }
    
    return dates;
}

// Add this function to generate realistic program schedules
function generateProgramSchedule(basePrograms, date) {
    const isToday = new Date().toDateString() === date.toDateString();
    const isPast = date < new Date();
    const dayOfWeek = date.getDay();
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

    return basePrograms.map(program => {
        const [hours, minutes] = program.time.split(':').map(Number);
        let newProgram = { ...program };

        // Adjust program titles based on day
        if (isPast) {
            newProgram.title += ' (Tekrar)';
        } else if (!isToday) {
            if (isWeekend && program.type === 'Program') {
                newProgram.title = 'Hafta Sonu ' + program.title;
            }
            if (program.type === 'Dizi') {
                newProgram.title += ' (Yeni Bölüm)';
            }
        }

        // Adjust times for different days
        const timeOffset = dayOfWeek % 3 - 1; // -1, 0, or 1 hour offset
        const newHours = (hours + timeOffset + 24) % 24;
        newProgram.time = `${newHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

        return newProgram;
    });
}

// Update the programDates initialization
const programDates = {};
generateDateRange().forEach(date => {
    const dateString = date.toISOString().split('T')[0];
    programDates[dateString] = {
        channels: tvData.channels.map(channel => ({
            ...channel,
            programs: generateProgramSchedule(channel.programs, date)
        }))
    };
});

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
            <div class="w-8 h-8 md:w-8 md:h-8 logo-channel rounded-lg flex items-center justify-center">
                <img src="${channel.logo}" alt="${channel.name}" 
                     class="h-8 md:h-10 w-auto object-contain"
                     onerror="this.parentElement.innerHTML = '${channel.name[0]}'">
            </div>
        </button>
    `).join('');
}

// Add this helper function to get relevant programs
function getRelevantPrograms(programs, selectedDate) {
    const currentTime = new Date();
    const [currentHour, currentMinute] = [currentTime.getHours(), currentTime.getMinutes()];
    const currentTimeString = `${currentHour.toString().padStart(2, '0')}:${currentMinute.toString().padStart(2, '0')}`;

    let currentIndex = programs.findIndex(program => {
        const [programHour, programMinute] = program.time.split(':').map(Number);
        const programEndHour = programHour + Math.floor(Number(program.duration) / 60);
        const programEndMinute = programMinute + (Number(program.duration) % 60);
        
        return `${programHour.toString().padStart(2, '0')}:${programMinute.toString().padStart(2, '0')}` <= currentTimeString &&
               `${programEndHour.toString().padStart(2, '0')}:${programEndMinute.toString().padStart(2, '0')}` >= currentTimeString;
    });

    if (currentIndex === -1) {
        currentIndex = programs.length - 1;
    }

    return {
        previous: programs[currentIndex - 1],
        current: programs[currentIndex],
        next: programs[currentIndex + 1],
        allPrograms: programs,
    };
}

// Change default state to true (show all programs)
let showAllPrograms = true;

// Invert the toggle logic in toggleAllSchedules
function toggleAllSchedules(collapsed) {
    showAllPrograms = !collapsed; // Invert the logic
    const programContainers = document.querySelectorAll('[id^="programs-"]');
    
    programContainers.forEach(container => {
        const programs = container.querySelectorAll('.program-item');
        programs.forEach(program => {
            if (!collapsed) {
                // Show all programs
                program.classList.remove('hidden');
            } else {
                // Show only current/live programs and next program
                const state = program.classList.contains('current') ? 'current' : 
                             program.classList.contains('next') ? 'next' : 'past';
                             
                if (state === 'past') {
                    program.classList.add('hidden');
                }
            }
        });
    });
}

// Modify the program rendering to include state classes
function renderPrograms(selectedChannelId = null, selectedDate = null) {
    const content = document.querySelector('.content');
    const channels = selectedChannelId 
        ? tvData.channels.filter(c => c.id === selectedChannelId)
        : tvData.channels;

    content.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            ${channels.map(channel => {
                const { allPrograms } = getRelevantPrograms(channel.programs, selectedDate);
                
                return `
                    <div class="program-wraper rounded-lg shadow-sm overflow-hidden">
                        <div class="program-header p-3 md:p-4 border-b border-gray-200 dark:border-gray-700">
                            <div class="flex items-center justify-between">
                                <div class="flex items-center space-x-3">
                                    <div class="w-10 h-10 md:w-12 md:h-12 logo-channel rounded-lg flex items-center justify-center cursor-pointer"
                                         onclick="showChannelDetail('${channel.id}')">
                                        <img src="${channel.logo}" alt="${channel.name}" 
                                             class="h-6 md:h-8 w-auto object-contain"
                                             onerror="this.parentElement.innerHTML = '${channel.name[0]}'">
                                    </div>
                                    <div>
                                        <h2 class="font-medium text-gray-900 dark:text-white text-sm md:text-base">${channel.name}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="divide-y divide-gray-100 dark:divide-gray-700" id="programs-${channel.id}">
                            ${allPrograms.map(program => {
                                const isHidden = !showAllPrograms && program.state === 'past';
                                const progress = calculateProgramProgress(program.time, program.duration, selectedDate);
                                const isLiveProgram = isLive(program.time, program.duration, selectedDate);
                                
                                return `
                                    <div class="program-item ${program.state} ${isHidden ? 'hidden' : ''} 
                                         p-3 md:p-4 cursor-pointer"
                                         onclick="showProgramModal('${channel.id}', '${program.time}')">
                                        <div class="flex justify-between items-start">
                                            <div class="flex flex-row items-center gap-2">
                                                <div class="flex items-center gap-1 text-xs md:text-sm text-gray-500 dark:text-gray-400">
                                                    ${createIcon('time', 'w-4 h-4')}
                                                    ${program.time}
                                                </div>
                                                <div class="font-medium text-gray-900 dark:text-white text-sm md:text-base">
                                                    ${program.title}
                                                </div>
                                            </div>
                                            ${isLiveProgram ? `
                                                <div class="live-indicator">
                                                    <span class="live-dot"></span>
                                                    <span>CANLI</span>
                                                </div>
                                            ` : ''}
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
                `;
            }).join('')}
        </div>
    `;
}

// Add this function to toggle full schedule
function toggleSchedule(channelId) {
    const channel = tvData.channels.find(c => c.id === channelId);
    const programsContainer = document.getElementById(`programs-${channelId}`);
    const button = programsContainer.parentElement.querySelector('button');
    
    if (programsContainer.dataset.expanded) {
        // Collapse to show only relevant programs
        const relevantPrograms = getRelevantPrograms(channel.programs);
        renderChannelPrograms(programsContainer, [relevantPrograms.previous, relevantPrograms.current, relevantPrograms.next].filter(Boolean), channel.id);
        // Change to chevron down icon
        button.innerHTML = `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
        </svg>`;
        delete programsContainer.dataset.expanded;
    } else {
        // Expand to show all programs
        renderChannelPrograms(programsContainer, channel.programs, channel.id);
        // Change to chevron up icon
        button.innerHTML = `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"/>
        </svg>`;
        programsContainer.dataset.expanded = 'true';
    }
}

// Helper function to render channel programs
function renderChannelPrograms(container, programs, channelId) {
    container.innerHTML = programs.map(program => {
        const progress = calculateProgramProgress(program.time, program.duration);
        const isLiveProgram = isLive(program.time, program.duration);
        
        return `
            <div class="p-3 md:p-4 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer ${program.state}"
                 onclick="showProgramModal('${channelId}', '${program.time}')">
                <div class="flex justify-between items-start">
                    <div class="flex flex-row items-center gap-2">
                        <div class="flex items-center gap-1 text-xs md:text-sm text-gray-500 dark:text-gray-400">
                            ${createIcon('time', 'w-4 h-4')}
                            ${program.time}
                        </div>
                        <div class="font-medium text-gray-900 dark:text-white text-sm md:text-base">${program.title}</div>
                    </div>
                    ${isLiveProgram ? `
                        <div class="live-indicator">
                            <span class="live-dot"></span>
                            <span>CANLI</span>
                        </div>
                    ` : ''}
                </div>
                ${isLiveProgram ? `
                    <div class="mt-2 progress-bar">
                        <div class="progress-fill" style="width: ${progress}%"></div>
                    </div>
                ` : ''}
            </div>
        `;
    }).join('');
}

// Add program modal
function showProgramModal(channelId, programTime) {
    const dateSelector = document.getElementById('dateSelector');
    const selectedDate = dateSelector.value;
    const channel = tvData.channels.find(c => c.id === channelId);
    const program = channel.programs.find(p => p.time === programTime);
    const progress = calculateProgramProgress(program.time, program.duration, selectedDate);
    const isLiveProgram = isLive(program.time, program.duration, selectedDate);

    const modalContainer = document.createElement('div');
    modalContainer.id = 'programModal';
    modalContainer.className = 'modal-enter';
    const modalHTML = `
        <div class="modal-base" onclick="closeModal()">
            <div class="modal-window" onclick="event.stopPropagation()">
                <div class="modal-header">
                    <h3 class="modal-title">${program.title}</h3>
                    <button onclick="closeModal()" class="modal-close">✕</button>
                </div>
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
    modalContainer.innerHTML = modalHTML;
    document.body.appendChild(modalContainer);
    document.body.style.overflow = 'hidden';
    
    // Close modal when clicking outside
    modalContainer.addEventListener('click', (e) => {
        if (e.target === modal) {
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
    const themeToggles = document.querySelectorAll('#themeToggle, #mobileThemeToggle');
    const html = document.documentElement;
    
    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Set initial theme
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        html.classList.add('dark');
        themeToggles.forEach(toggle => toggle.setAttribute('aria-checked', 'true'));
    }
    
    // Setup toggle listeners
    themeToggles.forEach(toggle => {
        toggle.setAttribute('aria-checked', html.classList.contains('dark'));
        
        toggle.addEventListener('click', () => {
            const isDark = html.classList.toggle('dark');
            themeToggles.forEach(t => t.setAttribute('aria-checked', isDark));
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
    });
}

// Add these new functions
function setupDateSelector() {
    const dateSelector = document.getElementById('dateSelector');
    const dates = generateDateRange();
    
    // Clear existing options
    dateSelector.innerHTML = dates.map(date => {
        const dateString = date.toISOString().split('T')[0];
        const isToday = new Date().toDateString() === date.toDateString();
        
        // Format date in Turkish
        const formatter = new Intl.DateTimeFormat('tr-TR', {
            weekday: 'long',
            day: 'numeric',
            month: 'long'
        });
        
        return `
            <option value="${dateString}">
                ${formatter.format(date)}${isToday ? ' (Bugün)' : ''}
            </option>
        `;
    }).join('');
    
    // Set default to today
    dateSelector.value = new Date().toISOString().split('T')[0];
    
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
    const dateSelector = document.getElementById('dateSelector');
    const selectedDate = dateSelector.value;
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
                        const progress = calculateProgramProgress(program.time, program.duration, selectedDate);
                        const isLiveProgram = isLive(program.time, program.duration, selectedDate);
                        
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

// Update the isLive function to handle past dates more gracefully
function isLive(timeString, durationMinutes, selectedDate) {
    // If no selected date, use current date
    const currentDate = new Date();
    const selectedDateTime = selectedDate ? new Date(selectedDate) : currentDate;
    
    // Set the time components for the selected date
    const [hours, minutes] = timeString.split(':').map(Number);
    const programStartTime = new Date(selectedDateTime);
    programStartTime.setHours(hours, minutes, 0);
    
    const programEndTime = new Date(programStartTime.getTime() + durationMinutes * 60000);
    
    // For past dates, show as "live" if the current time matches the program time
    if (selectedDateTime.toDateString() !== currentDate.toDateString()) {
        const currentTimeOnSelectedDate = new Date(currentDate);
        currentTimeOnSelectedDate.setFullYear(selectedDateTime.getFullYear());
        currentTimeOnSelectedDate.setMonth(selectedDateTime.getMonth());
        currentTimeOnSelectedDate.setDate(selectedDateTime.getDate());
        
        return currentTimeOnSelectedDate >= programStartTime && 
               currentTimeOnSelectedDate <= programEndTime;
    }
    
    // For current date, use actual live status
    const progress = calculateProgramProgress(timeString, durationMinutes, selectedDate);
    return progress > 0 && progress < 100;
}

// Update the calculateProgramProgress function to handle past dates
function calculateProgramProgress(timeString, durationMinutes, selectedDate) {
    const currentDate = new Date();
    const selectedDateTime = selectedDate ? new Date(selectedDate) : currentDate;
    
    const [hours, minutes] = timeString.split(':').map(Number);
    const programStartTime = new Date(selectedDateTime);
    programStartTime.setHours(hours, minutes, 0);
    
    const programEndTime = new Date(programStartTime.getTime() + durationMinutes * 60000);
    
    // For past dates, calculate progress based on current time of day
    if (selectedDateTime.toDateString() !== currentDate.toDateString()) {
        const currentTimeOnSelectedDate = new Date(currentDate);
        currentTimeOnSelectedDate.setFullYear(selectedDateTime.getFullYear());
        currentTimeOnSelectedDate.setMonth(selectedDateTime.getMonth());
        currentTimeOnSelectedDate.setDate(selectedDateTime.getDate());
        
        if (currentTimeOnSelectedDate < programStartTime) return 0;
        if (currentTimeOnSelectedDate > programEndTime) return 100;
        
        const totalDuration = programEndTime - programStartTime;
        const elapsed = currentTimeOnSelectedDate - programStartTime;
        return Math.round((elapsed / totalDuration) * 100);
    }
    
    // For current date, use actual progress
    if (currentDate < programStartTime) return 0;
    if (currentDate > programEndTime) return 100;
    
    const totalDuration = programEndTime - programStartTime;
    const elapsed = currentDate - programStartTime;
    return Math.round((elapsed / totalDuration) * 100);
}

// Add this function to handle date navigation
function navigateDate(direction) {
    const dateSelector = document.getElementById('dateSelector');
    const currentDate = dateSelector.value;
    const dates = Array.from(dateSelector.options).map(opt => opt.value);
    const currentIndex = dates.indexOf(currentDate);
    
    let newIndex = currentIndex + direction;
    
    // Handle bounds
    if (newIndex >= 0 && newIndex < dates.length) {
        dateSelector.value = dates[newIndex];
        // Trigger change event
        dateSelector.dispatchEvent(new Event('change'));
        
        // Update button states
        updateNavigationButtons();
    }
}

// Update the setupDateNavigation function
function setupDateNavigation() {
    // Set initial button states
    updateNavigationButtons();
    
    // Add date change listener
    document.getElementById('dateSelector').addEventListener('change', (e) => {
        updateNavigationButtons();
        
        // Update content based on selected date
        const selectedDate = e.target.value;
        const programData = programDates[selectedDate] || tvData;
        renderPrograms(null, programData);
    });
}

// Update the updateNavigationButtons function
function updateNavigationButtons() {
    const dateSelector = document.getElementById('dateSelector');
    const dates = Array.from(dateSelector.options).map(opt => opt.value);
    const currentIndex = dates.indexOf(dateSelector.value);
    
    const prevButton = document.getElementById('prevDate');
    const nextButton = document.getElementById('nextDate');
    
    if (prevButton && nextButton) {
        // Remove disabled state, just update visual feedback
        prevButton.classList.toggle('text-gray-400', currentIndex === 0);
        nextButton.classList.toggle('text-gray-400', currentIndex === dates.length - 1);
    }
}

// Update the DOMContentLoaded listener
document.addEventListener('DOMContentLoaded', () => {
    const today = new Date().toISOString().split('T')[0];
    
    setupDateSelector();
    setupChannelSelector();
    setupSearch();
    setupDateNavigation();
    renderChannelNav();
    renderPrograms(null, today);
    
    if (document.getElementById('themeToggle')) {
        setupThemeToggle();
    }
});

function showChannelPreferences() {
    const modal = document.createElement('div');
    modal.className = 'modal-base';
    modal.innerHTML = `
        <div class="modal-window">
            <div class="modal-header">
                <h3 class="modal-title">Kanal Tercihleri</h3>
                <button class="nav-button close-modal">
                    ${createIcon('close', 'w-5 h-5')}
                </button>
            </div>
            <!-- Update toggle text to reflect collapsed state -->
            <div class="flex items-center justify-between p-4 border-b">
                <span class="text-gray-700 dark:text-gray-300">Sadece Güncel Programları Göster</span>
                <label class="switch">
                    <input type="checkbox" id="expandAllPrograms" onchange="toggleAllSchedules(this.checked)">
                    <span class="slider round"></span>
                </label>
            </div>

            <!-- Existing channel selection content -->
            <div class="p-4">
                <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Görmek istediğiniz kanalları seçin ve sıralayın
                </p>
                <div class="space-y-2" id="channelPreferencesList">
                    ${tvData.channels.map((channel, index) => `
                        <div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                            <div class="flex items-center space-x-3">
                                <div class="cursor-move text-gray-400">⋮⋮</div>
                                <button 
                                    type="button"
                                    role="switch"
                                    aria-checked="${channel.enabled || false}"
                                    onclick="toggleChannel('${channel.id}', ${!channel.enabled})"
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
        </div>
    `;

    // Add click handler to close when clicking outside
    modal.addEventListener('click', (e) => {
        // Close if clicking outside the modal window or on close button
        if (e.target === modal || e.target.closest('.close-modal')) {
            modal.remove();
        }
    });

    document.body.appendChild(modal);
    // Initialize icons for the newly added content
    initializeIcons();
}

// Update the toggle function to show live changes
function toggleChannel(channelId, enabled) {
    const channel = tvData.channels.find(c => c.id === channelId);
    if (channel) {
        channel.enabled = enabled;
        
        // Update the toggle switch state
        const toggleButton = document.querySelector(`button[onclick*="toggleChannel('${channelId}"]`);
        if (toggleButton) {
            toggleButton.setAttribute('aria-checked', enabled.toString());
            toggleButton.setAttribute('onclick', `toggleChannel('${channelId}', ${!enabled})`);
        }

        // Get current active provider
        const activeProvider = document.querySelector('.provider-card.active');
        const providerId = activeProvider ? activeProvider.dataset.provider : 'ulusal';
        
        // Update the UI with the new channel state
        updateChannelList(providers[providerId].channels);
        updateProgramGrid(providers[providerId].channels);
    }
}

// Initialize channels with enabled state based on provider
function initializeChannels() {
    const providerAvailability = {
        ulusal: {
            'show': true,
            'atv': true,
            'fox': true,
            'star': true,
            'kanal-d': true,
            'trt1': true,
            'tv8': false,
            'tv100': false,
            'halk-tv': false
        },
        digiturk: {
            'show': true,
            'atv': true,
            'fox': true,
            'star': true,
            'kanal-d': false,
            'trt1': true,
            'tv8': true,
            'bein-sports': true,
            'movie-smart': true,
            'lig-tv': true,
            'discovery': true
        },
        dsmart: {
            'show': true,
            'atv': false,
            'fox': true,
            'star': true,
            'kanal-d': true,
            'trt1': true,
            'smart-spor': true,
            'd-max': true,
            'national-geographic': true
        },
        other: {
            // Only enable Show TV and Kanal 7 for Övriga
            'show': true,
            'kanal7': true,
            'atv': false,
            'fox': false,
            'star': false,
            'kanal-d': false,
            'trt1': false,
            'tv8': false,
            'tv100': false,
            'halk-tv': false
        }
    };

    // Get current provider
    const activeProvider = document.querySelector('.provider-card.active');
    const providerId = activeProvider ? activeProvider.dataset.provider : 'ulusal';

    // Set enabled state based on provider availability
    tvData.channels.forEach(channel => {
        channel.enabled = providerAvailability[providerId]?.[channel.id] ?? false;
    });
}

// Call this when the page loads
document.addEventListener('DOMContentLoaded', () => {
    initializeChannels();
    setupProviders();
    setupProviderScroll();
    setupShrinkingHeader();
    initializeIcons();
});

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

// Add these functions for mobile menu
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const providers = document.querySelector('.providers');
    
    if (mobileMenu) {
        const isMenuOpen = !mobileMenu.classList.contains('hidden');
        mobileMenu.classList.toggle('hidden');
        
        // Update providers z-index based on menu state
        if (providers) {
            providers.style.zIndex = isMenuOpen ? '50' : '40';
        }
    }
}

// Add this to close mobile menu on resize if open
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) { // md breakpoint
        const mobileMenu = document.getElementById('mobileMenu');
        if (!mobileMenu.classList.contains('hidden')) {
            toggleMobileMenu();
        }
    }
});

// Provider scroll functionality
function setupProviderScroll() {
    const container = document.querySelector('.provider-scroll-container');
    const wrapper = document.querySelector('.provider-scroll-wrapper');
    const prevBtn = document.querySelector('.provider-scroll-prev');
    const nextBtn = document.querySelector('.provider-scroll-next');

    if (!container || !wrapper || !prevBtn || !nextBtn) return;

    function updateScrollButtons() {
        const isScrollable = wrapper.scrollWidth > wrapper.clientWidth;
        const isScrollStart = wrapper.scrollLeft <= 0;
        const isScrollEnd = wrapper.scrollLeft + wrapper.clientWidth >= wrapper.scrollWidth - 10;

        // Only show buttons if content is scrollable
        if (!isScrollable) {
            prevBtn.classList.remove('visible');
            nextBtn.classList.remove('visible');
            return;
        }

        // Update button visibility based on scroll position
        prevBtn.classList.toggle('visible', !isScrollStart);
        nextBtn.classList.toggle('visible', !isScrollEnd);
    }

    const scroll = (direction) => {
        const scrollAmount = wrapper.offsetWidth * 0.8;
        wrapper.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth'
        });
    };

    prevBtn.addEventListener('click', () => scroll('left'));
    nextBtn.addEventListener('click', () => scroll('right'));
    
    wrapper.addEventListener('scroll', updateScrollButtons);
    window.addEventListener('resize', updateScrollButtons);
    
    // Initial check
    updateScrollButtons();
}

// Shrinking header
function setupShrinkingHeader() {
    const header = document.querySelector('.header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > lastScroll && currentScroll > 100) {
            header.classList.add('shrunk');
        } else if (currentScroll < lastScroll) {
            header.classList.remove('shrunk');
        }
        
        lastScroll = currentScroll;
    });
}

// Provider management
function setupProviders() {
    const providerCards = document.querySelectorAll('.provider-card');
    let activeProvider = 'ulusal'; // Default provider

    function updateProviderView(providerId) {
        // Update active state of provider cards
        providerCards.forEach(card => {
            card.classList.toggle('active', card.dataset.provider === providerId);
        });

        // Initialize channels for this provider
        initializeChannels();

        // Update visible channels
        const providerChannels = providers[providerId].channels;
        updateChannelList(providerChannels);
        updateProgramGrid(providerChannels);
    }

    // Provider click handlers
    providerCards.forEach(card => {
        card.addEventListener('click', () => {
            const providerId = card.dataset.provider;
            activeProvider = providerId;
            updateProviderView(providerId);
        });
    });

    // Initialize with default provider
    updateProviderView(activeProvider);
}

// Update channel list based on provider
function updateChannelList(providerChannels) {
    const channelNav = document.querySelector('.channel-nav');
    if (!channelNav) return;

    // Filter channels that are both in provider and enabled
    const channels = tvData.channels.filter(channel => 
        providerChannels.includes(channel.id) && channel.enabled
    );

    channelNav.innerHTML = channels.map(channel => `
        <button 
            class="flex-shrink-0 p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg"
            onclick="showChannelDetail('${channel.id}')"
        >
            <div class="w-8 h-8 md:w-8 md:h-8 logo-channel rounded-lg flex items-center justify-center">
                <img src="${channel.logo}" alt="${channel.name}" 
                     class="h-8 md:h-10 w-auto object-contain"
                     onerror="this.parentElement.innerHTML = '${channel.name[0]}'">
            </div>
        </button>
    `).join('');
}

// Update program grid based on provider
function updateProgramGrid(providerChannels) {
    const contentDiv = document.querySelector('.content');
    const wrapperDiv = document.querySelector('.wrapper');
    if (!contentDiv) return;

    // Filter channels that are both in provider and enabled
    const channels = tvData.channels.filter(channel => 
        providerChannels.includes(channel.id) && channel.enabled
    );

    // Only show content if there are channels to display
    if (channels.length > 0) {
        if (wrapperDiv) wrapperDiv.style.display = 'block';
        contentDiv.innerHTML = ProgramGrid.render(channels);
    } else {
        // Hide the wrapper and clear content if no channels
        if (wrapperDiv) wrapperDiv.style.display = 'none';
        contentDiv.innerHTML = '';
    }
}

// Add this function to initialize icons
function initializeIcons() {
    // Initialize search icon with xs size
    const searchIcon = document.querySelector('.icon-search');
    if (searchIcon) {
        searchIcon.innerHTML = createIcon('search', 'w-3.5 h-3.5');
    }
}

// Update the DOMContentLoaded listener
document.addEventListener('DOMContentLoaded', () => {
    setupProviders();
    setupProviderScroll();
    setupShrinkingHeader();
    initializeIcons();
});

// Add this before setupProviders function
const providers = {
    ulusal: {
        name: 'Ulusal',
        channels: ['show', 'atv', 'fox', 'star', 'kanal-d', 'trt1']
    },
    digiturk: {
        name: 'Digiturk',
        channels: ['bein-sports', 'movie-smart', 'lig-tv', 'discovery']
    },
    dsmart: {
        name: 'D-Smart',
        channels: ['smart-spor', 'd-max', 'national-geographic']
    },
    other: {
        name: 'Övriga',
        channels: ['show', 'kanal7']
    },
    // Add new providers
    tivibu: {
        name: 'Tivibu',
        channels: ['show', 'atv', 'fox']
    },
    turksat: {
        name: 'Türksat',
        channels: ['show', 'atv']
    },
    vodafone: {
        name: 'Vodafone TV',
        channels: ['show', 'atv']
    },
    turkcell: {
        name: 'Turkcell TV+',
        channels: ['show', 'atv']
    },
    blutv: {
        name: 'BluTV',
        channels: ['show']
    },
    netflix: {
        name: 'Netflix',
        channels: ['show']
    },
    amazon: {
        name: 'Prime Video',
        channels: ['show']
    },
    disney: {
        name: 'Disney+',
        channels: ['show']
    }
};

// Add this function to handle the more providers button
function toggleMoreProviders(event) {
    event.preventDefault();
    event.stopPropagation();

    // Get screen width
    const isMobile = window.innerWidth < 768; // md breakpoint
    
    if (isMobile) {
        // Show modal on mobile
        const modal = document.getElementById('moreProvidersModal');
        if (modal) {
            modal.classList.remove('hidden');
            
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.classList.add('hidden');
                }
            });

            modal.querySelectorAll('.provider-card').forEach(card => {
                card.addEventListener('click', () => {
                    const providerId = card.dataset.provider;
                    updateProviderView(providerId);
                    modal.classList.add('hidden');
                });
            });
        }
    } else {
        // Toggle dropdown on desktop
        const dropdown = document.getElementById('providerDropdown');
        if (dropdown) {
            dropdown.classList.toggle('hidden');
            
            // Close dropdown when clicking outside
            const closeDropdown = (e) => {
                if (!dropdown.contains(e.target) && !event.target.contains(e.target)) {
                    dropdown.classList.add('hidden');
                    document.removeEventListener('click', closeDropdown);
                }
            };
            
            document.addEventListener('click', closeDropdown);

            // Handle provider selection
            dropdown.querySelectorAll('.provider-card').forEach(card => {
                card.addEventListener('click', () => {
                    const providerId = card.dataset.provider;
                    updateProviderView(providerId);
                    dropdown.classList.add('hidden');
                });
            });
        }
    }
} 