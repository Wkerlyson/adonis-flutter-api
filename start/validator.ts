import vine, { SimpleMessagesProvider } from '@vinejs/vine'

vine.messagesProvider = new SimpleMessagesProvider({
  'required': 'O {{ field }} é obrigatório',
  'string': 'O valor do campo {{ field }} deve ser uma string',
  'email': 'O valor não é um e-mail válido',

  'email.unique': 'O e-mail deve ser único',
})