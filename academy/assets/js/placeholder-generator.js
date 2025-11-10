// Generate placeholder images for development
function generatePlaceholderImage(width, height, text, color) {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');

    const key = (text || '').toUpperCase();

    // 🎨 Richer, more vivid gradients for better text contrast
    const gradients = {
        'НАЧИНАЮЩИЙ АГЕНТ': ['#f27121', '#e94057'],
        'ОПЫТНЫЙ АГЕНТ': ['#4568dc', '#b06ab3'],
        'ЭКСПЕРТ ПО НЕДВИЖИМОСТИ': ['#141e30', '#243b55'],
        'ПРОДАЖИ И ПЕРЕГОВОРЫ': ['#ff512f', '#dd2476'],
        'ЗАПУСК ФРАНШИЗЫ': ['#0f2027', '#2c5364'],
        'РАЗВИТИЕ БИЗНЕСА': ['#1c92d2', '#f2fcfe'],
        'ЛИДЕР РЫНКА': ['#8360c3', '#2ebf91'],
        'ОПЕРАЦИИ И ФИНАНСЫ': ['#3a1c71', '#d76d77'],
        'AGENT TESTIMONIAL': ['#000046', '#1cb5e0'],
        'FRANCHISE TESTIMONIAL': ['#42275a', '#734b6d']
    };

    // Set background gradient
    if (gradients[key]) {
        const gradient = ctx.createLinearGradient(0, 0, width, height);
        gradient.addColorStop(0, gradients[key][0]);
        gradient.addColorStop(1, gradients[key][1]);
        ctx.fillStyle = gradient;
    } else {
        ctx.fillStyle = color || '#444'; // fallback color
    }
    ctx.fillRect(0, 0, width, height);

    // Set text styling
    ctx.fillStyle = 'white';
    ctx.font = 'bold 20px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Split text into 2 lines
    const lines = (text || '').toUpperCase().split(' ');
    const midpoint = Math.ceil(lines.length / 2);
    const firstLine = lines.slice(0, midpoint).join(' ');
    const secondLine = lines.slice(midpoint).join(' ');

    // Draw the text lines
    const centerY = height / 2;
    ctx.fillText(firstLine, width / 2, centerY - 12);
    if (secondLine) {
        ctx.fillText(secondLine, width / 2, centerY + 12);
    }

    return canvas.toDataURL('image/png');
}

// Create placeholder images for different sections
document.addEventListener('DOMContentLoaded', function() {
    // Agent program placeholders
    createPlaceholder('beginner-agent', 'НАЧИНАЮЩИЙ АГЕНТ', '#e61a1a');
    createPlaceholder('experienced-agent', 'ОПЫТНЫЙ АГЕНТ', '#0054a4');
    createPlaceholder('expert', 'ЭКСПЕРТ ПО НЕДВИЖИМОСТИ', '#1a1a1a');
    createPlaceholder('sales', 'ПРОДАЖИ и ПЕРЕГОВОРЫ', '#e61a1a');
    
    // Franchise program placeholders
    createPlaceholder('franchise-launch', 'ЗАПУСК ФРАНШИЗЫ', '#e61a1a');
    createPlaceholder('business-development', 'РАЗВИТИЕ БИЗНЕСА', '#0054a4');
    createPlaceholder('market-leader', 'ЛИДЕР РЫНКА', '#1a1a1a');
    createPlaceholder('operations', 'ОПЕРАЦИИ И ФИНАНСЫ', '#e61a1a');
    
    // Instructor placeholders
    createPlaceholder('instructor-1', '#0054a4');
    createPlaceholder('instructor-2', '#e61a1a');
    createPlaceholder('instructor-3', '#1a1a1a');
    
    // Testimonial placeholders
    createPlaceholder('testimonial-1', 'Agent Testimonial', '#0054a4');
    createPlaceholder('testimonial-2', 'Franchise Testimonial', '#e61a1a');
});

function createPlaceholder(name, text, color) {
    const img = new Image();
    img.src = generatePlaceholderImage(300, 200, text, color);
    img.onload = function() {
        const link = document.createElement('a');
        link.download = `placeholder-${name}.png`;
        link.href = img.src;
        link.dataset.filename = `placeholder-${name}.png`;
        document.body.appendChild(link);
        
        // Replace image sources in the document
        const images = document.querySelectorAll(`img[src*="placeholder-${name}.jpg"], img[src*="placeholder-${name}.png"]`);
        images.forEach(image => {
            image.src = img.src;
        });
    };
}
