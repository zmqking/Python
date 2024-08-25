import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os

sender_email = "276324922@qq.com"  # Modify to your email address
sender_password = os.environ["EMAIL_PWD"]  # Modify to your email password
receiver_email = "276324922@qq.com"  # Modify to receiver email address
subject = "Disk Space Warning"

def send_email(message):
    try:
        # Setup email message
        msg = MIMEMultipart()
        msg['From'] = sender_email
        msg['To'] = receiver_email
        msg['Subject'] = subject
        msg.attach(MIMEText(message, 'plain'))

        # Connect to SMTP server
        server = smtplib.SMTP_SSL('smtp.qq.com', 465)
        server.login(sender_email, sender_password)

        # Send email
        server.send_message(msg)

        # Quit SMTP server
        server.quit()
    except Exception as ex:
        print(f'send email error:{ex}')
