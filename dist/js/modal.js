// Show program modal
function showProgramModal(channelId, programTime) {
  const modal = document.getElementById('programModal');
  if (!modal) return;

  // Get the selected date
  const activeDay = document.querySelector('.date-nav-item.active');
  const selectedDate = activeDay ? activeDay.dataset.date : new Date().toISOString().split('T')[0];

  // Get channel and program data
  const channel = tvData.channels.find(c => c.id === channelId);
  if (!channel) return;

  const program = channel.programs.find(p => p.time === programTime);
  if (!program) return;

  // Calculate program progress if live
  const progress = calculateProgramProgress(program.time, program.duration, selectedDate);
  const isLiveProgram = isLive(program.time, program.duration, selectedDate);

  // Format date in Turkish
  const formatter = new Intl.DateTimeFormat('tr-TR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  });
  const formattedDate = formatter.format(new Date(selectedDate));

  // Update modal content
  modal.querySelector('.modal__program-title').textContent = program.title;

  // Handle channel logo
  const logoImg = modal.querySelector('.program-card__logo-img');
  if (channel.logo) {
    logoImg.src = channel.logo;
    logoImg.alt = channel.name;
    logoImg.onerror = () => {
      logoImg.parentElement.innerHTML = channel.name[0];
    };
  } else {
    logoImg.parentElement.innerHTML = channel.name[0];
  }

  // Update basic info
  modal.querySelector('.modal__date').textContent = formattedDate;
  modal.querySelector('.modal__time').textContent = program.time;
  modal.querySelector('.program-type').textContent = program.type || 'Program';
  modal.querySelector('.program-duration').textContent = `${program.duration} dakika`;

  // Handle live badge
  const liveBadge = modal.querySelector('.live-badge');
  if (liveBadge) {
    liveBadge.classList.toggle('hidden', !isLiveProgram);
  }

  // Handle presenter info
  const presenterInfo = modal.querySelector('.presenter-info');
  if (presenterInfo) {
    if (program.presenter) {
      presenterInfo.classList.remove('hidden');
      modal.querySelector('.program-presenter').textContent = program.presenter;
    } else {
      presenterInfo.classList.add('hidden');
    }
  }

  // Handle cast info
  const castInfo = modal.querySelector('.cast-info');
  if (castInfo) {
    if (program.cast && program.cast.length > 0) {
      castInfo.classList.remove('hidden');
      modal.querySelector('.program-cast').textContent = program.cast.join(', ');
    } else {
      castInfo.classList.add('hidden');
    }
  }

  // Handle rating info
  const ratingInfo = modal.querySelector('.rating-info');
  const ratingText = modal.querySelector('.modal__rating');
  if (ratingInfo && ratingText) {
    if (program.rating) {
      ratingInfo.classList.remove('hidden');
      modal.querySelector('.program-rating').textContent = program.rating;
      ratingText.textContent = program.rating;
    } else {
      ratingInfo.classList.add('hidden');
      ratingText.textContent = '';
    }
  }

  // Handle description
  const descriptionSection = modal.querySelector('.modal__description');
  if (descriptionSection) {
    if (program.description) {
      descriptionSection.classList.remove('hidden');
      modal.querySelector('.modal__description-text').textContent = program.description;
    } else {
      descriptionSection.classList.add('hidden');
    }
  }

  // Handle progress bar for live programs
  const progressSection = modal.querySelector('.modal__progress');
  if (progressSection) {
    if (isLiveProgram) {
      progressSection.classList.remove('hidden');
      modal.querySelector('.modal__progress-fill').style.width = `${progress}%`;
      modal.querySelector('.modal__progress-text').textContent = `${progress}% tamamlandı`;
    } else {
      progressSection.classList.add('hidden');
    }
  }

  // Show modal
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';

  // Add click handler to close when clicking outside
  const closeOnOutsideClick = e => {
    if (e.target === modal) {
      closeModal();
      modal.removeEventListener('click', closeOnOutsideClick);
    }
  };
  modal.addEventListener('click', closeOnOutsideClick);

  // Close modal with ESC key
  const closeOnEscape = e => {
    if (e.key === 'Escape') {
      closeModal();
      document.removeEventListener('keydown', closeOnEscape);
    }
  };
  document.addEventListener('keydown', closeOnEscape);
}

// Close modal
function closeModal() {
  const modal = document.getElementById('programModal');
  if (modal) {
    modal.classList.add('modal-exit');
    setTimeout(() => {
      document.body.style.overflow = '';
      modal.classList.add('hidden');
      modal.classList.remove('modal-exit');
    }, 300);
  }
}

// Share program
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

// Export functions
export { showProgramModal, closeModal, shareProgram };
