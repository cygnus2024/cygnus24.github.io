from flask import Flask, render_template, request, redirect, url_for
import gspread
from oauth2client.service_account import ServiceAccountCredentials
from datetime import datetime
import os

app = Flask(__name__, template_folder=os.path.dirname(os.path.abspath(__file__)))

# Define the scope
scope = [
    'https://spreadsheets.google.com/feeds',
    'https://www.googleapis.com/auth/drive'
]

# Credentials
creds = ServiceAccountCredentials.from_json_keyfile_name('credentials.json', scope)

# Authorize the client sheet
client = gspread.authorize(creds)

# Open the Google Sheet
sheet = client.open('datacheck').sheet1

# Function to append data to the Google Sheet
def append_to_sheet(data):
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    row = [timestamp] + data
    sheet.append_row(row)

@app.route('/')
def index():
    return render_template('regform.html')

@app.route('/submit', methods=['POST'])
def submit():
    if request.method == 'POST':
        data = [
            request.form['fullName'],
            request.form['email'],
            request.form['phone'],
            request.form['college'],
            request.form['collegeId'],
            request.form['department'],
            'YES' if 'Brain Buster' in request.form.getlist('events[]') else 'NO',
            'YES' if 'Circuit Debugging' in request.form.getlist('events[]') else 'NO',
            'YES' if 'Clash of minds' in request.form.getlist('events[]') else 'NO',
            'YES' if 'project expo' in request.form.getlist('events[]') else 'NO',
            'YES' if 'Food Feast' in request.form.getlist('events[]') else 'NO',
            'YES' if 'HallOfWar' in request.form.getlist('events[]') else 'NO',
            'YES' if 'Photography' in request.form.getlist('events[]') else 'NO',
            'YES' if 'Dance' in request.form.getlist('events[]') else 'NO',
            'YES' if 'Singing' in request.form.getlist('events[]') else 'NO',
            'YES' if 'Silambam' in request.form.getlist('events[]') else 'NO',
            request.form['upiId'],
            request.form['transactionNumber']
        ]
        append_to_sheet(data)
        return redirect(url_for('thank_you'))  # Redirect to the thank you page

@app.route('/thankyou')
def thank_you():
    return render_template('thankyou.html')

if __name__ == '__main__':
    app.run(debug=True)
