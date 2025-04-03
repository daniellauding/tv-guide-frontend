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
        {
          time: '10:00',
          title: 'Sabahın Sultanı',
          type: 'Program',
          duration: '180',
          state: 'current'
        },
        {
          time: '13:00',
          title: 'Bir Zamanlar Çukurova',
          type: 'Dizi',
          duration: '120',
          state: 'next'
        },
        { time: '15:00', title: 'Didem Arslan', type: 'Program', duration: '120', state: 'next' },
        { time: '17:00', title: 'Akşam Haberleri', type: 'Haber', duration: '60', state: 'next' },
        { time: '18:00', title: 'Ana Haber', type: 'Haber', duration: '60', state: 'next' },
        { time: '19:00', title: 'Prime Dizi', type: 'Dizi', duration: '120', state: 'next' },
        { time: '21:00', title: 'Show Prime', type: 'Program', duration: '120', state: 'next' },
        { time: '22:00', title: 'Gece Kuşağı', type: 'Program', duration: '0', state: 'next' },
        { time: '22:30', title: 'Gece Sineması', type: 'Program', duration: '0', state: 'next' },
        { time: '23:00', title: 'Kalbimdeki Deniz', type: 'Program', duration: '0', state: 'next' }
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
        { time: '00:30', title: 'Spor Servisi', type: 'Spor', duration: '30', state: 'past' },
        { time: '01:00', title: 'Film', type: 'Film', duration: '120', state: 'past' },
        { time: '03:00', title: 'Dizi Tekrarı', type: 'Dizi', duration: '120', state: 'past' },
        {
          time: '05:00',
          title: 'Kahvaltı Haberleri',
          type: 'Haber',
          duration: '120',
          state: 'past'
        },
        { time: '07:00', title: 'Sabah Kahvesi', type: 'Program', duration: '120', state: 'past' },
        { time: '09:00', title: 'Müge Anlı', type: 'Program', duration: '180', state: 'past' },
        { time: '10:00', title: 'Esra Erol', type: 'Program', duration: '180', state: 'current' },
        { time: '13:00', title: 'ATV Gün Ortası', type: 'Haber', duration: '60', state: 'next' },
        { time: '14:00', title: 'Kardeşlerim', type: 'Dizi', duration: '120', state: 'next' },
        { time: '16:00', title: 'Yaprak Dökümü', type: 'Dizi', duration: '120', state: 'next' },
        { time: '18:00', title: 'ATV Ana Haber', type: 'Haber', duration: '60', state: 'next' },
        {
          time: '19:00',
          title: 'Kim Milyoner Olmak İster?',
          type: 'Yarışma',
          duration: '120',
          state: 'next'
        },
        { time: '21:00', title: 'Kuruluş Osman', type: 'Dizi', duration: '150', state: 'current' },
        { time: '21:15', title: 'Film', type: 'Dizi', duration: '0', state: 'next' },
        { time: '21:30', title: 'Sabah Kahvesi', type: 'Dizi', duration: '0', state: 'next' },
        { time: '23:30', title: 'Son Durak', type: 'Haber', duration: '0', state: 'next' }
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
        {
          time: '06:00',
          title: 'İsmail Küçükkaya ile Çalar Saat',
          type: 'Haber',
          duration: '180',
          state: 'past'
        },
        {
          time: '09:00',
          title: 'Çağla ile Yeni Bir Gün',
          type: 'Program',
          duration: '180',
          state: 'past'
        },
        { time: '10:00', title: 'Yasak Elma', type: 'Dizi', duration: '120', state: 'current' },
        { time: '12:00', title: 'Fox Ana Haber', type: 'Haber', duration: '60', state: 'next' },
        {
          time: '13:00',
          title: 'Evlilik Hakkında Her Şey',
          type: 'Dizi',
          duration: '120',
          state: 'next'
        },
        {
          time: '15:00',
          title: 'Fulya ile Umudun Olsun',
          type: 'Program',
          duration: '120',
          state: 'next'
        },
        {
          time: '17:00',
          title: 'Fox Akşam Haberleri',
          type: 'Haber',
          duration: '60',
          state: 'next'
        },
        { time: '18:00', title: 'Ana Haber', type: 'Haber', duration: '60', state: 'next' },
        { time: '19:00', title: 'Prime Dizi', type: 'Dizi', duration: '120', state: 'next' },
        { time: '21:00', title: 'Show Prime', type: 'Program', duration: '120', state: 'next' },
        { time: '22:00', title: 'Gece Kuşağı', type: 'Program', duration: '00', state: 'next' },
        {
          time: '22:30',
          title: 'Çağla ile Yeni Bir Gün',
          type: 'Program',
          duration: '0',
          state: 'next'
        },
        { time: '23:00', title: 'Fox Ana Haber', type: 'Program', duration: '0', state: 'next' }
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
        {
          time: '08:00',
          title: 'Mesut Yar ile Uyanış',
          type: 'Program',
          duration: '180',
          state: 'past'
        },
        {
          time: '10:00',
          title: 'Aramızda Kalmasın',
          type: 'Program',
          duration: '180',
          state: 'current'
        },
        {
          time: '13:00',
          title: 'Star Öğle Haberleri',
          type: 'Haber',
          duration: '60',
          state: 'next'
        },
        { time: '14:00', title: 'Yerli Dizi', type: 'Dizi', duration: '120', state: 'next' },
        { time: '16:00', title: 'Zuhal Topal', type: 'Program', duration: '120', state: 'next' },
        { time: '18:00', title: 'Star Ana Haber', type: 'Haber', duration: '60', state: 'next' },
        { time: '19:00', title: 'Yerli Film', type: 'Film', duration: '120', state: 'next' },
        { time: '21:00', title: 'Ana Dizi', type: 'Dizi', duration: '150', state: 'next' },
        { time: '22:00', title: 'Aramızda Kalmasın', type: 'Haber', duration: '0', state: 'next' },
        { time: '23:00', title: 'Sinema', type: 'Haber', duration: '0', state: 'next' },
        { time: '23:30', title: 'Gece Haberleri', type: 'Haber', duration: '30', state: 'next' }
      ]
    },
    {
      id: 'tv8',
      name: 'TV8',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Show_TV_logo.png',
      color: '#CC0066',
      programs: [
        {
          time: '00:00',
          title: 'Survivor All Star',
          type: 'Program',
          duration: '150',
          state: 'past'
        },
        { time: '02:30', title: 'Magazin 8', type: 'Magazin', duration: '90', state: 'past' },
        { time: '04:00', title: 'Günün Yemeği', type: 'Yemek', duration: '60', state: 'past' },
        { time: '05:00', title: 'Oynat Bakalım', type: 'Eğlence', duration: '90', state: 'past' },
        { time: '06:30', title: '8de Sağlık', type: 'Program', duration: '150', state: 'past' },
        { time: '09:00', title: 'Müge ve Gülşen', type: 'Program', duration: '180', state: 'past' },
        {
          time: '10:00',
          title: 'Masterchef Türkiye',
          type: 'Yarışma',
          duration: '180',
          state: 'current'
        },
        {
          time: '13:00',
          title: 'Survivor Panorama',
          type: 'Reality',
          duration: '120',
          state: 'next'
        },
        { time: '15:00', title: 'Çarkıfelek', type: 'Yarışma', duration: '90', state: 'next' },
        { time: '16:30', title: 'Para Bende', type: 'Yarışma', duration: '90', state: 'next' },
        { time: '18:00', title: 'TV8 Ana Haber', type: 'Haber', duration: '60', state: 'next' },
        { time: '19:00', title: 'O Ses Türkiye', type: 'Yarışma', duration: '180', state: 'next' },
        {
          time: '22:00',
          title: 'Survivor All Star',
          type: 'Reality',
          duration: '120',
          state: 'next'
        }
      ]
    },
    {
      id: 'trt1',
      name: 'TRT 1',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Show_TV_logo.png',
      programs: [
        { time: '00:00', title: 'Gece Haberleri', type: 'Haber', duration: '30', state: 'past' },
        { time: '00:30', title: 'Belgesel', type: 'Belgesel', duration: '60', state: 'past' },
        { time: '01:30', title: 'Dizi Tekrarı', type: 'Dizi', duration: '120', state: 'past' },
        { time: '03:30', title: 'Film', type: 'Film', duration: '120', state: 'past' },
        { time: '05:30', title: 'Yeşil Deniz', type: 'Dizi', duration: '120', state: 'past' },
        { time: '07:30', title: 'İyilik Kulübü', type: 'Program', duration: '90', state: 'past' },
        { time: '09:00', title: 'Uzun Hikaye', type: 'Dizi', duration: '120', state: 'past' },
        { time: '10:00', title: 'Gönül Dağı', type: 'Dizi', duration: '120', state: 'current' },
        { time: '12:00', title: 'Ana Haber', type: 'Haber', duration: '60', state: 'next' },
        { time: '13:00', title: 'Masallarla Biz', type: 'Çocuk', duration: '30', state: 'next' },
        { time: '13:30', title: 'Belgesel', type: 'Belgesel', duration: '60', state: 'next' },
        { time: '14:30', title: 'Dizi', type: 'Dizi', duration: '120', state: 'next' },
        { time: '16:30', title: 'Yerli Film', type: 'Film', duration: '120', state: 'next' },
        { time: '18:30', title: 'Akşam Haberleri', type: 'Haber', duration: '30', state: 'next' },
        { time: '19:00', title: 'Teşkilat', type: 'Dizi', duration: '150', state: 'next' },
        { time: '21:30', title: 'Belgesel', type: 'Belgesel', duration: '90', state: 'next' },
        { time: '22:00', title: 'İyilik Kulübü', type: 'Program', duration: '0', state: 'next' },
        { time: '22:30', title: 'Dizi Tekrarı', type: 'Program', duration: '0', state: 'next' },
        { time: '23:00', title: 'Gece Kuşağı', type: 'Program', duration: '0', state: 'next' }
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
        {
          time: '04:00',
          title: 'Dr. Feridun Kunak',
          type: 'Program',
          duration: '120',
          state: 'past'
        },
        { time: '06:00', title: 'Sabah Kahvesi', type: 'Program', duration: '180', state: 'past' },
        { time: '09:00', title: 'Mutfak Bahane', type: 'Program', duration: '60', state: 'past' },
        { time: '10:00', title: 'Elif', type: 'Dizi', duration: '180', state: 'current' },
        { time: '13:00', title: 'Kanal 7 Haber', type: 'Haber', duration: '60', state: 'next' },
        { time: '14:00', title: 'Yemin', type: 'Dizi', duration: '120', state: 'next' },
        { time: '16:00', title: 'Emanet', type: 'Dizi', duration: '120', state: 'next' },
        { time: '18:00', title: 'Ana Haber', type: 'Haber', duration: '60', state: 'next' },
        { time: '19:00', title: 'Baş Tacım', type: 'Dizi', duration: '120', state: 'next' },
        { time: '21:00', title: 'İkimizin Sırrı', type: 'Dizi', duration: '120', state: 'next' },
        { time: '22:00', title: 'Dizi', type: 'Dizi', duration: '0', state: 'next' },
        { time: '22:30', title: 'Mutfak Bahane', type: 'Dizi', duration: '0', state: 'next' },
        { time: '23:00', title: 'Belgesel', type: 'Dizi', duration: '0', state: 'next' }
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
        {
          time: '10:00',
          title: 'Müge ve Gülşen',
          type: 'Program',
          duration: '180',
          state: 'current'
        },
        { time: '13:00', title: 'Öğlen Haberleri', type: 'Haber', duration: '60', state: 'next' },
        { time: '14:00', title: 'Yerli Dizi', type: 'Dizi', duration: '120', state: 'next' },
        { time: '16:00', title: 'Magazin', type: 'Magazin', duration: '120', state: 'next' },
        { time: '18:00', title: 'Ana Haber', type: 'Haber', duration: '60', state: 'next' },
        { time: '19:00', title: 'Dizi', type: 'Dizi', duration: '120', state: 'next' },
        { time: '21:00', title: 'Sinema', type: 'Film', duration: '120', state: 'next' },
        { time: '22:00', title: 'Gece Kuşağı', type: 'Program', duration: '0', state: 'next' },
        { time: '22:30', title: 'Sabah Keyfi', type: 'Program', duration: '0', state: 'next' },
        { time: '23:00', title: 'Dizi Tekrarı', type: 'Program', duration: '0', state: 'next' }
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
        {
          time: '10:00',
          title: 'Uyan Türkiyem',
          type: 'Program',
          duration: '180',
          state: 'current'
        },
        { time: '13:00', title: 'Öğle Haberleri', type: 'Haber', duration: '60', state: 'next' },
        {
          time: '14:00',
          title: 'Söylemezsem Olmaz',
          type: 'Program',
          duration: '180',
          state: 'next'
        },
        { time: '17:00', title: 'Beyaz Ana Haber', type: 'Haber', duration: '60', state: 'next' },
        { time: '18:00', title: 'Dinamit', type: 'Program', duration: '120', state: 'next' },
        { time: '20:00', title: 'Ana Haber', type: 'Haber', duration: '60', state: 'next' },
        { time: '21:00', title: 'Yerli Film', type: 'Film', duration: '120', state: 'next' },
        { time: '22:00', title: 'Gece Kuşağı', type: 'Program', duration: '0', state: 'next' },
        { time: '22:30', title: 'Belgesel', type: 'Program', duration: '0', state: 'next' },
        { time: '23:00', title: 'Gece Haberleri', type: 'Program', duration: '0', state: 'next' }
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
        {
          time: '14:00',
          title: 'Ekonomi Servisi',
          type: 'Ekonomi',
          duration: '120',
          state: 'next'
        },
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
function generateDateRange(daysBack = 0, daysForward = 6) {
  const dates = [];
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Set to beginning of day

  // Add past dates if needed
  for (let i = daysBack; i > 0; i--) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    dates.push(date);
  }

  // Add today
  dates.push(new Date(today));

  // Add future dates
  for (let i = 1; i <= daysForward; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
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
    const timeOffset = (dayOfWeek % 3) - 1; // -1, 0, or 1 hour offset
    const newHours = (hours + timeOffset + 24) % 24;
    newProgram.time = `${newHours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}`;

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

// Modify renderChannelNav to remove the onclick attribute
function renderChannelNav() {
  const nav = document.querySelector('.channel-list__wrapper');
  nav.innerHTML = tvData.channels
    .map(
      channel => `
        <button 
            class="channel-card"
            data-channel-id="${channel.id}"
        >
            <div class="w-8 h-8 md:w-8 md:h-8 logo-channel rounded-lg flex items-center justify-center">
                <img src="${channel.logo}" alt="${channel.name}" 
                     class="h-8 md:h-10 w-auto object-contain"
                     onerror="this.parentElement.innerHTML = '${channel.name[0]}'">
            </div>
        </button>
    `
    )
    .join('');
}

// Add this helper function to get relevant programs
function getRelevantPrograms(programs, selectedDate) {
  const currentTime = new Date();
  const [currentHour, currentMinute] = [currentTime.getHours(), currentTime.getMinutes()];
  const currentTimeString = `${currentHour.toString().padStart(2, '0')}:${currentMinute
    .toString()
    .padStart(2, '0')}`;

  let currentIndex = programs.findIndex(program => {
    const [programHour, programMinute] = program.time.split(':').map(Number);
    const programEndHour = programHour + Math.floor(Number(program.duration) / 60);
    const programEndMinute = programMinute + (Number(program.duration) % 60);

    return (
      `${programHour.toString().padStart(2, '0')}:${programMinute.toString().padStart(2, '0')}` <=
        currentTimeString &&
      `${programEndHour.toString().padStart(2, '0')}:${programEndMinute
        .toString()
        .padStart(2, '0')}` >= currentTimeString
    );
  });

  if (currentIndex === -1) {
    currentIndex = programs.length - 1;
  }

  // Set program states based on their time
  const programsWithState = programs.map((program, index) => {
    const isLiveProgram = isLive(program.time, program.duration, selectedDate);
    let state;

    if (isLiveProgram) {
      state = 'today';
    } else {
      const [programHour, programMinute] = program.time.split(':').map(Number);
      const programTime = new Date();
      programTime.setHours(programHour, programMinute, 0, 0);

      if (programTime < currentTime) {
        state = 'past';
      } else {
        state = 'next';
      }
    }

    return { ...program, state };
  });

  return {
    previous: programsWithState[currentIndex - 1],
    current: programsWithState[currentIndex],
    next: programsWithState[currentIndex + 1],
    allPrograms: programsWithState
  };
}

// Change default state to false (show only current/upcoming programs)
let showAllPrograms = false;

// Update the toggle function to work with the new button
function toggleAllSchedules() {
  const button = document.getElementById('currentProgramsToggle');
  const wasShowingAll = showAllPrograms;
  showAllPrograms = !showAllPrograms;

  // Update button appearance based on state
  // When showAllPrograms is true, use button--active to indicate filter is active
  // When showAllPrograms is false, remove button--active to indicate no filter
  if (showAllPrograms) {
    button.classList.add('button--active');
  } else {
    button.classList.remove('button--active');
  }

  // Re-render programs with current date to show/hide past programs
  const activeDay = document.querySelector('.date-nav-item.active');
  const selectedDate = activeDay ? activeDay.dataset.date : new Date().toISOString().split('T')[0];

  // Force a complete re-render by clearing the content first
  const content = document.querySelector('.programs__content');
  if (content) {
    // Clear the content
    content.innerHTML = '';

    // If we're toggling back to filtered view from showing all
    if (wasShowingAll && !showAllPrograms) {
      // Force a complete refresh to ensure we show current programs
      setTimeout(() => {
        renderPrograms(selectedDate);

        // Find and scroll to the first "today" program if available
        setTimeout(() => {
          const todayProgram = document.querySelector('.program-item.today');
          if (todayProgram) {
            todayProgram.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 100);
      }, 50);
    } else {
      // Normal render
      renderPrograms(selectedDate);
    }
  }
}

// Modify the program rendering to include state classes
function renderPrograms(selectedDate = null) {
  const content = document.querySelector('.programs__content');
  const channels = tvData.channels.filter(c => c.enabled);
  const now = new Date();

  content.innerHTML = `
        <div class="program-list">
            ${channels
              .map(channel => {
                // Get all programs with their states
                const { allPrograms } = getRelevantPrograms(channel.programs, selectedDate);

                // Find the current live program
                let currentIndex = allPrograms.findIndex(program => program.state === 'today');

                // If no live program, find the next upcoming one
                if (currentIndex === -1) {
                  currentIndex = allPrograms.findIndex(program => program.state === 'next');
                }

                // If still no match, find the most recent past program
                if (currentIndex === -1 && allPrograms.length > 0) {
                  // Find the most recent past program (closest to current time)
                  let closestPastIndex = 0;
                  let smallestTimeDiff = Infinity;

                  allPrograms.forEach((program, index) => {
                    if (program.state === 'past') {
                      const [hours, minutes] = program.time.split(':').map(Number);
                      const programTime = new Date();
                      programTime.setHours(hours, minutes, 0, 0);
                      const timeDiff = now - programTime;

                      if (timeDiff < smallestTimeDiff) {
                        smallestTimeDiff = timeDiff;
                        closestPastIndex = index;
                      }
                    }
                  });

                  currentIndex = closestPastIndex;
                }

                // Limit programs to 4 when not showing all
                let displayPrograms = allPrograms;
                if (!showAllPrograms) {
                  // If we have a current index, show it and the next 3
                  if (currentIndex !== -1) {
                    // Make sure we include at least one "today" program if it exists
                    const todayIndex = allPrograms.findIndex(p => p.state === 'today');

                    if (
                      todayIndex !== -1 &&
                      (todayIndex < currentIndex || todayIndex >= currentIndex + 4)
                    ) {
                      // If today program exists but wouldn't be included in our slice,
                      // adjust the slice to include it
                      if (todayIndex < currentIndex) {
                        // Today is before our current index, include it
                        displayPrograms = [
                          allPrograms[todayIndex],
                          ...allPrograms.slice(currentIndex, currentIndex + 3)
                        ];
                      } else {
                        // Today is after our current slice, include it
                        displayPrograms = [
                          ...allPrograms.slice(currentIndex, currentIndex + 3),
                          allPrograms[todayIndex]
                        ];
                      }
                    } else {
                      // Normal case - just take 4 programs from current index
                      displayPrograms = allPrograms.slice(currentIndex, currentIndex + 4);
                    }
                  } else {
                    // If no current program, just show the first 4
                    displayPrograms = allPrograms.slice(0, Math.min(4, allPrograms.length));
                  }
                }

                return `
                  <div class="program-card" id="channel-${channel.id}" data-channel-id="${
                  channel.id
                }">
                      <div class="program-card__header">
                          <div class="program-card__topbar">
                              <div class="program-card__info">
                                  <div class="program-card__logo">
                                      <img src="${channel.logo}" alt="${channel.name}" 
                                          class="program-card__logo-img"
                                          onerror="this.parentElement.innerHTML = '${
                                            channel.name[0]
                                          }'">
                                  </div>
                                  <div class="program-card__details">
                                      <h2 class="program-card__title">${channel.name}</h2>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="program-slot">
                          ${displayPrograms
                            .map(program => {
                              const progress = calculateProgramProgress(
                                program.time,
                                program.duration,
                                selectedDate
                              );
                              const isLiveProgram = isLive(
                                program.time,
                                program.duration,
                                selectedDate
                              );

                              // Determine program state class
                              let stateClass = '';
                              if (program.state === 'program-slot--past') {
                                stateClass = 'program-slot--past';
                              } else if (program.state === 'program-slot--today') {
                                stateClass = 'program-slot--live';
                              } else {
                                // next
                                stateClass = 'program-slot--upcoming';
                              }

                              return `
                                  <div class="program-slot__item ${stateClass}" onclick="showProgramModal('${
                                channel.id
                              }', '${program.time}')">
                                      <div class="program-slot__content">
                                          <div class="program-slot__details">
                                              <div class="program-slot__time">${program.time}</div>
                                              <div class="program-slot__title">${
                                                program.title
                                              }</div>
                                          </div>
                                          ${
                                            isLiveProgram
                                              ? `
                                              <div class="program-slot__live-indicator">
                                                  <span class="live-dot"></span>
                                                  <span>CANLI</span>
                                              </div>
                                          `
                                              : ''
                                          }
                                      </div>
                                      ${
                                        isLiveProgram
                                          ? `
                                          <div class="program-slot__progress">
                                              <div class="program-slot__progress-bar" style="width: ${progress}%"></div>
                                          </div>
                                      `
                                          : ''
                                      }
                                  </div>
                              `;
                            })
                            .join('')}
                      </div>
                  </div>
              `;
              })
              .join('')}
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
    renderChannelPrograms(
      programsContainer,
      [relevantPrograms.previous, relevantPrograms.current, relevantPrograms.next].filter(Boolean),
      channel.id
    );
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
  // First, set the program states
  const programsWithState = programs.map(program => {
    if (!program.state) {
      const isLiveProgram = isLive(program.time, program.duration);
      let state;

      if (isLiveProgram) {
        state = 'today';
      } else {
        const [programHour, programMinute] = program.time.split(':').map(Number);
        const programTime = new Date();
        programTime.setHours(programHour, programMinute, 0, 0);
        const currentTime = new Date();

        if (programTime < currentTime) {
          state = 'past';
        } else {
          state = 'next';
        }
      }

      return { ...program, state };
    }
    return program;
  });

  container.innerHTML = programsWithState
    .map(program => {
      const progress = calculateProgramProgress(program.time, program.duration);
      const isLiveProgram = isLive(program.time, program.duration);

      // Determine text color classes based on program state
      let titleClass, timeClass;

      if (program.state === 'past') {
        titleClass = 'text-gray-500 dark:text-gray-500 font-normal';
        timeClass = 'text-gray-400 dark:text-gray-500';
      } else if (program.state === 'today') {
        titleClass = 'text-gray-800 dark:text-gray-200 font-medium';
        timeClass = 'text-gray-600 dark:text-gray-400';
      } else {
        // next
        titleClass = 'text-black dark:text-white font-semibold';
        timeClass = 'text-gray-700 dark:text-gray-300';
      }

      return `
            <div class="p-3 md:p-4 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer program-item ${
              program.state
            }"
                 onclick="showProgramModal('${channelId}', '${program.time}')">
                <div class="flex justify-between items-start">
                    <div class="flex flex-row items-center gap-2">
                        <div class="flex items-center gap-1 text-xs md:text-sm ${timeClass}">
                            ${createIcon('time', 'w-4 h-4')}
                            ${program.time}
                        </div>
                        <div class="text-sm md:text-base ${titleClass}">${program.title}</div>
                    </div>
                    ${
                      isLiveProgram
                        ? `
                        <div class="live-indicator">
                            <span class="live-dot"></span>
                            <span>CANLI</span>
                        </div>
                    `
                        : ''
                    }
                </div>
                ${
                  isLiveProgram
                    ? `
                    <div class="mt-2 progress-container">
                        <div class="progress-fill" style="width: ${progress}%"></div>
                    </div>
                `
                    : ''
                }
            </div>
        `;
    })
    .join('');
}

// Add program modal
function showProgramModal(channelId, programTime) {
  // Get the date from either dateSelector, active day, or today
  let selectedDate;
  const dateSelector = document.getElementById('dateSelector');
  const activeDay = document.querySelector('.date-nav-item.active');

  if (dateSelector && dateSelector.value) {
    selectedDate = dateSelector.value;
  } else if (activeDay && activeDay.dataset.date) {
    selectedDate = activeDay.dataset.date;
  } else {
    selectedDate = new Date().toISOString().split('T')[0];
  }

  const channel = tvData.channels.find(c => c.id === channelId);
  const program = channel.programs.find(p => p.time === programTime);
  const progress = calculateProgramProgress(program.time, program.duration, selectedDate);
  const isLiveProgram = isLive(program.time, program.duration, selectedDate);
  const isMobile = window.innerWidth < 768;

  const modalContainer = document.createElement('div');
  modalContainer.id = 'programModal';
  modalContainer.className = `modal modal-base ${isMobile ? 'mobile' : ''}`;

  // Format date in Turkish
  const formatter = new Intl.DateTimeFormat('tr-TR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  });
  const formattedDate = formatter.format(new Date(selectedDate));

  const modalHTML = `
        <div class="modal__content ${
          isMobile ? 'modal__content--mobile' : ''
        }" onclick="event.stopPropagation()">
            ${
              isMobile
                ? `
                <div class="modal__header modal__header--mobile">
                    <button onclick="closeModal()" class="modal__back-btn">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                        </svg>
                    </button>
                    <button onclick="shareProgram('${channel.id}', '${program.time}')" class="modal__share-btn">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"/>
                        </svg>
                    </button>
                </div>
            `
                : ''
            }
            <div class="modal__hero">
                <div class="modal__hero-header">
                  ${
                    !isMobile
                      ? `
                      <button onclick="closeModal()" class="modal__close-btn">✕</button>
                      <button onclick="shareProgram('${channel.id}', '${program.time}')" class="modal__share-btn">
                          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"/>
                          </svg>
                      </button>
                  `
                      : ''
                  }
                </div>
                <div class="modal__hero-content">
                    <div class="modal__channel-info">
                        <div class="modal__channel-logo">
                          <img src="${channel.logo}" alt="${channel.name}" 
                          class="program-card__logo-img"
                            onerror="this.parentElement.innerHTML = '${channel.name[0]}'">
                        </div>
                        <h1 class="modal__program-title">${program.title}</h1>
                    </div>
                    <div class="modal__meta">
                        <span class="modal__date">${formattedDate}</span>
                        <span class="modal__time">${program.time}</span>
                        ${
                          isLiveProgram
                            ? `
                            <span class="live-badge">CANLI</span>
                        `
                            : ''
                        }
                    </div>
                </div>
            </div>
            
            <div class="modal__details">
                <div class="modal__info">
                    <div class="modal__info-grid">
                        <div class="modal__info-item">
                            <span class="modal__label">Tür</span>
                            <span class="modal__value">${program.type}</span>
                        </div>
                        <div class="modal__info-item">
                            <span class="modal__label">Süre</span>
                            <span class="modal__value">${program.duration} dakika</span>
                        </div>
                        ${
                          program.presenter
                            ? `
                            <div class="modal__info-item">
                                <span class="modal__label">Sunucu</span>
                                <span class="modal__value">${program.presenter}</span>
                            </div>
                        `
                            : ''
                        }
                    </div>
                    
                    ${
                      program.description
                        ? `
                        <div class="modal__description">
                            <h3 class="modal__description-title">Program Hakkında</h3>
                            <p class="modal__description-text">${program.description}</p>
                        </div>
                    `
                        : ''
                    }
                    
                    ${
                      isLiveProgram
                        ? `
                        <div class="modal__progress">
                            <div class="modal__progress-container">
                                <div class="modal__progress-fill" style="width: ${progress}%"></div>
                            </div>
                            <div class="modal__progress-text">${progress}% tamamlandı</div>
                        </div>
                    `
                        : ''
                    }
                </div>
                
                <div class="modal__ad-space">
                    <!-- Ad placeholder -->
                    <div class="modal__ad-placeholder">
                        <span>Reklam Alanı</span>
                    </div>
                </div>
            </div>
        </div>
    `;

  modalContainer.innerHTML = modalHTML;
  document.body.appendChild(modalContainer);
  document.body.style.overflow = 'hidden';

  // Add click handler to close when clicking outside on desktop
  if (!isMobile) {
    modalContainer.addEventListener('click', e => {
      if (e.target === modalContainer) {
        closeModal();
      }
    });
  }

  // Close modal with ESC key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });
}

// Add share functionality
function shareProgram(channelId, programTime) {
  const channel = tvData.channels.find(c => c.id === channelId);
  const program = channel.programs.find(p => p.time === programTime);

  const shareData = {
    title: `${program.title} - ${channel.name}`,
    text: `${program.title} programını ${channel.name}'de ${program.time}'da izle!`,
    url: window.location.href
  };

  if (navigator.share) {
    navigator.share(shareData).catch(error => console.log('Error sharing:', error));
  } else {
    // Fallback for browsers that don't support Web Share API
    const tempInput = document.createElement('input');
    document.body.appendChild(tempInput);
    tempInput.value = `${shareData.text}\n${shareData.url}`;
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    // Show copy notification
    const notification = document.createElement('div');
    notification.className = 'copy-notification';
    notification.textContent = 'Bağlantı kopyalandı!';
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.remove();
    }, 2000);
  }
}

// Update close modal function
function closeModal() {
  const modal = document.getElementById('programModal');
  if (modal) {
    modal.classList.add('modal-exit');
    setTimeout(() => {
      document.body.style.overflow = '';
      modal.remove();
    }, 300);
  }
}

// Theme toggle
function setupThemeToggle() {
  const themeToggle = document.getElementById('themeToggle');
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

  // Check for saved theme preference or use system preference
  const savedTheme = localStorage.getItem('theme');
  const initialTheme = savedTheme || (prefersDarkScheme.matches ? 'dark' : 'light');

  // Remove any existing theme classes and add the initial theme
  document.documentElement.classList.remove('light', 'dark');
  document.documentElement.classList.add(initialTheme);

  // Set initial button state
  themeToggle.classList.toggle('button--active', initialTheme === 'dark');

  // Add click handler
  themeToggle.addEventListener('click', () => {
    // Toggle theme
    const currentTheme = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(currentTheme);

    // Toggle button state
    themeToggle.classList.toggle('button--active', currentTheme === 'dark');

    // Save preference
    localStorage.setItem('theme', currentTheme);
  });

  // Listen for system theme changes
  prefersDarkScheme.addEventListener('change', e => {
    if (!localStorage.getItem('theme')) {
      const newTheme = e.matches ? 'dark' : 'light';
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(newTheme);
      themeToggle.classList.toggle('button--active', newTheme === 'dark');
    }
  });
}

// Add these new functions
function setupDateSelector() {
  const dateSelector = document.getElementById('dateSelector');
  const dates = generateDateRange();

  // Clear existing options
  dateSelector.innerHTML = dates
    .map(date => {
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
    })
    .join('');

  // Set default to today
  dateSelector.value = new Date().toISOString().split('T')[0];

  dateSelector.addEventListener('change', e => {
    const selectedDate = e.target.value;
    const programData = programDates[selectedDate] || tvData;
    renderPrograms(selectedDate);
  });
}

// Unified channel detail view function
function showChannelDetail(channelId) {
  // Get the selected date from the active day button
  const activeDay = document.querySelector('.date-nav-item.active');
  const selectedDate = activeDay ? activeDay.dataset.date : new Date().toISOString().split('T')[0];

  const channel = tvData.channels.find(c => c.id === channelId);
  const content = document.querySelector('programs__content');

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
                        <h1 class="text-2xl font-bold text-gray-900 dark:text-white">${
                          channel.name
                        }</h1>
                        ${
                          channel.description
                            ? `
                            <p class="mt-2 text-gray-600 dark:text-gray-300">${channel.description}</p>
                        `
                            : ''
                        }
                    </div>
                </div>
            </div>
            
            <div class="p-6">
                <h2 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Günün Programları</h2>
                <div class="space-y-4">
                    ${channel.programs
                      .map(program => {
                        const progress = calculateProgramProgress(
                          program.time,
                          program.duration,
                          selectedDate
                        );
                        const isLiveProgram = isLive(program.time, program.duration, selectedDate);

                        return `
                            <div class="flex items-start space-x-4 p-4 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg cursor-pointer"
                                 onclick="showProgramModal('${channel.id}', '${program.time}')">
                                <div class="w-20 text-gray-500 dark:text-gray-400">${
                                  program.time
                                }</div>
                                <div class="flex-1">
                                    <div class="flex justify-between items-start">
                                        <div class="font-medium text-gray-900 dark:text-white">${
                                          program.title
                                        }</div>
                                        ${
                                          isLiveProgram
                                            ? `
                                            <div class="live-indicator">
                                                <span class="live-dot"></span>
                                                <span>CANLI</span>
                                            </div>
                                        `
                                            : ''
                                        }
                                    </div>
                                    <div class="mt-1 flex items-center text-sm text-gray-500 dark:text-gray-400">
                                        <span class="bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded text-xs">
                                            ${program.type}
                                        </span>
                                        <span class="ml-2">${program.duration} dk</span>
                                    </div>
                                    ${
                                      program.description
                                        ? `
                                        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">${program.description}</p>
                                    `
                                        : ''
                                    }
                                    ${
                                      isLiveProgram
                                        ? `
                                        <div class="mt-2 progress-container">
                                            <div class="progress-fill" style="width: ${progress}%"></div>
                                        </div>
                                    `
                                        : ''
                                    }
                                </div>
                            </div>
                        `;
                      })
                      .join('')}
                </div>
            </div>
        </div>
    `;
}

// Add this new function
function resetView() {
  // Reset selectors if they exist
  const dateSelector = document.getElementById('dateSelector');
  const programSearch = document.getElementById('programSearch');

  if (dateSelector) {
    dateSelector.value = new Date().toISOString().split('T')[0];
  }

  if (programSearch) {
    programSearch.value = '';
  }

  // Reset view
  renderPrograms();

  // Scroll to top of page smoothly
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Add this function to handle search toggle
function toggleSearch() {
  const searchSection = document.getElementById('searchSection');
  const searchToggle = document.getElementById('searchToggle');
  const searchInput = document.getElementById('programSearch');
  const isVisible = !searchSection.classList.contains('hidden');

  if (isVisible) {
    // Hide search
    searchSection.classList.add('hidden');
    searchToggle.classList.remove('button--active');
    searchInput.value = ''; // Clear search input
    // Clear search results if any
    renderPrograms();
  } else {
    // Show search
    searchSection.classList.remove('hidden');
    searchToggle.classList.add('button--active');
    // Focus search input
    setTimeout(() => searchInput.focus(), 100);
  }
}

// Update setupSearch function
function setupSearch() {
  const searchInput = document.getElementById('programSearch');
  const searchToggle = document.getElementById('searchToggle');
  const closeSearch = document.getElementById('closeSearch');

  if (searchToggle) {
    // Set initial state
    searchToggle.classList.remove('button--active');
    searchToggle.addEventListener('click', toggleSearch);
  }

  if (closeSearch) {
    closeSearch.addEventListener('click', toggleSearch);
  }

  if (searchInput) {
    // Existing search functionality
    searchInput.addEventListener('input', e => {
      const searchTerm = e.target.value.toLowerCase();
      if (searchTerm.length >= 2) {
        const results = tvData.channels.reduce((acc, channel) => {
          const matchingPrograms = channel.programs
            .filter(
              program =>
                program.title.toLowerCase().includes(searchTerm) ||
                program.type?.toLowerCase().includes(searchTerm)
            )
            .map(program => ({ ...program, channelId: channel.id, channelName: channel.name }));
          return [...acc, ...matchingPrograms];
        }, []);
        renderSearchResults(results, searchTerm);
      } else if (searchTerm.length === 0) {
        renderPrograms();
      }
    });

    // Add escape key handler
    searchInput.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        toggleSearch();
      }
    });
  }
}

