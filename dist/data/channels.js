export const channels = [
    {
        id: 'show',
        name: 'Show TV',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Show_TV_logo.png',
        description: 'Türkiye\'nin en popüler kanallarından biri',
        programs: [
            {
                id: 'show-1',
                time: '08:00',
                title: 'Sabah Haberleri',
                duration: '120',
                type: 'Haber',
                description: 'Türkiye ve dünyadan güncel haberler',
                rating: 'Genel İzleyici',
                presenter: 'Ece Üner'
            },
            {
                id: 'show-2',
                time: '10:00',
                title: 'Kızılcık Şerbeti',
                duration: '120',
                type: 'Dizi',
                description: 'Aşk, entrika ve drama dolu yeni bölüm',
                rating: '13+',
                cast: ['Evrim Alasya', 'Barış Kılıç']
            }
        ]
    },
    {
        id: 'atv',
        name: 'ATV',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Atv_logo.png',
        description: 'En sevilen dizilerin adresi',
        programs: [
            {
                id: 'atv-1',
                time: '09:00',
                title: 'Müge Anlı ile Tatlı Sert',
                duration: '180',
                type: 'Program',
                description: 'Kayıp ve cinayet vakaları araştırılıyor',
                rating: '13+',
                presenter: 'Müge Anlı'
            },
            {
                id: 'atv-2',
                time: '12:00',
                title: 'Esra Erol\'da',
                duration: '120',
                type: 'Program',
                description: 'Evlilik programı',
                presenter: 'Esra Erol'
            }
        ]
    },
    {
        id: 'kanal-d',
        name: 'Kanal D',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Kanal_D_logo.png',
        description: 'Türkiye\'nin en çok izlenen kanalı',
        programs: [
            {
                id: 'kanald-1',
                time: '08:30',
                title: 'Günün Haberleri',
                duration: '90',
                type: 'Haber',
                description: 'Sabah haberleri',
                presenter: 'İrfan Değirmenci'
            },
            {
                id: 'kanald-2',
                time: '10:00',
                title: 'Yargı',
                duration: '120',
                type: 'Dizi',
                description: 'Hukuk ve adalet temalı dizi',
                cast: ['Pınar Deniz', 'Kaan Urgancıoğlu']
            }
        ]
    }
]; 