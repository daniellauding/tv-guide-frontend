export const ChannelNav = {
    render: (channels, activeChannelId = null) => {
        const nav = document.querySelector('.channel-nav');
        nav.innerHTML = channels.map(channel => `
            <button 
                data-channel-id="${channel.id}"
                class="channel-btn flex-shrink-0 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors
                       ${activeChannelId === channel.id ? 'bg-gray-100 dark:bg-gray-700' : ''}"
            >
                <img src="${channel.logo}" alt="${channel.name}" 
                     class="h-8 w-auto"
                     onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 fill=%22%23${Math.floor(Math.random()*16777215).toString(16)}%22/></svg>';"
                >
            </button>
        `).join('');
    }
}; 