// Add this function to initialize scroll shadows
function setupScrollShadows() {
  const desktopProviderContainer = document.querySelector('.provider-list .provider-list__scroll');
  const mobileProviderContainer = document.querySelector('.providers .provider-list__scroll');
  const channelSectionInner = document.querySelector('.channels__inner');

  if (desktopProviderContainer) {
    const desktopWrapper = desktopProviderContainer.querySelector('.provider-list__wrapper');

    function updateDesktopShadows() {
      const scrollLeft = desktopWrapper.scrollLeft;
      const maxScrollLeft = desktopWrapper.scrollWidth - desktopWrapper.clientWidth;

      // Only show shadows if there's scrollable content
      if (desktopWrapper.scrollWidth <= desktopWrapper.clientWidth) {
        desktopProviderContainer.classList.remove('shadow-left', 'shadow-right');
      } else {
        desktopProviderContainer.classList.toggle('shadow-left', scrollLeft > 0);
        desktopProviderContainer.classList.toggle('shadow-right', scrollLeft < maxScrollLeft - 5); // 5px buffer
      }
    }

    // Initial update
    updateDesktopShadows();

    // Update on scroll
    desktopWrapper.addEventListener('scroll', updateDesktopShadows);

    // Update on window resize
    window.addEventListener('resize', updateDesktopShadows);
  }

  if (mobileProviderContainer) {
    const mobileWrapper = mobileProviderContainer.querySelector('.provider-list__wrapper');

    function updateMobileShadows() {
      const scrollLeft = mobileWrapper.scrollLeft;
      const maxScrollLeft = mobileWrapper.scrollWidth - mobileWrapper.clientWidth;

      // Only show shadows if there's scrollable content
      if (mobileWrapper.scrollWidth <= mobileWrapper.clientWidth) {
        mobileProviderContainer.classList.remove('shadow-left', 'shadow-right');
      } else {
        mobileProviderContainer.classList.toggle('shadow-left', scrollLeft > 0);
        mobileProviderContainer.classList.toggle('shadow-right', scrollLeft < maxScrollLeft - 5); // 5px buffer
      }
    }

    // Initial update
    updateMobileShadows();

    // Update on scroll
    mobileWrapper.addEventListener('scroll', updateMobileShadows);

    // Update on window resize
    window.addEventListener('resize', updateMobileShadows);
  }

  // Add shadows to the channel section
  if (channelSectionInner) {
    const channelNav = channelSectionInner.querySelector('.channel-list__wrapper');

    function updateChannelSectionShadows() {
      const scrollLeft = channelNav.scrollLeft;
      const maxScrollLeft = channelNav.scrollWidth - channelNav.clientWidth;
      const hasHorizontalScroll = channelNav.scrollWidth > channelNav.clientWidth;

      // Only show shadows if there's scrollable content
      if (!hasHorizontalScroll) {
        channelSectionInner.classList.remove('shadow-left', 'shadow-right');
      } else {
        channelSectionInner.classList.toggle('shadow-left', scrollLeft > 0);
        channelSectionInner.classList.toggle('shadow-right', scrollLeft < maxScrollLeft - 5); // 5px buffer
      }
    }

    // Initial update
    updateChannelSectionShadows();

    // Update on scroll
    channelNav.addEventListener('scroll', updateChannelSectionShadows);

    // Update on window resize
    window.addEventListener('resize', updateChannelSectionShadows);

    // Update when channel section becomes visible
    const channelSection = document.querySelector('.channels');
    if (channelSection) {
      const observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
          if (mutation.attributeName === 'class') {
            if (channelSection.classList.contains('visible')) {
              updateChannelSectionShadows();
            }
          }
        });
      });

      observer.observe(channelSection, { attributes: true });
    }
  }

  // Also add shadows to the day navigation
  const dayNav = document.querySelector('.date-nav .date-list__wrapper');
  const prevDateBtn = document.getElementById('prevDate');
  const nextDateBtn = document.getElementById('nextDate');

  if (dayNav) {
    // Create a container for the week-days if it doesn't exist
    if (!dayNav.parentElement.classList.contains('date-list__scroll')) {
      const container = document.createElement('div');
      container.className = 'date-list__scroll';
      dayNav.parentNode.insertBefore(container, dayNav);
      container.appendChild(dayNav);
    }

    const weekDaysContainer = dayNav.parentElement;

    function updateDayNavShadows() {
      const scrollLeft = dayNav.scrollLeft;
      const maxScrollLeft = dayNav.scrollWidth - dayNav.clientWidth;
      const hasHorizontalScroll = dayNav.scrollWidth > dayNav.clientWidth;

      // Only show shadows if there's scrollable content
      if (!hasHorizontalScroll) {
        weekDaysContainer.classList.remove('shadow-left', 'shadow-right');
        if (prevDateBtn) prevDateBtn.classList.add('hidden');
        if (nextDateBtn) nextDateBtn.classList.add('hidden');
      } else {
        // Update shadows
        weekDaysContainer.classList.toggle('shadow-left', scrollLeft > 0);
        weekDaysContainer.classList.toggle('shadow-right', scrollLeft < maxScrollLeft - 5); // 5px buffer

        // Update navigation buttons
        if (prevDateBtn) prevDateBtn.classList.toggle('hidden', scrollLeft <= 0);
        if (nextDateBtn) nextDateBtn.classList.toggle('hidden', scrollLeft >= maxScrollLeft - 5);
      }
    }

    // Initial update
    updateDayNavShadows();

    // Update on scroll
    dayNav.addEventListener('scroll', updateDayNavShadows);

    // Update on window resize
    window.addEventListener('resize', updateDayNavShadows);

    // Add click handlers for the navigation buttons
    if (prevDateBtn) {
      prevDateBtn.addEventListener('click', () => {
        dayNav.scrollBy({
          left: -100,
          behavior: 'smooth'
        });
      });
    }

    if (nextDateBtn) {
      nextDateBtn.addEventListener('click', () => {
        dayNav.scrollBy({
          left: 100,
          behavior: 'smooth'
        });
      });
    }
  }
}

