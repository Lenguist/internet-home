from flask import Flask, render_template, send_from_directory
import os

app = Flask(__name__)

@app.route('/')
def index():
    # Load ASCII art from banner.txt
    try:
        with open('banner.txt', 'r', encoding='utf-8') as f:
            ascii_art = f.read()
    except FileNotFoundError:
        ascii_art = "ASCII art not found"
    
    return render_template('index.html', ascii_art=ascii_art)

@app.route('/research')
def research():
    return render_template('research.html')

@app.route('/explorations')
def explorations():
    return render_template('explorations.html')

@app.route('/thoughts')
def thoughts():
    return render_template('thoughts.html')

@app.route('/explorations/<exploration_name>')
def exploration_detail(exploration_name):
    # Serve individual exploration pages
    template_path = f'explorations/{exploration_name}.html'
    return render_template(template_path)

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True) 