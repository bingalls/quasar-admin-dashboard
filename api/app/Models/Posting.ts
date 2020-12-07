import { DateTime } from 'luxon'

import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
// Ace command requires alternate syntax, instead of
// import { BaseModel } from '../../node_modules/@adonisjs/lucid/build/src/Orm/BaseModel'
// import { column } from '../../node_modules/@adonisjs/lucid/build/src/Orm/Decorators'


export default class Posting extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public href: string

  @column()
  public summary: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
