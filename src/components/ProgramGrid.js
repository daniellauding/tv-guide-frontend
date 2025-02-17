export const ProgramGrid = {
    render: (channels, selectedChannelId = null) => {
        const filteredChannels = selectedChannelId 
            ? channels.filter(c => c.id === selectedChannelId)
            : channels;

        return `
            <div class="space-y-6">
                ${filteredChannels.map(channel => `
                    <div class="grid grid-cols-[200px,1fr] gap-4 bg-white dark:bg-gray-800 rounded-lg p-4">
                        <div class="flex items-center space-x-4">
                            <img src="${channel.logo}" alt="${channel.name}" 
                                 class="w-16 h-16 object-contain rounded">
                            <div>
                                <h2 class="font-medium text-gray-800 dark:text-white">${channel.name}</h2>
                                <p class="text-sm text-gray-500">${channel.description || ''}</p>
                            </div>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                            ${channel.programs.map(program => `
                                <button 
                                    data-program-id="${program.id}"
                                    data-channel-id="${channel.id}"
                                    class="program-card text-left bg-gray-50 dark:bg-gray-700 p-3 rounded-lg 
                                           hover:shadow-md transition-shadow"
                                >
                                    <div class="text-sm text-gray-500 dark:text-gray-400">${program.time}</div>
                                    <div class="font-medium text-gray-800 dark:text-white">${program.title}</div>
                                    <div class="text-sm text-gray-500 dark:text-gray-400">
                                        ${program.type} • ${program.duration} dk
                                    </div>
                                </button>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }
}; 