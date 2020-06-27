// provided for use in the DB - Master sheet

function FILEURL(link) {
  let tokens = link.split('/')
  // remove view?usp=sharing
  tokens.pop()

  return 'https://drive.google.com/uc?export=view&id=' + tokens.pop()
}
