// STI College Chat Bot
class STIChatBot {
    constructor() {
        this.isOpen = false;
        this.isTyping = false;
        this.conversationHistory = [];
        this.initializeElements();
        this.bindEvents();
        this.loadChatState();
        this.showWelcomeMessage();
    }

    initializeElements() {
        this.chatBotIcon = document.getElementById('chatBotIcon');
        this.chatWindow = document.getElementById('chatWindow');
        this.chatCloseBtn = document.getElementById('chatCloseBtn');
        this.chatMessages = document.getElementById('chatMessages');
        this.chatInput = document.getElementById('chatInput');
        this.chatSendBtn = document.getElementById('chatSendBtn');
        this.chatNotification = document.getElementById('chatNotification');
        
        console.log('Chat Bot Elements:', {
            icon: this.chatBotIcon,
            window: this.chatWindow,
            messages: this.chatMessages,
            input: this.chatInput
        });
    }

    bindEvents() {
        this.chatBotIcon.addEventListener('click', () => this.toggleChat());
        this.chatCloseBtn.addEventListener('click', () => this.closeChat());
        this.chatSendBtn.addEventListener('click', () => this.sendMessage());
        this.chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });

        // Close chat when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.chatWindow.contains(e.target) && 
                !this.chatBotIcon.contains(e.target) && 
                this.isOpen) {
                this.closeChat();
            }
        });
    }

    toggleChat() {
        if (this.isOpen) {
            this.closeChat();
        } else {
            this.openChat();
        }
    }

    openChat() {
        this.isOpen = true;
        this.chatWindow.classList.add('active');
        this.chatNotification.style.display = 'none';
        this.chatInput.focus();
        this.scrollToBottom();
        this.saveChatState();
    }

    closeChat() {
        this.isOpen = false;
        this.chatWindow.classList.remove('active');
        this.saveChatState();
    }

    showWelcomeMessage() {
        const welcomeMessage = {
            type: 'bot',
            content: `Hello! I'm your STI College Lucena Assistant. 🎓

I can help you with:
• Campus information and programs
• Student council activities
• Events and announcements
• Contact information
• General inquiries

How can I assist you today?`,
            quickReplies: [
                'Campus Programs',
                'Student Council',
                'Events & Activities',
                'Contact Information',
                'General Questions'
            ]
        };

        this.addMessage(welcomeMessage);
    }

    addMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.className = `chat-message ${message.type}`;
        
        const avatar = document.createElement('div');
        avatar.className = 'chat-message-avatar';
        
        if (message.type === 'bot') {
            const logo = document.createElement('img');
            logo.src = './img/Logo and bg/SSC-modified (1).png?v=2';
            logo.alt = 'SSC Assistant';
            logo.style.width = '20px';
            logo.style.height = '20px';
            logo.style.objectFit = 'contain';
            logo.onload = () => {
                console.log('SSC logo loaded successfully');
            };
            logo.onerror = () => {
                console.error('Failed to load SSC logo, using fallback');
                avatar.innerHTML = '🎓';
            };
            avatar.appendChild(logo);
        } else {
            avatar.innerHTML = '👤';
        }
        
        const bubble = document.createElement('div');
        bubble.className = 'chat-message-bubble';
        bubble.innerHTML = message.content;
        
        messageElement.appendChild(avatar);
        messageElement.appendChild(bubble);
        
        // Add quick replies if available
        if (message.quickReplies && message.quickReplies.length > 0) {
            const quickRepliesContainer = document.createElement('div');
            quickRepliesContainer.className = 'quick-replies';
            
            message.quickReplies.forEach(reply => {
                const button = document.createElement('button');
                button.className = 'quick-reply-btn';
                button.textContent = reply;
                button.addEventListener('click', () => this.handleQuickReply(reply));
                quickRepliesContainer.appendChild(button);
            });
            
            messageElement.appendChild(quickRepliesContainer);
        }
        
        this.chatMessages.appendChild(messageElement);
        this.scrollToBottom();
        
        // Save to conversation history
        this.conversationHistory.push(message);
        this.saveChatState();
    }

    handleQuickReply(reply) {
        this.addMessage({
            type: 'user',
            content: reply
        });
        
        setTimeout(() => {
            this.processUserInput(reply);
        }, 500);
    }

    sendMessage() {
        const message = this.chatInput.value.trim();
        if (!message) return;
        
        this.addMessage({
            type: 'user',
            content: message
        });
        
        this.chatInput.value = '';
        this.processUserInput(message);
    }

    async processUserInput(userInput) {
        this.showTypingIndicator();
        
        // Simulate processing time
        await this.delay(1000 + Math.random() * 1000);
        
        this.hideTypingIndicator();
        
        const response = this.generateResponse(userInput.toLowerCase());
        this.addMessage(response);
    }

    showTypingIndicator() {
        this.isTyping = true;
        const typingElement = document.createElement('div');
        typingElement.className = 'chat-message bot';
        typingElement.id = 'typing-indicator';
        
        const avatar = document.createElement('div');
        avatar.className = 'chat-message-avatar';
        const logo = document.createElement('img');
        logo.src = './img/Logo and bg/SSC-modified (1).png?v=2';
        logo.alt = 'SSC Assistant';
        logo.style.width = '20px';
        logo.style.height = '20px';
        logo.style.objectFit = 'contain';
        logo.onload = () => {
            console.log('SSC logo loaded successfully in typing indicator');
        };
        logo.onerror = () => {
            console.error('Failed to load SSC logo in typing indicator, using fallback');
            avatar.innerHTML = '🎓';
        };
        avatar.appendChild(logo);
        
        const indicator = document.createElement('div');
        indicator.className = 'typing-indicator';
        indicator.innerHTML = `
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
        `;
        
        typingElement.appendChild(avatar);
        typingElement.appendChild(indicator);
        this.chatMessages.appendChild(typingElement);
        this.scrollToBottom();
    }

    hideTypingIndicator() {
        this.isTyping = false;
        const typingIndicator = document.getElementById('typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }

    generateResponse(userInput) {
        // Campus Programs
        if (userInput.includes('program') || userInput.includes('course') || userInput.includes('degree')) {
            return {
                type: 'bot',
                content: `STI College Lucena offers various programs:

📚 **Undergraduate Programs:**
• Bachelor of Science in Information Technology (BSIT)
• Bachelor of Science in Computer Science (BSCS)
• Bachelor of Science in Business Administration (BSBA)
• Bachelor of Science in Accountancy (BSA)
• Bachelor of Science in Tourism Management (BSTM)
• Bachelor of Science in Hospitality Management (BSHM)

🎓 **Senior High School:**
• STEM (Science, Technology, Engineering, and Mathematics)
• ABM (Accountancy, Business, and Management)
• HUMSS (Humanities and Social Sciences)
• GAS (General Academic Strand)

Would you like to know more about a specific program?`,
                quickReplies: ['BSIT Program', 'BSBA Program', 'Senior High School', 'Admission Requirements']
            };
        }

        // Student Council
        if (userInput.includes('council') || userInput.includes('student council') || userInput.includes('ssc')) {
            return {
                type: 'bot',
                content: `The STI College Lucena Student Council (SSC) is the official student government body that represents and serves the student body.

🎯 **Our Mission:**
To empower students, foster leadership, and build a vibrant campus community through meaningful activities and representation.

📋 **What We Do:**
• Organize campus events and activities
• Represent student interests and concerns
• Facilitate communication between students and administration
• Promote student welfare and development
• Coordinate with various student organizations

👥 **Current Officers:**
Visit our Officers page to meet the current SSC leadership team!

Would you like to know about upcoming events or how to get involved?`,
                quickReplies: ['Meet Our Officers', 'Upcoming Events', 'How to Join', 'Contact Council']
            };
        }

        // Events and Activities
        if (userInput.includes('event') || userInput.includes('activity') || userInput.includes('activity')) {
            return {
                type: 'bot',
                content: `STI College Lucena hosts various events throughout the academic year:

📅 **Regular Events:**
• Orientation Programs for new students
• Academic competitions and contests
• Sports events and tournaments
• Cultural celebrations and festivals
• Leadership training and workshops
• Community service activities

🎉 **Special Events:**
• Foundation Day celebrations
• Christmas parties and gatherings
• Graduation ceremonies
• Recognition programs
• Alumni homecoming events

Check our Events page for the latest updates and schedules!`,
                quickReplies: ['View All Events', 'Upcoming Events', 'Past Events', 'Event Registration']
            };
        }

        // Contact Information
        if (userInput.includes('contact') || userInput.includes('phone') || userInput.includes('email') || userInput.includes('address')) {
            return {
                type: 'bot',
                content: `Here's how you can reach STI College Lucena:

📍 **Address:**
STI College Lucena
Lucena City, Quezon Province, Philippines

📞 **Phone:**
(042) 373-XXXX

📧 **Email:**
lucena@sti.edu

🌐 **Website:**
www.sti.edu

📱 **Social Media:**
• Facebook: STI College Lucena SSC
• Instagram: @sticollegelucena
• Twitter: @sticollegelucena

⏰ **Office Hours:**
Monday - Friday: 8:00 AM - 5:00 PM
Saturday: 8:00 AM - 12:00 PM

For specific inquiries, you can also contact the Student Council directly!`,
                quickReplies: ['Student Council Contact', 'Admissions Office', 'General Inquiries', 'Emergency Contact']
            };
        }

        // General Questions
        if (userInput.includes('hello') || userInput.includes('hi') || userInput.includes('hey')) {
            return {
                type: 'bot',
                content: `Hello! 👋 Welcome to STI College Lucena! 

I'm here to help you with any questions about our campus, programs, events, or student life. Feel free to ask me anything!`,
                quickReplies: ['Campus Programs', 'Student Council', 'Events & Activities', 'Contact Information']
            };
        }

        if (userInput.includes('thank')) {
            return {
                type: 'bot',
                content: `You're welcome! 😊 

Is there anything else I can help you with today?`,
                quickReplies: ['More Questions', 'Campus Programs', 'Events', 'Contact Info']
            };
        }

        if (userInput.includes('bye') || userInput.includes('goodbye')) {
            return {
                type: 'bot',
                content: `Goodbye! 👋 

Thank you for chatting with me. Have a great day and feel free to come back anytime if you have more questions about STI College Lucena!`,
                quickReplies: ['See you later!', 'More Questions', 'Contact Info']
            };
        }

        // Default response for unrecognized queries
        return {
            type: 'bot',
            content: `I'm not sure I understood that. 🤔

Could you please rephrase your question? I can help you with:
• Campus programs and courses
• Student council information
• Events and activities
• Contact information
• General campus inquiries

Or you can try asking something like "What programs do you offer?" or "Tell me about the student council."`,
            quickReplies: ['Campus Programs', 'Student Council', 'Events & Activities', 'Contact Information']
        };
    }

    scrollToBottom() {
        setTimeout(() => {
            this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
        }, 100);
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    saveChatState() {
        localStorage.setItem('stiChatState', JSON.stringify({
            isOpen: this.isOpen,
            conversationHistory: this.conversationHistory
        }));
    }

    loadChatState() {
        const savedState = localStorage.getItem('stiChatState');
        if (savedState) {
            const state = JSON.parse(savedState);
            this.conversationHistory = state.conversationHistory || [];
            
            // Restore conversation history
            this.conversationHistory.forEach(message => {
                this.addMessage(message);
            });
        }
    }

    // Show notification when chat is closed
    showNotification() {
        if (!this.isOpen) {
            this.chatNotification.style.display = 'flex';
        }
    }
}

// Initialize chat bot when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('Initializing STI Chat Bot...');
    const chatBot = new STIChatBot();
    console.log('Chat Bot initialized successfully');
    
    // Show notification after 5 seconds if chat hasn't been opened
    setTimeout(() => {
        if (!chatBot.isOpen) {
            chatBot.showNotification();
        }
    }, 5000);
}); 