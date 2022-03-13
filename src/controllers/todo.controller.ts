import { Request, Response } from 'express'
import { Todo } from '../models/Todo'
import { Sequelize } from 'sequelize'

export const all = async (req: Request, res: Response) => {
   const list = await Todo.findAll();

   res.json({
      list
   })
}
export const add = async (req: Request, res: Response) => {
   if(req.body.title){
      let newTodo = await Todo.create({
         title: req.body.title,
         done: req.body.done ? 1 : 0
      })
      res.status(201).json({ item: newTodo })
   } else{
      res.json({ error: "Erro ao adicionar os dados no BD"})
   }
}
export const update = async (req: Request, res: Response) => {

}
export const remove = async (req: Request, res: Response) => {

}