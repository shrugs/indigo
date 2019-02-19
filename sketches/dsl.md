
DOM DSL


TextButton # MessageButton
  -> 'talk/sendMessage'
  <- 'talk/sendMessageButton'


TextButton
  -> 'talk/sendMessage'             :: Points to an action that sends a message
  <- 'talk/sendMessageButton'       :: Returns the buttons state at a path


TextButton #SendMessage


DOM Consumer => UI
