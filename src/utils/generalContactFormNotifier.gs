// This script is written in Google Apps Script.

// When triggered, sends an email using Google Sheets data from the
// General Contact Form Log.

// The way this works is as follows:
// First, a Google form is created and linked to a sheet of responses.
//
// This script is then added to the response sheet via the
// Tools > Script Editor. It doesn't matter what the names of the script
// or the function are, as long as they are noted for later reference.
//
// The last step is to create a listener which called this function on
// every new row of the spreadsheet. In the script editor, choose the
// Current Script's Triggers button to add a trigger to the script.
// All that is left to do is to choose the function to call from the
// spreadsheet on form submit. Now any additions to the sheet
// (e.g. any responses to the form) will call this function.

const sendNotificationEmail = (e) => {
  const [timestamp, name, emailResponder, formFiller, message] = e.values

  // first, email confirmation to form filler

  const confirmSubject = 'Thank you for contacting MAASU'
  const confirmMsg = `
Dear community member,

Thank you for bringing your concerns to MAASU! We will get back to you
as soon as we can.

- MAASU
`

  MailApp.sendEmail(formFiller, confirmSubject, confirmMsg)

  // next, notify email responder

  const respSubject = `Contact Form Submitted by ${name}`
  const respMsg = `
At ${timestamp}, ${name} (${formFiller}) sent a message:

  ${message}

Please respond as soon as possible!

Thanks,

technet@maasu.org
`

  MailApp.sendEmail(emailResponder, respSubject, respMsg)
}