// Update the DOMContentLoaded listener to include setupScrollShadows
document.addEventListener('DOMContentLoaded', () => {
  const today = new Date().toISOString().split('T')[0];

  // Initialize all required functionality
  initializeChannels();
  setupProviders();
  setupProviderScroll();
  setupShrinkingHeader();
  setupChannelSectionVisibility();
  setupDateNavigation();
  setupSearch();
  setupScrollShadows(); // Add this line
  setupScrollBasedSections(); // Add scroll behavior for channel section
  setupChannelAnchorScrolling(); // Add channel anchor scrolling
  renderChannelNav();
  renderPrograms(today);
  initializeIcons();

  // Initialize theme toggle
  if (document.getElementById('themeToggle')) {
    setupThemeToggle();
  }

  // Initialize current programs toggle with active state
  const currentProgramsToggle = document.getElementById('currentProgramsToggle');
  if (currentProgramsToggle) {
    // Set initial state based on showAllPrograms state
    if (showAllPrograms) {
      currentProgramsToggle.classList.add('button--active');
    } else {
      currentProgramsToggle.classList.remove('button--active');
    }
    currentProgramsToggle.addEventListener('click', toggleAllSchedules);
  }

  // Add click event to backdrop to close menu when clicked
  const backdrop = document.getElementById('mobileMenuBackdrop');
  if (backdrop) {
    backdrop.addEventListener('click', toggleMobileMenu);
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

            <!-- Existing channel selection content -->
            <div class="p-4">
                <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Görmek istediğiniz kanalları seçin ve sıralayın
                </p>
                <div class="space-y-2" id="channelPreferencesList">
                    ${tvData.channels
                      .map(
                        (channel, index) => `
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
                    `
                      )
                      .join('')}
                </div>
            </div>
        </div>
    `;

  // Add click handler to close when clicking outside
  modal.addEventListener('click', e => {
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
    const activeProvider = document.querySelector('.provider-card--active');
    const providerId = activeProvider ? activeProvider.dataset.provider : 'ulusal';

    // Update the UI with the new channel state
    updateChannelList(providers[providerId].channels);
    updateProgramGrid(providers[providerId].channels);
  }
}

// Initialize channels with enabled state based on provider
function initializeChannels() {
  const providerAvailability = {
    providerOne: {
      show: true,
      atv: true,
      fox: true,
      star: true,
      tv8: false,
      trt1: true,
      kanal7: true,
      teve2: true,
      beyaztv: true,
      ntv: false
    },
    providerTwo: {
      show: true,
      atv: true,
      fox: true,
      star: true,
      tv8: true,
      trt1: true,
      ntv: true
    },
    providerThree: {
      show: true,
      fox: true,
      star: true,
      tv8: true,
      trt1: true,
      ntv: true
    },
    providerFour: {
      show: true,
      kanal7: true,
      teve2: true
    },
    providerFive: {
      show: true,
      atv: true,
      fox: true,
      star: true,
      tv8: true,
      trt1: true,
      ntv: true
    },
    providerSix: {
      show: true,
      atv: true,
      fox: true,
      star: true,
      tv8: true,
      trt1: true,
      kanal7: true,
      teve2: true,
      beyaztv: true,
      ntv: true
    },
    providerSeven: {
      show: true,
      atv: true,
      fox: true,
      star: true,
      tv8: true,
      trt1: true,
      ntv: true
    },
    providerEight: {
      show: true,
      atv: true,
      fox: true,
      star: true,
      tv8: true,
      trt1: true,
      ntv: true
    },
    providerNine: {
      show: true,
      atv: true,
      fox: true,
      star: true
    },
    providerTen: {
      show: true,
      atv: true,
      fox: true,
      star: true,
      tv8: true,
      trt1: true,
      ntv: true
    },
    providerEleven: {
      show: true,
      atv: true,
      fox: true,
      star: true,
      tv8: true,
      trt1: true,
      ntv: true
    },
    providerTwelve: {
      show: true,
      atv: true,
      fox: true,
      star: true,
      tv8: true,
      trt1: true,
      ntv: true
    },
    providerThirteen: {
      show: true,
      atv: true
    },
    providerFourteen: {
      fox: true,
      star: true,
      tv8: true,
      trt1: true
    },
    providerFifteen: {
      kanal7: true,
      teve2: true,
      beyaztv: true
    }
  };

  // Get current provider
  const activeProvider = document.querySelector('.provider-card--active');
  const providerId = activeProvider ? activeProvider.dataset.provider : 'providerOne';

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
  setupChannelSectionVisibility();
  setupDateNavigation();
  initializeIcons();
});

// Add About page
function showAboutPage(event) {
  event.preventDefault();
  const content = document.querySelector('programs__content');

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
  const backdrop = document.getElementById('mobileMenuBackdrop');
  const providers = document.querySelector('.providers');

  if (mobileMenu && backdrop) {
    const isMenuOpen = mobileMenu.classList.contains('active');

    if (isMenuOpen) {
      // Close the menu
      mobileMenu.classList.remove('active');
      backdrop.classList.remove('active');

      // Enable scrolling on body
      document.body.style.overflow = '';
    } else {
      // Open the menu
      mobileMenu.classList.add('active');
      backdrop.classList.add('active');

      // Disable scrolling on body when menu is open
      document.body.style.overflow = 'hidden';
    }

    // Update providers z-index based on menu state
    if (providers) {
      providers.style.zIndex = isMenuOpen ? '50' : '40';
    }
  }
}

// Add click event to backdrop to close menu when clicked
document.addEventListener('DOMContentLoaded', () => {
  const backdrop = document.getElementById('mobileMenuBackdrop');
  if (backdrop) {
    backdrop.addEventListener('click', toggleMobileMenu);
  }
});

// Add this to close mobile menu on resize if open
window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    // md breakpoint
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu && mobileMenu.classList.contains('active')) {
      toggleMobileMenu();
    }
  }
});

// Provider scroll functionality
function setupProviderScroll() {
  // Setup for mobile providers
  setupScrollForContainer('.providers');

  // Setup for desktop providers
  setupScrollForContainer('.provider-list');

  function setupScrollForContainer(containerSelector) {
    const container = document.querySelector(`${containerSelector} .provider-list__scroll`);
    const wrapper = container?.querySelector('.provider-list__wrapper');
    const prevBtn = container?.querySelector('.provider-scroll-prev');
    const nextBtn = container?.querySelector('.provider-scroll-next');

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

    const scroll = direction => {
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
  const providerCards = document.querySelectorAll('.provider-card, .provider-dropdown-item');
  const selectedProviderText = document.getElementById('selectedProviderText');
  let activeProvider = 'providerOne'; // Default provider

  function updateProviderView(providerId) {
    // Update active state of provider cards (desktop)
    document.querySelectorAll('.provider-card').forEach(card => {
      if (card.dataset.provider === providerId) {
        card.classList.add('provider-card--active');
      } else {
        card.classList.remove('provider-card--active');
      }
    });

    // Update active state of dropdown items (mobile)
    document.querySelectorAll('.provider-dropdown-item').forEach(item => {
      if (item.dataset.provider === providerId) {
        item.classList.add('provider-dropdown-item--active');
      } else {
        item.classList.remove('provider-dropdown-item--active');
      }
    });

    // Update selected provider text in mobile trigger
    if (selectedProviderText) {
      const selectedProvider = providers[providerId];
      selectedProviderText.textContent = selectedProvider.name;
    }

    // Close dropdown after selection
    toggleProviderDropdown(false);

    // Initialize channels for this provider
    initializeChannels();

    // Update visible channels
    const providerChannels = providers[providerId].channels;
    updateChannelList(providerChannels);
    updateProgramGrid(providerChannels);

    // Update channel dropdown list
    updateChannelDropdownList();
  }

  // Provider click handlers
  providerCards.forEach(card => {
    // Skip elements that don't have a provider ID
    if (!card.dataset.provider) return;

    card.addEventListener('click', () => {
      const providerId = card.dataset.provider;
      activeProvider = providerId;
      updateProviderView(providerId);
    });
  });

  // Initialize with default provider
  updateProviderView(activeProvider);

  // Make updateProviderView available globally
  window.updateProviderView = updateProviderView;
}

// Toggle provider dropdown
function toggleProviderDropdown(force) {
  const dropdown = document.getElementById('providerDropdown');
  if (!dropdown) return;

  const isOpen = dropdown.classList.contains('active');
  const shouldOpen = force !== undefined ? force : !isOpen;

  if (shouldOpen) {
    dropdown.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent body scroll
  } else {
    dropdown.classList.remove('active');
    document.body.style.overflow = ''; // Restore body scroll
  }
}

// Make toggleProviderDropdown available globally
window.toggleProviderDropdown = toggleProviderDropdown;

// Update channel list based on provider
function updateChannelList(providerChannels) {
  const channelNav = document.querySelector('.channel-list__wrapper');
  if (!channelNav) return;

  // Filter channels that are both in provider and enabled
  const channels = tvData.channels.filter(
    channel => providerChannels.includes(channel.id) && channel.enabled
  );

  channelNav.innerHTML = channels
    .map(
      channel => `
        <button 
            class="channel-card"
            data-channel-id="${channel.id}"
        >
            <div class="channel-card__img">
                <img src="${channel.logo}" alt="${channel.name}" 
                     class="channel-card__img-img"
                     onerror="this.parentElement.innerHTML = '${channel.name[0]}'">
            </div>
        </button>
    `
    )
    .join('');
}

// Update program grid based on provider
function updateProgramGrid(providerChannels) {
  const contentDiv = document.querySelector('programs__content');
  const wrapperDiv = document.querySelector('.wrapper');
  if (!contentDiv) return;

  // Filter channels that are both in provider and enabled
  const channels = tvData.channels.filter(
    channel => providerChannels.includes(channel.id) && channel.enabled
  );

  // Only show content if there are channels to display
  if (channels.length > 0) {
    if (wrapperDiv) wrapperDiv.style.display = 'block';
    renderPrograms();
  } else {
    // Hide the wrapper and clear content if no channels
    if (wrapperDiv) wrapperDiv.style.display = 'none';
    contentDiv.innerHTML = '';
  }
}

// Add this function to initialize icons
function initializeIcons() {
  // Initialize search icon with the correct size
  const searchIcon = document.querySelector('.icon-search');
  if (searchIcon) {
    searchIcon.innerHTML = createIcon('search', 'w-6 h-6');
  }
}

// Add this function to handle the more providers button
function toggleMoreProviders(event) {
  event.preventDefault();
  event.stopPropagation();

  // Determine which dropdown to use based on the button's location
  const isInHeader = event.target.closest('.provider-list') !== null;
  const dropdownId = isInHeader ? 'providerDropdownDesktop' : 'providerDropdown';

  const dropdown = document.getElementById(dropdownId);
  if (dropdown) {
    dropdown.classList.toggle('hidden');

    // Close dropdown when clicking outside
    const closeDropdown = e => {
      if (!dropdown.contains(e.target) && !event.target.contains(e.target)) {
        dropdown.classList.add('hidden');
        document.removeEventListener('click', closeDropdown);
      }
    };

    // Add event listener with a slight delay to avoid immediate triggering
    setTimeout(() => {
      document.addEventListener('click', closeDropdown);
    }, 100);

    // Add click handlers to provider cards
    dropdown.querySelectorAll('.provider-card').forEach(card => {
      card.addEventListener('click', () => {
        const providerId = card.dataset.provider;
        updateProviderView(providerId);
        dropdown.classList.add('hidden');
      });
    });
  }
}

// Helper function to calculate program progress
function calculateProgramProgress(programTime, duration, selectedDate = null) {
  const [hours, minutes] = programTime.split(':').map(Number);
  const programDate = selectedDate ? new Date(selectedDate) : new Date();
  programDate.setHours(hours, minutes, 0, 0);

  const now = new Date();
  const programEndTime = new Date(programDate.getTime() + duration * 60000);

  if (now < programDate) return 0;
  if (now > programEndTime) return 100;

  const totalDuration = programEndTime - programDate;
  const elapsed = now - programDate;
  return Math.round((elapsed / totalDuration) * 100);
}

// Helper function to check if a program is live
function isLive(programTime, duration, selectedDate = null) {
  const [hours, minutes] = programTime.split(':').map(Number);
  const programDate = selectedDate ? new Date(selectedDate) : new Date();
  programDate.setHours(hours, minutes, 0, 0);

  const now = new Date();
  const programEndTime = new Date(programDate.getTime() + duration * 60000);

  return now >= programDate && now <= programEndTime;
}

// Update channel section visibility and scrolling behavior
function setupChannelSectionVisibility() {
  // This functionality is now handled by setupScrollBasedSections
  // Keeping this function as a stub to avoid breaking existing code
  console.log('Channel section visibility is now handled by setupScrollBasedSections');
}

// Update setupDateNavigation function
function setupDateNavigation() {
  const dayNav = document.querySelector('.date-nav .date-list__wrapper');
  const nextDateBtn = document.getElementById('nextDate');
  const dateDropdownTrigger = document.getElementById('dateDropdownTrigger');

  // Generate dates for a full week (7 days)
  const dates = generateDateRange(0, 6);

  // Populate day navigation for desktop
  if (dayNav) {
    dayNav.innerHTML = dates
      .map((date, index) => {
        const isToday = new Date().toDateString() === date.toDateString();
        const dateStr = date.toISOString().split('T')[0];
        const dayNum = date.getDate();
        const month = date.getMonth() + 1;
        const formattedDate = `${dayNum}/${month}`;

        let dayLabel;
        if (index === 0) {
          dayLabel = 'Today';
        } else if (index === 1) {
          dayLabel = 'Tomorrow';
        } else {
          dayLabel = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date);
        }

        return `
              <button 
                  data-date="${dateStr}"
                  class="date-nav-item ${isToday ? 'active' : ''}"
              >
                  <div class="day-name">${dayLabel}</div>
                  <div class="day-date">${formattedDate}</div>
              </button>
          `;
      })
      .join('');

    // Add click event listeners to date buttons
    const dateButtons = dayNav.querySelectorAll('.date-nav-item');
    dateButtons.forEach(button => {
      button.addEventListener('click', () => {
        const selectedDate = button.dataset.date;
        const dayLabel = button.querySelector('.day-name').textContent;

        // Update mobile dropdown text if it exists
        if (dateDropdownTrigger) {
          dateDropdownTrigger.querySelector('span').textContent = dayLabel;
        }

        // Update active state
        dateButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Update programs
        renderPrograms(selectedDate);
      });
    });

    // Add click handler for next date button
    if (nextDateBtn) {
      nextDateBtn.addEventListener('click', () => {
        dayNav.scrollBy({
          left: 100,
          behavior: 'smooth'
        });
      });
    }
  }

  // Initialize mobile date dropdown
  if (dateDropdownTrigger) {
    // Set initial text to "Today"
    dateDropdownTrigger.querySelector('span').textContent = 'Today';
  }
}

// Define providers and their available channels
const providers = {
  providerOne: {
    name: 'Provider #1',
    channels: ['show', 'atv', 'fox', 'star', 'tv8', 'trt1', 'kanal7', 'teve2', 'beyaztv', 'ntv']
  },
  providerTwo: {
    name: 'Provider #2',
    channels: ['show', 'atv', 'fox', 'star', 'tv8', 'trt1', 'ntv']
  },
  providerThree: {
    name: 'Provider #3',
    channels: ['show', 'fox', 'star', 'tv8', 'trt1', 'ntv']
  },
  providerFour: {
    name: 'Provider #4',
    channels: ['show', 'kanal7', 'teve2']
  },
  providerFive: {
    name: 'Provider #5',
    channels: ['show', 'atv', 'fox', 'star', 'tv8', 'trt1', 'ntv']
  },
  providerSix: {
    name: 'Provider #6',
    channels: ['show', 'atv', 'fox', 'star', 'tv8', 'trt1', 'kanal7', 'teve2', 'beyaztv', 'ntv']
  },
  providerSeven: {
    name: 'Provider #7',
    channels: ['show', 'atv', 'fox', 'star', 'tv8', 'trt1', 'ntv']
  },
  providerEight: {
    name: 'Provider #8',
    channels: ['show', 'atv', 'fox', 'star', 'tv8', 'trt1', 'ntv']
  },
  providerNine: {
    name: 'Provider #9',
    channels: ['show', 'atv', 'fox', 'star']
  },
  providerTen: {
    name: 'Provider #10',
    channels: []
  },
  providerEleven: {
    name: 'Provider #11',
    channels: []
  },
  providerTwelve: {
    name: 'Provider #12',
    channels: []
  },
  providerThirteen: {
    name: 'Provider #13',
    channels: ['show', 'atv']
  },
  providerFourteen: {
    name: 'Provider #14',
    channels: ['fox', 'star', 'tv8', 'trt1']
  },
  providerFifteen: {
    name: 'Provider #15',
    channels: ['kanal7', 'teve2', 'beyaztv']
  }
};

// Add this function to handle the scroll behavior for the channel section
function setupScrollBasedSections() {
  let lastScrollTop = 0;
  let scrollTimeout;
  let touchStartY = 0;
  let isScrollingDown = false;
  const channelsSection = document.querySelector('.channels');
  const minScrollToHide = 200;

  function updateChannelsVisibility(currentScrollTop, isScrollingDown) {
    // Get total scrollable height
    const totalHeight = document.documentElement.scrollHeight;
    const viewportHeight = window.innerHeight;
    const maxScroll = totalHeight - viewportHeight;
    const isAtBottom = currentScrollTop >= maxScroll - 10;
    const hasScrolledUp = channelsSection.classList.contains('visible-on-scroll');

    console.log('=== Scroll Update ===');
    console.log('Current scroll position:', currentScrollTop);
    console.log('Scrolling direction:', isScrollingDown ? 'DOWN' : 'UP');
    console.log('Has scrolled up before:', hasScrolledUp);

    // Natural scroll behavior before threshold
    if (currentScrollTop <= minScrollToHide) {
      console.log('📍 Before threshold - natural scroll');
      channelsSection.classList.remove('hidden-on-scroll');
      channelsSection.classList.remove('visible-on-scroll');
      return;
    }

    // If scrolling down, only add hidden class if we've previously scrolled up
    if (isScrollingDown) {
      if (hasScrolledUp) {
        console.log('🔽 Hiding channels - after previous scroll up');
        channelsSection.classList.add('hidden-on-scroll');
        channelsSection.classList.remove('visible-on-scroll');
      } else {
        console.log('🔽 Natural scroll down - no animation needed');
      }
      return;
    }

    // Only handle visibility when explicitly scrolling UP and past threshold
    if (!isScrollingDown && !isAtBottom && currentScrollTop > minScrollToHide) {
      console.log('🔼 Showing channels with animation - scrolling up');
      channelsSection.classList.remove('hidden-on-scroll');
      channelsSection.classList.add('visible-on-scroll');
    }
  }

  // Handle scroll events
  function handleScroll() {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Only update direction if we've scrolled enough to matter
    if (Math.abs(currentScrollTop - lastScrollTop) > 5) {
      const prevScrollingDown = isScrollingDown;
      isScrollingDown = currentScrollTop > lastScrollTop;

      // Log direction change
      if (prevScrollingDown !== isScrollingDown) {
        console.log('⚡️ Direction changed:', isScrollingDown ? 'DOWN' : 'UP');
      }

      updateChannelsVisibility(currentScrollTop, isScrollingDown);
      lastScrollTop = currentScrollTop;
    }
  }

  // Throttled scroll handler
  window.addEventListener(
    'scroll',
    () => {
      if (!scrollTimeout) {
        scrollTimeout = setTimeout(() => {
          handleScroll();
          scrollTimeout = null;
        }, 16);
      }
    },
    { passive: true }
  );

  // Touch event handlers
  document.addEventListener(
    'touchstart',
    e => {
      touchStartY = e.touches[0].clientY;
      lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      console.log('👆 Touch start at Y:', touchStartY);
    },
    { passive: true }
  );

  document.addEventListener(
    'touchmove',
    e => {
      if (!touchStartY) return;

      const touchY = e.touches[0].clientY;
      const touchDiff = touchStartY - touchY;
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

      // Only update if touch movement is significant
      if (Math.abs(touchDiff) > 5) {
        const prevScrollingDown = isScrollingDown;
        isScrollingDown = touchDiff > 0;

        // Log touch movement
        console.log('👆 Touch move:', {
          diff: touchDiff,
          direction: isScrollingDown ? 'DOWN' : 'UP'
        });

        updateChannelsVisibility(currentScrollTop, isScrollingDown);
      }
    },
    { passive: true }
  );

  document.addEventListener(
    'touchend',
    () => {
      console.log('👆 Touch end');
      touchStartY = 0;
      // Check final position after touch ends
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      updateChannelsVisibility(currentScrollTop, isScrollingDown);
    },
    { passive: true }
  );
}

// Make sure to call setupScrollBasedSections when the page loads
document.addEventListener('DOMContentLoaded', () => {
  setupScrollBasedSections();
});

// Add this function to handle channel anchor scrolling
function setupChannelAnchorScrolling() {
  // Add click event listeners to channel elements
  document.addEventListener('click', function (event) {
    // Check if the clicked element or its parent is a channel
    let channelElement = event.target.closest('.channel');

    if (channelElement) {
      const channelId = channelElement.dataset.channelId;

      if (channelId) {
        // Prevent default anchor behavior
        event.preventDefault();

        // Find the target program container for this channel
        const targetElement = document.getElementById(`channel-${channelId}`);

        if (targetElement) {
          // Scroll to the target element with smooth behavior
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });

          // Highlight the target element temporarily
          targetElement.classList.add('highlight-channel');
          setTimeout(() => {
            targetElement.classList.remove('highlight-channel');
          }, 2000);
        }
      }
    }
  });
}

// Toggle channel dropdown
function toggleChannelDropdown(force) {
  const dropdown = document.getElementById('channelDropdown');
  if (!dropdown) return;

  const isOpen = dropdown.classList.contains('active');
  const shouldOpen = force !== undefined ? force : !isOpen;

  if (shouldOpen) {
    dropdown.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent body scroll
    updateChannelDropdownList(); // Update the channel list when opening
  } else {
    dropdown.classList.remove('active');
    document.body.style.overflow = ''; // Restore body scroll
  }
}

// Update channel dropdown list based on current provider
function updateChannelDropdownList() {
  const activeProvider = document.querySelector('.provider-dropdown-item--active')?.dataset
    .provider;
  if (!activeProvider) return;

  const providerChannels = providers[activeProvider].channels;
  const dropdownList = document.getElementById('channelDropdownList');
  if (!dropdownList) return;

  dropdownList.innerHTML = providerChannels
    .map(channelId => {
      const channel = tvData.channels.find(c => c.id === channelId);
      if (!channel) return '';

      return `
      <button class="channel-dropdown-item mobile-dropdown-item" data-channel-id="${
        channel.id
      }" onclick="selectChannel('${channel.id}')">
        <div class="channel-dropdown-item__img mobile-dropdown-item__img">
          ${
            channel.logo
              ? `<img src="${channel.logo}" alt="${channel.name}" onerror="this.parentElement.innerHTML='${channel.name[0]}'">`
              : channel.name[0]
          }
        </div>
        <span class="channel-dropdown-item__text mobile-dropdown-item__text">${channel.name}</span>
      </button>
    `;
    })
    .join('');
}

// Filter channels in dropdown
function filterChannels(searchText) {
  const items = document.querySelectorAll('.channel-dropdown-item .mobile-dropdown-item');
  const searchLower = searchText.toLowerCase();

  items.forEach(item => {
    const text = item
      .querySelector('.channel-dropdown-item__text .mobile-dropdown-item__text')
      .textContent.toLowerCase();
    item.style.display = text.includes(searchLower) ? '' : 'none';
  });
}

// Select channel from dropdown or horizontal list
function selectChannel(channelId) {
  // Update dropdown trigger text with selected channel name
  const channelDropdownTrigger = document.getElementById('channelDropdownTrigger');
  const selectedChannel = document.querySelector(
    `.channel-dropdown-item[data-channel-id="${channelId}"] .mobile-dropdown-item`
  );
  if (channelDropdownTrigger && selectedChannel) {
    channelDropdownTrigger.querySelector('span').textContent = selectedChannel.querySelector(
      '.channel-dropdown-item__text .mobile-dropdown-item__text'
    ).textContent;
  }

  // Close the dropdown
  toggleChannelDropdown(false);

  // Update active states in both dropdown and horizontal list
  document.querySelectorAll('.channel-dropdown-item mobile-dropdown-item').forEach(item => {
    item.classList.toggle(
      'channel-dropdown-item--active mobile-dropdown-item--active',
      item.dataset.channelId === channelId
    );
  });

  document.querySelectorAll('.channel-card').forEach(card => {
    card.classList.toggle('channel-card--active', card.dataset.channelId === channelId);
  });

  // Scroll to the channel's program card
  const programCard = document.querySelector(`.program-card[data-channel-id="${channelId}"]`);
  if (programCard) {
    programCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // Find and scroll to the channel in the horizontal list
  const channelCard = document.querySelector(`.channel-card[data-channel-id="${channelId}"]`);
  if (channelCard) {
    const container = channelCard.parentElement;
    const containerRect = container.getBoundingClientRect();
    const cardRect = channelCard.getBoundingClientRect();
    const scrollLeft =
      cardRect.left - containerRect.left - containerRect.width / 2 + cardRect.width / 2;
    container.scrollTo({ left: container.scrollLeft + scrollLeft, behavior: 'smooth' });
  }
}

// Add channel click handler for horizontal list
function setupChannelScrolling() {
  const channelCards = document.querySelectorAll('.channel-card');
  channelCards.forEach(card => {
    card.addEventListener('click', () => {
      const channelId = card.dataset.channelId;
      if (channelId) {
        selectChannel(channelId);
      }
    });
  });
}

// Make functions globally available
window.toggleChannelDropdown = toggleChannelDropdown;
window.filterChannels = filterChannels;
window.selectChannel = selectChannel;

// Add setupChannelScrolling to the initialization
document.addEventListener('DOMContentLoaded', () => {
  setupChannelScrolling();
  // ... other initialization code ...
});

// Toggle date dropdown
function toggleDateDropdown(force) {
  const dropdown = document.getElementById('dateDropdown');
  if (!dropdown) return;

  const isOpen = dropdown.classList.contains('active');
  const shouldOpen = force !== undefined ? force : !isOpen;

  if (shouldOpen) {
    dropdown.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent body scroll
    updateDateDropdownList(); // Update the date list when opening
  } else {
    dropdown.classList.remove('active');
    document.body.style.overflow = ''; // Restore body scroll
  }
}

// Update date dropdown list
function updateDateDropdownList() {
  const dropdownList = document.getElementById('dateDropdownList');
  if (!dropdownList) return;

  // Generate dates for a week
  const dates = generateDateRange(0, 6); // Today + 6 days forward

  dropdownList.innerHTML = dates
    .map((date, index) => {
      const isToday = new Date().toDateString() === date.toDateString();
      const dateStr = date.toISOString().split('T')[0];

      // Format date in Turkish
      const formatter = new Intl.DateTimeFormat('tr-TR', {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
      });
      const formattedDate = formatter.format(date);

      // Determine the label
      let dayLabel;
      if (index === 0) {
        dayLabel = 'Today';
      } else if (index === 1) {
        dayLabel = 'Tomorrow';
      } else {
        dayLabel = formattedDate;
      }

      return `
            <button class="channel-dropdown-item mobile-dropdown-item" data-date="${dateStr}" onclick="selectDate('${dateStr}', '${dayLabel}')">
                <span class="channel-dropdown-item__text mobile-dropdown-item__text">${dayLabel}</span>
            </button>
        `;
    })
    .join('');
}

// Select date from dropdown
function selectDate(dateStr, label) {
  // Update dropdown trigger text
  const dateDropdownTrigger = document.getElementById('dateDropdownTrigger');
  if (dateDropdownTrigger) {
    dateDropdownTrigger.querySelector('span').textContent = label;
  }

  // Close the dropdown
  toggleDateDropdown(false);

  // Update active states in both dropdown and desktop navigation
  document
    .querySelectorAll('#dateDropdownList .channel-dropdown-item mobile-dropdown-item')
    .forEach(item => {
      item.classList.toggle(
        'channel-dropdown-item--active mobile-dropdown-item--active',
        item.dataset.date === dateStr
      );
    });

  document.querySelectorAll('.date-nav-item').forEach(button => {
    button.classList.toggle('active', button.dataset.date === dateStr);
  });

  // Update programs for selected date
  renderPrograms(dateStr);
}

// Make functions globally available
window.toggleDateDropdown = toggleDateDropdown;
window.selectDate = selectDate;
