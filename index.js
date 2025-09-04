tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#0f172a',
                        secondary: '#1e293b',
                        accent: '#7e22ce',
                        light: '#f8fafc'
                    },
                    animation: {
                        'float': 'float 6s ease-in-out infinite',
                        'glow': 'glow 2s ease-in-out infinite alternate',
                    },
                    keyframes: {
                        float: {
                            '0%, 100%': { transform: 'translateY(0)' },
                            '50%': { transform: 'translateY(-20px)' },
                        },
                        glow: {
                            '0%': { boxShadow: '0 0 5px #7e22ce, 0 0 10px #7e22ce, 0 0 15px #7e22ce' },
                            '100%': { boxShadow: '0 0 10px #7e22ce, 0 0 20px #7e22ce, 0 0 30px #7e22ce' },
                        }
                    }
                }
            }
        }
        let nama = 'yusuf'
        let Class = 'RPL'
        let Quotes = "I like Watermellon"
        alert(`Welcome bro ! I'm ${nama} This is my Portofolio, and know ${Quotes} yuhuuu`)