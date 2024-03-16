import vine from '@vinejs/vine'

export const createClienteValidator = vine.compile(
    vine.object({
        nome: vine.string().trim()
                .minLength(3)
                .maxLength(255),
        email: vine.string().trim()
                .maxLength(255)
                .unique(async (db, value, field) => {
                    const user = await db
                      .from('users')
                      .whereNot('id', field.meta.userId)
                      .where('email', value)
                      .first()
                    return !user
                }),
        password: vine.string().trim()
                .minLength(8)
                .maxLength(180),
        telefone: vine.string().trim()
                .mobile({locale: ['pt-BR']})
                .maxLength(15) 
    })
)